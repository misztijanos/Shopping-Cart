import products from '../products'
const initialState = {
  cart: [],
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD': {
      return {
        ...state,
        cart: [...state.cart, products.find((p) => p.sku === action.payload)],
      }
    }
    case 'REMOVE': {
      const newCart = [...state.cart]
      const index = newCart.findIndex((p) => p.sku === action.payload)
      if (index > -1) {
        newCart.splice(index, 1)
      }
      return { ...state, cart: newCart }
    }

    default:
      return state
  }
}
