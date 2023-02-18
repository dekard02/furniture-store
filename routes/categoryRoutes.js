const express = require('express');
const categoryController = require('../controllers/categoryController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategory);
router.post(
  '/',
  auth.authenticate,
  auth.authorize('MANAGER', 'ADMIN'),
  categoryController.createCategory
);
router.put(
  '/:id',
  auth.authorize('MANAGER', 'ADMIN'),
  categoryController.updateCategory
);
router.delete(
  '/:id',
  auth.authorize('MANAGER', 'ADMIN'),
  categoryController.deleteCategory
);

module.exports = router;
