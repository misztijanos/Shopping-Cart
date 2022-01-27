import React from 'react'

import { useCart } from '../contexts/use-cart'

export default function Product({ product }) {
  const { addItem, removeItem, itemCount } = useCart()
  return (
    <div className="product">
      {/* image */}
      <img src={product.image_url} alt={product.name} />
      {/* name  */}
      <h3>{product.name}</h3>
      {/* buttons  */}

      <div className="product-buttons">
        <button className="remove" onClick={() => removeItem(product.sku)}>
          Remove
        </button>
        <button className="add" onClick={() => addItem(product.sku)}>
          Add to Cart({itemCount(product.sku)})
        </button>
      </div>
    </div>
  )
}
