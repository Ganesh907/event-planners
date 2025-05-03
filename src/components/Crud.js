import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import TrendingDownTwoToneIcon from "@mui/icons-material/TrendingDownTwoTone";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import { useNavigate } from "react-router";
// import CategoryCard from "./CategoryCard ";
// import TestLocalStorage from "./TestS";

const Crud = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "" });
  const [placeholder, setPlaceholder] = useState("Birthday"); // Initial text to remove
  const [fixedText] = useState("Search for "); // Fixed text
  const [selectedValue, setSelectedValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [blink, setBlink] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [products, setProducts] = useState([]);

  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Static category list with images
  //   const categories = [
  //     { name: "Birthday", image: "https://img.ebonow.com/Products/CLA612.webp" },
  //     {
  //       name: "Anniversary",
  //       image: "https://img.ebonow.com/Products/CLA612.webp",
  //     },
  //     {
  //       name: "Baby Shower",
  //       image: "https://img.ebonow.com/Products/CLA612.webp",
  //     },
  //     {
  //       name: "Ganapati Decoration",
  //       image: "https://img.ebonow.com/Products/CLA612.webp",
  //     },
  //   ];

  const bentoItems = [
    {
      id: 1,
      image: "https://source.unsplash.com/random/600x400?nature",
      span: "col-span-2 row-span-2", // large tile
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/600x400?technology",
      span: "col-span-1 row-span-1",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/random/600x400?city",
      span: "col-span-1 row-span-1",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/random/600x400?ocean",
      span: "col-span-2 row-span-1",
    },
    {
      id: 5,
      image: "https://source.unsplash.com/random/600x400?forest",
      span: "col-span-1 row-span-1",
    },
    {
      id: 6,
      image: "https://source.unsplash.com/random/600x400?space",
      span: "col-span-1 row-span-1",
    },

    {
      id: 1,
      image: "https://source.unsplash.com/random/600x400?nature",
      span: "col-span-2 row-span-2", // large tile
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/600x400?technology",
      span: "col-span-1 row-span-1",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/random/600x400?city",
      span: "col-span-1 row-span-1",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/random/600x400?ocean",
      span: "col-span-2 row-span-1",
    },
    {
      id: 5,
      image: "https://source.unsplash.com/random/600x400?forest",
      span: "col-span-1 row-span-1",
    },
    {
      id: 6,
      image: "https://source.unsplash.com/random/600x400?space",
      span: "col-span-1 row-span-1",
    },

    {
      id: 1,
      image: "https://source.unsplash.com/random/600x400?nature",
      span: "col-span-2 row-span-2", // large tile
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/600x400?technology",
      span: "col-span-1 row-span-1",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/random/600x400?city",
      span: "col-span-1 row-span-1",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/random/600x400?ocean",
      span: "col-span-2 row-span-1",
    },
    {
      id: 5,
      image: "https://source.unsplash.com/random/600x400?forest",
      span: "col-span-1 row-span-1",
    },
    {
      id: 6,
      image: "https://source.unsplash.com/random/600x400?space",
      span: "col-span-1 row-span-1",
    },

    {
      id: 1,
      image: "https://source.unsplash.com/random/600x400?nature",
      span: "col-span-2 row-span-2", // large tile
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/600x400?technology",
      span: "col-span-1 row-span-1",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/random/600x400?city",
      span: "col-span-1 row-span-1",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/random/600x400?ocean",
      span: "col-span-2 row-span-1",
    },
    {
      id: 5,
      image: "https://source.unsplash.com/random/600x400?forest",
      span: "col-span-1 row-span-1",
    },
    {
      id: 6,
      image: "https://source.unsplash.com/random/600x400?space",
      span: "col-span-1 row-span-1",
    },
  ];

  useEffect(() => {
    const r = [
      {
        productId: 1,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA262.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 2,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA612.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 3,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA433.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 4,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA587.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 5,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA575.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 6,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA595.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 7,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA571.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 8,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA262.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 9,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA612.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 10,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA433.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 11,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA587.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 12,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA575.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 13,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA595.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 14,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA571.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 15,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA262.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 16,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA612.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 17,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA433.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 18,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA587.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 19,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA575.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 20,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA595.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 21,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA571.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 22,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA262.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 23,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA612.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 24,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA433.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 25,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA587.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 26,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA575.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 27,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA595.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 28,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA571.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 29,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA262.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 30,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA612.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 31,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA433.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 32,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA587.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 33,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA575.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 34,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA595.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 35,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA571.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 36,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA262.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 37,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA612.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 38,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA433.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 39,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA587.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 40,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA575.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 41,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA595.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 42,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA571.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 43,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA262.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 44,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA612.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 45,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA433.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 46,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA587.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 47,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA575.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 48,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA595.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 49,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA571.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 50,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA262.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 51,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA612.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 52,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA433.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 53,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA587.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 54,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA575.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 55,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA595.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 56,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA571.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 57,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA262.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 58,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA612.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 59,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA433.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 60,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA587.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 61,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA575.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 62,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA595.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 63,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA571.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 64,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA262.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 65,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA612.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 66,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA433.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 67,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA587.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 68,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA575.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 69,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA595.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 70,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA571.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 71,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA262.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 72,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA612.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 73,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA433.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 74,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA587.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 75,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA575.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 76,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA595.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 77,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA571.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 78,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA262.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 79,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA612.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 80,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA433.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 81,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA587.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 82,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA575.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 83,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA595.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 84,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA571.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 85,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA262.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 86,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA612.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 87,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA433.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 88,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA587.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 89,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA575.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 90,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA595.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 91,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA571.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 92,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA262.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 93,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA612.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 94,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA433.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 95,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA587.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
      {
        productId: 96,
        productName: "Gold and Black Arch Birthday Decor",
        image: "https://img.ebonow.com/Products/CLA575.webp",
        originalPrice: 4284,
        discountPrice: 2159,
        discountPercentage: 50,
        categoryName: "Birthday",
      },
      {
        productId: 97,
        productName: "Unicorn Theme Birthday Party Kit",
        image: "https://img.ebonow.com/Products/CLA595.webp",
        originalPrice: 3499,
        discountPrice: 2799,
        discountPercentage: 20,
        categoryName: "Birthday",
      },
      {
        productId: 98,
        productName: "Blue Baby Shower Balloon Set",
        image: "https://img.ebonow.com/Products/CLA571.webp",
        originalPrice: 3299,
        discountPrice: 2499,
        discountPercentage: 24,
        categoryName: "Baby Shower",
      },
      {
        productId: 99,
        productName: "Romantic Anniversary Candlelight Setup",
        image: "https://img.ebonow.com/Products/CLA262.webp",
        originalPrice: 5999,
        discountPrice: 4999,
        discountPercentage: 17,
        categoryName: "Anniversary",
      },
      {
        productId: 100,
        productName: "Ganapati Pandal Decoration Kit",
        image: "https://img.ebonow.com/Products/CLA612.webp",
        originalPrice: 5599,
        discountPrice: 3999,
        discountPercentage: 29,
        categoryName: "Ganapati Decoration",
      },
    ];

    setProducts(r);
  }, []);

  //   useEffect(() => {
  //     axios.post(
  //         "https://localhost:44361/api/HIFICreations/GetAllProductsDetails",
  //         {}
  //       )
  //       .then((response) => {

  //         // setProducts(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching product data:", error);
  //       });
  //   }, []);

  console.log({ products });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  // Blink effect for the discount price and "drop price"
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500); // Blink every 500ms
    return () => clearInterval(interval);
  }, []);

  const handleClick = (product) => {
    setSelectedProduct(product);
    console.log("Selected Product:", product);
  };

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:5000/FetchData");
    setItems(response.data);
  };

  const addItem = async () => {
    await axios.post("http://localhost:5000/items", newItem);
    setNewItem({ name: "" });
    // fetchItems();
  };

  const updateItem = async (id) => {
    const updatedName = prompt("Enter new name");
    if (updatedName) {
      await axios.put(`http://localhost:5000/items/${id}`, {
        name: updatedName,
      });
      // fetchItems();
    }
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/items/${id}`);
    //fetchItems();
  };

  const handleCategoryClick = (categoryName) => {
    debugger;
    setSelectedCategory(categoryName);
    if (categoryName === "") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (p) => p.categoryName === categoryName
      );
      setFilteredProducts(filtered);
    }
  };
  const navigate = useNavigate();
  const handleImageClick = (product) => {
    console.log("Clicked product:", product);

    // You can now use the full product data
    // e.g., open a modal, redirect, or set state
    navigate("/ProductDetailCard", { state: { product } });
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      {/* <div className="max-w-6xl mx-auto px-4 py-8"> */}
      {/* <h2 className="text-2xl font-bold text-center mb-6">
          What are you celebrating?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {categories.map((cat, index) => (
            <CategoryCard
              key={index}
              name={cat.name}
              image={cat.image}
              onClick={() => handleCategoryClick(cat.name)}
            />
          ))}
        </div> */}

      {/* <div className="max-w-6xl mx-auto p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {categories.map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl ${item.span}`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-40 transition duration-300" />
              </div>
            ))}
          </div>
        </div> */}

      {/* <TestLocalStorage /> */}
      {/* </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <div
            key={product.productId}
            className="bg-white p-6 scale-90 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.productName}
              className="w-40 h-40 object-cover mx-auto rounded-lg transition-transform duration-300 hover:scale-110"
              onClick={() => handleImageClick(product)}
            />
            {/* Product Name */}
            <p className="mt-2 text-sm font-semibold text-gray-800">
              {product.productName}
            </p>
            {/* Price Section */}
            <div className="mt-4 flex justify-center items-center">
              {/* Discount Price */}
              <p className="text-black font-bold mr-4">
                ₹{product.discountPrice}
              </p>

              {/* Original Price with Strike-through */}
              <p className="text-gray-500 line-through mr-4">
                ₹{product.originalPrice}
              </p>

              {/* Discount Percentage Banner */}
              <div
                className="text-center rounded-l px-3 py-1 text-[0.8125rem] font-semibold bg-gradient-to-r from-blue-500 to-[#2136d4] text-white"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
                  maxWidth: "90px",
                  width: "auto",
                }}
              >
                {product.discountPercentage}% off
              </div>
            </div>
            <button
              onClick={() => handleClick(product)}
              className="mt-6 px-6 py-3 h-10 w-70 bg-blue-100 text-blue-500 rounded-full font-small relative overflow-hidden transition-all duration-300 group"
            >
              {/* Discount Price with Framer Motion */}
              <motion.span
                className="text-blue-500 text-sm font-bold ml-3 absolute left-0" // Adjusted positioning
                initial={{ y: "100%" }} // Start from below (off-screen)
                animate={{ y: "0%" }} // Move to the center (default position)
                transition={{
                  type: "spring", // Using a spring for a bouncy effect
                  stiffness: 100, // Controls the stiffness of the spring
                  damping: 25, // Controls the smoothness of the bounce
                  duration: 1, // Duration of the animation
                  repeat: Infinity,
                }}
              >
                ₹{product.discountPrice}
              </motion.span>
              {/* Login Text */}
              <span className="relative z-10 ml-9 font-bold text-sm">
                Login to <span>drop</span>
                <motion.span
                  className="text-blue-500 inline-block"
                  animate={{
                    y: [0, -5, 0], // Moves up and down
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.6, // Adjust speed of bounce
                    ease: "easeInOut",
                  }}
                >
                  <TrendingDownTwoToneIcon />
                </motion.span>
                <span className="ml-2 font-bold text-sm">price</span>
              </span>
              {/* Hover Overlay */}

              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
            {/* Heart Icon for Wishlist */}
            <div
              className="mt-4 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* <Heart
                className={`w-6 h-6 ${
                  isHovered ? "text-red-500" : "text-gray-400"
                } transition-colors duration-300`}
                fill={isHovered ? "red" : "none"}
              /> */}
            </div>
          </div>
        ))}
      </div>
      {/* 
      <div className="w-full max-w-4xl mx-auto mt-5">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div> */}
    </div>
  );
};

export default Crud;
