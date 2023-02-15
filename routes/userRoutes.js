const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/me', auth.authenticate, userController.me);
router.put(
  '/me',
  auth.authenticate,
  userController.uploadImage,
  userController.updateMe
);

router.get(
  '/',
  auth.authenticate,
  auth.authorize('ADMIN', 'MANAGER'),
  userController.getAllUsers
);

router.get(
  '/:id',
  auth.authenticate,
  auth.authorize('ADMIN', 'MANAGER'),
  userController.getUser
);

router.put(
  '/:id',
  auth.authenticate,
  auth.authorize('ADMIN', 'MANAGER'),
  userController.uploadImage,
  userController.updateUser
);

module.exports = router;
