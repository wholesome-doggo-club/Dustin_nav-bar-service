const mongoose = require('mongoose');
require('./index.js'); // connecting DB: index.js -> models.js

const departmentSchema = new mongoose.Schema({
  name: String
});

const Department = mongoose.model('department', departmentSchema);

const categorySchema = new mongoose.Schema({
  name: String
});

const Category = mongoose.model('category', categorySchema);

const subcategorySchema = new mongoose.Schema({
  name: String
});

const Subcategory = mongoose.model('subcategory', subcategorySchema);

module.exports = {
  Department,
  Category,
  Subcategory
}