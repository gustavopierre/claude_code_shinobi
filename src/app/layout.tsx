import type { Metadata } from "next";
import "./globals.css";
import DarkModeToggle from "@/components/DarkModeToggle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shinobi",
  description: "Modern design system with custom themes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="flex justify-between items-center p-4 bg-surface border-b border-border">
          <Link href="/">
            <h1 className="text-3xl font-semibold m-0 text-foreground cursor-pointer hover:opacity-80 transition-opacity">
              Shinobi
            </h1>
          </Link>
          <DarkModeToggle />
        </header>
        {children}
      </body>
    </html>
  );
}
