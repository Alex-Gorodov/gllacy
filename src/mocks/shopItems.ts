import { ShopItem } from "../types/shopItem";

export const shopItems: ShopItem[] = [
  {
    _id: {
      $oid: "65c5160b91ea1662c851c29b"
    },
    name: "Malinka",
    description: "Creamy ice cream with raspberry jam",
    price: 3.1,
    img: process.env.PUBLIC_URL + "/img/shop/item-1.png"
  },
  {
    _id: {
      $oid: "65c519dd91ea1662c851c29d"
    },
    name: "Pistachio",
    description: "Pistachio ice cream with chocolate pieces",
    price: 3.4,
    img: process.env.PUBLIC_URL + "/img/shop/item-2.png"
  },
  {
    _id: {
      $oid: "65c519dd91ea1662c851c29e"
    },
    name: "Blueberry",
    description: "Creme brulee with blueberry jam",
    price: 3.3,
    img: process.env.PUBLIC_URL + "/img/shop/item-3.png"
  },
  {
    _id: {
      $oid: "65c519dd91ea1662c851c29f"
    },
    name: "Bubble gum",
    description: "Vanilla ice cream with sweet sprinkles",
    price: 3.2,
    img: process.env.PUBLIC_URL + "/img/shop/item-4.png"
  },
  {
    _id: {
      $oid: "65c51b1e91ea1662c851c2a0"
    },
    name: "Blackberry",
    description: "Creamy ice cream with blackberry jam",
    price: 3.3,
    img: process.env.PUBLIC_URL + "/img/shop/item-5.png"
  },
  {
    _id: {
      $oid: "65c51b1e91ea1662c851c2a1"
    },
    name: "Banana",
    description: "Creamy ice cream with banana flavor",
    price: 3.4,
    img: process.env.PUBLIC_URL + "/img/shop/item-6.png"
  },
  {
    _id: {
      $oid: "65c51b1e91ea1662c851c2a2"
    },
    name: "Chocolate",
    description: "Classic chocolate ice cream",
    price: 2.7,
    img: process.env.PUBLIC_URL + "/img/shop/item-7.png"
  },
  {
    _id: {
      $oid: "65c51b1e91ea1662c851c2a3"
    },
    name: "Strawberry",
    description: "Creamy ice cream with strawberry flavor",
    price: 3,
    img: process.env.PUBLIC_URL + "/img/shop/item-8.png"
  },
  {
    _id: {
      $oid: "65c51b1e91ea1662c851c2a4"
    },
    name: "Lemon",
    description: "Refreshing lemon sorbet",
    price: 3.1,
    img: process.env.PUBLIC_URL + "/img/shop/item-9.png"
  },
  {
    _id: {
      $oid: "65c51b1e91ea1662c851c2a5"
    },
    name: "Menthol",
    description: "Creamy ice cream with menthol syrup",
    price: 3.2,
    img: process.env.PUBLIC_URL + "/img/shop/item-10.png"
  },
  {
    _id: {
      $oid: "65c51b1e91ea1662c851c2a6"
    },
    name: "Nut",
    description: "Pistachio ice cream with chocolate syrup",
    price: 3.6,
    img: process.env.PUBLIC_URL + "/img/shop/item-11.png"
  },
  {
    _id: {
      $oid: "65c51b1e91ea1662c851c2a7"
    },
    name: "Creme brulee",
    description: "Classic creme brulee",
    price: 2.8,
    img: process.env.PUBLIC_URL + "/img/shop/item-12.png"
  }
]
