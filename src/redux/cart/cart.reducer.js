import CartActionTypes from './cart.types'
import {AddItemToCart} from './cart.utils'

const initial_state = {
    show:false,
    cartItems:[]
}
const CartReducer = (state = initial_state, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_SHOW:
            return{
                ...state,
                show : !state.show
            }
        case CartActionTypes.ADD_ITEM_TO_CART:
            return{
                ...state,
                cartItems:AddItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default CartReducer;