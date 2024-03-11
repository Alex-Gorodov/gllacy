import { createReducer } from "@reduxjs/toolkit";
import { PageState } from "../../types/state";
import { addToCart, removeFromCart, toggleCart } from "./page-actions";
import { shopItems } from "../../mocks/shopItems";

const initialState: PageState = {
  cartItems: [
    {...shopItems[0], amountInCart: 1},
    {...shopItems[3], amountInCart: 1.5},
  ],
  isCartOpened: false
}

export const PageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleCart, (state, action) => {
      const {isOpened} = action.payload;
      state.isCartOpened = isOpened;
    })
    .addCase(addToCart, (state, action) => {
      const { item } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(cartItem => cartItem._id.$oid === item._id.$oid);
    
      if (existingItemIndex !== -1) {
        const existingItem = state.cartItems[existingItemIndex];
        // Проверяем, что объект существует и имеет свойство amountInCart
        if (existingItem && existingItem.amountInCart !== undefined) {
          existingItem.amountInCart++;
        } else {
          // Возможно, что объект существует, но не имеет свойства amountInCart
          // В этом случае устанавливаем это свойство в 1
          state.cartItems[existingItemIndex].amountInCart = 1;
        }
      } else {
        // Такого товара нет в корзине, добавляем его
        const newItem = { ...item, amountInCart: 1 };
        state.cartItems.push(newItem);
      }
    })
    
    .addCase(removeFromCart, (state, action) => {
      const {item} = action.payload;
      state.cartItems = state.cartItems.filter(cartItem => (cartItem._id.$oid !== item._id.$oid))
    })
})
