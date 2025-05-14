const express = require("express");
const router = express.Router();

const {
  getAllListing,
  getListing,
  createForm,
  creatingListing,
  getUpdateForm,
  updateListing,
  deleteListing,
} = require("../controllers/listing.controllers");

router.route("/").get(getAllListing);
router.route("/new").get(createForm);
router.route("/:id").get(getListing);
router.route('/:id/edit').get(getUpdateForm);
router.route("/").post(creatingListing);
router.route('/:id').put(updateListing);
router.route('/:id').delete(deleteListing);

module.exports = router;
