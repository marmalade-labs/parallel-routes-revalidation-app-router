import Link from "next/link";
import { Card } from "@/components/Card";

export default async function Grid() {
  let cards = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div>
      <section className="grid grid-cols-3 gap-4 p-4 justify-center items-center">
        {cards.map((id) => (
          <Card key={id} id={id.toString()} />
        ))}
      </section>
      <Link href="/q/rugs/2">More</Link>
    </div>
  );
}
