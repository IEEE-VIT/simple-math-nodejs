const express = require('express');

const router = express.Router();

router.get('/check', (req, res) => {
    res.send("Congratulations! Your app works! :)");
})

router.post('add', (req, res) => {
    // Add logic here
})

router.post('/subtract', (req, res) => {
    const param1 = req.body.param1;
    const param2 = req.body.param2;

    res.json({ 
        result: parseFloat(param1) - parseFloat(param2),
        meta: {
            success: true,
            message: `Calculated ${param1} subtracted by ${param2}`,
            code: 200
        }
    });
})

module.exports = router;