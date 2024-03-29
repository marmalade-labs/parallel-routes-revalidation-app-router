import { ReactNode } from "react";

export default function RootLayout(
  { children, grid, grid2, grid3 }: { children: ReactNode, grid: ReactNode, grid2: ReactNode, grid3: React.ReactNode }
) {
  return (
    <html>
      <head />
      <body>
        {children}
        {grid}
        {grid2}
        {grid3}
      </body>
    </html>
  );
}
