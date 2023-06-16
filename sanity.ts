import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-06-14",
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! || "kvdhcr67",
   useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
   createImageUrlBuilder(config).image(source);
