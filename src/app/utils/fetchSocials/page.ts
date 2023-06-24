import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { Social } from "../../../../typings";

const query = groq`
    *[_type == "social"]
`;

type Data = {
   socials: Social[];
};

const social = async function fetchSocial() {
   const socials: Social[] = await sanityClient.fetch(query);
   return socials;
}

//export default social