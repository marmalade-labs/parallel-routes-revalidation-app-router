import { kv } from "@vercel/kv";
import { unstable_cache } from "next/cache";

export const getTotalCount = unstable_cache(
  async () => kv.get<number>("total"),
  ['total'],
  { tags: ["total"] },
);

export const getCardCount = unstable_cache(
  async (id: string) => kv.get<number>(`card:${id}`),
  ['cards'],
  { tags: ["cards"] },
);

