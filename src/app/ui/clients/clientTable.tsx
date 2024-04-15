import { fetchClients } from "~/app/lib/data";
import Image from "next/image";
import { UpdateClient, DeleteClient } from '~/app/ui/buttons';

export default async function ClientTable({
  query,
  currentPage
}: {
  query: string;
  currentPage: number;
}) {
  const clients = await fetchClients()

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {clients?.map((client: any) => (
              <div
                key={client.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={client.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${client.name}'s profile picture`}
                      />
                      <p>{client.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{client.email}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateClient id={client.id} />
                    <DeleteClient id={client.id} />
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p>{client.dateOfBirth}</p>
                    <p>{client.phoneNumber}</p>
                  </div>
                  <div>
                    <p>{client.address}</p>
                  </div>
                  <div>
                    <p>{client.status}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date of Birth
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Phone Number
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Address
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {clients?.map((client) => (
                <tr
                  key={client.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={client.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${client.name}'s profile picture`}
                      />
                      <p>{client.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {client.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {client.dateOfBirth}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {client.phoneNumber}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {client.address}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {client.status}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateClient id={client.id} />
                      <DeleteClient id={client.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

