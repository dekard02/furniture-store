const express = require('express');
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.use(auth.authenticate);

router.put('/password', authController.updatePassword);

module.exports = router;
