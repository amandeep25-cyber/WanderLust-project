const express = require("express");
const router = express.Router();

const {
  getAllListing,
  getListing,
  createForm,
  creatingListing,
} = require("../controllers/listing.controllers");

router.route("/").get(getAllListing);
router.route("/new").get(createForm);
router.route("/:id").get(getListing);
router.route("/").post(creatingListing);

module.exports = router;
