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
const db = knex(knexConfig);

router.get("/",(req,res)=>{
    db("zoos")
    .then(animal=>{
        res.status(200).json(animal)
    })
    .catch(err=>{
        console.log(err)
        res.status(400).json({message: "cannot GET data"})
    })
})


module.exports = router;