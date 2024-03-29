"use client";

export default function Upvote({ id, action }: { id: string, action: (formData: FormData) => Promise<{ cardId: string, cardCount: number, totalCount: number }> }) {
  return (
    <form action={async (formData: FormData) => {
      const res = await action(formData)
      console.log(res);
    }}>
      <button type="submit">Upvote</button>
    </form>
  )
}
