"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LoadMore() {
  const router = useRouter();
  const pathname = usePathname()
  const nextUrl = pathname.endsWith("2") ? `${pathname.substring(0, pathname.length - 1)}/3` : `${pathname}/2`;

  return (<button onClick={(() => router.replace(nextUrl, { scroll: false }))}>Load More</button>)
}
