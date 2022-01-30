import products from '../products'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(products.find((p) => p.sku === action.payload))
    },
    removeItem(state, action) {
      const index = state.cart.findIndex((p) => p.sku === action.payload)
      if (index > -1) {
        state.cart.splice(index, 1)
      }
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
