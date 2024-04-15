import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';

import { accessData } from "~/public/docusign_data/access";

const accessToken = accessData.accessToken;
const accountID = accessData.accountID;
const baseURI = accessData.baseURI;

export async function GET(req: NextRequest, res: NextResponse) {
    console.log("GET route.ts in api/getEnvelope: . . . .\n\n");

    if (accessToken == null || baseURI == null || accountID == null) {
        console.log('entered no accessToken If ');
        
        return NextResponse.json(
            {"message": "DocuSign Authorization incomplete - please log in to DocuSign through the Accounts page"}
        )
    }
    
    


    const sixtyDays = 60 * 24 * 60 * 60 * 1000;
    const sixtyDaysAgo = new Date(Date.now() - sixtyDays);
    const fromDate = sixtyDaysAgo.toISOString();

    const qParam = new URLSearchParams({ fromDate });
    
    const baseEndPoint =
        `${baseURI}/restapi/v2.1/accounts/${accountID}/envelopes?from_date=${encodeURIComponent(fromDate)}`
    
    
        try {
            console.log('enter Try ');

            const res = await fetch(baseEndPoint, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            })



            

            
        
        
        if (res.ok) {
            const data = await res.json();



            const getBase64StringPromises = data.envelopes.map((envelope: { envelopeId: string; }) => getBase64String(envelope.envelopeId));
            const base64Strings = await Promise.all(getBase64StringPromises);

            console.log(`all document base64 strings loaded! \n`);


            const customJsonResponse = {
                "resultSetSize": data.resultSetSize,
                "startPosition": data.startPosition,
                "endPosition": data.endPosition,
                "totalSetSize": data.totalSetSize,
                "envelopes": data.envelopes.filter((envelope: {
                    sentDateTime: any; status: any; emailSubject: any; emailBlurb: any; envelopeId: any; sender: { userName: any; userId: any; accountId: any; email: any; ipAddress: any; };
                }, index: number) => envelope.status !== 'voided').map((envelope: {
                    sentDateTime: any; status: any; emailSubject: any; emailBlurb: any; envelopeId: any; sender: { userName: any; userId: any; accountId: any; email: any; ipAddress: any; };
                }, index: number) => ({
                    "status": envelope.status,
                    "emailSubject": envelope.emailSubject,
                    "emailBlurb": envelope.emailBlurb,
                    "envelopeId": envelope.envelopeId,
                    "sentDateTime": userViewDateConverter(envelope.sentDateTime),
                    "pdfString": base64Strings[index],
                    "sender": {
                        "userName": envelope.sender.userName,
                        "userId": envelope.sender.userId,
                        "accountId": envelope.sender.accountId,
                        "email": envelope.sender.email,
                        "ipAddress": envelope.sender.ipAddress
                    }
                }))
            }

            
            
            return NextResponse.json(customJsonResponse)
            
            

            
        } 
        } catch (error) {
            console.log('g-envelope error');
            
        return NextResponse.json({"error": error});
    }
}

async function getBase64String(envelopeId: string) {
    
    const base64EndPoint = `http://localhost:3000/api/g-doc-list?envelopeId=${envelopeId}`;
    const base64Res = await axios.get(base64EndPoint);

    if (base64Res.status === 200) {
        return base64Res.data.pdfString;
    } else {
        return 'PDF document could not be loaded';
    }
}


function userViewDateConverter(envelopeDate: string):string {
    const [dateString, timeString] = envelopeDate.split("T") as [string, string];
    // console.log(`\ndateString: ${dateString}\ntimeString: ${timeString}\n`);

    const month = dateString.slice(5, 7);
    const year = dateString.slice(0, 4);
    const day = dateString.slice(8, 10);

    const formattedDate = `${month}/${day}/${year}`;

    // Parse the time
    const hours = parseInt(timeString.substring(0, 2));
    const minutes = timeString.substring(3, 5);

    // Convert to 12-hour format and add meridiem indicator (AM/PM)
    const meridiem = hours >= 12 ? "PM" : "AM";
    const convertedHours = hours % 12 || 12;

    const formattedTime = `${convertedHours}:${minutes} ${meridiem}`;


    const userViewDate = `${formattedDate} | ${formattedTime}`;

    // console.log(`\n${userViewDate}\n`)

    return userViewDate;

}