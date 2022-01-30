import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from '../redux/reducer'

//import { useCart } from '../contexts/use-cart'

export default function Product({ product }) {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    <div className="product">
      {/* image */}
      <img src={product.image_url} alt={product.name} />
      {/* name  */}
      <h3>{product.name}</h3>
      {/* buttons  */}

      <div className="product-buttons">
        <button
          className="remove"
          onClick={() => dispatch(removeItem(product.sku))}
        >
          Remove
        </button>
        <button
          className="add"
          onClick={() => {
            dispatch(addItem(product.sku))
          }}
        >
          Add to Cart({cart.filter((p) => p.sku === product.sku).length})
        </button>
      </div>
    </div>
  )
}
