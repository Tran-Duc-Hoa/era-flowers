import { BIRTHDAY_FLOWERS } from "./birthday-flowers";
import { FRUIT_BASKET_FLOWERS } from "./fruit-basket-flowers";
import { FUNERAL_FLOWERS } from "./funeral-flowers";
import { WEDDING_FLOWERS } from "./wedding-flowers";

export interface Flower {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const FLOWER_TYPES = [
  { id: "wedding-section", type: "WEDDING", name: "HOA CƯỚI" },
  {
    id: "birthday-section",
    type: "BIRTHDAY",
    name: "HOA SINH NHẬT / KHAI TRƯƠNG"
  },
  { id: "funeral-section", type: "FUNERAL", name: "HOA VIẾNG" },
  { id: "fruit-basket-section", type: "FRUIT_BASKET", name: "GIỎ HOA TRÁI CÂY" }
];

export const FLOWERS: { [key: string]: Flower[] } = {
  WEDDING: WEDDING_FLOWERS,
  BIRTHDAY: BIRTHDAY_FLOWERS,
  FUNERAL: FUNERAL_FLOWERS,
  FRUIT_BASKET: FRUIT_BASKET_FLOWERS
};
