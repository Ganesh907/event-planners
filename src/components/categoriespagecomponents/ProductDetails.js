import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Cartslice';
import { Drawer, Button } from '@mui/material';
import Cart from './Cart';  // Assuming you have a Cart component
import { useEffect } from 'react';

const ProductDetails = ({ product, onClose, relatedProducts, onSelectProduct }) => {
  useEffect(() => {
    // Scroll to top when the component is mounted or updated
    window.scrollTo(0, 0);
  }, []);

  // For testing, provide dummy data if product is undefined.
  const dummyProduct = product || {
    id: 1,
    title: "Sample Product",
    price: 299,
    description: "This is a sample product description.",
    images: [
      "https://via.placeholder.com/300?text=Image+1",
      "https://via.placeholder.com/300?text=Image+2"
    ],
    itemsUsed: ["Item 1", "Item 2", "Item 3"]
  };

  const dummyRelated = relatedProducts || [];

  const [selectedImage, setSelectedImage] = useState(dummyProduct.images[0]);
  const [drawerOpen, setDrawerOpen] = useState(false);  // State to control drawer visibility
  const dispatch = useDispatch();

  // Add to cart handler that opens the drawer and dispatches the action
  const handleAddToCartClick = () => {
    console.log('Adding to cart:', dummyProduct);
    dispatch(addToCart({
      id: dummyProduct.id,
      title: dummyProduct.title,
      price: dummyProduct.price,
      image: selectedImage,
    }));
    setDrawerOpen(true); // Open the drawer after adding to cart
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false); // Close the drawer
    onClose();
  };

  return (
    <div className="p-8 w-full md:w-4/5 lg:w-3/4 mx-auto scale-90 bg-white rounded-lg shadow-2xl relative overflow-hidden">
      {/* Close Button */}
      <button
        className="text-gray-600 hover:text-gray-900 transition-colors duration-300 absolute top-4 right-4"
        onClick={onClose}
      >
        <span className="text-2xl font-bold">&times;</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="flex flex-col">
          <div className="main-image mb-4">
            <img
              // src={selectedImage}
              src={dummyProduct.images[0]}
              alt={dummyProduct.title}
              className="w-full h-80 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="thumbnails flex space-x-2 overflow-x-auto">
            {dummyProduct.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg shadow-sm cursor-pointer hover:opacity-80 transition-opacity duration-300 ${image === selectedImage ? 'ring-2 ring-indigo-500' : ''}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="product-info flex flex-col justify-between">
          {/* <h2 className="text-3xl font-bold text-gray-900 mb-2">{dummyProduct.title}</h2> */}
          {/* <h2 className="text-3xl font-bold text-gray-900 mb-2">{dummyProduct.productName}</h2> */}
          <h2 className="text-2xl font-bold text-blue-500 ">{dummyProduct.productName}</h2>
          {/* <div className="text-2xl font-semibold text-[#9c27b0] mb-4">{`₹${dummyProduct.price}`}</div> */}
          <div className="text-2xl font-semibold text-black">{`₹${dummyProduct.discountPrice}`}</div>
          <p className="text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold">Description: </span>
            {dummyProduct.description}
          </p>

          {/* List of Items Used */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Items Used:</h3>
            <ul className="list-disc pl-5">
              {dummyProduct.itemsUsed.length > 0 ? (
                dummyProduct.itemsUsed.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))
              ) : (
                <li className="text-gray-700">No items listed.</li>
              )}
            </ul>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCartClick}
            className="w-full md:w-1/2 bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Related Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dummyRelated.length > 0 ? (
            dummyRelated.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => onSelectProduct && onSelectProduct(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  {/* <h4 className="text-lg font-semibold text-[#9c27b0] mb-1">{item.title}</h4> */}
                  <h4 className="text-md font-semibold text-blue-500 mb-1">{item.productName}</h4>
                  {/* <h4 className="text-lg font-semibold text-[#9c27b0] mb-1">{item.productName}</h4> */}
                  {/* <p className="text-gray-700 mb-2">{`₹${item.price}`}</p> */}
                  <p className="text-gray-700 mb-2">{`₹${item.discountPrice}`}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">No related products available.</p>
          )}
        </div>
      </div>

      {/* MUI Drawer for Cart */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleCloseDrawer}
        sx={{ width: 350, flexShrink: 0 }}
      >
           <div className='flex m-3 justify-end'>
           <Button onClick={handleCloseDrawer} className="mt-4" variant="contained" color="secondary">
            Close
          </Button>
           </div>
           
        <div style={{ width: 500, padding: 20 }}>
          <Cart handleCloseDrawer={handleCloseDrawer} />  {/* Your Cart component content here */}
       
        </div>
      </Drawer>
    </div>
  );
};

export default ProductDetails;





// import React, { useState } from 'react';

// const ProductDetails = ({ product, onClose, relatedProducts, onSelectProduct, onAddToCart }) => {
//   // Select the first image initially
//   const [selectedImage, setSelectedImage] = useState(product?.images[0]);

//   if (!product) return null; // Ensure the product exists

//   // Handle thumbnail click
//   const handleThumbnailClick = (image) => {
//     setSelectedImage(image);
//   };

//   // Handle Add to Cart Button Click
//   const handleAddToCartClick = () => {
//     onAddToCart(product); // Add product to cart via the parent function
//   };

//   return (
//     <div className="p-8 w-full md:w-4/5 lg:w-3/4 mx-auto bg-white rounded-lg shadow-2xl relative">
//       <button
//         className="text-gray-600 hover:text-gray-900 transition-colors duration-300 absolute top-4 right-4"
//         onClick={onClose}
//       >
//         <span className="text-2xl font-bold">&times;</span>
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="flex flex-col">
//           <div className="main-image mb-4">
//             <img
//               src={selectedImage}
//               alt={product.title}
//               className="w-full h-80 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
//             />
//           </div>

//           <div className="thumbnails flex space-x-2 overflow-x-auto">
//             {product.images && product.images.length > 0 ? (
//               product.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Thumbnail ${index}`}
//                   className={`w-20 h-20 object-cover rounded-lg shadow-sm cursor-pointer hover:opacity-80 transition-opacity duration-300 ${image === selectedImage ? 'ring-2 ring-indigo-500' : ''}`}
//                   onClick={() => handleThumbnailClick(image)}
//                 />
//               ))
//             ) : (
//               <p>No images available</p>
//             )}
//           </div>
//         </div>

//         <div className="product-info flex flex-col justify-between">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h2>
//           <div className="text-2xl font-semibold text-[#9c27b0] mb-4">{`₹${product.price}`}</div>
//           <p className="text-gray-700 leading-relaxed mb-4"><span className="font-semibold">Description: </span>{product.description}</p>

//           <div className="mb-6">
//             <h3 className="text-xl font-semibold mb-2">Items Used:</h3>
//             <ul className="list-disc pl-5">
//               {product.itemsUsed && product.itemsUsed.length > 0 ? (
//                 product.itemsUsed.map((item, index) => (
//                   <li key={index} className="text-gray-700">{item}</li>
//                 ))
//               ) : (
//                 <li className="text-gray-700">No items listed.</li>
//               )}
//             </ul>
//           </div>

//           <div className="flex space-x-4">
//             <button
//               onClick={handleAddToCartClick} // Add to cart on button click
//               className="w-full md:w-1/2 bg-yellow-500 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Related Products Section */}
//       <div className="mt-8">
//         <h3 className="text-2xl font-semibold mb-4">Related Products</h3>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {relatedProducts.length > 0 ? (
//             relatedProducts.map((item) => (
//               <div
//                 key={item.title}
//                 className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//                 onClick={() => onSelectProduct(item)} // Handle click on related product
//               >
//                 <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-t-lg" />
//                 <div className="p-4">
//                   <h4 className="text-lg font-semibold text-[#9c27b0] mb-1">{item.title}</h4>
//                   <p className="text-gray-700 mb-2">{`₹${item.price}`}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="col-span-full text-center text-gray-600">No related products available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

