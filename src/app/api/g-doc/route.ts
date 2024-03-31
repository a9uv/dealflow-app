
import { NextRequest, NextResponse } from "next/server";

import { accessData } from "~/public/docusign_data/access";
export let baseURIMemory: string | null = null
export let accountIDMemory: string | null = null

export async function GET(req: NextRequest, res: NextResponse) {

    console.log('entering GET function in api/g-doc');
    
    // const docuAPIEndpoint = `https://demo.docusign.net/v2.1/accounts/${accountIDMemory}/envelopes/38386446-58b6-4089-9a24-5a7f4d68526e/documents/combined`

    console.log('accessData accessToken in g-doc: ', accessData.accessToken);

    return NextResponse.json({accessToken: accessData.accessToken})
    

    //     try {
    //         const res = await fetch(docuAPIEndpoint, {
    //         method: 'GET',
    //         headers: {
    //             Authorization: `Bearer ${accessData.accessToken}`,
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
                
    //         }
    //     })
        
    //     if (res.ok) {
    //         const userInfo = await res.json();
    //         accountIDMemory = userInfo.accounts[0].account_id;
            

            
    //         return NextResponse.json({status: res.status})
    //     } else {
    //         console.log('response not ok');

    //         return NextResponse.json({error: 'error'}, {status: res.status});
    //     }
    // } catch (error) {
        
    //     console.log('error: ', error);
    //     return NextResponse.json({ error: error });
    // }



}