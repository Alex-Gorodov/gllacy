import { store } from "../store";
import { ShopItem } from "./shopItem";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type PageState = {
  // activeSlide: number;
  cartItems: ShopItem[];
}

export type SliderState = {
  activeSlide: number;
  isMoving: boolean;
}
