import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dashboard BPOOU",
  description:
    "Dashboard criado para visualizar relatórios de forma dinamica e acessível.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </header>
      <body
        className={cn(
          "min-h-screen bg-blue-600 font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
