import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product.id);
  };

  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;