import { IceCreamTypes } from "../const";

export type ShopItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  fats: number;
  type: IceCreamTypes;
  img: string;
  amountInCart?: number;
}
