# nav-bar-service

A service mockup of Nordstrom's navigation bar using React.js.

## Installation Guide

To run this service:
- Run terminal command `npm install` in the root of this directory
- `Seed` with the dummy data via command `npm run seed`
 - If `Seed` was previously ran for this service and seed data has been updated, please go into `mongo` and `use fec-navbar` and run the following command `db.dropDatabase()`
- Run webpack via terminal command `npm run build`
- Start server via terminal command `npm start`


##DATABASE SEEDING
- Run in terminal `npm run mongo:write` followed by `npm run mongo:seed`
- Run in terminal `npm run postgres:reset` followed by `npm run postgres:write`
- Enter psql navdata database in postgres and run the commands:
    copy keywords(id, keyword) from '/Users/dustintktran/Desktop/SDC/Dustin_nav-bar-service/database/postgre/keywords.csv' delimiter ',' csv;

    copy products(product_name, category, images, "keywordId") from '/Users/dustintktran/Desktop/SDC/Dustin_nav-bar-service/database/postgre/products.csv' delimiter ',' csv;