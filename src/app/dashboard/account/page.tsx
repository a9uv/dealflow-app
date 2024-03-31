import { accTokenMemory } from "~/app/api/a-token/route";
import Link from "next/link";
import { globalAccessToken, globalAccountID, globalBaseURI, globalUserInfo } from './doc/page';
import { accessData } from '../../../../public/docusign_data/access'

const integrationKey = process.env.NEXT_PUBLIC_DOCUSIGN_INTEGRATION_KEY;
const envSecretKey = process.env.DOCUSIGN_SECRET_KEY
const redirectUri = 'http://localhost:3000/dashboard/account/doc';
const scope = 'signature';
 const docuLoginURI = `https://account-d.docusign.com/oauth/auth?response_type=code&scope=${scope}&client_id=${integrationKey}&redirect_uri=${redirectUri}`;

export default function Page() {


  

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">General</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <p className="text-gray-700">John Doe</p>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <p className="text-gray-700">john.doe@example.com</p>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Phone Number</label>
            <p className="text-gray-700">123-456-7890</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Password</h2>
        <div className="flex items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Change</button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Payment</h2>
        <div>
          <label className="block mb-2 text-sm font-medium">Payment Method</label>
          <p className="text-gray-700">Credit Card ending in **** 1234</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">DocuSign</h2>
        <div>
          {accessData.accessToken !== "" && accessData.accountID !== "" && accessData.baseURI !== ""?
            (<p> You are logged in to DocuSign! </p>)
            : (
              <div>
      <p> You are not logged into DocuSign yet. Please log in by pressing the button below: </p>
                    {<div>
                  <Link
                    className="flex mt-3 mb-3 h-10 items-center rounded-lg w-36 border border-solid border-black bg-yellow-200 px-4 text-sm font-medium"
                    href={docuLoginURI}>DocuSign</Link>
                      </div>
                    }
              </div>
              

              
            )}

        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Support</h2>
        <div>
          <button className="text-red-500">Delete Account</button>
        </div>
      </div>
    </div>
  );
};


