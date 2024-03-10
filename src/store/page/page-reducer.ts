import { createReducer } from "@reduxjs/toolkit";
import { PageState } from "../../types/state";
import { addToCart, removeFromCart } from "./page-actions";
import { shopItems } from "../../mocks/shopItems";

const initialState: PageState = {
  cartItems: [
    {...shopItems[0], amountInCart: 1},
    {...shopItems[3], amountInCart: 1.5},
  ], 
}

export const PageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const {item} = action.payload;
      state.cartItems.push(item);
    })
    .addCase(removeFromCart, (state, action) => {
      const {item} = action.payload;
      state.cartItems = state.cartItems.filter(cartItem => (cartItem._id.$oid !== item._id.$oid))
    })
})
