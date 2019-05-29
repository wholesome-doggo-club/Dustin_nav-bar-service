const mongoose = require('mongoose');
require('./index.js'); // connecting DB: index.js -> models.js

/* Navbar menu items */

const subcategorySchema = new mongoose.Schema({
  name: String
});

const categorySchema = new mongoose.Schema({
  name: String,
  subcategories: [subcategorySchema]
});

const departmentSchema = new mongoose.Schema({
  name: String,
  categories: [categorySchema]
});

const Department = mongoose.model('departments', departmentSchema);

/* Search items */

const searchSchema = new mongoose.Schema({
  name: String
})

const Search = mongoose.model('searches', searchSchema)

module.exports = {
  Department,
  Search
}