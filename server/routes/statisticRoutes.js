const express = require('express');
const statisticController = require('../controllers/statisticController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get(
  '/count',
  auth.protect,
  auth.authorize('MANAGER'),
  statisticController.getCount
);

router.get(
  '/revenue',
  auth.protect,
  auth.authorize('MANAGER'),
  statisticController.getRevenue
);

module.exports = router;
