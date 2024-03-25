import { IceCreamTypes } from "../const";
import { store } from "../store";
import { ShopItem } from "./shopItem";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type PageState = {
  catalog: ShopItem[];
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
