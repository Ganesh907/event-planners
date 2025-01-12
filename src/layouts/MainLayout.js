import React from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../components/common/ScrollToTop';
import Navbar from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';

export const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}
