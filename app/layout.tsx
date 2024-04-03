import { ReactNode } from "react";
import "./globals.css"

export default function RootLayout({
  children,
  grid,
  grid2,
  grid3,
  grid4
}: {
  children: ReactNode,
  grid: ReactNode,
  grid2: ReactNode,
  grid3: ReactNode,
  grid4: ReactNode
}) {
  return (
    <html>
      <body>
        <section>
          {children}
          {grid}
          {grid2}
          {grid3}
          {grid4}
        </section>
      </body>
    </html>
  );
}
