const { Pool, Client } = require("pg");
const path = require('path');
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, '../en.env') });

const pool = new Pool({
    connectionString: process.env.CONNECTION_URL
});

const client = new Client({
    connectionString: process.env.CONNECTION_URL
});

module.exports = { client, pool }
