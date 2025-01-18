import React, { useState } from 'react';
import {
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  IconButton,
  Grid,
  Box,
  Typography,
  InputAdornment,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CategoryIcon from '@mui/icons-material/Category';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import DetailsIcon from '@mui/icons-material/Details';
import ConstructionIcon from '@mui/icons-material/Construction';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const AdminAddProduct = () => {
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [itemsUsed, setItemsUsed] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const files = e.target.files;

    if (!files.length) return;

    const newFiles = Array.from(files);
    const totalFiles = images.length + newFiles.length;

    if (totalFiles > 4) {
      setError('You can upload a maximum of 4 images in total.');
      return;
    }

    const updatedImages = [...images, ...newFiles];
    const updatedPreviews = [...imagePreviews, ...newFiles.map((file) => URL.createObjectURL(file))];

    setImages(updatedImages);
    setImagePreviews(updatedPreviews);
    setError('');
  };

  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);

    setImages(updatedImages);
    setImagePreviews(updatedPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length !== 4) {
      setError('You must upload exactly 4 images.');
      return;
    }

    const formData = new FormData();
    formData.append('category', category);
    formData.append('name', productName);
    formData.append('details', productDetails);
    formData.append('itemsUsed', itemsUsed);
    formData.append('price', productPrice);

    images.forEach((image) => formData.append('images', image));

    console.log('FormData Content:');
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Product added successfully!');
        setCategory('');
        setProductName('');
        setProductDetails('');
        setItemsUsed('');
        setProductPrice('');
        setImages([]);
        setImagePreviews([]);
      } else {
        alert('Failed to add product.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while uploading the product.');
    }
  };

  return (
    <div className="bg-gray-100 p-3">
      <Box
        sx={{
          p: 4,
          maxWidth: '1200px',
          width: '100%',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          sx={{ color: '#9c27b0' }}
        >
          Add New Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel sx={{ color: '#9c27b0' }}>Category</InputLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label="Category"
                  startAdornment={
                    <InputAdornment position="start">
                      <CategoryIcon sx={{ color: '#9c27b0' }} />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="Electronics">Electronics</MenuItem>
                  <MenuItem value="Furniture">Furniture</MenuItem>
                  <MenuItem value="Clothing">Clothing</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Product Name"
                variant="outlined"
                fullWidth
                required
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                sx={{
                  mt: 3,
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': { borderColor: '#9c27b0' },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TextFieldsIcon sx={{ color: '#9c27b0' }} />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Product Details"
                variant="outlined"
                fullWidth
                required
                value={productDetails}
                onChange={(e) => setProductDetails(e.target.value)}
                multiline
                rows={3}
                sx={{
                  mt: 3,
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': { borderColor: '#9c27b0' },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DetailsIcon sx={{ color: '#9c27b0' }} />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Items Used"
                variant="outlined"
                fullWidth
                required
                value={itemsUsed}
                onChange={(e) => setItemsUsed(e.target.value)}
                multiline
                rows={3}
                sx={{
                  mt: 3,
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': { borderColor: '#9c27b0' },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ConstructionIcon sx={{ color: '#9c27b0' }} />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Product Price"
                variant="outlined"
                fullWidth
                required
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                type="number"
                sx={{
                  mt: 3,
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': { borderColor: '#9c27b0' },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon sx={{ color: '#9c27b0' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h6" gutterBottom sx={{ color: '#9c27b0' }}>
                  Upload Product Images (Max: 4)
                </Typography>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'block', width: '100%' }}
                />
                {error && <FormHelperText error>{error}</FormHelperText>}

                {imagePreviews.length > 0 && (
                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    {imagePreviews.map((preview, index) => (
                      <Grid item xs={6} key={index} sx={{ position: 'relative' }}>
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          style={{
                            width: '100%',
                            height: '150px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                          }}
                        />
                        <IconButton
                          size="small"
                          color="secondary"
                          onClick={() => removeImage(index)}
                          style={{
                            position: 'absolute',
                            top: '5px',
                            right: '5px',
                            backgroundColor: 'white',
                          }}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Box>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              mt: 4,
              py: 1.5,
              fontSize: '1rem',
              borderRadius: 2,
              backgroundColor: '#9c27b0',
              '&:hover': { backgroundColor: '#7b1fa2' },
            }}
          >
            Add Product
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default AdminAddProduct;
