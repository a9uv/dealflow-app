import { log } from "console";
import { NextRequest, NextResponse } from "next/server";


import { accTokenMemory } from '../a-token/route';
export let baseURIMemory: string | null = null
export let accountIDMemory: string | null = null

import { accessData } from "~/public/docusign_data/access";

export async function POST(req: NextRequest, res: NextResponse) {
    console.log("GET route.ts in quotes/api/getBaseURI: . . . .\n\n");
    const body = await req.json();
    const accessToken = accTokenMemory
    const docuAPIEndpoint = "https://account-d.docusign.com/oauth/userinfo"


    if (accessToken) {
        try {
            const res = await fetch(docuAPIEndpoint, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        
        if (res.ok) {
            const userInfo = await res.json();
            accountIDMemory = userInfo.accounts[0].account_id;
            baseURIMemory = userInfo.accounts[0].base_uri;

            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~baseURI FROM MEMORY!!!!!!!: ', baseURIMemory);
            
            return NextResponse.json({status: res.status})
        } else {
            console.log('response not ok');

            return NextResponse.json({error: 'error'}, {status: res.status});
        }
    } catch (error) {
        
        console.log('error: ', error);
        return NextResponse.json({ error: error });
    }
    } else {
        console.log('access token not found');
        return NextResponse.json({error: 'error'}, {status: 401});
        
    }

}