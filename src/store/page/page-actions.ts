import { createAction } from "@reduxjs/toolkit";
import { IceCreamTypes, ShopItem } from "../../types/shopItem";

export const addToCart = createAction<{item: ShopItem}>('page/addToCart');

export const removeFromCart = createAction<{item: ShopItem}>('page/removeFromCart');

export const setCatalogType = createAction<{type: IceCreamTypes}>('page/setCatalogType');

export const toggleCart = createAction<{isOpened: boolean}>('page/toggleCart');

export const toggleMobileMenu = createAction<{isOpened: boolean}>('page/toggleMobileMenu');

export const toggleFeedbackForm = createAction<{isOpened: boolean}>('page/toggleFeedbackForm');

export const toggleSearch = createAction<{isOpened: boolean}>('page/toggleSearch');
