import { setActiveSlide, setSliderMoving } from "./slider-actions";
import { createReducer } from "@reduxjs/toolkit";
import { sliderItems } from "../../mocks/slider";
import { SliderState } from "../../types/state";
import { BackgroundColors } from "../../const";

const initialState: SliderState = {
  activeSlide: 0,
  isMoving: false,
}

export const SliderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveSlide, (state, action) => {
      const {activeSlide} = action.payload;
      if (activeSlide < 0)
        state.activeSlide = sliderItems.length - 1
      else if (activeSlide < sliderItems.length && activeSlide > 0)
        state.activeSlide = activeSlide
      else
        state.activeSlide = 0
      switch (state.activeSlide) {
        case 0:
          document.body.style.backgroundColor = BackgroundColors.firstSlide
          break;
        case 1:
          document.body.style.backgroundColor = BackgroundColors.secondSlide
          break;
        case 2:
          document.body.style.backgroundColor = BackgroundColors.thirdSlide
          break;
        default:
          break;
      }
    })
    .addCase(setSliderMoving, (state, action) => {
      const {isMoving} = action.payload;
      state.isMoving = isMoving;
    })
})
