import { createReducer } from "@reduxjs/toolkit";
import { PageState } from "../../types/state";
import { addToCart, removeFromCart, setCatalogType, toggleCart, toggleMobileMenu } from "./page-actions";
import { shopItems } from "../../mocks/shopItems";
import { IceCreamTypes } from "../../types/shopItem";

const initialState: PageState = {
  cartItems: [
    {...shopItems[0], amountInCart: 1},
    {...shopItems[3], amountInCart: 1.5},
  ],
  isCartOpened: false,
  catalogType: null,
  isMenuOpened: false,
}

export const PageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleCart, (state, action) => {
      const {isOpened} = action.payload;
      state.isCartOpened = isOpened;
    })
    .addCase(addToCart, (state, action) => {
      const { item } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === item.id);
    
      if (existingItemIndex !== -1) {
        const existingItem = state.cartItems[existingItemIndex];
        if (existingItem && existingItem.amountInCart !== undefined) {
          existingItem.amountInCart += 0.5;
        } else {
          state.cartItems[existingItemIndex].amountInCart = 0.5;
        }
      } else {
        const newItem = { ...item, amountInCart: 0.5 };
        state.cartItems.push(newItem);
      }
    })
    .addCase(removeFromCart, (state, action) => {
      const {item} = action.payload;
      state.cartItems = state.cartItems.filter(cartItem => (cartItem.id !== item.id))
    })
    .addCase(setCatalogType, (state, action) => {
      const {type} = action.payload;
      state.catalogType = type;
    })
    .addCase(toggleMobileMenu, (state, action) => {
      const {isOpened} = action.payload;
      state.isMenuOpened = isOpened;
    })
})
