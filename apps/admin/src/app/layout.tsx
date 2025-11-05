import type { Metadata } from "next";
import { NavBar } from "../components/navbar/navbar";
import "@/src/css/globals.css"

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin section",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
