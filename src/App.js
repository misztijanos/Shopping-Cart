import React from 'react'
import Header from './components/Header'
import Product from './components/Product'
import products from './products'
import './App.css'
import { CartProvider } from './contexts/use-cart'

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        {/* header */}
        <Header />

        <main>
          <div className="products-list">
            {products.map((product) => (
              <Product product={product} key={product.sku} />
            ))}
          </div>
        </main>
      </div>
    </CartProvider>
  )
}
