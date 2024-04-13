import { Metadata } from "next";
import { BsFillEmojiSmileFill } from "react-icons/bs";

import FlowerCard from "app/components/FlowerCard";
import styles from "./styles.module.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eraflowers.com"),
  title: "Hoa sinh nhật - Era Flowers",
  description: "Hoa sinh nhật",
  authors: [{ name: "Era Flowers" }],
  keywords: ["era flowers", "Hoa sinh nhật"],
  openGraph: {
    title: "Hoa sinh nhật",
    description: "Hoa sinh nhật",
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

const ONE_HOUR = 60 * 60;

const fetchData = async () => {
  return await fetch(`${process.env.API_URL}/posts?type=BIRTHDAY`, {
    next: { revalidate: ONE_HOUR }
  }).then((res) => res.json());
};

export default async function BirthdayFlowerPage() {
  const flowers = await fetchData();
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "Florist",
    name: "Era Flowers",
    description:
      "Welcome to Era Flowers! We specialize in providing beautiful flowers for all occasions.",
    url: "https://www.eraflowers.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "0903 984 134",
      contactType: "customer service"
    },
    hasOfferCatalog: flowers.map((item: any) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: item.title,
        description: item.title,
        url: "https://www.eraflowers.com/hoa-sinh-nhat",
        image: item.image
      }
    }))
  };

  return (
    <>
      <div className="row gy-3 mt-3">
        <h1
          className={
            "fs-2 text-center my-2 from-red-to-amber " + styles.heading
          }
        >
          HOA SINH NHẬT
        </h1>
        {flowers?.map((item: any) => (
          <div key={item.id} className="col-12 col-md-4 col-xl-3">
            <FlowerCard item={item} />
          </div>
        ))}
        {flowers?.length === 0 && (
          <div className="text-center p-5">
            <BsFillEmojiSmileFill fontSize={50} />
            <p>Không có sản phẩm nào</p>
          </div>
        )}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
