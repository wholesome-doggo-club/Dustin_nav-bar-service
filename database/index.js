const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fec-navbar', {useNewUrlParser: true})
  .then(() => console.log('Connection to mongoDB is successful!'))
  .catch(err => console.log(err));


