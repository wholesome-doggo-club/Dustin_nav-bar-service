const mongoose = require('mongoose');
require('./index.js'); // connecting DB: index.js -> models.js

/* Nav-bar menu items */

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

/* Product Search items */

const imageSchema = new mongoose.Schema({
  imageUrl: String
})

const productSchema = new mongoose.Schema({
  productName: String,
  images: [imageSchema]
})

const keywordSchema = new mongoose.Schema({
  keyword: String,
  products: [productSchema]
})

const Keyword = mongoose.model('keywords', keywordSchema)

module.exports = {
  Department,
  Keyword
}