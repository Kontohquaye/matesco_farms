import { defineType, defineField } from "sanity";

export const blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thumbnail",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "author",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "read",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
