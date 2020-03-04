import React from "react";
import "./collection-item.style.scss";
import Button from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItemToCart} from '../../redux/cart/cart.actions';
const CollectionItem = ({item, addItemToCart}) => {
  const {imageUrl,name, price} = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
      </div>
      <Button onClick = {()=> addItemToCart(item)} inverted>Add to Cart</Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
