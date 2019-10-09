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

router.post("/factorial", (req, res) => {
    let param = req.body.param;

    if (param < 0) {

        res.json({
            result: NaN,
            meta: {
                success: false,
                message: `Number should be greater than or equal to 0`,
                code: 400
            }
        });

    }

    let fact = 1;

    for (var i = 2; i <= param; i++) {
        fact = fact * i;
    }

    res.json({
        result: fact,
        meta: {
            success: true,
            message: `Calculated factorial of ${param}`,
            code: 200
        }
    });
});

module.exports = router;