import { unstable_cache } from "next/cache";
import Upvote from "./UpvoteButton";
import { kv } from '@vercel/kv';
import { upvote } from "../actions";

const getCardCount = unstable_cache(
  async (id: string) => kv.get<number>(`card:${id}`),
  ['cards']
);

export default async function CardClient({ id }: { id: string }) {
  console.log("CardClient")
  const count = await getCardCount(id);
  return (
    <div className="flex flex-col justify-center items-center h-48 bg-gray-300	rounded-lg no-underline text-2xl font-medium max-w-48">
      {count || 0}{" "}
      <Upvote id={id} action={upvote.bind(null, id)} />
    </div>
  )
}

export async function CardServer({ id }: { id: string }) {
  console.log("CardServer")
  const count = await getCardCount(id);
  return (
    <div className="flex flex-col justify-center items-center h-48 bg-gray-300	rounded-lg no-underline text-2xl font-medium max-w-48">
      {count || 0}{" "}
      <form action={upvote.bind(null, id)}>
        <button type="submit">Upvote</button>
      </form>
    </div>
  )
}
