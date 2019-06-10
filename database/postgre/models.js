const Sequelize = require('sequelize');
const sequelize = require('./index.js');
const Model = Sequelize.Model;

class Keyword extends Model {}
Keyword.init({
  keyword: Sequelize.STRING
}, {
  sequelize, modelName: 'keyword', timestamps: false
})

class Product extends Model {}
Product.init({
  product_name: Sequelize.STRING,
  category: Sequelize.STRING,
  images: Sequelize.STRING
}, {
  sequelize, modelName: 'product', timestamps: false
})


Keyword.hasMany(Product);
Product.belongsTo(Keyword);
// sequelize.sync({ force: true });

// sequelize.query('DROP TABLE IF EXISTS "products" CASCADE;CREATE TABLE IF NOT EXISTS "products" ("id"   SERIAL , "product_name" VARCHAR(255), "images" VARCHAR(255), "keyword_id" INTEGER REFERENCES "keywords" ("id") ON DELETE SET NULL ON UPDATE CASCADE, PRIMARY KEY ("id"));')

// Keyword.create({keyword: 'shoe'});
// Product.create({productName: 'testProduct', images: ['image.url', 'image2.url'], keywordId: 1});



module.exports = { Keyword, Product }