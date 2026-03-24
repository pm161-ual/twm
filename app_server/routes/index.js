var express = require('express');
var router = express.Router();

const ctrlLocation = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');


/* Location page. */
router.get('/', ctrlLocation.homeList);
router.get('/location/', ctrlLocation.locationInfo);
router.get('/location/review/new', ctrlLocation.addReview);

/* Others. */
router.get('/about', ctrlOthers.about);
module.exports = router;
