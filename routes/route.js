const express = require('express');

const router = express.Router();

router.get('/check', (req, res) => {
    res.send("Congratulations! Your app works! :)");
})

router.post('add', (req, res) => {
    // Add logic here
})

router.post('subtract', (req, res) => {
    try {
        const {param1, param2} = req.body.data;
        const difference = parseFloat(param1) - parseFloat(param2);
        res.status(200).send({ result: difference });
    } catch (error) {
        res.status(400).send(error);
    }
    
})

module.exports = router;