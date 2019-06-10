const fs = require('fs');
const keywordStream = fs.createWriteStream(__dirname + '/keywords.json', { flags: 'a' });

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
  keywordStream.write('[\n');
  let sep = '';
  for (var i = 0; i < 10000000; i++) {
    let key = first[randomInt(0, first.length - 1)] + ' ' + middle[randomInt(0, middle.length - 1)] + ' ' + end[randomInt(0, end.length - 1)];
    let insert = {};
    insert.keyword = key;
    insert.products = [];
    for (var j = 0; j < randomInt(1, 4); j++) {
      let product = {};
      let productName = products[randomInt(0, products.length - 1)];
      product.productName = key + ' ' + productName;
      product.images = [];
      for (var k = 0; k < randomInt(1, 3); k++) {
        let image = { imageUrl: "https://loremflickr.com/320/240/" + productName };
        product.images.push(image);
      }
      insert.products.push(product);
    }
    if(!keywordStream.write(sep + JSON.stringify(insert), 'utf8')) {
      await new Promise(resolve => keywordStream.once('drain', resolve));
    }
    if(!sep) {
      sep = ',\n';
    }
  }
  keywordStream.write(']');
})();