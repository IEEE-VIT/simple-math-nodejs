const express = require('express');
 
//Importing Calculator functions
const add=require('../operations/add');
const pow=require('../operations/pow');
const mul=require('../operations/mul')

const router = express.Router();

router.get('/check', (req, res) => {
    res.send("Congratulations! Your app works! :)");
})

router.post('/add', (req, res) => {
    // Add logic here
    try{
        const result = add(req.body.x,req.body.y);
        if(!result.error){
            res.status(200).send(result);
        }
        else{
            throw result;
        }
    }catch(error){
        res.status(400).send(error)
    }
})

router.post('/pow', (req, res) => {
    // Add logic here
    try{
        const result = pow(req.body.x,req.body.y);
        if(!result.error){
            res.status(200).send(result);
        }
        else{
            throw result;
        }
    }catch(error){
        res.status(400).send(error)
    }
})

router.post('/mul', (req, res) => {
    // Add logic here
    try{
        const result = mul(req.body.x,req.body.y);
        if(!result.error){
            res.status(200).send(result);
        }
        else{
            throw result;
        }
    }catch(error){
        res.status(400).send(error)
    }
})

module.exports = router;