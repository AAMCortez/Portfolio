import { groq } from "next-sanity";
import { sanityClient, urlFor } from "../../../../sanity";
import { Experience, PageInfo, Social } from "../../../../typings";

// const query = groq`
//     *[_type == "pageInfo"][0]
// `;
const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    }
`;

export default async function Page() {
   //const pageInfo: PageInfo = await sanityClient.fetch(query);
   const experiences: Experience[] = await sanityClient.fetch(query);
   console.log("this is the experience", experiences);
   return (
      <div>
         <h1>
            {experiences.map((experience) => (
               <div key={experience._id}>{experience.company}</div>
            ))}
         </h1>
      </div>
   );
}
