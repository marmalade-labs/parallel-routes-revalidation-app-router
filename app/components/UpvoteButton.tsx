"use client";

export default function Upvote({ id, action }: { id: string, action: (formData: FormData) => Promise<{ success: boolean }> }) {
  return (
    <form action={async (formData: FormData) => await action(formData)}>
      <button type="submit">Upvote</button>
    </form>
  )
}
