/* eslint-disable react/no-unknown-property */
// import {Link} from 'react-router-dom'

import {FaRupeeSign} from 'react-icons/fa'

import CartContext from '../../context/CartContext'

import './index.css'

const CartTotal = props => {
  const {orderPlaced} = props

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value

        let totalOrderCost = 0
        cartList.forEach(eachCartItem => {
          totalOrderCost += eachCartItem.cost * eachCartItem.quantity
        })
        const onClickPlaceOrder = () => {
          orderPlaced()
        }

        return (
          <>
            <hr className="cart-hr-line" />
            <div className="cart-total-container">
              <h1 className="total-text">Order Total:</h1>
              <div className="total-container">
                <p testid="total-price" className="total-price">
                  <FaRupeeSign size={18} /> {totalOrderCost}
                </p>
                <button
                  type="button"
                  className="order-button"
                  onClick={onClickPlaceOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartTotal
