const { pool, client } = require('./indexNoORM.js')
const { randomInt, first, middle, end, products } = require('./writeCSV.js');

const singleRequest = (callback) => {
  let product = first[randomInt(0, first.length - 1)] + ' ' + middle[randomInt(0, middle.length - 1)] + ' ' + end[randomInt(0, end.length - 1)] + ' ' + products[randomInt(0, products.length - 1)];
  // console.log(product)
  product = product.replace('\'', '\'\'');
  pool.query(`SELECT * FROM "products" AS "product" WHERE "product_name" = '${product}' LIMIT 1;`, (err, res) => {
    if (err) {
      callback(err.stack)
    } else {
      callback(res.rows[0]);
    }
  })
}

module.exports = singleRequest;
