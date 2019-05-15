const express = require('express')
const path = require('path');

let app = express();
let port = 3501;

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => `Navbar-server is listening on port ${port}`);