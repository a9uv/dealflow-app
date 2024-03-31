import { ClientData } from "~/app/ui/clients/new-client";
import { lusitana } from "~/app/ui/fonts";
import Image from "next/image";
import { clsx } from 'clsx';

export default function ClientView({client}: {client: ClientData}) {

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                      <Image
                        src={client.image_url}
                        className="rounded-full"
                        width={108}
                        height={108}
                        alt={`${client.name}'s profile picture`}
                      />
                </div>
                
                <h1 className="text-3xl font-semibold">{client.name}</h1>
                {client.status === 'Active' ? 
                    (
                    <p className="text-green-500">{client.status}</p>
                    ):
                  (
                    <p className="text-orange-500">{client.status}</p>
                )}
                <p className="text-gray-500">{client.date_of_birth}</p>
                <p className="text-black">{client.address}</p>
                <p className="text-black">{client.email}</p>
                <p className="text-black">{client.phone_number}</p>
                <p className="text-black"> Social Security: {client.social_security_number}</p>
                
            </div>
            <div className="flex flex-col gap-2">
   
                <h2 className={clsx(lusitana.className, 'text-2xl font-semibold')}>Policies</h2>
                <p className="text-black">{client.number_of_policies} policies</p>
            </div>

            <div className="flex flex-col gap-2 mt-20">
                <p className="text-gray-500">Latest Activity: {client.latest_activity}</p>
            </div>
        </div>
    )

    
}