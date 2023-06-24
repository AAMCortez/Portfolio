import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { Social } from "../../../../typings";

const query = groq`
    *[_type == "social"]
`;

type Data = {
   socials: Social[];
};

export default async function Page() {
   const socials: Social[] = await sanityClient.fetch(query);
   console.log(socials);
   return <h1>hello {socials[0].title}</h1>;
}
