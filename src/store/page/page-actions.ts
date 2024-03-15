import { createAction } from "@reduxjs/toolkit";
import { IceCreamTypes, ShopItem } from "../../types/shopItem";

export const addToCart = createAction<{item: ShopItem}>('page/addToCart');

export const removeFromCart = createAction<{item: ShopItem}>('page/removeFromCart');

export const toggleCart = createAction<{isOpened: boolean}>('page/toggleCart');

export const setCatalogType = createAction<{type: IceCreamTypes | null}>('page/setCatalogType');

export const toggleMobileMenu = createAction<{isOpened: boolean}>('page/toggleMobileMenu');
