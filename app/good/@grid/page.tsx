import Card from "@/components/Card";
import LoadMore from "@/components/LoadMore";

export default async function Grid() {
  let cards = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div>
      <section className="grid grid-cols-3 gap-4 p-4 justify-center items-center">
        {cards.map((id) => (
          <Card key={id} id={id.toString()} />
        ))}
      </section>
      <LoadMore />
    </div>
  );
}
