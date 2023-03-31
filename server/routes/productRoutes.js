const express = require('express');
const productController = require('../controllers/productController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', productController.getAllProduct);
router.get('/:id', productController.getProduct);
router.post(
  '/',
  auth.protect,
  auth.authorize('MANAGER', 'STAFF'),
  productController.uploadProductImages,
  productController.createProduct
);

router.put(
  '/:id',
  auth.protect,
  auth.authorize('MANAGER', 'STAFF'),
  productController.uploadProductImages,
  productController.updateProduct
);
router.patch(
  '/:id',
  auth.protect,
  auth.authorize('MANAGER', 'STAFF'),
  productController.uploadProductImages,
  productController.updateProduct
);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
