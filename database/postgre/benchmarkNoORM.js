const { pool, client } = require('./indexNoORM.js')
const { randomInt, middle, end, products } = require('./writeCSV.js');

const first = ["Angela''s", "Calvin''s", "Dustin''s", "Gaby''s", "James''", "Wendy''s", "Ufuk''s", "Ramin''s", "Kathleen''s", "Jeff''s",
  "Wayne''s", "Mark''s", "Matt''s", "Matthew''s", "Victor''s", "Morgan''s", "Adam''s", "Anthony''s", "Uttej''s", "Nate''s",
  "Charlie''s", "Albert''s", "Tracy''s", "Liezel''s", "Jesse''s", "Daniel''s", "Fred''s", "Tommy''s", "Brian''s", "Paul''s", "Snoopy''s", 
  "Viv''s", "Semira''s", "Eva''s", "Eti''s", "Billy''s"];

const singleRequest = (callback) => {
//  console.log('inside single request')
  let product = first[randomInt(0, first.length - 1)] + ' ' + middle[randomInt(0, middle.length - 1)] + ' ' + end[randomInt(0, end.length - 1)] + ' ' + products[randomInt(0, products.length - 1)];
  // console.log(product)
  pool.query(`SELECT * FROM "products" AS "product" WHERE "product_name" = '${product}' LIMIT 1;`, (err, res) => {
    if (err) {
      callback(err.stack)
    } else {
      callback(res.rows[0]);
    }
  })
}

module.exports = singleRequest;

//minigun quick -d 30 -r 1000 http://127.0.0.1:3001/navbar/benchmarkPG
