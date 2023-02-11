const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getAllProduct);
router.get('/:id', productController.getProduct);
router.post(
  '/',
  productController.uploadProductImages,
  productController.createProduct
);
router.put(
  '/:id',
  productController.uploadProductImages,
  productController.updateProduct
);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
