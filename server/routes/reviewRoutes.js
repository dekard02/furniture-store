const express = require('express');
const auth = require('../middlewares/auth');
const reviewController = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });

router.get('/', reviewController.getAllReviews);
router.get('/:id', reviewController.getReview);

router.post('/', auth.protect, reviewController.createReview);
router.put('/:id', auth.protect, reviewController.updateReview);
router.delete('/:id', auth.protect, reviewController.deleteReview);

module.exports = router;
