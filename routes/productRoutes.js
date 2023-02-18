const express = require('express');
const productController = require('../controllers/productController');
const auth = require('../middlewares/auth');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();

router.get('/', productController.getAllProduct);
router.get('/:id', productController.getProduct);
router.post(
  '/',
  auth.authenticate,
  auth.authorize('ADMIN', 'MANAGER', 'STAFF'),
  productController.uploadProductImages,
  productController.createProduct
);

router.put(
  '/:id',
  auth.authenticate,
  auth.authorize('ADMIN', 'MANAGER', 'STAFF'),
  productController.uploadProductImages,
  productController.updateProduct
);

router.delete('/:id', productController.deleteProduct);

router.use('/:productId/reviews', reviewRouter);

module.exports = router;
