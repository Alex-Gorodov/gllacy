import { Slide } from "../types/slide";

export const sliderItems: Slide[] = [
  {
    id: 0,
    title: "Tender ice cream with strawberry jam.",
    description: "Natural ice cream made from fresh cream and milk with delicious strawberry jam is the perfect dessert for the whole family.",
    image: process.env.PUBLIC_URL + "/img/slider/slide-1"
  },
  {
    id: 1,
    title: "Banana-flavored creamy ice cream.",
    description: "Creamy ice cream with a vibrant banana flavor will bring you freshness and delight even on the hottest summer day.",
    image: process.env.PUBLIC_URL + "/img/slider/slide-2"
  },
  {
    id: 2,
    title: "Caramel-flavored caramel ice cream with marshmallow.",
    description: "An unusual sweet dessert with caramel topping and marshmallow pieces will win the hearts of sweet-tooths of all ages.",
    image: process.env.PUBLIC_URL + "/img/slider/slide-3"
  },
]
