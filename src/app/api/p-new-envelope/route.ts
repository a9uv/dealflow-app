import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';

import { accessData } from "~/public/docusign_data/access";

const accessToken = accessData.accessToken;
const accountID = accessData.accountID;
const baseURI = accessData.baseURI;

export async function POST(req: NextRequest, res: NextResponse) {
    console.log('entering POST function in api/p-new-envelope');


    if (accessToken == null || baseURI == null || accountID == null) {
        return NextResponse.json(
            {"message": "DocuSign Authorization incomplete - please log in to DocuSign through the Accounts page"}
        )
    }
    

    const body = await req.json()


    


    
    
    try {
        const res = await fetch(`${baseURI}/restapi/v2.1/accounts/${accountID}/envelopes`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        if (!res.ok) {
            const errorData = await res.json()
            return NextResponse.json({error: errorData.message},{status: res.status})
        } 


        const resData = await res.json()
        console.log('p-new-envelope response: \n', resData);

        return NextResponse.json(resData)
        
    }catch (error) {
        console.error('Error for p-new-envelope creating envelope')
        return NextResponse.json({status: res.status })
    }




}


// "tabs": {
//     "signHereTabs":
//     [{
//         "anchorString": "Client Signature",
//         "anchorUnits": "pixels",
//         "anchorXOffset": "20",
//         "anchorYOffset": "10"
//     }]
// }

