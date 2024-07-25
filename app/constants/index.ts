export interface Flower {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const FLOWER_TYPES = [
  {
    id: 'birthday-section',
    type: 'BIRTHDAY',
    name: 'HOA SINH NHẬT',
    href: '/hoa-sinh-nhat'
  },
  {
    id: 'wedding-section',
    type: 'WEDDING',
    name: 'HOA CƯỚI',
    href: '/hoa-cuoi'
  },
  {
    id: 'opening-section',
    type: 'OPENING',
    name: 'HOA KHAI TRƯƠNG',
    href: '/hoa-khai-truong'
  },
  {
    id: 'wax-section',
    type: 'WAX',
    name: 'HOA SÁP',
    href: '/hoa-sap'
  },
  {
    id: 'funeral-section',
    type: 'FUNERAL',
    name: 'HOA VIẾNG',
    href: '/hoa-vieng'
  },
  {
    id: 'fruit-basket-section',
    type: 'FRUIT_BASKET',
    name: 'GIỎ TRÁI CÂY',
    href: '/gio-trai-cay'
  }
];
