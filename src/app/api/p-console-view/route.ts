import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import { accessData } from "~/public/docusign_data/access";

const accessToken = accessData.accessToken;
const accountID = accessData.accountID;
const baseURI = accessData.baseURI;

export async function POST(res: NextResponse, req:NextRequest) {
    console.log('entering p-env . . .');



    if (accessToken === null || accountID === null || baseURI === null) {
        return NextResponse.json('no accessToken');
    }

    const json = { returnUrl: "http://localhost:3000/dashboard/quotes" };

    try {
        console.log('entering p-env try . . . ');
        const fetchURL = `${baseURI}/restapi/v2.1/accounts/${accountID}/views/console`
        console.log(fetchURL);
        
        const response = await fetch( fetchURL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        });

        if (!response.ok) {
        console.log('if in response not ok');
        const errorData = await response.json();
        console.error('Error:', errorData.message);
        return NextResponse.json({ error: errorData.message }, { status: response.status });
        
        }
        const resData = await response.json();
        console.log(resData);

        const consoleUrl = resData.url;
        console.log(consoleUrl);
        fs.writeFileSync('./public/docusign_data/docData.js', `export const docs = ${JSON.stringify(consoleUrl)}`);

            return NextResponse.json({ consoleUrl });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'An error occurred' });
    }
}


/*

{
    "url": "
    https://appdemo.docusign.com/
    auth-from-console?code=1371d58d-8914-4e4d-9994-
    faac77ab3ba4&t=76f7f251-fbb6-461c-b1ec-
    c4db4b076f06&from=https%3A%2F%2Fdemo.docusign.net&r=
    http%3A%2F%2Flocalhost%3A3000%2Fdashboard%2Fquotes&view=true&
    accountId=a2751e4c-f55f-48c7-94a0-a89dd0ac9367&vt=0"
}


{
    "consoleUrl": 
    "https://appdemo.docusign.com/auth-from-console?
    code=af026f18-0d23-42c5-bb24-e1e894ef195d&t=11c41764-fddb-4eb2-88f6-81d25ae1a4f8
    &from=https%3A%2F%2Fdemo.docusign.net&r=http%3A%2F%2Flocalhost%3A3000%2Fdashboard%2Fquotes&view=true&accountId=a2751e4c-f55f-48c7-94a0-a89dd0ac9367&vt=0"
}

*/