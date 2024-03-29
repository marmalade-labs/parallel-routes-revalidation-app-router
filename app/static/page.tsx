import { getTotalCount } from "app/api";

export default async function Home() {
  const total = await getTotalCount();
  console.log("static")
  return (
    <div>
      <h1 className="text-2xl">Reproduction</h1>
      <p>Total Count: {total}</p>
    </div>);
}
