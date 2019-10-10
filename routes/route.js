const express = require('express');
 
//Importing Calculator functions
const add=require('../operations/add');
const pow=require('../operations/pow');
const mul=require('../operations/mul');
const div=require('../operations/div')


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

router.post('/div', (req, res) => {
    // Add logic here
    try{
        const result = div(req.body.x,req.body.y);
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

router.post("/power", (req, res) => {
    let param1 = req.body.param1;
    let param2 = req.body.param2;

    res.json({
        result: Math.pow(param1, param2),
        meta: {
            success: true,
            message: `Calculated ${param1} raised to the power ${param2}`,
            code: 200
        }
    });
});

router.post("/factorial", (req, res) => {
    const { param1 } = req.body;

    try {
        let result = parseInt(param1, 10);

        if (result < 0) {
            return res.json({
                meta: {
                    success: false,
                    message: `${param1} is a negative number`,
                    code: 400
                }
            });
        }
        for (let counter = result - 1; counter > 0; counter--) {
            result *= counter;
        }
        res.json({
            result,
            meta: {
                success: true,
                message: `Calculated ${param1} factorial`,
                code: 200
            }
        });
    } catch (err) {
        res.json({
            meta: {
                success: false,
                message: err.message,
                code: 400
            }
        });
    }
});

module.exports = router;
