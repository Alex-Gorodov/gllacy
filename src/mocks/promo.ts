import { Promo } from "../types/promo"

export const promoItems: Promo[] = [
  {
    id: 0,
    title: "Raspberries for free!",
    description: "When you purchase 2 kg of any fruit ice cream, we will add a jar of raspberry jam to your order for free.",
    image: process.env.PUBLIC_URL + "/img/promo/promo-1.png",
  },
  {
    id: 1,
    title: "Free marshmallows!",
    description: "When you purchase 2 kg of ice cream, we will add a package of soft marshmallows to your order completely free of charge.",
    image: process.env.PUBLIC_URL + "/img/promo/promo-2.png",
  },
]
