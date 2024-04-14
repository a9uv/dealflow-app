import { PrismaClient } from "@prisma/client";
// import { revenue } from "../app/lib/placeholder";
const prisma = new PrismaClient()

const revenue = [
  { id: 0, month: 'Jan', revenue: 2000 },
  { id: 1, month: 'Feb', revenue: 1800 },
  { id: 2, month: 'Mar', revenue: 2200 },
  { id: 3, month: 'Apr', revenue: 2500 },
  { id: 4, month: 'May', revenue: 2300 },
  { id: 5, month: 'Jun', revenue: 3200 },
  { id: 6, month: 'Jul', revenue: 3500 },
  { id: 7, month: 'Aug', revenue: 3700 },
  { id: 8, month: 'Sep', revenue: 2500 },
  { id: 9, month: 'Oct', revenue: 2800 },
  { id: 10, month: 'Nov', revenue: 3000 },
  { id: 11, month: 'Dec', revenue: 4800 },
];
const clients = [
    {
        id: '0',
        name: 'Delba de Oliveira',
        dateOfBirth: '03/15/2000',
        phoneNumber: '(292)345-1234',
        email: 'delba@oliveira.com',
        socialSecurityNumber: '123-45-6789',
        address: '123 Delba St. New York, NY 10001',
        status: 'Active',
        image_url: '/customers/delba-de-oliveira.png',
        userId: "001",
    },
    {
    id: '1',
    name: 'Lee Robinson',
    dateOfBirth: '04/04/1948',
    phoneNumber: '(292)345-1234',
    email: 'lee@robinson.com',
    socialSecurityNumber: '123-45-6789',
    address: '123 Lee St. New York, NY 10001',
    status: 'Prospect',
    image_url: '/customers/lee-robinson.png',
    userId: "001",
    },
  {
    id: '2',
    name: 'Hector Simpson',
    dateOfBirth: '11/13/1982',
    phoneNumber: '(292)345-1234',
    email: 'hector@simpson.com',
    socialSecurityNumber: '123-45-6789',
    address: '123 Hector St. New York, NY 10001',
    status: 'Active',
    image_url: '/customers/hector-simpson.png',
    userId: "001",

  },
  {
    id: "3",
    name: "Steven Tey",
    dateOfBirth: "09/02/1964",
    phoneNumber: '(292)345-1234',
    email: "steven@tey.com",
    socialSecurityNumber: '123-45-6789',
    address: '123 Steven St. New York, NY 10001',
    status: "Active",
    image_url: "/customers/steven-tey.png",
    userId: "001",

  },
  {
    id: "4",
    name: "Steph Dietz",
    dateOfBirth: "04/28/1986",
    phoneNumber: '(292)345-1234',
    email: "steph@dietz.com",
    socialSecurityNumber: '123-45-6789',
    address: '123 Steph St. New York, NY 10001',
    status: "Prospect",
    image_url: "/customers/steph-dietz.png",
    userId: "001",
  },
  {
    id: "5",
    name: "Michael Novotny",
    dateOfBirth: "12/16/1988",
    phoneNumber: '(292)345-1234',
    email: "michael@novotny.com",
    socialSecurityNumber: '123-45-6789',
    address: '123 Michael St. New York, NY 10001',
    status: "Active",
      image_url: "/customers/michael-novotny.png",
    userId: "001",
  },
  {
    id: "6",
    name: "Dark Rabbit",
    dateOfBirth: "05/02/1994",
    phoneNumber: '(292)345-1234',
    email: "dark@rabbit.com",
    socialSecurityNumber: '123-45-6789',
    address: '123 Dark St. New York, NY 10001',
    status: "Active",
      image_url: "/customers/evil-rabbit.png",
    userId: "001",
  },
    {
        id: "7",
        name: "Emil Kowalski",
        dateOfBirth: "09/10/1995",
        phoneNumber: '(292)345-1234',
        email: "emil@kowalski.com",
        socialSecurityNumber: '123-45-6789',
        address: '123 Emil St. New York, NY 10001',
        status: "Active",
        image_url: "/customers/emil-kowalski.png",
        userId: "001",
    },
  {
    id: "8",
    name: "Amy Burns",
    dateOfBirth: "11/12/1958",
    phoneNumber: '(292)345-1234',
    email: "amy@burns.com",
    socialSecurityNumber: '123-45-6789',
    address: '123 Amy St. New York, NY 10001',
    status: "Active",
      image_url: "/customers/amy-burns.png",
    userId: "001",
  },
    {
        id: "9",
        name: "Balazs Orban",
        dateOfBirth: "01/01/2001",
        phoneNumber: '(292)345-1234',
        email: "balazs@orban.com",
        socialSecurityNumber: '123-45-6789',
        address: '123 Balazs St. New York, NY 10001',
        status: "Active",
        image_url: "/customers/balazs-orban.png",
        userId: "001",
    }
]


const invoices = [
    {
    id: '0',
    
    amount: 15795,
    status: 'pending',
        date: '2022-12-06',
    clientId: '0',
  },
    {
      id:'1',
   
    amount: 20348,
    status: 'pending',
        date: '2022-11-14',
     clientId: '1',
  },
    {
      id: '2',
    
    amount: 3040,
    status: 'paid',
        date: '2022-10-29',
    clientId: '4',
  },
    {
      id:'3',
    
    amount: 44800,
    status: 'paid',
        date: '2023-09-10',
    clientId: '3',
  },
    {
      id:'4',
    
    amount: 34577,
    status: 'pending',
        date: '2023-08-05',
    clientId: '5',
  },
    {
      id:'5',
   
    amount: 54246,
    status: 'pending',
        date: '2023-07-16',
     clientId: '7',
  },
    {
      id:'6',
    
    amount: 666,
    status: 'pending',
        date: '2023-06-27',
    clientId: '6',
  },
    {
      id:'7',
    
    amount: 32545,
    status: 'paid',
        date: '2023-06-09',
    clientId: '3',
  },
    {
      id:'8',
   
    amount: 1250,
    status: 'paid',
        date: '2023-06-17',
     clientId:'4',
  },
    {
      id:'9',
    
    amount: 8546,
    status: 'paid',
        date: '2023-06-07',
    clientId: '5',
  },
    {
      id:'10',
    
    amount: 500,
    status: 'paid',
        date: '2023-08-19',
    clientId: '1',
  },
    {
      id:'11',
    
    amount: 8945,
    status: 'paid',
        date: '2023-06-03',
    clientId: '5',
  },
    {
      id:'12',
    
    amount: 8945,
    status: 'paid',
        date: '2023-06-18',
    clientId: '2',
  },
    {
      id:'13',
 
    amount: 8945,
    status: 'paid',
        date: '2023-10-04',
       clientId: '0',
  },
    {
      id:'14',

    amount: 1000,
    status: 'paid',
        date: '2022-06-05',
        clientId: '2',
  },
];





async function addClients() {
    try {
        const result = await prisma.client.createMany({
            data: clients,
            skipDuplicates:true
        })
        console.log(`Created ${result.count} clients records`);
    } catch (error) {
    console.error('\naddClients Error:' , error);
  } finally {
    await prisma.$disconnect();
  }
}




async function addInvoices() {
        try {
        const result = await prisma.invoices.createMany({
            data: invoices,
            skipDuplicates:true
        })
    console.log(`Created ${result.count} invoices records`);
    } catch (error) {
    console.error('\naddInvoices Error:' , error);
  } finally { 
    await prisma.$disconnect();
  }
}

async function addRevenue() {
  try {
    const result = await prisma.revenue.createMany({
      data: revenue,
      skipDuplicates: true,
    });
    console.log(`Created ${result.count} revenue records`);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}
async function main() {
    // await addRevenue()
    // await addClients()
    await addInvoices()
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});