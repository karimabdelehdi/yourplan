const mysql = require('mysql');
const Promise = require('bluebird');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'yourplans'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to server')
  }
});
const db = Promise.promisifyAll(connection, { multiArgs: true });

module.exports = db;
