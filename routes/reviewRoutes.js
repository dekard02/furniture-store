const express = require('express');
const auth = require('../middlewares/auth');
const reviewController = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });

router.get('/', reviewController.getAllReviews);
router.get('/:id', reviewController.getReview);

router.post('/', auth.authenticate, reviewController.createReview);
router.put('/:id', auth.authenticate, reviewController.updateReview);
router.delete('/:id', auth.authenticate, reviewController.deleteReview);

module.exports = router;
