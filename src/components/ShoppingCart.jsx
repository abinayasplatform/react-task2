import React from 'react';

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - 
            <button onClick={() => removeFromCart(item.id)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;