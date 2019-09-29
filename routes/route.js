const express = require('express');

const router = express.Router();

router.get('/check', (req, res) => {
    res.send("Congratulations! Your app works! :)");
})

router.post('add', (req, res) => {
    // Add logic here
})

router.post('/mul', (req, res) => {
    if (req.body.x && req.body.y) {
        if ((!isNaN(req.body.x)) && (!isNaN(req.body.y))) {
            const multi = parseInt(req.body.x) * parseInt(req.body.y);
            res.status(200).send(`${req.body.x} * ${req.body.y} = ${multi}`);
        } else {
            res.status(400).send('Both arguments (x, y) must be numbers.');
        }
    } else {
        res.status(400).send('Both arguments (x, y) must be provided.');
    }
})

module.exports = router;
