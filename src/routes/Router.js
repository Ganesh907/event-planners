// src/routes/Router.js
import { lazy } from "react";
import { MainLayout } from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const Category = lazy(() => import("../pages/Categories"));
const About = lazy(() => import("../pages/AboutUs"));
const Contact = lazy(() => import("../pages/ContactUsPage"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));
const LoginPage = lazy(() => import("../pages/Login"));
const Cart = lazy(() => import("../components/categoriespagecomponents/Cart"));
const NotFound = lazy(() => import("../pages/NotFound"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const AdminAddProduct = lazy(() => import("../pages/AdminAddProduct"));

const AppRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/category", element: <Category /> },
      { path: "/about-us", element: <About /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-&-conditions", element: <TermsAndConditions /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/dashboard", element: <AdminAddProduct /> },
      { path: "/product-details", element: <ProductDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default AppRoutes;



// import React from 'react';
// import { Route, Routes } from 'react-router-dom'; // Only import Route and Routes
// import Loadable from '../layouts/Loadable'; // Custom Loadable component

// const Home = Loadable(React.lazy(() => import('../pages/Home')));
// const Category = Loadable(React.lazy(() => import('../pages/Categories')));
// const About = Loadable(React.lazy(() => import('../pages/AboutUs')));
// const Contact = Loadable(React.lazy(() => import('../pages/ContactUsPage')));
// const PrivacyPolicy = Loadable(React.lazy(() => import('../pages/PrivacyPolicy')));
// const TermsConditions = Loadable(React.lazy(() => import('../pages/TermsConditions')));
// const NotFound = Loadable(React.lazy(() => import('../pages/NotFound')));

// const Router = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/category" element={<Category />} />
//       <Route path="/about-us" element={<About />} />
//       <Route path="/contact-us" element={<Contact />} />
//       <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//       <Route path="/terms-conditions" element={<TermsConditions />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default Router;


// import { lazy } from "react";
// import { MainLayout } from "../layouts/MainLayout";

// const Home = lazy(() => import("../pages/Home"));
// const Category = lazy(() => import("../pages/Categories"));
// const About = lazy(() => import("../pages/AboutUs"));
// const Contact = lazy(() => import("../pages/ContactUsPage"));
// const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
// const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));
// const LoginPage = lazy(() => import("../pages/Login"));
// const Cart = lazy(() => import("../components/categoriespagecomponents/Cart"));
// const NotFound = lazy(() => import("../pages/NotFound"));
// const ProductDetails = lazy(() => import("../pages/ProductDetails"));
// const AdminAddProduct = lazy(() => import("../pages/AdminAddProduct"));

// const AppRoutes = [
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/category", element: <Category /> },
//       { path: "/about-us", element: <About /> },
//       { path: "/contact-us", element: <Contact /> },
//       { path: "/privacy-policy", element: <PrivacyPolicy /> },
//       { path: "/terms-&-conditions", element: <TermsAndConditions /> },
//       { path: "/cart", element: <Cart /> },
//       { path: "/login", element: <LoginPage /> },
//       { path: "/dashboard", element: <AdminAddProduct /> },
//       { path: "/product-details", element: <ProductDetails /> },
//       { path: "*", element: <NotFound /> },
//     ],
//   },
// ];

// export default AppRoutes;
