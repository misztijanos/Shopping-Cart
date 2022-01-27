import { createContext, useContext, useReducer } from 'react'
import products from '../products'
const CartContext = createContext()

export const useCart = () => useContext(CartContext)

const initialState = { cart: [] }

function reducer(state, { type, payload }) {
  switch (type) {
    case 'ADD':
      return {
        ...state,
        cart: [...state.cart, products.find((p) => p.sku === payload)],
      }
    case 'REMOVE':
      const newCart = [...state.cart]
      const index = newCart.findIndex((p) => p.sku === payload)
      if (index > -1) {
        newCart.splice(index, 1)
      }
      return { ...state, cart: newCart }
    default:
      return { ...state }
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addItem = (sku) => dispatch({ type: 'ADD', payload: sku })
  const removeItem = (sku) => dispatch({ type: 'REMOVE', payload: sku })
  const itemCount = (sku) => state.cart.filter((p) => p.sku === sku).length
  const totalPrice = state.cart.reduce(
    (partialSum, p) => partialSum + Number(p.price),
    0
  )

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        itemCount,
        cart: state.cart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
