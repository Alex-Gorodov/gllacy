import { Middleware } from "@reduxjs/toolkit";
import { setActiveSlide, setSliderMoving } from "../slider/slider-actions";

export const delay: Middleware = (store) => (next) => (action) => {
  if (setActiveSlide.match(action)) {
    // Добавляем экшен setSliderMoving с задержкой 500 миллисекунд
    // setTimeout(() => {
      store.dispatch(setSliderMoving({ isMoving: true }));
      setTimeout(() => {
        store.dispatch(setSliderMoving({ isMoving: false }));
      }, 300);
    // }, 500);
  }

  return next(action);
};
