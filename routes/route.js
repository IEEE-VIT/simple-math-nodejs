const express = require('express');

const router = express.Router();

router.get('/check', (req, res) => {
    res.send("Congratulations! Your app works! :)");
})

router.post('add', (req, res) => {
    const {param1, param2} = req.body.data;
    const sum = param1+param2;
    res.send({result: sum})
})

module.exports = router;