import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import CartIcon from '../supermarket.svg'
import useOnClickOutside from 'use-onclickoutside'

import Cart from './Cart'

export default function Header() {
  const [isOpen, setIsOpen] = useState(null)

  const cart = useSelector((state) => state.cart)

  const modalRef = useRef(null)
  useOnClickOutside(modalRef, () => setIsOpen(false))

  return (
    <header>
      <div className="container">
        <div className="cart-button">
          <button>
            <img
              src={CartIcon}
              width="30"
              alt="cart"
              onClick={() => {
                setIsOpen(true)
              }}
            />
            ({cart.length})
          </button>

          <div
            className="cart-modal"
            ref={modalRef}
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            <Cart />
          </div>
        </div>
      </div>
    </header>
  )
}
