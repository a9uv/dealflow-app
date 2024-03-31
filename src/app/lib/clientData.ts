export interface ClientData {
    id: string;
    name: string;
    email: string;
    image_url: string;
    date_of_birth: string;
    latest_activity: string;
    status: string;
    user_id: string;
    number_of_policies: number;
    address: string;
    social_security_number: string;
}



export const clients = [
    {
        id: '0',
        name: 'Delba de Oliveira',
        email: 'delba@oliveira.com',
        image_url: '/customers/delba-de-oliveira.png',
        date_of_birth: '03/15/2000',
        latest_activity: '01/20/2024',
        status: 'Active',
        user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
        number_of_policies: 3,
        address: '123 Delba St. New York, NY 10001',
        social_security_number: '123-45-6789',

    },
    {
        id: '1',
        name: 'Lee Robinson',
        email: 'lee@robinson.com',
        image_url: '/customers/lee-robinson.png',
        date_of_birth: '04/04/1948',
        latest_activity: '01/24/2024',
        status: 'Prospect',
        user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
        number_of_policies: 0,
        address: '123 Lee St. New York, NY 10001',
        social_security_number: '123-45-6789',
    },
    {
        id: '2',
        name: 'Hector Simpson',
        email: 'hector@simpson.com',
        image_url: '/customers/hector-simpson.png',
        date_of_birth: '11/13/1982',
        latest_activity: '01/31/2024',
        status: 'Active',
        user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
        number_of_policies: 1,
        address: '123 Hector St. New York, NY 10001',
        social_security_number: '123-45-6789',
    }
    ,
    {
        id: "3",
        name: "Steven Tey",
        email: "steven@tey.com",
        image_url: "/customers/steven-tey.png",
        date_of_birth: "09/02/1964",
        latest_activity: "01/19/2024",
        status: "Active",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        number_of_policies: 1,
        address: '123 Steven St. New York, NY 10001',
        social_security_number: '123-45-6789',
    },
    {
        id: "4",
        name: "Steph Dietz",
        email: "steph@dietz.com",
        image_url: "/customers/steph-dietz.png",
        date_of_birth: "04/28/1986",
        latest_activity: "12/08/2023",
        status: "Prospect",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        number_of_policies: 0,
        address: '123 Steph St. New York, NY 10001',
        social_security_number: '123-45-6789',
    },
    {
        id: "5",
        name: "Michael Novotny",
        email: "michael@novotny.com",
        image_url: "/customers/michael-novotny.png",
        date_of_birth: "12/16/1988",
        latest_activity: "02/12/2024",
        status: "Active",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        number_of_policies: 1,
        address: '123 Michael St. New York, NY 10001',
        social_security_number: '123-45-6789',
    },
    {
        id: "6",
        name: "Dark Rabbit",
        email: "dark@rabbit.com",
        image_url: "/customers/evil-rabbit.png",
        date_of_birth: "05/02/1994",
        latest_activity: "01/15/2024",
        status: "Active",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442h",
        number_of_policies: 3,
        address: '123 Dark St. New York, NY 10001',
        social_security_number: '123-45-6789',
    },
    {
        id: "7",
        name: "Emil Kowalski",
        email: "emil@kowalski.com",
        image_url: "/customers/emil-kowalski.png",
        date_of_birth: "09/10/1995",
        latest_activity: "12/17/2023",
        status: "Active",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442j",
        number_of_policies: 4,
        address: '123 Emil St. New York, NY 10001',
        social_security_number: '123-45-6789',
    },
    {
        id: "8",
        name: "Amy Burns",
        email: "amy@burns.com",
        image_url: "/customers/amy-burns.png",
        date_of_birth: "11/12/1958",
        latest_activity: "01/17/2024",
        status: "Active",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        number_of_policies: 2,
        address: '123 Amy St. New York, NY 10001',
        social_security_number: '123-45-6789',
    },
    {
        id: "9",
        name: "Balazs Orban",
        email: "balazs@orban.com",
        image_url: "/customers/balazs-orban.png",
        date_of_birth: "01/01/2001",
        latest_activity: "01/12/2024",
        status: "Active",
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        number_of_policies: 2,
        address: '123 Balazs St. New York, NY 10001',
        social_security_number: '123-45-6789',
    }
]