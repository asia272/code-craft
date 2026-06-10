import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import Footer from "@/components/Footer";
import ConvexClientProvider from "./providers/ConvexClientProvider";


;
export const metadata: Metadata = {
  title: "Code Craft",
  description: "Share and run code snippets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={` antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col`}
        >
          <ConvexClientProvider>{children}</ConvexClientProvider>

          <Footer />

        </body>
      </html>
    </ClerkProvider>
  );
}

// https://emkc.org/api/v2/piston/runtimes