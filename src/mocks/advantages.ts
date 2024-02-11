import { ReactComponent as Cow } from "../img/icons/advantage-1.svg";

type Advantage = {
  description: string;
  image: string;
  id: number;
}

export const advantages: Advantage[] = [
  {
    id: 0,
    description: "All our ice cream is made in-house using modern equipment and time-tested technologies.",
    image: process.env.PUBLIC_URL + "/img/icons/advantages/advantage-1.svg"
  },
  {
    id: 1,
    description: "Ingredients are purchased only from verified farms with whom we are connected by long-term cooperation.",
    image: process.env.PUBLIC_URL + "/img/icons/advantages/advantage-2.svg"
  },
  {
    id: 2,
    description: "The highest quality cream and milk are used to make ice cream. All ingredients and additives are made from natural raw materials.",
    image: process.env.PUBLIC_URL + "/img/icons/advantages/advantage-3.svg"
  },
  {
    id: 3,
    description: "Our ice cream is delivered in a special thermal pack, which prevents the ice cream from melting and allows it to maintain its excellent taste.",
    image: process.env.PUBLIC_URL + "/img/icons/advantages/advantage-4.svg"
  },
]
