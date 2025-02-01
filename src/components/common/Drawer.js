// src/components/RightDrawer.js
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDrawer } from '../../redux/Cartslice';
import Cart from '../categoriespagecomponents/Cart';  // Import Cart component
import { Drawer } from '@mui/material';
import { useEffect } from 'react';

export default function RightDrawer() {
    useEffect(()=>{
        console.log(isDrawerOpen)
    })
  const isDrawerOpen = useSelector(state => state.cart.isDrawerOpen);
  const dispatch = useDispatch();

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}  // Use Redux state to control drawer visibility
      onClose={() => dispatch(toggleDrawer(false))}  // Close drawer
      sx={{
        zIndex: 1301,  // Ensure the drawer is above other elements
        position: 'fixed',  // Position fixed to keep the drawer above other content
        width: '3000px',  // Set width of the drawer
      }}
    >
      <Cart />
    </Drawer>
  );
}
