const Sequelize = require('sequelize');
const sequelize = new Sequelize('navdata', 'dustintktran', 'password', {
  host: 'localhost',
  dialect: 'postgres'
})

sequelize.authenticate()
  .then(() => {
    console.log('Connection to Postgres has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;