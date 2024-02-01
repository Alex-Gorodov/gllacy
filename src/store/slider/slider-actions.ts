import { createAction } from "@reduxjs/toolkit";
import { AppRoute } from "../../const";

export const redirectToRoute = createAction<AppRoute>('page/redirectToRoute');

export const setActiveSlide = createAction<{activeSlide: number}>('slider/changeSlide');

export const setSliderMoving = createAction<{isMoving: boolean}>('slider/moveSlide');
