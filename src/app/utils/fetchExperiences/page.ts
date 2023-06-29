import { groq } from "next-sanity";
import { Experience } from "../../../../typings";
import { sanityClient } from "../../../../sanity";

const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    }
`;
export const fetchExperience = async () => {
   const experiences: Experience = await sanityClient.fetch(query);
   return experiences;
};
