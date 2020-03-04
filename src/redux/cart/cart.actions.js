import CartActionTypes from './cart.types';

export const toggleCartShow = () => ({
    type: CartActionTypes.TOGGLE_CART_SHOW,

})

export const addItemToCart = item => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
})