import React from 'react'
import Header from './components/Header'
import Product from './components/Product'
import products from './products'
import './App.css'
//import { CartProvider } from './contexts/use-cart'
import store from './redux/store'
import { Provider } from 'react-redux'
export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}
