import { createAction } from "@reduxjs/toolkit";
import { ShopItem } from "../../types/shopItem";

export const addToCart = createAction<{item: ShopItem}>('page/addToCart');

export const removeFromCart = createAction<{item: ShopItem}>('page/removeFromCart');

export const toggleCart = createAction<{isOpened: boolean}>('page/toggleCart');