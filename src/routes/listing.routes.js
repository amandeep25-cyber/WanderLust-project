const express = require("express");
const router = express.Router();

const { getAllListing } = require("../controllers/listing.controllers")

router.route('/').get(getAllListing);


module.exports = router;