const dotenv = require('dotenv');
dotenv.config();

const config = {
  development: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "ESS_community",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  }
}

module.exports = config