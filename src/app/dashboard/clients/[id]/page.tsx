import Breadcrumbs from '~/app/ui/breadcrumbs';
import { notFound } from 'next/navigation';
import { clients } from '~/app/lib/clientData';
import ClientView from '../ClientView';


export interface ClientData {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  image_url: string;
  date_of_birth: string;
  latest_activity: string;
  status: string;
  user_id: string;
  number_of_policies: number;
  address: string;
  social_security_number: string;
}


export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const client = clients.find((client) => client.id === id);

  if (!client) {
    return <div>Client not found</div>;
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Clients', href: '/dashboard/clients' },
          {
            label: `View ${client.name}`,
            href: `/dashboard/clients/${id}`,
            active: true,
          },
        ]}
      />

      <ClientView client={client} />
    </main>
  );
}
