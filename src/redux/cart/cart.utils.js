export const AddItemToCart = (cartItems, newItem) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === newItem.id
  );

  if(existingCartItem){
    return cartItems.map(cartItem => 
        cartItem.id ===newItem.id ? 
        {...cartItem, quantity:cartItem.quantity+1} :
        cartItem
    )
  }
  else{
      return [...cartItems, {...newItem, quantity:1}]
  }
};
  