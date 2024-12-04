const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "student",
    password: "666666",
    port: 5432,
});

module.exports = pool;