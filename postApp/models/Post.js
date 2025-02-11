const EntitySchema = require('typeorm').EntitySchema;

const PostEntity = new EntitySchema({
    name: "Post",
    target: Post,
    columns:{
        id: {
            primary:true,
            type: "int",
            generated: true
        },
        title :{
            type: "varchar"
        },
        text: {
            type:"text"
        }
    },
    relation: {
        categories: {
            target:"Category",
            type:"many-to-many",
            joinTable: true,
            cascade: true
        }
    }


})

module.exports = {PostEntity}