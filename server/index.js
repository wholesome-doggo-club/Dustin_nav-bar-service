const express = require('express')
const path = require('path');
const morgan = require('morgan');
const router = require('./router')
// const txt = require('../loaderio-15a045bc7719c565f1472ff59e55d664.txt');

let app = express();

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
app.use('/navbar', router);
// serving static client front-end files
app.use(express.static(path.resolve(__dirname, '../files')));
// app.use(express.static(path.resolve(__dirname, '../client/dist')));
let port = 3001;
app.listen(port, () => console.log(`Navbar-server is listening on port ${port}`));

// establish port to listen on