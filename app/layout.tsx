import { ReactNode } from "react";
import "./globals.css"

export default function RootLayout(
  { children, home, home2, home3 }: { children: ReactNode, home: ReactNode, home2: ReactNode, home3: ReactNode }
) {
  return (
    <html>
      <head />
      <body>
        {children}
        {home}
        {home2}
        {home3}
      </body>
    </html>
  );
}
