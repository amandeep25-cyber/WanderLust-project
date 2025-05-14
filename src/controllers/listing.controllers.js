const Listing = require("../models/listing.models");

const getAllListing = async (req, res) => {
  const allData = await Listing.find({});

  res.render("listing/index.ejs", { allData });
};

const getListing = async (req, res) => {
  const { id } = req.params;
  const list = await Listing.findById(id);
  res.render("listing/show.ejs", { list });
};

const createForm = (req, res) => {
  res.render("listing/new.ejs");
};

const creatingListing = async (req, res) => {
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
};

const getUpdateForm = async (req, res) => {
  const { id } = req.params;
  const list = await Listing.findById(id);
  res.render("listing/update.ejs", { list });
};

const updateListing = async (req, res) => {
  const { id } = req.params;
  const updatingList = req.body;
  await Listing.findByIdAndUpdate(id, updatingList, {
    runValidators: true,
  });

  res.redirect(`/listing/${id}`);
};

module.exports = {
  getAllListing,
  getListing,
  createForm,
  creatingListing,
  getUpdateForm,
  updateListing,
};
