// import {getTokens, getEnvelopes} from '~/app/lib/docusign';

import axios from 'axios'
import { accTokenMemory } from "~/app/api/a-token/route";
import Link from 'next/link';
import DocuSignButtons from './docuSignButtons'
import { lusitana } from '~/app/ui/fonts';

import { accessData } from '../../../public/docusign_data/access'
import { envelopeList } from '~/public/docusign_data/envelope'
import EnvelopeTable from './EnvelopeTable'
import { docs } from '~/public/docusign_data/docData'
import { forms } from '../forms/FormsData';
import { fetchEnvelopes } from '~/app/lib/data';
import { NextResponse } from 'next/server';
import RefreshButton from './RefreshButton';


const path = require("path")




export default async function Page() {


    console.log('\n\nentering dashboard/docusign . . . ');





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
                            <RefreshButton />

                        </div>
                        {envelopeList.resultSetSize === "" ?
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


                    </div>
                    )
                    : (
                        <div>
                            <p> You are not logged into DocuSign yet. To login, visit the Accounts page by clicking the link below: </p>
                            {<div>
                                <Link
                                    className="flex mt-3 mb-3 h-10 items-center rounded-lg w-24 border border-solid border-black bg-yellow-200 px-4 text-sm font-medium"
                                    href={'../dashboard/account/'}>DocuSign</Link>
                            </div>
                            }
                        </div>
                    )}
            </div>
        </main>
    );

}


