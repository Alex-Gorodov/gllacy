import { SliderReducer } from "./slider/slider-reducer";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  slider: SliderReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
