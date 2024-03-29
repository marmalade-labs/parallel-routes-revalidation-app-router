import Upvote from "./UpvoteButton";
import { upvote } from "../actions";
import { getCardCount } from "app/api";

export default async function Card({ id }: { id: string }) {
  const count = await getCardCount(id);
  return (
    <div className="flex flex-col justify-center items-center h-48 bg-gray-300	rounded-lg no-underline text-2xl font-medium max-w-48">
      {count || 0}{" "}
      <Upvote id={id} action={upvote.bind(null, id)} />
    </div>
  )
}
