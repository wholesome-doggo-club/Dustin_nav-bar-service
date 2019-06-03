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

const keywordSchema = new mongoose.Schema({
  keyword: String
})

const imageSchema = new mongoose.Schema({
  imgUrl: String
})

const productSchema = new mongoose.Schema({
  productName: String,
  images: [imageSchema],
  keywords: [keywordSchema]
})

const Product = mongoose.model('products', productSchema)

module.exports = {
  Department,
  Product
}