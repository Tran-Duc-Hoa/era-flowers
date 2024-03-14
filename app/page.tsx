import Image from "next/image";
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
          {/* <Carousel /> */}

          {FLOWER_TYPES.map((item) => (
            <section key={item.type} id={item.id} className={styles.section}>
              <h2
                className={
                  "text-center mb-3 from-red-to-amber " + styles.heading
                }
              >
                {item.name}
              </h2>
              <div className="row gy-3">
                {FLOWERS[item.type]?.slice(0, 8)?.map((item) => (
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

                <div className="d-flex justify-content-center">
                  {FLOWERS[item.type]?.length > 8 && (
                    <a href={item.href} className="btn btn-primary">
                      Xem tất cả
                    </a>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
