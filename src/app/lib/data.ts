import { sql } from '@vercel/postgres'
import {
    CustomerField,
    CustomersTableType,
    InvoiceForm,
    InvoicesTable,
    LatestInvoiceRaw,
    User,
    Revenue,
    Invoice,
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore } from 'next/cache';


import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function fetchRevenue() {

    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    unstable_noStore();
    try {
        const receivedRevenueData = await prisma.revenue.findMany();
        const revenueData = receivedRevenueData.map(({ id, month, revenue }) => ({
            id,
            month,
            revenue: revenue.toNumber(), // Convert Decimal to Number
        }));
        // console.log(revenueData);
        return revenueData;
    } catch (error) {
        console.error('fetchRevenue DB Error:', error);
        return [];
    } finally {
        await prisma.$disconnect();
    }
}

export async function fetchLatestInvoices() {
    unstable_noStore();
    try {
        const invoices = await prisma.invoices.findMany({
            take: 5,
            orderBy: {
                date: 'desc',
            },
        });

        const latestInvoices = await Promise.all(
            invoices.map(async (invoice) => {
                const clientData = await getClientData(invoice.clientId);
                return {
                    ...invoice,
                    ...(clientData || {}), // Spread the clientData object if it exists, otherwise spread an empty object
                };
            })
        );
        console.log(latestInvoices);
        return latestInvoices;
    } catch (error) {
        console.error('fetchLatestInvoices DB Error:', error);
        return []
    } finally {
        await prisma.$disconnect();
    }
}

interface InvoiceClientData{
    name: string;
    email: string;
    image_url: string;
}

export async function getClientData(clientId: string): Promise<InvoiceClientData | null>{
    try {
        const client = await prisma.client.findUnique({
            where: {
                id: clientId,
            },
            select: {
                name: true,
                email: true,
                image_url: true,
            },
        });

        if (client) {
            return {
                name: client.name,
                email: client.email,
                image_url: client.image_url,
            };
        }



        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// export async function fetchCardData() {
//     unstable_noStore();
//     try {
//         // You can probably combine these into a single SQL query
//         // However, we are intentionally splitting them to demonstrate
//         // how to initialize multiple queries in parallel with JS.
//         const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
//         const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
//         const invoiceStatusPromise = sql`SELECT
//          SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
//          SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
//          FROM invoices`;

//         const data = await Promise.all([
//             invoiceCountPromise,
//             customerCountPromise,
//             invoiceStatusPromise,
//         ]);

//         const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
//         const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
//         const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
//         const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

//         return {
//             numberOfCustomers,
//             numberOfInvoices,
//             totalPaidInvoices,
//             totalPendingInvoices,
//         };
//     } catch (error) {
//         console.error('Database Error:', error);
//         throw new Error('Failed to fetch card data.');
//     }
// }

// const ITEMS_PER_PAGE = 6;
// export async function fetchFilteredInvoices(
//     query: string,
//     currentPage: number,
// ) {
//     unstable_noStore();
//     const offset = (currentPage - 1) * ITEMS_PER_PAGE;

//     try {
//         const invoices = await sql<InvoicesTable>`
//       SELECT
//         invoices.id,
//         invoices.amount,
//         invoices.date,
//         invoices.status,
//         customers.name,
//         customers.email,
//         customers.image_url
//       FROM invoices
//       JOIN customers ON invoices.customer_id = customers.id
//       WHERE
//         customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`} OR
//         invoices.amount::text ILIKE ${`%${query}%`} OR
//         invoices.date::text ILIKE ${`%${query}%`} OR
//         invoices.status ILIKE ${`%${query}%`}
//       ORDER BY invoices.date DESC
//       LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
//     `;

//         return invoices.rows;
//     } catch (error) {
//         console.error('Database Error:', error);
//         throw new Error('Failed to fetch invoices.');
//     }
// }

// export async function fetchInvoicesPages(query: string) {
//     unstable_noStore();
//     try {
//         const count = await sql`SELECT COUNT(*)
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE
//       customers.name ILIKE ${`%${query}%`} OR
//       customers.email ILIKE ${`%${query}%`} OR
//       invoices.amount::text ILIKE ${`%${query}%`} OR
//       invoices.date::text ILIKE ${`%${query}%`} OR
//       invoices.status ILIKE ${`%${query}%`}
//   `;

//         const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
//         return totalPages;
//     } catch (error) {
//         console.error('Database Error:', error);
//         throw new Error('Failed to fetch total number of invoices.');
//     }
// }

// export async function fetchInvoiceById(id: string) {
//     unstable_noStore();
//     try {
//         const data = await sql<InvoiceForm>`
//       SELECT
//         invoices.id,
//         invoices.customer_id,
//         invoices.amount,
//         invoices.status
//       FROM invoices
//       WHERE invoices.id = ${id};
//     `;

//         const invoice = data.rows.map((invoice) => ({
//             ...invoice,
//             // Convert amount from cents to dollars
//             amount: invoice.amount / 100,
//         }));

//         return invoice[0];
//     } catch (error) {
//         console.error('Database Error:', error);
//         throw new Error('Failed to fetch invoice.');
//     }
// }

// export async function fetchCustomers() {
//     unstable_noStore();
//     try {
//         const data = await sql<CustomerField>`
//       SELECT
//         id,
//         name
//       FROM customers
//       ORDER BY name ASC
//     `;

//         const customers = data.rows;
//         return customers;
//     } catch (err) {
//         console.error('Database Error:', err);
//         throw new Error('Failed to fetch all customers.');
//     }
// }

// const CUST_PER_PAGE = 4;
// export async function fetchFilteredCustomers(query: string, currentPage: number) {
//     unstable_noStore();
//     const offset = (currentPage - 1) * CUST_PER_PAGE;
//     try {
//         const data = await sql<CustomersTableType>`
// 		SELECT
// 		  customers.id,
// 		  customers.name,
// 		  customers.email,
// 		  customers.image_url,
// 		  COUNT(invoices.id) AS total_invoices,
// 		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
// 		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
// 		FROM customers
// 		LEFT JOIN invoices ON customers.id = invoices.customer_id
// 		WHERE
// 		  customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`}
// 		GROUP BY customers.id, customers.name, customers.email, customers.image_url
// 		ORDER BY customers.name ASC
// 	  `;

//         const customers = data.rows.map((customer) => ({
//             ...customer,
//             total_pending: formatCurrency(customer.total_pending),
//             total_paid: formatCurrency(customer.total_paid),
//         }));

//         return customers;
//     } catch (err) {
//         console.error('Database Error:', err);
//         throw new Error('Failed to fetch customer table.');
//     }
// }

// export async function getUser(email: string) {
//     unstable_noStore();
//     try {
//         const user = await sql`SELECT * FROM users WHERE email=${email}`;
//         return user.rows[0] as User;
//     } catch (error) {
//         console.error('Failed to fetch user:', error);
//         throw new Error('Failed to fetch user.');
//     }
// }


// export async function fetchFiveCustomers() {
//     unstable_noStore();
//     try {
//         const data = await sql<LatestInvoiceRaw>`
//       SELECT
//         id,
//         name,
//         email,
//         image_url
//       FROM customers
//       ORDER BY name ASC
//       LIMIT 5`;


//         const customers = data.rows;
//         return customers;
//     } catch (err) {
//         console.error('Database Error:', err);
//         throw new Error('Failed to fetch all customers.');
//     }
// }

