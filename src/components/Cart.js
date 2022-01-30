import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

//import { useCart } from '../contexts/use-cart'
import products from '../products'

import { addItem, removeItem } from '../redux/reducer'

export default function Cart() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const totalPrice = cart.reduce(
    (partialSum, p) => partialSum + Number(p.price),
    0
  )
  const itemCount = (sku) => cart.filter((p) => p.sku === sku).length

  return (
    <div className="cart">
      {products.map((product) =>
        itemCount(product.sku) > 0 ? (
          <div className="cart-item" key={product.sku}>
            <img src={product.image_url} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <div className="cart-buttons">
                <button onClick={() => dispatch(removeItem(product.sku))}>
                  -
                </button>
                <button>{itemCount(product.sku)}</button>
                <button onClick={() => dispatch(addItem(product.sku))}>
                  +
                </button>
              </div>
            </div>
          </div>
        ) : null
      )}

      <div className="total">${totalPrice}</div>
    </div>
  )
}
