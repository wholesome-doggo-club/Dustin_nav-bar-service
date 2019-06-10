const mongoose = require('mongoose');
const { Keyword} = require('./models.js');
const fs = require('fs');
const { randomInt, first, middle, end, products } = require('../postgre/writeCSV.js');

const benchmarkLog = fs.createWriteStream(__dirname + '/benchmark/singleRandom.txt', {flags: 'a'});

function standardDeviation(values){
    var avg = average(values);
    
    var squareDiffs = values.map(function(value){
      var diff = value - avg;
      var sqrDiff = diff * diff;
      return sqrDiff;
    });
    
    var avgSquareDiff = average(squareDiffs);
  
    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }
  
  function average(data){
    var sum = data.reduce(function(sum, value){
      return sum + value;
    }, 0);
  
    var avg = sum / data.length;
    return avg;
  }

  let endFunction = () => {
    console.log(allTimes);
    benchmarkLog.write('Average time for search: ' + average(allTimes) + '\n Std Deviation: ' + standardDeviation(allTimes));
    console.log('Average time for search: ' + average(allTimes) + '\n Std Deviation: ' + standardDeviation(allTimes));
  }

let index = 0;
let allTimes = [];
const NUMBER_OF_LOGS = 3;



const benchmark = (callback) => {
    if(index > NUMBER_OF_LOGS) {
      endFunction();
      console.log('returned')
      return;
    }
      let startTime = new Date();
      let product = first[randomInt(0, first.length - 1)] + ' ' + middle[randomInt(0, middle.length - 1)] + ' ' + end[randomInt(0, end.length - 1)] + ' ' + products[randomInt(0, products.length - 1)];
      Keyword.findOne({'products.productName': product }, (err, item) => {
        //   console.log(item)
        if(item) {
            for(var i = 0; i < item.products.length; i++) {
                if (item.products[i].productName === product) {
                    console.log('yah')
                    let endTime = new Date();
                    let timeElapsed = endTime - startTime;
                    allTimes.push(timeElapsed);
                    benchmarkLog.write('Time Elapsed: ' + timeElapsed + '. Searched: ' + product + '. At id: ' + item.id + '\n');
                    index ++;
                }
            }
          }
          benchmark();
    })
  }
  benchmark();