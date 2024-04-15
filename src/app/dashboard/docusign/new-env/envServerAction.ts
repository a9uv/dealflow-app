'use server'
import { z } from 'zod';
import { error } from "console";
import { FormsData } from "../../forms/FormsData";
import { EnvelopeData } from "./newEnvForm";
import fs from 'fs'
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import { forms } from "../../forms/FormsData";
import axios from 'axios'

import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
const path = require("path")


export async function createEnvelope(state: NextResponse, formData: FormData) {
    

    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        chosenForm: formData.get('chosenForm')
    }

    const envelope:any  = makeEnvelope(rawFormData)
    const jsonEnv = JSON.stringify(envelope)
    const writeFilePath = path.join(process.cwd(), 'src', 'public', 'docusign_data','docData.js');
    fs.writeFileSync(writeFilePath, `export const docs = ${jsonEnv}`);

    try {
        const res = await axios.post("http://localhost:3000/api/p-new-envelope", jsonEnv, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res.status == 200) {
            const resData = await res.data
            console.log('post env response \n', resData);

            try {
                const refreshDocu = await axios.get('http://localhost:3000/api/g-envelope');

                if (refreshDocu.status == 200) {
                    console.log(`\nNEW ENVELOPE CREATION SUCCESS!!\n`);
                    

                    const filePath = path.join(process.cwd(), 'src', 'public', 'docusign_data', 'envelope.js');
                    fs.writeFileSync(filePath, `export const envelopeList = ${JSON.stringify(refreshDocu.data)}`);
                } else {
                    console.error(`ERROR REFETCHING DOCUMENTS: status code ${res.status}`)
                }
            } catch (error) {
                console.error(error)
            }

            
        } else {
            console.error(`ERROR: status code ${res.status}`)
        }

    } catch (error) {
        console.error(error)
    }


    revalidatePath('/dashboard/docusign')
    redirect('/dashboard/docusign')


    

    


    

}


function makeEnvelope(rawFormData: any) {
    

    const documents = setDocuments(rawFormData.chosenForm)


    const tabs = {
        signHereTabs: [
            {
                anchorString: "~cs~",
                anchorUnits: "pixels",
                anchorXOffset: "40",
                anchorYOffset: "15",
                width: "150"
            },
        ],
        dateSignedTabs: [
            {
                anchorString: "~ds~",
                anchorUnits: "pixels",
                anchorXOffset: "40",
                anchorYOffset: "15",
                width: "150"
            },
        ],
        textTabs: [
            {
                anchorString: "~cn~",
                anchorUnits: "pixels",
                anchorXOffset: "40",
                anchorYOffset: "15",
                bold: "true",
                value: rawFormData.name,
            },
        ],

    }


        //Set Recipients (Signers and CC)
    const recipients = {
        signers: [
            {
                email: rawFormData.email,
                name: rawFormData.name,
                recipientId: "1",
                routingOrder: "1",
                tabs: tabs,
            }
        ]
    }


    
    //Final Envelope Build
    const envelope = {
        emailSubject: rawFormData.subject,
        emailBlurb: rawFormData.message,
        documents: [documents],
        recipients: recipients,
        status: "sent"
    }


    return envelope
    
}

function setDocuments(chosenForm: string) {
    
    const formObject = forms.find(form => form.id === chosenForm)
    
    if (formObject === undefined) {
        return error
    }
    let docArray = ['']

    // const filePath = 'public' + formObject.href
    const filePath = path.join(process.cwd(), 'src', 'public', formObject.href);
    const pdfBase64 = fs.readFileSync(filePath, { encoding: 'base64' });
    


    return {
            documentBase64: pdfBase64,
            name: formObject.name,
            fileExtension: "pdf",
            documentId: "1"
        }
        
}












/*

https://developers.docusign.com/docs/esign-rest-api/how-to/request-signature-in-app-embedded/
https://developers.docusign.com/docs/esign-rest-api/how-to/request-signature-email-remote/


First, user fills out form and provides the details needed to build envelope:
signerName
signerEmail
emailsubject
email blurb

once form successfully submits, start building envelope (reference below)

*/
 const envelopeJSONReference = {
    "emailSubject": "Please sign this document set",
    "documents": [
        {
            "documentBase64": "<base64_encoded_doc3>",
            "name": "Lorem Ipsum",
            "fileExtension": "pdf",
            "documentId": "1"
        }
    ],
    "recipients": {
        "signers": [
            {
                "email": "<SIGNER_EMAIL>",
                "name": "<SIGNER_NAME>",
                "recipientId": "1",
                "routingOrder": "1",
                "tabs": {
                    "textTabs": [
                        {}
                    ],
                    "signHereTabs": [
                        {
                            "anchorString": "Client Signature",
                            "anchorUnits": "pixels",
                            "anchorXOffset": 20,
                            "anchorYOffset": 10
                        },
                    ]
                }
            }
        ]
    },
    "status": "sent"
}
/*


Envelope Definition:

1. Create new signable HTML document in code
2. Attach multiple documents to the envelope
3. Set Signer Data (X)
4. Create Routing Order for Documents (X)
5. Create + Assign Signable Fields to Specific Signers within Documents

*/




