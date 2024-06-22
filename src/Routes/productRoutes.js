const express = require('express');
const router = express.Router();
const productController = require('../Controller/productController');

router.get('/products', productController.searchProductsByName);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.delete('/products', productController.deleteAllProducts);


module.exports = router;
