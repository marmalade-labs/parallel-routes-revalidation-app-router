"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function LoadMore({ search = false }: { search?: boolean }) {
  const router = useRouter();
  const pathname = usePathname()
  let nextPathname: string;
  if (pathname.endsWith("2")) {
    nextPathname = `${pathname.substring(0, pathname.length - 1)}3`
  } else if (pathname.endsWith("3")) {
    nextPathname = `${pathname.substring(0, pathname.length - 1)}4`
  } else if (pathname === "/") {
    nextPathname = "/2";
  } else {
    nextPathname = `${pathname}/2`
  }
  const nextUrl = search ? `${nextPathname}?test=1` : nextPathname
  console.log(`Navigating to ${nextUrl}`)

  return (<Link href={nextUrl} scroll={false}>Load More {search && " (breaks)"}</Link>)
}
