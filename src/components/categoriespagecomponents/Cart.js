// src/components/categoriespagecomponents/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/Cartslice';
import { useNavigate } from 'react-router-dom';

const Cart = ({handleCloseDrawer}) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to delete an item from the cart using its id
  const handleDelete = (id) => {
    console.log(id)
    dispatch(removeFromCart(id));
  };

  // Ask user if they want to add more items; if yes, navigate back
  const handleAddMore = () => {
    const userWantsMore = window.confirm("Do you want to add more items to your cart?");
    if (userWantsMore) {
        handleCloseDrawer();
    //   navigate(-1); // This goes back to the previous page
    navigate("/category")
    }
  };

  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="border-b py-2 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <span className="font-semibold">{item.title}</span>
                    <div>₹{item.price}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button
              onClick={handleAddMore}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add More Items
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;


// const Cart = ({ cart, setCart, onAddToCart }) => {
//     // Handle remove from cart
//     const handleRemoveFromCart = (productToRemove) => {
//       setCart(cart.filter(product => product.title !== productToRemove.title));
//     };
  
//     // Ensure cart is an array to avoid errors
//     const safeCart = Array.isArray(cart) ? cart : [];
  
//     return (
//       <div>
//         <h2>Shopping Cart</h2>
  
//         {safeCart.length === 0 ? (
//           <p>Your cart is empty!</p>
//         ) : (
//           <div>
//             {safeCart.map((product, index) => (
//               <div key={index} className="cart-item">
//                 <img src={product.image} alt={product.title} />
//                 <h3>{product.title}</h3>
//                 <p>₹{product.price}</p>
//                 <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
//               </div>
//             ))}
//           </div>
//         )}
  
//         {/* Example Product Listing */}
//         <h3>Products</h3>
//         <div className="product-list">
//           <div className="product-card" onClick={() => onAddToCart({ title: 'Product 1', price: 100, image: 'product1.jpg', description: 'Product 1 Description' })}>
//             <img src="product1.jpg" alt="Product 1" />
//             <p>Product 1 - ₹100</p>
//           </div>
//           <div className="product-card" onClick={() => onAddToCart({ title: 'Product 2', price: 200, image: 'product2.jpg', description: 'Product 2 Description' })}>
//             <img src="product2.jpg" alt="Product 2" />
//             <p>Product 2 - ₹200</p>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Cart;

