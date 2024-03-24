import { store } from "../store";
import { IceCreamTypes, ShopItem } from "./shopItem";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type PageState = {
  cartItems: ShopItem[];
  catalogType: IceCreamTypes;
  isCartOpened: boolean;
  isMenuOpened: boolean;
  isFeedbackFormOpened: boolean;
  isSearchOpened: boolean;
}

export type SliderState = {
  activeSlide: number;
  isMoving: boolean;
}
