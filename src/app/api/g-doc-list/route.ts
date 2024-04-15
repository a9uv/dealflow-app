import {NextRequest, NextResponse } from "next/server";

import { accessData } from "~/public/docusign_data/access";
import axios from 'axios'
import fs from 'fs'
const accessToken = accessData.accessToken
const accountID = accessData.accountID
const baseURI = accessData.baseURI

export async function GET(req: NextRequest, res: NextResponse) {
    
    if (accessData.accessToken === "" && accessData.accountID === ""
        && accessData.baseURI === "") {
        return Response.json({status: 400, statusText: "No ACCESS TOKEN"})
    }

    const searchParams = req.nextUrl.searchParams
    const envelopeId = searchParams.get('envelopeId')
    
    // console.log('envelopeId in g-doc-list: ', envelopeId);


        const baseEndPoint =
            `${baseURI}/restapi/v2.1/accounts/${accountID}/envelopes/${envelopeId}/documents/combined`


    try {
        const res = await axios.get(baseEndPoint, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/pdf',
            },
            responseType: 'arraybuffer'
        })


        if (res.status === 200) {
            const pdfData = res.data
            const base64String = pdfData.toString('base64')

            const jsonRes = {
               pdfString: { base64String: base64String }
            }
            
            
            return NextResponse.json(jsonRes)


        } else {
            console.log('response not ok: STATUS CODE: ', res.status, ' with status text: ', res.statusText);
            return NextResponse.json({"error": `NO PDF DATA FOUND. Status: ${res.status} - ${res.statusText}`});
        }

        // console.log(res);
        
        // const pdfData = res.data

        // const base64String = pdfData.toString('base64')
        // console.log('base64String from g-doc-list: \n', base64String.length);
        

        // const json = JSON.stringify({
        //             status: status
        //         })
        
        

        // return new NextResponse(JSON.stringify(res))

        // return new NextResponse(base64String, {
        //     headers: {
        //         'Content-Type': 'application/pdf'
        //     }
        // })


    } catch (error) {
        return NextResponse.json({"error": error})
    }
    
    


}



            //ADD THIS TO RUN DOCS PDF RETRIEVAL
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

            //             data.envelopes.forEach(async (envelope: { envelopeId: string }) => {
                
            // const listDocRes = await axios.get('http://localhost:3000/api/g-doc-list', {
            //     params : {
            //         envelopeId: envelope.envelopeId
            //     }
            //     });
                

            //     if (listDocRes.status === 200) {
                    

            //     }
            // })

            
            // const jsonRes = {
            //     resultSetSize: data.resultSetSize,
            //     envelopes: data.envelopes
            // }

             //ADD THIS TO RUN DOCS PDF RETRIEVAL
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  
            // console.log('\n\n\nresponse ok: ', res.status, 'Status Text: ', res.statusText,
                
            //     '\n\n\n DATA FOR ENVELOPE: \n', data);
