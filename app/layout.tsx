import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "app/layout/Footer";
import Header from "app/layout/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Era Flowers",
  description:
    "Era Flowers is a flower shop in the heart of the city. We offer a wide range of flowers for all occasions.",
  authors: [{ name: "Era Flowers" }],
  keywords: ["era flowers"],
  icons: [
    {
      url: "/favicon.jpg"
    }
  ],
  openGraph: {
    title: "Era Flowers",
    description:
      "Era Flowers is a flower shop in the heart of the city. We offer a wide range of flowers for all occasions.",
    images: [
      {
        url: "/images/era-flowers.jpg",
        width: 800,
        height: 600,
        alt: "Era Flowers"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
