const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'dustintktran',
  host: 'ec2-52-53-164-138.us-west-1.compute.amazonaws.com',
  database: 'navdata',
  password: 'password',
  port: 5432,
  min: 5,
  max: 40
})
// pool.connect();
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

// const client = new Client({
//   user: 'dustintktran',
//   host: 'localhost',
//   database: 'navdata',
//   password: 'password',
//   port: 5432,
// })
// client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

module.exports = { pool }