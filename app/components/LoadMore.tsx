"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LoadMore() {
  const router = useRouter();
  const pathname = usePathname()
  let nextUrl: string;
  if (pathname.endsWith("2")) {
    nextUrl = `${pathname.substring(0, pathname.length - 1)}/3`
  } else if (pathname === "/") {
    nextUrl = "/2";
  } else {
    nextUrl = `${pathname}/2`
  }
  // console.log(`Navigating to ${nextUrl}`)

  return (<button onClick={(() => router.replace(nextUrl, { scroll: false }))}>Load More</button>)
}
