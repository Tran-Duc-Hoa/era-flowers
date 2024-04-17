import Image from "next/image";

import { formatVND } from "@/app/utils";
import styles from "./styles.module.scss";

interface Post {
  title: string;
  image: string;
  price: number;
}

interface Props {
  item: Post;
}

const FlowerCard = ({ item }: Props) => {
  return (
    <div className={"card " + styles.card}>
      <div className={"card-img-top " + styles.cardImage}>
        <Image
          className={styles.image}
          width={308}
          height={320}
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="card-body text-center">
        <h5 className={"card-title " + styles.title} title={item.title}>
          {item.title}
        </h5>
        {item.price > 0 && (
          <p className="card-text text-primary">{formatVND(item.price)}</p>
        )}
      </div>
    </div>
  );
};

export default FlowerCard;
