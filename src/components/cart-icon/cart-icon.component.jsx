import React from 'react';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss';
import {connect} from 'react-redux';
import {toggleCartShow} from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

const Cart = ({toggleCartShow, count}) => {
    return (
        <div className='cart-icon' onClick={toggleCartShow}>
          <ShoppingIcon className='shopping-icon'/>
          <span className='item-count'>{count}</span>  
        </div>
    )
}
// const mapStateToProps = (cart) => ({
//     show: cart.show
// })
const mapStateToProps = state =>({
    count: selectCartItemsCount(state)
})
const mapDispatchToProps = dispatch =>({
    toggleCartShow : () => dispatch(toggleCartShow())
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
