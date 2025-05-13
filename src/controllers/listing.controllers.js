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
  const { title, location, country, description, price } = req.body;
  const newListing = new Listing({
    title,
    description,
    price,
    country,
    location,
  });

  const createdListing = await newListing.save();

  res.redirect("/listing");
};

module.exports = {
  getAllListing,
  getListing,
  createForm,
  creatingListing,
};
