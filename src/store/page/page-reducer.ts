import { createReducer } from "@reduxjs/toolkit";
import { PageState } from "../../types/state";
import { addToCart, removeFromCart, setCatalogType, toggleCart, toggleMobileMenu, toggleFeedbackForm, toggleSearch, sortCatalog, filterByFat, filterByPrice, refreshCatalog } from "./page-actions";
import { shopItems } from "../../mocks/shopItems";
import { FatsAmount, IceCreamTypes, SortTypes } from "../../const";

const initialState: PageState = {
  catalog: shopItems,
  cartItems: [],
  catalogType: IceCreamTypes.All,
  isCartOpened: false,
  isMenuOpened: false,
  isFeedbackFormOpened: false,
  isSearchOpened: false,
}

export const PageReducer = createReducer(initialState, (builder) => {
  builder
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
    .addCase(toggleCart, (state, action) => {
      const {isOpened} = action.payload;
      state.isCartOpened = isOpened;
    })
    .addCase(toggleMobileMenu, (state, action) => {
      const {isOpened} = action.payload;
      state.isMenuOpened = isOpened;
    })
    .addCase(toggleFeedbackForm, (state, action) => {
      const {isOpened} = action.payload;
      state.isFeedbackFormOpened = isOpened;
    })
    .addCase(toggleSearch, (state, action) => {
      const {isOpened} = action.payload;
      state.isSearchOpened = isOpened;
    })
    .addCase(sortCatalog, (state, action) => {
      const { sortBy } = action.payload;
      switch (sortBy) {
        case SortTypes.Fats:
          state.catalog.sort((a, b) => a.fats - b.fats);
          break;
        case SortTypes.Price:
          state.catalog.sort((a, b) => a.price - b.price);
          break;
        default:
          state.catalog = shopItems;
          break;
      }
    })
    .addCase(filterByFat, (state, action) => {
      const { fat } = action.payload;
      switch (fat) {
        case FatsAmount.NoFats:
          state.catalog = shopItems
          state.catalog.length
          ?
            state.catalog = state.catalog.filter((item) => item.fats === FatsAmount.NoFats)
          :
            state.catalog = []
          break;
        case FatsAmount.Ten:
          state.catalog = shopItems
          state.catalog.length
          ?
            state.catalog = state.catalog.filter((item) => item.fats <= FatsAmount.Ten)
          :
            state.catalog = []
          break;
        case FatsAmount.Thirty:
          state.catalog = shopItems
          state.catalog.length
          ?
            state.catalog = state.catalog.filter((item) => item.fats <= FatsAmount.Thirty)
          :
            state.catalog = []
          break;
        case FatsAmount.More:
          state.catalog = shopItems
          state.catalog.length
          ?
            state.catalog = state.catalog.filter((item) => item.fats >= FatsAmount.More)
          :
            state.catalog = []
          break;
        default:
          state.catalog = shopItems;
      }
    })
    .addCase(filterByPrice, (state, action) => {
      const { min, max } = action.payload;
      state.catalog = 
        state.catalog.filter(item => item.price >= min / 10 && item.price <= max / 10).length
        ?
        state.catalog.filter(item => item.price >= min / 10 && item.price <= max / 10)
        :
        [];
    })
    .addCase(refreshCatalog, (state, action) => {
      const {min, max, fat, sorting} = action.payload;
      state.catalog = shopItems.filter(
        item => item.price >= min / 10 && item.price <= max / 10 && item.fats <= fat
      )
      sortCatalog({sortBy: sorting})
    })
})
