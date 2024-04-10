import { BsFillEmojiSmileFill } from "react-icons/bs";

import FlowerCard from "app/components/FlowerCard";
import { FLOWER_TYPES } from "./constants";
import styles from "./page.module.css";

const query = "limit=9";

const API_URL = process.env.API_URL;
const fetchData = async () => {
  const birthdayFlowers = await fetch(
    `${API_URL}/posts?type=BIRTHDAY&${query}`,
    { next: { revalidate: 60 } }
  ).then((res) => res.json());

  const weddingFlowers = await fetch(`${API_URL}/posts?type=WEDDING&${query}`, {
    next: { revalidate: 60 }
  }).then((res) => res.json());

  const openingFlowers = await fetch(`${API_URL}/posts?type=OPENING&${query}`, {
    next: { revalidate: 60 }
  }).then((res) => res.json());

  const waxFlowers = await fetch(`${API_URL}/posts?type=WAX&${query}`, {
    next: { revalidate: 60 }
  }).then((res) => res.json());

  const fruitBasketFlowers = await fetch(
    `${API_URL}/posts?type=FRUIT_BASKET&${query}`
  ).then((res) => res.json());

  return {
    BIRTHDAY: birthdayFlowers,
    WEDDING: weddingFlowers,
    OPENING: openingFlowers,
    WAX: waxFlowers,
    FRUIT_BASKET: fruitBasketFlowers
  };
};

export default async function Home({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] };
}) {
  let flowers = [];
  let FLOWER_MAP: { [key: string]: any } = {};
  const q = searchParams?.q;

  if (q) {
    flowers = await fetch(`${API_URL}/posts?q=${q}`).then((res) => res.json());
    console.log("flowers", flowers);
  } else {
    FLOWER_MAP = await fetchData();
  }

  return (
    <>
      <div className={styles.main}>
        <div className="container-xxl">
          {q && (
            <div className="pt-5">
              <div className="row gy-3">
                {flowers?.map((item: any) => (
                  <div key={item.id} className="col-12 col-md-4 col-xl-3">
                    <FlowerCard item={item} />
                  </div>
                ))}
                {flowers.length === 0 && (
                  <div className="text-center p-5">
                    <BsFillEmojiSmileFill fontSize={50} />
                    <p>Không tìm thấy kết quả</p>
                  </div>
                )}
              </div>
            </div>
          )}
          {!q &&
            FLOWER_TYPES.map((flowerType) => {
              return (
                <section
                  key={flowerType.type}
                  id={flowerType.id}
                  className={styles.section}
                >
                  <h2
                    className={
                      "text-center mb-3 from-red-to-amber " + styles.heading
                    }
                  >
                    {flowerType.name}
                  </h2>
                  <div className="row gy-3">
                    {FLOWER_MAP[flowerType.type]?.map((item: any) => (
                      <div key={item.id} className="col-12 col-md-4 col-xl-3">
                        <FlowerCard item={item} />
                      </div>
                    ))}

                    <div className="d-flex justify-content-center">
                      {FLOWER_MAP[flowerType.type]?.length > 8 && (
                        <a href={flowerType.href} className="btn btn-primary">
                          Xem tất cả
                        </a>
                      )}
                    </div>
                  </div>
                </section>
              );
            })}
        </div>
      </div>
    </>
  );
}
