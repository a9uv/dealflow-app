// import {getTokens, getEnvelopes} from '~/app/lib/docusign';

import axios from 'axios'
import fs from 'fs'
import { accTokenMemory } from "~/app/api/a-token/route";
import Link from 'next/link';
import DocuSignButtons from './docuSignButtons'
import { lusitana } from '~/app/ui/fonts';

import { accessData } from '../../../public/docusign_data/access'
import { envelopes } from '~/public/docusign_data/envelope'
import EnvelopeTable from './EnvelopeTable'
import { docs } from '~/public/docusign_data/docData'
import { forms } from '../forms/FormsData';


const path = require("path")


// async function showDocuUI() {

//     try {
//         const res = await axios.post("http://localhost:3000/api/p-env", {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })


//         const resData = await res.data
//         console.log('post env response \n', resData);


//     } catch (error) {
//         console.error(error)
//     }
// }

export default async function Page() {

    // const path = './Geico_Home.pdf'
    //   const filePath = 'public' + forms[0].href
    //   console.log('filePath: ', filePath);


    // const base64 = fs.readFileSync(filePath, { encoding: "base64" })
    // console.log('PDF Binary Here: ', base64.substring(0, 50));


    console.log('\n\nentering dashboard/docusign . . . ');
    // console.log(`${accessData.baseURI}/v2.1/accounts/${accessData.accountID}/views/console`);



    if (accessData.accessToken !== "" && accessData.accountID !== ""
        && accessData.baseURI !== "" && envelopes.resultSetSize === "") {
        const res = await axios.get('http://localhost:3000/api/g-envelope');

        if (res.data.error) {
            return (
                <div>
                    Error in fetching DocuSign Envelope Data - try again later.
                </div>
            )
        }

        const filePath = path.join(process.cwd(), 'src', 'public', 'docusign_data', 'envelope.js');

        fs.writeFileSync(filePath, `export const envelopes = ${JSON.stringify(res.data)}`);




    }




    // const consoleRes = await axios.post("http://localhost:3000/api/p-env");
    // console.log(consoleRes.status);


    let ids: string[] = [];
    let pdfs: string[] = [];
    let jsonPDFS = {}








    return (
        <main className="h-screen w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl mb-12`}>Quotes</h1>
            </div>
            <div>
                {accessData.accessToken !== "" && accessData.accountID !== "" && accessData.baseURI !== "" ?
                    (<div>
                        <div >
                            <h1 className="text-xl font-medium">Envelopes</h1>
                            <div className="w-10/12"> </div>
                        </div>
                        {envelopes.resultSetSize === "" ?
                            (
                                <div>
                                    No envelope data retrieved
                                </div>
                            ) :
                            (<>
                                <EnvelopeTable />
                                <div className='flex justify-end mr-20 mt-3'>
                                    <Link
                                        className="flex mt-3 mb-3 h-10 items-center rounded-lg w-36 border border-solid border-black bg-yellow-200 px-4 text-sm font-medium"
                                        href={'/dashboard/docusign/new-env'}
                                    > + New Envelope </Link>
                                </div>
                            </>
                            )

                        }
                        {/* {
              docs.consoleURL === "" ? (
                <div>
                  Console Data Yet to be retrieved
                  </div>
              ): (
                  <div> 
                    <embed src={docs.consoleURL} width="100%" height="600px"  />
                  </div>
                    
              )
            } */}

                    </div>
                    )
                    : (
                        <div>
                            <p> You are not logged into DocuSign yet. Please log in through the Accounts page: </p>
                            {<div>
                                <Link
                                    className="flex mt-3 mb-3 h-10 items-center rounded-lg w-36 border border-solid border-black bg-yellow-200 px-4 text-sm font-medium"
                                    href={'../dashboard/account/'}>DocuSign</Link>
                            </div>
                            }
                        </div>
                    )}
            </div>
        </main>
    );

}


