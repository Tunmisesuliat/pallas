import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import {
  selectCartItemsCount,
  selectCartItems
} from "../../redux/cart/cart.selectors";
import { Link } from "react-router-dom";
import { toggleCartShow } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, dispatch }) => {
  console.log("LENGTH", cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.name} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <Link to="/checkout">
        <CustomButton onClick={() => dispatch(toggleCartShow())}> Go to Checkout</CustomButton>
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps, null)(CartDropdown);
