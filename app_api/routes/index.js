const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlReviews = require('../controllers/reviews');

router.get('/locations', ctrlLocations.locationsReadAll);
router.get('/locations/:locationId', ctrlLocations.locationsReadOne)

router.post('/locations', ctrlLocations.locationsCreate);
router.put('/locations/:locationId', ctrlLocations.locationsUpdate);
router.delete('/locations/:locationId', ctrlLocations.locationsDelete);

router.get('/locations/:locationId/reviews/:reviewId', ctrlReviews.reviewsReadOne)

router.post('/locations/:locationId/reviews', ctrlReviews.reviewsCreate);
router.put('/locations/:locationId/reviews/:reviewId', ctrlReviews.reviewsUpdate);
router.delete('/locations/:locationId/reviews/:reviewId', ctrlReviews.reviewsDelete);

module.exports = router;