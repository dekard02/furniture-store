const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/me', auth.protect, userController.me);
router.put(
  '/me',
  auth.protect,
  userController.uploadImage,
  userController.updateMe
);

router.get(
  '/',
  auth.protect,
  auth.authorize('MANAGER'),
  userController.getAllUsers
);

router.get(
  '/:id',
  auth.protect,
  auth.authorize('MANAGER'),
  userController.getUser
);

router.put(
  '/:id',
  auth.protect,
  auth.authorize('MANAGER'),
  userController.uploadImage,
  userController.updateUser
);

module.exports = router;
