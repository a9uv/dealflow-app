import { NextRequest, NextResponse } from "next/server";

import { accessData } from "~/public/docusign_data/access";
export let accTokenMemory: string | null = null
export let baseURIMemory: string | null = null
export let accountIDMemory: string | null = null
export let baseFetchName: string | null = null
export let baseFetchEmail: string | null = null

const integrationKey = process.env.DOCUSIGN_INTEGRATION_KEY;
const envSecretKey = process.env.DOCUSIGN_SECRET_KEY

export async function POST(req: NextRequest, res: NextResponse) {
    console.log('entering POST function in api/a-token');

    if (accTokenMemory !== null && baseURIMemory !== null && accountIDMemory !== null) {
        return NextResponse.json(
                    {
                        status: res.status,
                        name: baseFetchName,
                        email: baseFetchEmail,
                        accessToken: accTokenMemory,
                        accountID: accountIDMemory,
                        baseURI: baseURIMemory
                        
                    },)

    }

    const body = await req.json();
    const { globalDocuCode } = body
    

    const tokenURI = 'https://account-d.docusign.com/oauth/token';
    const credentials = btoa(`${integrationKey}:${envSecretKey}`);
    

    let accessToken: string;
    const reqBody = new URLSearchParams();
    reqBody.append('grant_type', 'authorization_code');
    reqBody.append('code', globalDocuCode);

    try {
        const res = await fetch(tokenURI, {
            method: 'POST',
            headers:{
                Authorization: `Basic ${credentials}`
            },
            body: reqBody
        })

        if (res.ok) {
            console.log('response OK in grabbing auth token: ', res.status, 'Status Text: ', res.statusText);
            const data = await res.json()
            accessToken = data.access_token;
            accTokenMemory = accessToken;
    
            
            // const response = NextResponse.json({ accessToken }, { status: res.status })
            

            //TODO: change for production nvironment
            //https://account.docusign.com/oauth/userinfo
            const docuAPIEndpoint = "https://account-d.docusign.com/oauth/userinfo"
            

            try {
             console.log('fetching base URI . . . ');
             
            const res = await fetch(docuAPIEndpoint, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        
            if (res.ok) {
                const userInfo = await res.json();
                baseFetchName = userInfo.name;
                baseFetchEmail = userInfo.email;
                accountIDMemory = userInfo.accounts[0].account_id;
                baseURIMemory = userInfo.accounts[0].base_uri;

                // console.log('baseFetchName: ', baseFetchName, "\nbaseFetchEmail: ", baseFetchEmail,
                //     "\naccountIDMemory: ", accountIDMemory, "\nbaseURIMemory: ", baseURIMemory);
                

                const json = { returnUrl: "http://localhost:3000/dashboard/quotes" };


            /** This try was to fetch the embedded UI -- only show when needed moving forward */
            //     try {


            //         const consoleResponse = await fetch(`${baseURIMemory}/restapi/v2.1/accounts/${accountIDMemory}/views/console`, {
            //             method: 'POST',
            //             headers: {
            //                 'Authorization': `Bearer ${accessToken}`,
            //                 'Content-Type': 'application/json'
            //             },
            //             body: JSON.stringify(json)
            //         })

            //         if (!consoleResponse.ok) {
            //             const errorData = await consoleResponse.json()
            //             return NextResponse.json({error: errorData.message},{status: consoleResponse.status})
            //         }

            //         const responseData = await consoleResponse.json()
            //         const consoleUrl = responseData.url 


            //         const response = NextResponse.json(
            //         {
            //             name: baseFetchName,
            //             email: baseFetchEmail,
            //             accessToken: accessToken,
            //             accountID: accountIDMemory,
            //             baseURI: baseURIMemory,
            //             consoleURL: consoleUrl
            //         }
            //         )

            //         console.log('Final Response from a-token: \n', response);
                    
                    
            //         return response
                    
            //     }catch (error) {
            //         console.error('Error for a-token getting console URI')
            //         return NextResponse.json({status: res.status })
            // }
                
                const response = NextResponse.json(
                    {
                        status: res.status,
                        name: baseFetchName,
                        email: baseFetchEmail,
                        accessToken: accessToken,
                        accountID: accountIDMemory,
                        baseURI: baseURIMemory
                    },
                )
                
                
                
                return response
            } else {
                console.log('response not ok \n', res.status, 'Status Text: ', res.statusText);

                return NextResponse.json({error: 'error'}, {status: res.status});
            }
        } catch (error) {
                console.error('Error for a-token getting baseURI')
            }

        } else {
             console.log('response not ok \n', res.status, 'Status Text: ', res.statusText);
            return NextResponse.json({error: 'error'}, {status: res.status});
        }
    } catch (error) {
        
        console.log('error: ', error);
        return NextResponse.json({ error: error });
    }




}


