//get express into file
const express = require('express');

//execute express
const app = express();

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
app.get('/posts', (req,res) =>{
    //respond to user
    res.send("post route");
});

//listen on port
app.listen(3000);
