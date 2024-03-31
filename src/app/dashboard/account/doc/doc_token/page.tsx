import axios from 'axios';


import { globalDocuCode } from '../page'





export default async function Page() {
    console.log('globalDocuCode in doc_token.tsx: \n ', globalDocuCode);

    // console.log('globalDocuCode in doc_token.tsx: \n ', globalDocuCode);
    

    //STEP 2: Get Access Token from DocuSign
    
    // if (globalDocuCode !== undefined) {

    //     const fetchURL = "http://localhost:3000/api/a-token"
    //     const reqBody = { globalDocuCode }
    //     console.log('code in if statement of doc_token: \n', globalDocuCode);
        
        
    //     const res = await axios.post(fetchURL, JSON.stringify(reqBody), {
    //           headers: {
    //             'Content-Type': 'application/json'
    //           }
    //     });


    // }






        return (
        <h1>
            DocuSign Login Authorization Process Loading . . .
        </h1>
    )
}