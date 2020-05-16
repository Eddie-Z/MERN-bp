//get express into file
const express = require('express');

//execute express
const app = express();

//create route and listen to server
app.get('/', (req,res) =>{
    res.send("we are at home");
});
app.listen(3000);
