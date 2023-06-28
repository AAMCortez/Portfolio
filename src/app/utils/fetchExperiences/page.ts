import { Experience } from "../../../../typings";

export const fetchExperience = async () => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Experience`);

   const data = await res.json();
   const experiences: Experience[] = await data.experiences;

   console.log("fetching", experiences);

   return experiences;
};
