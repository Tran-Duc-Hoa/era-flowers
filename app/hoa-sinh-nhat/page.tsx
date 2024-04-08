import { Metadata } from "next";
import Image from "next/image";
import { BsFillEmojiSmileFill } from "react-icons/bs";

import { formatVND } from "app/utils";
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

const fetchData = async () => {
  return await fetch(`${process.env.API_URL}/posts?type=BIRTHDAY`, {
    next: { revalidate: 60 }
  }).then((res) => res.json());
};

export default async function BirthdayFlowerPage() {
  const flowers = await fetchData();

  return (
    <div className="row gy-3 mt-3">
      <h2 className={"text-center my-2 from-red-to-amber " + styles.heading}>
        HOA SINH NHẬT
      </h2>
      {flowers?.map((item: any) => (
        <div key={item.id} className="col-12 col-md-4 col-xl-3">
          <div className={"card " + styles.card}>
            <div className={"card-img-top " + styles.cardImage}>
              <Image
                width={300}
                height={380}
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">{item.title}</h5>
              {item.price > 0 && (
                <p className="card-text text-primary">
                  {formatVND(item.price)}
                </p>
              )}
            </div>
          </div>
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
