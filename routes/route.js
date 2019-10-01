const express = require('express');

const router = express.Router();

router.get('/check', (req, res) => {
    res.send("Congratulations! Your app works! :)");
})

router.get('/add', (req, res) => {
    // Add logic here
    if (req.body.x && req.body.y) {                                         //checking for existance both the numbers
        if ((!isNaN(req.body.x)) && (!isNaN(req.body.y))) {                 //checking for the values for both the numbers
            const addition = parseInt(req.body.x) + parseInt(req.body.y);
            res.status(200).send(`${req.body.x} + ${req.body.y} = ${addition}`);
        } else {
            res.status(400).send('The arguments are not numbers, Please enter valid arguments');
        }
    } else {
        res.status(400).send('Both arguments were not provided, Please provide valid arguments');
    }

})

module.exports = router;