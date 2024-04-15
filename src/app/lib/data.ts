'use server'
import { sql } from '@vercel/postgres'
import { accessData } from '../../public/docusign_data/access'
import axios from 'axios'
const path = require("path")
import fs from 'fs'


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
                amount: 'desc',
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
        // console.log(latestInvoices);
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



export const formatCurrency = (amount: number) => {
    return (amount / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
};



export async function fetchCardData() {
    unstable_noStore();
    try {
        // You can probably combine these into a single SQL query
        // However, we are intentionally splitting them to demonstrate
        // how to initialize multiple queries in parallel with JS.
        const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
        const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
        const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

        const data = await Promise.all([
            invoiceCountPromise,
            customerCountPromise,
            invoiceStatusPromise,
        ]);

        const numberOfInvoices = Number(data[0].rows[0]?.count ?? '0');
        const numberOfCustomers = Number(data[1].rows[0]?.count ?? '0');
        const totalPaidInvoices = formatCurrency(data[2].rows[0]?.paid ?? '0');
        const totalPendingInvoices = formatCurrency(data[2].rows[0]?.pending ?? '0');

        return {
            numberOfCustomers,
            numberOfInvoices,
            totalPaidInvoices,
            totalPendingInvoices,
        };
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch card data.');
    }
}



export async function fetchEnvelopes() {
    if (accessData.accessToken !== "" && accessData.accountID !== ""
        && accessData.baseURI !== "") {
        
        try {
            const res = await axios.get('http://localhost:3000/api/g-envelope');

            if (res.status == 200) {
                const filePath = path.join(process.cwd(), 'src', 'public', 'docusign_data', 'envelope.js');

                fs.writeFileSync(filePath, `export const envelopeList = ${JSON.stringify(res.data)}`);
            } else {
                console.log("fetchEnvelopes failed in data.ts: \n", res.status, " statustext: ", res.statusText)
            }
        } catch (error) {
            console.log("fetchEnvelopes CATCH failed in data.ts: \n", error)
        }
        






    }

}