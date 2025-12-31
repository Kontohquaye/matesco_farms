import { type SchemaTypeDefinition } from "sanity";
import { media } from "./mediaType";
import { blog } from "./blogType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [media, blog],
};
