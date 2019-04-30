const knex = require("knex");
const router = require("express").Router();

const knexConfig = {
    client:"sqlite3",
    connection: {
        filename: "./data/lambda.sqlite3"
    },
    userNullAsDefault: true,
    debug: true
}
const zoo = knex(knexConfig);



module.exports = router;