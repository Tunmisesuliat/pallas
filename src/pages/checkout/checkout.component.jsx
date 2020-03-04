import React from "react";
import "./checkout.style.scss";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartPriceTotal
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems, cartPriceTotal }) => {
  console.log("TOTAL", cartPriceTotal);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      
        {cartItems.map(cartItem => (
          <CheckoutItem cartItem={cartItem} />
        ))}
      <div className='total'>${cartPriceTotal}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartPriceTotal: selectCartPriceTotal
});

export default connect(mapStateToProps, null)(CheckoutPage);
