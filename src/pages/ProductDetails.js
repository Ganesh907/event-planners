import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <Typography variant="h6">No product data available.</Typography>;
  }

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto', backgroundColor: 'white', borderRadius: 2 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Product Details
      </Typography>
      <Typography variant="body1">
        <strong>Category:</strong> {product.category}
      </Typography>
      <Typography variant="body1">
        <strong>Name:</strong> {product.productName}
      </Typography>
      <Typography variant="body1">
        <strong>Details:</strong> {product.productDetails}
      </Typography>
      <Typography variant="body1">
        <strong>Items Used:</strong> {product.itemsUsed}
      </Typography>
      <Typography variant="body1">
        <strong>Price:</strong> ${product.productPrice}
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Uploaded Images:
      </Typography>
      <Grid container spacing={2}>
        {product.images.map((image, index) => (
          <Grid item xs={3} key={index}>
            <img
              src={image}
              alt={`Product ${index + 1}`}
              style={{ width: '100%', borderRadius: 8 }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductDetails;
