const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'dustintktran',
  host: 'localhost',
  database: 'navdata',
  password: 'password',
  port: 5432,
})

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

const client = new Client({
  user: 'dustintktran',
  host: 'localhost',
  database: 'navdata',
  password: 'password',
  port: 5432,
})
client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

module.exports = { pool, client }