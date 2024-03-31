import Form from '~/app/ui/clients/new-client';
import Breadcrumbs from '~/app/ui/breadcrumbs';

 
export default async function Page() {

 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'ClientTrack', href: '/dashboard/clients' },
          {
            label: 'Add Client',
            href: '/dashboard/clients/add',
            active: true,
          },
        ]}
      />
      <Form  />
    </main>
  );
}