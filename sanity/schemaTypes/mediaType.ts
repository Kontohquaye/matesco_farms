import { defineType, defineField } from "sanity";

export const media = defineType({
  name: "media",
  title: "Media",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "src",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
      },
    }),

    defineField({
      name: "alt",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
