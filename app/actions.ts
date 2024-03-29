"use server";

import { kv } from '@vercel/kv';
import { revalidateTag } from "next/cache";

export async function upvote(id: string, _: FormData) {
  // kv incr
  console.log("Upvote", id);
  await kv.incr(`card:${id}`);
  await kv.incr('total');
  revalidateTag("cards")
  revalidateTag("total")
}
