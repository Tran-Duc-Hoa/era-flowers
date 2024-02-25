/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from "app/components/Carousel";
import Bootstrap from "./Bootstrap";
import { FLOWERS, FLOWER_TYPES } from "./constants";
import styles from "./page.module.css";

const formatVND = (number: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
  }).format(number);
};

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className="container-xxl">
          <Carousel />

          {FLOWER_TYPES.map((item) => (
            <section key={item.type} id={item.id} className={styles.section}>
              <h2 className="text-center mb-3 from-red-to-amber">
                {item.name}
              </h2>
              <div className="row gy-3">
                {FLOWERS[item.type]?.map((item) => (
                  <div key={item.id} className="col-12 col-md-4 col-xl-3">
                    <div className="card">
                      <img
                        src={item.image}
                        className={"card-img-top " + styles.cardImage}
                        alt={item.name}
                        loading="lazy"
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text text-primary">
                          {formatVND(item.price)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Bootstrap />
    </>
  );
}
