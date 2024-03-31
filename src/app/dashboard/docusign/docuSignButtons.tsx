"use client"
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { accessData } from "~/public/docusign_data/access";
import { envelopes } from "~/public/docusign_data/envelope"
// import { handleShowEnvelopes } from "./envelope-fetch/page";






export default function DocuSignButtons() {


    let accessToken = accessData.accessToken
    let baseURI = accessData.baseURI
    let accountId = accessData.accountID
    
    let docURI: string ;
    let envelopesData: any;


    // let envelopeJSON;


    


    // const handleShowDocument = async () => {

    //     const res = await axios.get('http://localhost:3000/api/g-document');
    // }

    // docURI = `${baseURI}${envelopes[0].documents[0].documentId}`;



        return (
            <div>
                <h1>Envelopes</h1>
 
                
                {/* <button
                    className="mt-36 flex h-10 items-center rounded-lg w-36 border border-solid border-black bg-yellow-200 px-4 text-sm font-medium"
                    onClick={handleShowEnvelopes}>Show More</button>
                 */}
                
            </div>
        );
    
    
    
    

}