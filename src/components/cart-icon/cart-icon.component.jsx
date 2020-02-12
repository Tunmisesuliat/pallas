import React from 'react';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss';
import {connect} from 'react-redux';
import {toggleCartShow} from '../../redux/cart/cart.actions';

const Cart = ({toggleCartShow}) => {
    return (
        <div className='cart-icon' onClick={toggleCartShow}>
          <ShoppingIcon className='shopping-icon'/>
          <span className='item-count'>0</span>  
        </div>
    )
}
// const mapStateToProps = (cart) => ({
//     show: cart.show
// })

const mapDispatchToProps = dispatch =>({
    toggleCartShow : () => dispatch(toggleCartShow())
})
export default connect(null, mapDispatchToProps)(Cart);
