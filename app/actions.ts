"use server";

import { kv } from '@vercel/kv';
import { revalidateTag } from "next/cache";

export async function upvote(id: string, _: FormData) {
  console.log("Upvote", id);
  const cardCount = await kv.incr(`card:${id}`);
  const totalCount = await kv.incr('total');
  revalidateTag("cards")
  revalidateTag("total")
  return { cardId: id, cardCount, totalCount }
}
