const mongoose = require('mongoose');

//create schema for post for mongodb
const PostSchema = mongoose.Schema({
    title:String,
    description:String,
});

//export parameters(NAME,SCHEMA)
module.exports = mongoose.model('Posts',PostSchema);