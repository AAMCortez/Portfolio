import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { PageInfo, Social } from "../../../../typings";


const query = groq`
    *[_type == "pageInfo"][0]
`;



export default async function Page() {
   const pageInfo: PageInfo = await sanityClient.fetch(query);

   console.log("this is the page info", pageInfo);
   return (
      <div>
         <h1>hello {pageInfo.name}</h1>
         <h1>things {pageInfo.backgroundInformation}</h1>
         <h1>things {pageInfo.address}</h1>
         <h1>things {pageInfo.phoneNumber}</h1>
         <h1>things {pageInfo.email}</h1>
      </div>
   );
}
