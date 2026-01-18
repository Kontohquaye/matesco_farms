import { type SchemaTypeDefinition } from "sanity";
import { media } from "./mediaType";
import { blog } from "./blogType";
import { contact } from "./contactType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [media, blog, contact],
};
