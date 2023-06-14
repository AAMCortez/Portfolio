import { defineField, defineType } from "sanity";

export default defineType({
   name: "project",
   title: "Project",
   type: "document",
   fields: [
      defineField({
         name: "title",
         title: "Title",
         type: "string",
      }),
      defineField({
         name: "role",
         title: "Role",
         type: "string",
      }),

      defineField({
         name: "image",
         title: "Image",
         type: "image",
         options: {
            hotspot: true,
         },
      }),
      defineField({
         name: "summary",
         title: "Summary",
         type: "text",
      }),
      defineField({
         name: "technologies",
         title: "Technologies",
         type: "array",
         of: [{ type: "reference", to: { type: "skill" } }],
      }),
      defineField({
         name: "linkToBuild",
         title: "LinkToBuild",
         type: "url",
      }),
   ],
});