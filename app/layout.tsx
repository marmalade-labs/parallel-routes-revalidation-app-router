import { ReactNode } from "react";
import "./globals.css"

export default function RootLayout(
  { children, home }: { children: ReactNode, home: ReactNode }
) {
  return (
    <html>
      <head />
      <body>
        {children}
        {home}
      </body>
    </html>
  );
}
