import { z } from "zod";

export const searchBarSchema = z.object({
  query: z.string(),
});
