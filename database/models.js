const mongoose = require('mongoose');
require('./index.js'); // connecting DB: index.js -> models.js

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


// const Category = mongoose.model('categories', categorySchema);


// const Subcategory = mongoose.model('subcategories', subcategorySchema);

module.exports = {
  Department
  // Category,
  // Subcategory
}