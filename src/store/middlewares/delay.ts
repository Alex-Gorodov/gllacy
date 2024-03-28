import { Middleware } from "@reduxjs/toolkit";
import { setActiveSlide, setSliderMoving } from "../slider/slider-actions";

export const delay: Middleware = (store) => (next) => (action) => {
  if (setActiveSlide.match(action)) {
      store.dispatch(setSliderMoving({ isMoving: true }));
      setTimeout(() => {
        store.dispatch(setSliderMoving({ isMoving: false }));
      }, 700);
  }

  return next(action);
};
