const mongoose = require('mongoose');
// const keywords = require('../../data/keywords.json');
require('./index.js'); // connecting DB: index.js -> models.js

/* Nav-bar menu items */

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
  Keyword
}

