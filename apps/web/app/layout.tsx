import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import CapTableBanner from "@/components/CapTableBanner";

import { cn } from "@/lib/utils/common";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "ByeByeCarta.com",
  description: "Open Source Cap Table Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-gray-900 tracking-tight",
          inter.variable,
        )}
      >
        <CapTableBanner />
        <Toaster richColors />
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
