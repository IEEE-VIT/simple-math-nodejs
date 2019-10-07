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

router.post("/nthroot", (req, res) => {

    // param1 - Number
    // param2 - n in n-th root

    let param1 = req.body.param1;
    let param2 = req.body.param2;

    res.json({
        result: Math.pow(param1, 1/param2),
        meta: {
            success: true,
            message: `Calculated ${param2}-th root of ${param1}`,
            code: 200
        }
    });
});

router.post("/log", (req, res) => {

    // param1 - Number
    // param2 - n in log to the base n. This is optional. If you don't put it, then, it's going to be natural log

    let param1 = req.body.param1;
    let param2 = req.body.param2;

    res.json({
        result: param2 ? Math.log(param1)/Math.log(param2) : Math.log(param1),
        meta: {
            success: true,
            message: `Calculated log to the base ${param2} of ${param1}`,
            code: 200
        }
    });
});

module.exports = router;