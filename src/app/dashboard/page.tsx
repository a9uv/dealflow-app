// components/EnvelopesTable.tsx


/*** FRONT END CODE CALLING TRPC TO SHOW THE TABLE  */
// import { useQuery } from 'react-query';
// import { trpc } from '../utils/trpc';

const EnvelopesTable = () => {
    // const { data, isLoading, isError } = useQuery('envelopes', trpc.envelopes.getAll);

    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Error fetching data</div>;

    return (
        <table>
            <thead>
                <tr>
                    <th>Envelope ID</th>
                    <th>Status</th>
                    {/* Add more table headers as needed */}
                </tr>
            </thead>
            {/* <tbody>
                {data.map((envelope) => (
                    <tr key={envelope.id}>
                        <td>{envelope.id}</td>
                        <td>{envelope.status}</td>
                    </tr>
                ))}
            </tbody> */}
        </table>
    );
};

export default EnvelopesTable;




/**** BACK END CODE FOR TRPC API CALL */
// app/api/envelopes/getAll.ts

import { z } from 'zod';
// import { createRoute } from 'tRPC/server';
// import fetch from 'node-fetch';

const Envelope = z.object({
    id: z.string(),
    status: z.string(),
    // Define more envelope properties as needed
});

// export const getAll = createRoute.z(async () => {
//     const response = await fetch('https://docusign-api-url/envelopes', {
//         headers: {
//             Authorization: 'Bearer YOUR_ACCESS_TOKEN',
//         },
//     });

//     if (!response.ok) {
//         throw new Error('Failed to fetch envelopes');
//     }

//     const data = await response.json();

//     return data.map((envelope: any) => Envelope.parse(envelope));
// });