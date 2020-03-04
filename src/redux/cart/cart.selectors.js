import { createSelector } from "reselect";

// input selector
const selectCart = state => state.cart;

//output selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartShow = createSelector([selectCart], cart => cart.show);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (AccumulatedQuantity, cartItem) =>
        AccumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartPriceTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (AccumulatedPrice, cartItem) =>
        AccumulatedPrice + (cartItem.price * cartItem.quantity),
      0
    )
);
