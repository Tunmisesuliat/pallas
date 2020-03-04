import React from 'react';
import './checkout-item.style.scss';

const CheckoutItem = ({cartItem: {name, imageUrl, price, quantity}}) => {
    return (
        <div className='checkout-item' >
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>${price}</span>
            <div className='remove-button'>&#10006;</div>

        </div>
    );
}
// mapDispatchToProps = dispatch => ({
//     addItemToCart: item => dispatch(addItemToCart(item))
// })
// mapStateToProps = (state) => ({
   
// })

export default CheckoutItem;