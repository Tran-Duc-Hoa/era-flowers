import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "app/layout/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Era Flowers",
  description:
    "Era Flowers is a flower shop in the heart of the city. We offer a wide range of flowers for all occasions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
