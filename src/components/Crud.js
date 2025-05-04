// src/components/Crud.js
import React, { useState, useEffect } from "react";
import TrendingDownTwoToneIcon from "@mui/icons-material/TrendingDownTwoTone";
import { categories, Products } from "../utils/CategoriesData";
import ProductDetails from "./categoriespagecomponents/ProductDetails"; 

const Crud = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // New state for modal:
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);

  useEffect(() => {
    console.log(selectedProduct)
    console.log("Selected Category:", selectedCategory);
    console.log("Unique product categories:", [
      ...new Set(Products.map((p) => p.categoryName)),
    ]);
  }, [selectedCategory,selectedProduct]);

  const filteredProducts = selectedCategory
    ? Products.filter((p) => p.categoryName === selectedCategory)
    : Products;

  // Open modal just like in CategoriesPage:
  const openProductDetails = (product) => {
    // ensure shape matches what ProductDetails expects:
    setSelectedProduct({
      ...product,
      images: product.images || [product.image],
      itemsUsed: product.itemsUsed || [],
    });
    setIsProductDetailsOpen(true);
  };

  const closeProductDetails = () => {
    setIsProductDetailsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap gap-4 my-20">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center w-40 md:w-52"
          >
            <button
              onClick={() => setSelectedCategory(category.name)}
              className="relative border-2 border-black flex items-center justify-center text-lg w-32 h-32 md:w-36 md:h-36 rounded-full shadow-2xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-3xl"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 object-cover w-full h-full opacity-80 transition-opacity duration-300 ease-in-out"
              />
            </button>
            <span
              className="mt-2 text-center text-xl font-semibold italic text-black"
              style={{ fontFamily: "Playfair Display" }}
            >
              {category.name}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {filteredProducts.map((product) => (
            <div
              key={product.productId}
              onClick={() => openProductDetails(product)}
              className="bg-white p-6 scale-100 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.productName}
                className="w-40 h-40 object-cover mx-auto rounded-lg transition-transform duration-300 hover:scale-110"
              />
              <p className="mt-2 text-sm font-semibold text-gray-800">
                {product.productName}
              </p>
              <div className="mt-4 flex justify-center items-center">
                <p className="text-black font-bold mr-4">
                  ₹{product.discountPrice}
                </p>
                <p className="text-gray-500 line-through mr-4">
                  ₹{product.originalPrice}
                </p>
                <div
                  className="text-center rounded-l px-3 py-1 text-[0.8125rem] font-semibold bg-gradient-to-r from-blue-500 to-[#2136d4] text-white"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
                    maxWidth: "90px",
                  }}
                >
                  {product.discountPercentage}% off
                </div>
              </div>
              <button className="mt-6 px-6 py-3 h-10 w-70 bg-blue-100 text-blue-500 rounded-full font-small relative overflow-hidden transition-all duration-300 group hover:bg-blue-200">
                <style>
                  {`
                    @keyframes slideUp {
                      0% { transform: translateY(100%); opacity: 0; }
                      50% { transform: translateY(0); opacity: 1; }
                      100% { transform: translateY(100%); opacity: 0; }
                    }
                    .animate-slide-up { animation: slideUp 2s ease-in-out infinite; }
                  `}
                </style>
                <span className="absolute left-3 transform -translate-y-1/2 text-blue-500 text-sm font-bold animate-slide-up">
                  ₹{product.discountPrice}
                </span>
                <span className="relative z-10 ml-14 font-bold text-sm">
                  Login to <span>drop</span>
                  <span className="inline-block animate-bounce">
                    <TrendingDownTwoToneIcon />
                  </span>
                  <span className="ml-2 font-bold text-sm">price</span>
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ——— ProductDetails Modal ——— */}
      {isProductDetailsOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 overflow-y-hidden">
          <ProductDetails
            product={selectedProduct}
            onClose={closeProductDetails}
            // relatedProducts={filteredProducts.filter(
            //   (p) => p.productId !== selectedProduct.productId
            // )}
            relatedProducts={filteredProducts
              .filter(p => p.productId !== selectedProduct.productId)
              .slice(0, 4)  // ← only the first 4
            }
            onSelectProduct={(newProduct) => {
              // swap into the modal
              openProductDetails(newProduct);
            }}
          />
        </div>
      )}
    </>
  );
};

export default Crud;







// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import TrendingDownTwoToneIcon from "@mui/icons-material/TrendingDownTwoTone";
// import { categories, Products } from "../utils/CategoriesData";
// import { useEffect } from "react";

// const Crud = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
// useEffect(() => {
//   console.log(selectedCategory)
//     // console.log("All product categories:", Products.map(p => p.categoryName));
//     console.log("Unique product categories:", [...new Set(Products.map(p => p.categoryName))]);

// }, [selectedCategory])

//   // Filter products based on selected category
//   const filteredProducts = selectedCategory
//     ? Products.filter((product) => product.categoryName === selectedCategory)
//     : Products;

//   return (
//     <>
//       <div className="flex justify-center flex-wrap gap-4 my-20">
//         {categories.map((category) => (
//           <div
//             key={category.name}
//             className="flex flex-col items-center w-40 md:w-52"
//           >
//             <button
//               onClick={() => setSelectedCategory(category.name)}
//               className="relative border-2 border-black flex items-center justify-center text-lg w-32 h-32 md:w-36 md:h-36 rounded-full shadow-2xl overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl"
//             >
//               <img
//                 src={category.image}
//                 alt={category.name}
//                 className="absolute inset-0 object-cover w-full h-full opacity-80 transition duration-300 ease-in-out"
//               />
//             </button>
//             <span
//               className="mt-2 text-center text-xl font-semibold italic text-black"
//               style={{ fontFamily: "Playfair Display" }}
//             >
//               {category.name}
//             </span>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center items-center bg-gray-100">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.productId}
//               className="bg-white p-6 scale-90 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//             >
//               <img
//                 src={product.image}
//                 alt={product.productName}
//                 className="w-40 h-40 object-cover mx-auto rounded-lg transition-transform duration-300 hover:scale-110"
//               />
//               <p className="mt-2 text-sm font-semibold text-gray-800">
//                 {product.productName}
//               </p>
//               <div className="mt-4 flex justify-center items-center">
//                 <p className="text-black font-bold mr-4">₹{product.discountPrice}</p>
//                 <p className="text-gray-500 line-through mr-4">₹{product.originalPrice}</p>
//                 <div
//                   className="text-center rounded-l px-3 py-1 text-[0.8125rem] font-semibold bg-gradient-to-r from-blue-500 to-[#2136d4] text-white"
//                   style={{
//                     clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
//                     maxWidth: "90px",
//                   }}
//                 >
//                   {product.discountPercentage}% off
//                 </div>
//               </div>
//               <button className="mt-6 px-6 py-3 h-10 w-70 bg-blue-100 text-blue-500 rounded-full font-small relative overflow-hidden transition-all duration-300 group">
//                 <motion.span
//                   className="text-blue-500 text-sm font-bold ml-3 absolute left-0"
//                   initial={{ y: "100%" }}
//                   animate={{ y: "0%" }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 100,
//                     damping: 25,
//                     duration: 1,
//                     repeat: Infinity,
//                   }}
//                 >
//                   ₹{product.discountPrice}
//                 </motion.span>
//                 <span className="relative z-10 ml-14  font-bold text-sm ">
//                   Login to <span>drop</span>
//                   <motion.span
//                     className="text-blue-500 inline-block"
//                     animate={{ y: [0, -5, 0] }}
//                     transition={{
//                       repeat: Infinity,
//                       repeatType: "reverse",
//                       duration: 0.6,
//                       ease: "easeInOut",
//                     }}
//                   >
//                     <TrendingDownTwoToneIcon />
//                   </motion.span>
//                   <span className="ml-2 font-bold text-sm">price</span>
//                 </span>
//                 <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Crud;
