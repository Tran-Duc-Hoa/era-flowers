/* eslint-disable @next/next/no-img-element */
import styles from "./Carousel.module.scss";

const Carousel = () => {
  return (
    <div
      id="carouselExample"
      className={"carousel slide overflow-hidden " + styles.carousel}
    >
      <div className="carousel-inner h-100">
        <div className="carousel-item h-100 active">
          <img
            src="/images/era-flowers.jpg"
            className="d-block w-100 h-100"
            alt="..."
          />
        </div>
        <div className="carousel-item h-100">
          <img
            src="/images/era-flowers.jpg"
            className="d-block w-100 h-100"
            alt="..."
          />
        </div>
        <div className="carousel-item h-100">
          <img
            src="/images/era-flowers.jpg"
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
