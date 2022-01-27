import React from 'react'

import { useCart } from '../contexts/use-cart'
import products from '../products'

export default function Cart() {
  const { itemCount, addItem, removeItem, totalPrice } = useCart()
  return (
    <div className="cart">
      {products.map((product) =>
        itemCount(product.sku) > 0 ? (
          <div className="cart-item" key={product.sku}>
            <img src={product.image_url} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <div className="cart-buttons">
                <button onClick={() => removeItem(product.sku)}>-</button>
                <button>{itemCount(product.sku)}</button>
                <button onClick={() => addItem(product.sku)}>+</button>
              </div>
            </div>
          </div>
        ) : null
      )}

      <div className="total">${totalPrice}</div>
    </div>
  )
}
