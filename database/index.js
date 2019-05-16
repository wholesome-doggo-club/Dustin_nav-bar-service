const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fec-navbar', {useNewUrlParser: true})
// mongoose.connect('mongodb+srv://morganl:sZTDW3tBDPtIJ5S1@tabl-fec-nav-bar-cluster-hokx3.mongodb.net/', {dbName: 'fec-navbar', useNewUrlParser: true})
  .then(() => console.log('Connection to mongoDB is successful!'))
  .catch(err => console.log(err));


