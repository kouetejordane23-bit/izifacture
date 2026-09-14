import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "izi facture",
  description: "Logiciel de facturation pour les entrepreneurs africains",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn("font-sans", jakarta.variable)}>
      <body className="antialiased bg-background min-h-screen">
        {children}
      </body>
    </html>
  );
}
