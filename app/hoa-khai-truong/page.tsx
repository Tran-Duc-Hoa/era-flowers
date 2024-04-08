import { Metadata } from "next";
import { BsFillEmojiSmileFill } from "react-icons/bs";

import FlowerCard from "app/components/FlowerCard";
import styles from "./styles.module.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eraflowers.com"),
  title: "Hoa chúc mừng - Era Flowers",
  description: "Hoa chúc mừng",
  authors: [{ name: "Era Flowers" }],
  keywords: ["era flowers", "Hoa chúc mừng"],
  openGraph: {
    title: "Hoa chúc mừng",
    description: "Hoa chúc mừng",
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

const fetchData = async () => {
  return await fetch(`${process.env.API_URL}/posts?type=WAX`, {
    next: { revalidate: 60 }
  }).then((res) => res.json());
};

export default async function BirthdayFlowerPage() {
  const flowers = await fetchData();

  return (
    <div className="row gy-3 mt-3">
      <h2 className={"text-center my-2 from-red-to-amber " + styles.heading}>
        HOA CHÚC MỪNG
      </h2>
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
  );
}
