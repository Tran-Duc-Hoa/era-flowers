/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css";

import Bootstrap from "./Bootstrap";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={"container-xxl " + styles.main}>
        <div id="carouselExample" className="carousel slide overflow-hidden">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/era-flowers.jpg"
                className="d-block w-100 h-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/chi-tu.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/chi-tu.webp"
                className="d-block w-100 h-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>
      <Bootstrap />
    </>
  );
}
