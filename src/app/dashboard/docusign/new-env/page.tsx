import Form from './newEnvForm';
import Breadcrumbs from '~/app/ui/breadcrumbs';
import { accessData } from "~/public/docusign_data/access";

 
export default async function Page() {

 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Quotes', href: '/dashboard/quotes' },
          {
            label: 'Add Envelope',
            href: '/dashboard/quotes/new-env',
            active: true,
          },
        ]}
      />
      <Form />
      

       {/* <div><embed src={accessData.consoleURL} width="100%" height="600px" /></div> */}
      
    </main>
  );
}



// export default function Page() {


// // https://developers.docusign.com/docs/esign-rest-api/how-to/request-signature-email-remote/
        
//     return (
//         <>
//             <h1 >World Wide Corp</h1>
//         <h2 >Order Processing Division</h2>
//         <h4>Ordered by {envelopes.envelopes[0].sender.userName}</h4>
//             <p>Email:{envelopes.envelopes[0].sender.email}</p>
//         <p>Copy to: Recipient Smith ,recipient~email.com</p>
//         <p >
//           Candy bonbon pastry jujubes lollipop wafer biscuit biscuit. Topping brownie sesame snaps sweet roll pie. Croissant danish biscuit soufflé caramels jujubes jelly. Dragée danish caramels lemon drops dragée. Gummi bears cupcake biscuit tiramisu sugar plum pastry. Dragée gummies applicake pudding liquorice. Donut jujubes oat cake jelly-o. Dessert bear claw chocolate cake gummies lollipop sugar plum ice cream gummies cheesecake.
//         </p>

//         <h3 >Agreed:<span >**signature_1**/</span></h3>
//         </>
//     )
// }



