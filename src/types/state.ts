import { store } from "../store";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type PageState = {
  activeSlide: number;
}

export type SliderState = {
  activeSlide: number;
  isMoving: boolean;
}
