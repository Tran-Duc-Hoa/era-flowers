import { BIRTHDAY_FLOWERS } from "./birthday-flowers";
import { FRUIT_BASKET_FLOWERS } from "./fruit-basket-flowers";
import { FUNERAL_FLOWERS } from "./funeral-flowers";
import { HAPPY_FLOWERS } from "./happy-flowers";

export interface Flower {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const FLOWER_TYPES = [
  {
    id: "birthday-section",
    type: "BIRTHDAY",
    name: "HOA SINH NHẬT",
    href: "/hoa-sinh-nhat"
  },
  {
    id: "wedding-section",
    type: "WEDDING",
    name: "HOA CƯỚI",
    href: "/hoa-cuoi"
  },
  {
    id: "opening-section",
    type: "OPENING",
    name: "HOA KHAI TRƯƠNG",
    href: "/hoa-khai-truong"
  },
  {
    id: "wax-section",
    type: "WAX",
    name: "HOA SÁP",
    href: "/hoa-sap"
  },
  {
    id: "fruit-basket-section",
    type: "FRUIT_BASKET",
    name: "GIỎ TRÁI CÂY",
    href: "/gio-trai-cay"
  }
];

export const FLOWERS: { [key: string]: Flower[] } = {
  HAPPY: HAPPY_FLOWERS,
  BIRTHDAY: BIRTHDAY_FLOWERS,
  FUNERAL: FUNERAL_FLOWERS,
  FRUIT_BASKET: FRUIT_BASKET_FLOWERS
};
