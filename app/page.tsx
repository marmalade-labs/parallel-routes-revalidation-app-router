import { getTotalCount } from "./api";
import LoadMore from "./components/LoadMore";

export default async function Home() {
  const total = await getTotalCount();
  return (
    <div>
      <h1 className="text-2xl">Reproduction</h1>
      <p>Total Count: {total}</p>
      <div className="flex flex-col justify-start content-start items-start">
        <LoadMore />
        <LoadMore search={true} />
      </div>
    </div>);
}
