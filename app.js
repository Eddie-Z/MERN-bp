//get express into file
const express = require('express');

//execute express
const app = express();

//body parser to make post req convert to json
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//env
require('dotenv/config')

//mongodb package
const mongoose = require('mongoose');

//Import routes
const postsRoutes = require('./routes/posts');

//Middleware allows us to nost have /posts in post.js
//When url is ran, it tells it to go to posts file
//more clean way and could have extra more app.use('/users',userRoutes);
app.use('/posts',postsRoutes);


//middleware in express functinos that execute on routes
//authentications are used here
app.use('/posts',() => {
    console.log("Middleware") //callback function
});

//create route
//parameters:
// / is route
app.get('/', (req,res) =>{
    //respond to user
    res.send("we are at home");
});


//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    ()=>console.log('connected'));


//listen on port
app.listen(3000);
