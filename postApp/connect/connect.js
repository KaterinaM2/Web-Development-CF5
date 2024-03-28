const typeorm = require('typeorm');

const CategoryEntity = require('../models/Category').CategoryEntity;
const PostEntity = require('../models/Post').PostEntity;

const dataSource = new typeorm.dataSource({
    type:"mariadb",
    host : process.env.HOST,
    port: 3306,
    username : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    synchronize: true,
    entities: [CategoryEntity, PostEntity]
})

dataSource
    .initialize()
    .then(function() {
        console.log("Connected to db")
    })
    .catch( function (error) {
        console.log("Error connection", error)
        
    })

module.exports = {dataSource}