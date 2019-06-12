const Sequelize = require('sequelize');
const sequelize = require('./index.js');
const { Keyword, Product } = require('./models.js');
const Op = Sequelize.Op;
const fs = require('fs');
const { randomInt, first, middle, end, products } = require('./writeCSV.js');

const singleRequest = (callback) => {
  let product = first[randomInt(0, first.length - 1)] + ' ' + middle[randomInt(0, middle.length - 1)] + ' ' + end[randomInt(0, end.length - 1)] + ' ' + products[randomInt(0, products.length - 1)];
  Product.findAll({ where: {
    product_name: product
  },limit: 1})
  .then((items) => {
    if(items[0]) {
      callback(items[0])
    } else {
      callback('Nothing Found');
    }
  })
}

module.exports = singleRequest;
// benchmark();


// const benchmarkLog = fs.createWriteStream(__dirname + '/benchmark/extraData.txt', {flags: 'a'});

// function standardDeviation(values){
//   var avg = average(values);
  
//   var squareDiffs = values.map(function(value){
//     var diff = value - avg;
//     var sqrDiff = diff * diff;
//     return sqrDiff;
//   });
  
//   var avgSquareDiff = average(squareDiffs);

//   var stdDev = Math.sqrt(avgSquareDiff);
//   return stdDev;
// }

// function average(data){
//   var sum = data.reduce(function(sum, value){
//     return sum + value;
//   }, 0);

//   var avg = sum / data.length;
//   return avg;
// }

// let endFunction = () => {
//   console.log(allTimes);
//   benchmarkLog.write('Average time for search: ' + average(allTimes) + '\n Std Deviation: ' + standardDeviation(allTimes));
//   console.log('Average time for search: ' + average(allTimes) + '\n Std Deviation: ' + standardDeviation(allTimes));
// }

// let index = 0;
// let allTimes = [];
// const NUMBER_OF_LOGS = 1000;

// const benchmark = (callback) => {
//   if(index > NUMBER_OF_LOGS) {
//     endFunction();
//     console.log('returned')
//     return;
//   }
//     let startTime = new Date();
//     let product = first[randomInt(0, first.length - 1)] + ' ' + middle[randomInt(0, middle.length - 1)] + ' ' + end[randomInt(0, end.length - 1)] + ' ' + products[randomInt(0, products.length - 1)];
//     Product.findAll({ where: {
//       // id: {
//       //   [Op.gte]: 9000000
//       // },
//       product_name: product
//     },limit: 1})
//     .then((items) => {
//       if(items[0]) {
//         let endTime = new Date();
//         let timeElapsed = endTime - startTime;
//         allTimes.push(timeElapsed);
//         benchmarkLog.write('Time Elapsed: ' + timeElapsed + '. Searched: ' + product + '. At id: ' + items[0].id + '\n');
//         index ++;
//         // return items[0];
//       }
//       benchmark();
//     })
// }
  

// const benchmark9m = (callback) => {
//   if(index > NUMBER_OF_LOGS) {
//     endFunction();
//     console.log('returned')
//     return;
//   }
//     let startTime = new Date();
//     let product = first[randomInt(0, first.length - 1)] + ' ' + middle[randomInt(0, middle.length - 1)] + ' ' + end[randomInt(0, end.length - 1)] + ' ' + products[randomInt(0, products.length - 1)];
//     Product.findAll({ where: {
//       product_name: product
//     },limit: 1})
//     .then((items) => {
//       if(items[0]) {
//         let endTime = new Date();
//         let timeElapsed = endTime - startTime;
//         if(items[0].id > 9000000) {
//           allTimes.push(timeElapsed);
//           benchmarkLog.write('Time Elapsed: ' + timeElapsed + '. Searched: ' + product + '. At id: ' + items[0].id + '\n');
//           index++;
//         }
//       }
//       benchmark9m();
//     })
// }

