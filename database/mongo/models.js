const mongoose = require('mongoose');
// const keywords = require('../../data/keywords.json');
require('./index.js'); // connecting DB: index.js -> models.js

/* Nav-bar menu items */

/* Product Search items */

const imageSchema = new mongoose.Schema({
  imageUrl: String
})

const productSchema = new mongoose.Schema({
  productName: { type: String, index: true },
  images: [imageSchema]
})

const keywordSchema = new mongoose.Schema({
  keyword: String,
  products: {type: [productSchema], index: true }
})

const Keyword = mongoose.model('keywords', keywordSchema)

module.exports = {
  Keyword
}

