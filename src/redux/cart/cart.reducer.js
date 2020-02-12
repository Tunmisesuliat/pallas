import CartActionTypes from './cart.types'

const initial_state = {
    show:false
}
const CartReducer = (state = initial_state, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_SHOW:
            return{
                ...state,
                show : !state.show
            }
        default:
            return state;
    }
}

export default CartReducer;