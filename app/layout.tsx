import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "app/layout/Footer";
import Header from "app/layout/Header";
import Bootstrap from "./Bootstrap";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eraflowers.com"),
  title: "Era Flowers",
  description:
    "Era Flowers is a flower shop in the heart of the city. We offer a wide range of flowers for all occasions.",
  authors: [{ name: "Era Flowers" }],
  keywords: ["era flowers"],
  alternates: {
    canonical: "https://www.eraflowers.com"
  },
  icons: [
    {
      url: "/favicon.jpg"
    }
  ],
  openGraph: {
    title: "Era Flowers",
    description:
      "Era Flowers is a flower shop in the heart of the city. We offer a wide range of flowers for all occasions.",
    url: "https://www.eraflowers.com",
    images: [
      {
        url: "/images/era-flowers.jpg",
        width: 800,
        height: 600,
        alt: "Era Flowers"
      }
    ],
    locale: "vi_VN"
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
        <main className="main">
          <div className="container-xxl">{children}</div>
        </main>

        <Footer />
        <Bootstrap />
      </body>
    </html>
  );
}
