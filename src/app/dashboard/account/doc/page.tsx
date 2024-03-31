
import axios from 'axios';
import { redirect } from 'next/navigation';
import fs from 'fs'
import { accessData } from '@/public/docusign_data/access'


export let globalDocuCode: string;
export let globalAccessToken: string;
export let globalAccountID: string;
export let globalBaseURI: string;
export let globalUserInfo: string[];




export default async function Page(props: any) {
    

    if (props.searchParams.code) globalDocuCode = props.searchParams.code;

    // STEP 2: Get Access Token from DocuSign
    
  if (globalDocuCode !== undefined) {

    const fetchURL = "http://localhost:3000/api/a-token"
    const reqBody = { globalDocuCode }

    
    
        

    // const res = await fetch(fetchURL, {
    //     method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //     body: JSON.stringify(reqBody)
    // })
        
    const res = await axios.post(fetchURL, JSON.stringify(reqBody), {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const accessJSON = res.data
    const writingData = JSON.stringify(accessJSON)
      console.log('reqBody in account/doc \n', writingData);

   
    if (res.status === 200) {
      console.log('accessJSON data that is written,' , writingData);
      
      fs.writeFileSync('./public/docusign_data/access.js', `export const accessData = ${writingData}`)
      


    }
    




  
    


    if(accessJSON.status === 200){
      return (
        <h1> DocuSign logged in for {accessJSON.name} with email: {accessJSON.email} <br />
        
          Sending back to Account Page . . .
        
        {redirect('/dashboard/account')}
        </h1>
        
      ) 
      

  }
  else {
    return (
        <h1>
        Ran into an issue with DocuSign Login Authorization Process - please try again
        in a few minutes 
        {redirect('/dashboard/account')}
      </h1>
      

    )
  }
    


  }

    return (
        <h1>
           DocuSign Login Authorization Process Loading . . .
        </h1>
    )
}