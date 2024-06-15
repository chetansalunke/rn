require('dotenv').config();

const mysql = require('mysql2');

// Accessing environment variables
const { RDS_HOSTNAME, RDS_USERNAME, RDS_PASSWORD, RDS_DB_NAME, RDS_PORT } = process.env;

console.log('User name');
console.log(process.env.RDS_HOSTNAME);
// create the connection to database
const connection = mysql.createConnection({
  host: RDS_HOSTNAME,
  user: RDS_USERNAME,
  password: RDS_PASSWORD,
  database: RDS_DB_NAME,
  port: RDS_PORT
});

module.exports = connection;
