const express = require('express');

const router = express.Router();

router.get('/check', (req, res) => {
    res.send("Congratulations! Your app works! :)");
})

router.post('add', (req, res) => {
    // Add logic here
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

router.post('/modulo', (req, res) => {
    const param1 = req.body.param1;
    const param2 = req.body.param2;

     res.json({ 
        result: (param1 % param2 + param2) % param2,
        meta: {
            success: true,
            message: `Calculated ${param1} modulo ${param2}`,
            code: 200
        }
    });
})

module.exports = router;