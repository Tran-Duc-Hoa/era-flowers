import { Metadata } from "next";
import Image from "next/image";

import { FLOWERS } from "app/constants";
import { formatVND } from "app/utils";
import styles from "./styles.module.scss";

export const metadata: Metadata = {
  title: "Hoa sinh nhật - Era Flowers",
  description: "Hoa sinh nhật",
  authors: [{ name: "Era Flowers" }],
  keywords: ["era flowers", "Hoa sinh nhật"],
  icons: [
    {
      url: "/favicon.jpg"
    }
  ],
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

export default function BirthdayFlowerPage() {
  return (
    <div className="row gy-3 mt-3">
      <h2 className={"text-center my-2 from-red-to-amber " + styles.heading}>
        HOA SINH NHẬT
      </h2>
      {FLOWERS.BIRTHDAY?.map((item) => (
        <div key={item.id} className="col-12 col-md-4 col-xl-3">
          <div className={"card " + styles.card}>
            <div className={"card-img-top " + styles.cardImage}>
              <Image fill src={item.image} alt={item.name} />
            </div>
            {item.name && (
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                {item.price > 0 && (
                  <p className="card-text text-primary">
                    {formatVND(item.price)}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}