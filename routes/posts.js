//seperating routes because app.js gets too crazy
const express = require('express');

//router will be used to import routes
const router = express.Router();

//import model that we want to post to/schema
const Post = require('../models/Post');

//get back all post
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find(); // this returns everything. Other methods like limit
        res.json(posts);
    }
    catch(err){
        res.json({message:err});
    }

    //respond to user
    //res.send("post route");
});

//get back specific post
router.get('/:postId', async (req,res) =>{
    console.log(req.params.postId);
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post)
    }
    catch(err){
        res.json({message:err})
    }
});

//delete post
router.delete('/:postId', async (req,res) =>{
    console.log(req.params.postId);
    try{
        const post = await Post.remove({_id:req.params.postId});
        res.json(post)
    }
    catch(err){
        res.json({message:err})
    }
});

//update
router.patch('/:postId', async (req,res) =>{
    console.log(req.params.postId);
    try{
        const post = await Post.UpdateOne(
            {_id:req.params.postId},
            {$set:{title:req.body.title}}
        );
        res.json(post)
    }
    catch(err){
        res.json({message:err})
    }
});



//more specific route
//full path for this would be .../posts/specific
router.get('/specific', (req,res) =>{
    //respond to user
    res.send("specific");
});




//POST
//use postman
//submit post   
router.post('/', async (req,res) =>{
    console.log(req.body); // this will not work because we need bodyparser to convert to json
    //respond to user
    res.send("specific");

    //create new post with models object
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    });
    //save to db
    try{
        const savePost = await post.save() //promise
        res.json(savePost);
    }
    catch(err){
        res.json(err)
    }
});



//export 
module.exports = router;