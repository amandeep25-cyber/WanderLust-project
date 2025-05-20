const Listing = require("../models/listing.models");
const asyncHandler = require("../utils/AsyncHandler");

const getAllListing = asyncHandler(async (req, res) => {
  const allData = await Listing.find({});

  res.render("listing/index.ejs", { allData });
});

const getListing = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const list = await Listing.findById(id);
  res.render("listing/show.ejs", { list });
});

const createForm = asyncHandler((req, res) => {
  res.render("listing/new.ejs");
});

const creatingListing = asyncHandler(async (req, res) => {
  const { title, location, image, country, description, price } = req.body;
  const newListing = new Listing({
    title,
    image,
    description,
    price,
    country,
    location,
  });

  await newListing.save();

  res.redirect("/listing");
});

const getUpdateForm = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const list = await Listing.findById(id);
  res.render("listing/update.ejs", { list });
});

const updateListing =asyncHandler( async (req, res) => {
  const { id } = req.params;
  const updatingList = req.body;
  await Listing.findByIdAndUpdate(id, updatingList, {
    runValidators: true,
  });

  res.redirect(`/listing/${id}`);
});

const deleteListing = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listing");
});

module.exports = {
  getAllListing,
  getListing,
  createForm,
  creatingListing,
  getUpdateForm,
  updateListing,
  deleteListing,
};
