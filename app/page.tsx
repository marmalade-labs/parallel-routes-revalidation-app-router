import { kv } from "@vercel/kv";
import { unstable_cache } from "next/cache";

const getTotalCount = unstable_cache(
  async () => kv.get<number>("total"),
  ['total'],
  { tags: ["total"] },
);

export default async function Home() {
  const total = await getTotalCount();
  return (
    <div>
      <h1 className="text-2xl">Reproduction</h1>
      <p>Total Count: {total}</p>
    </div>);
}
