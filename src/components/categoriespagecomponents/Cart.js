const Cart = ({ cart, setCart, onAddToCart }) => {
    // Handle remove from cart
    const handleRemoveFromCart = (productToRemove) => {
      setCart(cart.filter(product => product.title !== productToRemove.title));
    };
  
    // Ensure cart is an array to avoid errors
    const safeCart = Array.isArray(cart) ? cart : [];
  
    return (
      <div>
        <h2>Shopping Cart</h2>
  
        {safeCart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div>
            {safeCart.map((product, index) => (
              <div key={index} className="cart-item">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>₹{product.price}</p>
                <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
              </div>
            ))}
          </div>
        )}
  
        {/* Example Product Listing */}
        <h3>Products</h3>
        <div className="product-list">
          <div className="product-card" onClick={() => onAddToCart({ title: 'Product 1', price: 100, image: 'product1.jpg', description: 'Product 1 Description' })}>
            <img src="product1.jpg" alt="Product 1" />
            <p>Product 1 - ₹100</p>
          </div>
          <div className="product-card" onClick={() => onAddToCart({ title: 'Product 2', price: 200, image: 'product2.jpg', description: 'Product 2 Description' })}>
            <img src="product2.jpg" alt="Product 2" />
            <p>Product 2 - ₹200</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cart;
  