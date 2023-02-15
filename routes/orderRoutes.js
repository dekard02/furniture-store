const express = require('express');
const orderController = require('../controllers/orderController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth.authenticate, orderController.getAllOrders);
router.get('/:id', auth.authenticate, orderController.getOrder);
router.post('/', auth.authenticate, orderController.createOrder);

router.put(
  '/:id',
  auth.authenticate,
  auth.authorize('ADMIN', 'STAFF', 'MANAGER'),
  orderController.updateOrder
);

router.delete(
  '/:id',
  auth.authenticate,
  auth.authorize('ADMIN'),
  orderController.deleteOrder
);

module.exports = router;
