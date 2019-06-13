const Sequelize = require('sequelize');
const sequelize = new Sequelize('navdata', 'dustintktran', 'password', {
  host: 'ec2-52-53-186-193.us-west-1.compute.amazonaws.com',
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
//ec2-13-52-75-147.us-west-1.compute.amazonaws.com