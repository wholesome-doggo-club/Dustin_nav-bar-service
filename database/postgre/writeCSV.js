const fs = require('fs');
const keywordStream = fs.createWriteStream(__dirname + '/keywords.csv', { flags: 'a' });
const productStream = fs.createWriteStream(__dirname + '/products.csv', { flags: 'a' });

const first = ["Angela's", "Calvin's", "Dustin's", "Gaby's", "James'", "Wendy's", "Ufuk's", "Ramin's", "Kathleen's", "Jeff's",
  "Wayne's", "Mark's", "Matt's", "Matthew's", "Victor's", "Morgan's", "Adam's", "Anthony's", "Uttej's", "Nate's",
  "Charlie's", "Albert's", "Tracy's", "Liezel's", "Jesse's", "Daniel's", "Fred's", "Tommy's", "Brian's", "Paul's", "Snoopy's", 
  "Viv's", "Semira's", "Eva's", "Eti's", "Billy's"];

const middle = ["Super", "Uber", "Mega", "Epic", "Superbly", "Unbelievably", "Incredibly", "Kinda", "Slightly", "Barely",
  "Ultra", "Radically", "Revolutionarily", "Extremely", "Very", "Quite", "Exceedingly", "Highly", "Especially", "Particularly",
  "Deeply", "Really", "Somewhat", "Marginally", "Drastically", "Excessively", "Outlandishly"];

const end = ["Awesome", "Sexy", "Chill", "Cool", "Amazing", "Pretty", "Handsome", "Nice", "Gorgeous", "Beautiful",
  "Dank", "Ridiculous", "Girly", "Boyish", "Cute", "Nice", "Charming", "Appealing", "Sweet", "Pleasant", "Hot", "Enjoyable",
  "Duulcet", "Enchanting", "Magnificent", "Breathtaking", "Wonderful", "Delicious", "Bootilicious", "Ugly", "Disgusting", "Unattractive", "Vile",
  "Frightful", "Disturbing", "Hideous", "Gross"];

const products = ['Shoes', 'Dresses', 'Shirts', 'Gloves', 'Boots', 'Hats', 'Watches', 'Sweaters', 'Shorts', 'Polos',
  'Earrings', 'Necklaces', 'Pants', 'Skirts', 'Bras', 'Underwear', 'Trunks', 'TightyWhiteys', 'Panties', 'Shawl', 'Jackets',
  'Chairs', 'Backpacks', 'Purses', 'Hightops', 'Boots', 'Suits', 'Coats', 'Tops', 'Waistcoats', 'Belts', 'Jeans', 'Gowns',
  'Masks', 'Ponchos', 'Saris', 'Trousers', 'Sportswear', 'Armbands', 'Sleeves', 'Elbowpads', 'Kneepads', 'Shoulderpads', 'Vambraces',
  'Cufflinks', 'Ties', 'Bowties', 'Crowns', 'Eyepatches', 'Hijab', 'Hoods', 'Scarves', 'Veils', 'Wigs'];

function randomInt(min, max) { //inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

(async() => {
for (var i = 0; i < 2000000; i++) {
  let key = first[randomInt(0, first.length - 1)] + ' ' + middle[randomInt(0, middle.length - 1)] + ' ' + end[randomInt(0, end.length - 1)];
  if (!keywordStream.write([i, key] + '\n', 'utf8')) {
    await new Promise(resolve => keywordStream.once('drain', resolve));
  }
  for (var j = 0; j < 5; j++) {
    let product = products[randomInt(0, products.length - 1)];
    let images = 'https://picsum.photos/200';
    if(!productStream.write([key + ' ' + product, product, images, i] + '\n', 'utf8')) {
      await new Promise(resolve => productStream.once('drain', resolve));
    }
  }
}
})();

module.exports = { randomInt, first, middle, end, products }
