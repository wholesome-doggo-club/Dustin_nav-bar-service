const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/fec-navbar', {useNewUrlParser: true})
mongoose.connect('mongodb+srv://morganl:hackreactortest@tabl-fec-nav-bar-cluster-hokx3.mongodb.net/fec-navbar?retryWrites=true', {useNewUrlParser: true})
  .then(() => console.log('Connection to mongoDB is successful!'))
  .catch(err => console.log(err));


