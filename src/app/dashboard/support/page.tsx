import axios from "axios";
export default async function Page() {



  //  const res = await axios.get("http://localhost:3000/api/a-token", {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //  });

  
  // const accessData = res.data
  // console.log(accessData.accessToken);

  // const fetchRes = await fetch("http://localhost:3000/api/a-token", {
  //   method: 'GET'
  // })

  const fetchRes = await fetch("http://localhost:3000/api/g-doc")
  const accessData = await fetchRes.json()
  console.log('fetchRes: ', accessData);
  


  return (
    <main>
      Support
    </main>
  );
}