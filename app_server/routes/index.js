var express = require('express');
var router = express.Router();

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
/* Location pages. */
router.get('/', ctrlLocations.homeList);
router.get('/location/:locationId', ctrlLocations.locationInfo);
router.get('/location/:locationId/review/new', ctrlLocations.addReview);
router.post('/location/:locationId/review/new', ctrlLocations.doAddReview);
router.get('/location/:locationId/review/:reviewId/edit', ctrlLocations.editReview);
router.post('/location/:locationId/review/:reviewId/edit', ctrlLocations.doEditReview);
router.post('/location/:locationId/review/:reviewId/delete', ctrlLocations.doDeleteReview);

/* Others */
router.get('/about', ctrlOthers.about);
module.exports = router;