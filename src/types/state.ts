import { store } from "../store";
import { IceCreamTypes, ShopItem } from "./shopItem";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type PageState = {
  isCartOpened: boolean;
  cartItems: ShopItem[];
  catalogType: IceCreamTypes;
}

export type SliderState = {
  activeSlide: number;
  isMoving: boolean;
}
