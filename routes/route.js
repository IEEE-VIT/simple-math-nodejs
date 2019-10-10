const express = require('express');

const router = express.Router();

router.get('/check', (req, res) => {
    res.send("Congratulations! Your app works! :)");
})

router.post('/add', (req, res) => {
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
