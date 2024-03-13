import React, { useState } from 'react';
// import ProductList from './ProductList';
// import ShoppingCart from './ShoppingCart';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1' },
    { id: 2, name: 'Product 2', description: 'Description 2' },
    { id: 3, name: 'Product 3', description: 'Description 3' },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    setCart([...cart, productToAdd]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="app">
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;