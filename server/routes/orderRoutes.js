const express = require('express');
const orderController = require('../controllers/orderController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth.protect, orderController.getAllOrders);
router.get('/:id', orderController.getOrder);
router.post('/', orderController.createOrder);

router.put(
  '/:id',
  auth.protect,
  auth.authorize('STAFF', 'MANAGER'),
  orderController.updateOrder
);

router.delete(
  '/:id',
  auth.protect,
  auth.authorize('MANAGER'),
  orderController.deleteOrder
);

module.exports = router;
