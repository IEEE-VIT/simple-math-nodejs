const express = require('express');

const router = express.Router();

router.get('/check', (req, res) => {
    res.send("Congratulations! Your app works! :)");
})

router.post('/add', (req, res) => {
    let param1 = req.body.param1;
    let param2 = req.body.param2;
    
    if (isNaN(param1) || isNaN(param2)) {
        res.json({
            result: undefined,
            meta: {
                success: false,
                message: 'Both operands should be numeric',
                code: 501
            }
        });
    }
    else {
        res.json({
            result: param1 + param2,
            meta: {
                success: true,
                message: `Calculated the sum of ${param1} and ${param2}`,
                code: 200
            }
        });
    }
})


router.post('/multiply', (req, res) => {
    let param1 = req.body.param1;
    let param2 = req.body.param2;

    if (isNaN(param1) || isNaN(param2)) {
        res.json({
            result: undefined,
            meta: {
                success: false,
                message: 'Both operands should be numeric',
                code: 501
            }
        });
    }
    else {
        res.json({
            result: param1 * param2,
            meta: {
                success: true,
                message: `Calculated the product of ${param1} and ${param2}`,
                code: 200
            }
        });
    }
})


router.post('/divide', (req, res) => {
    let param1 = req.body.param1;
    let param2 = req.body.param2;

    if (isNaN(param1) || isNaN(param2) || param2 == 0) {
        res.json({
            result: undefined,
            meta: {
                success: false,
                message: 'Both operands should be numeric, second operand should not be 0',
                code: 501
            }
        });
    }
    else {
        res.json({
            result: param1 / param2,
            meta: {
                success: true,
                message: `Calculated the quotient of ${param1} divided ${param2}`,
                code: 200
            }
        });
    }
})

router.post('/subtract', (req, res) => {
    let param1 = req.body.param1;
    let param2 = req.body.param2;

    if (isNaN(param1) || isNaN(param2)) {
        res.json({
            result: undefined,
            meta: {
                success: false,
                message: 'Both operands should be numeric',
                code: 501
            }
        });
    }
    else {
        res.json({
            result: param1 - param2,
            meta: {
                success: true,
                message: `Calculated the difference between ${param1} and ${param2}`,
                code: 200
            }
        });
    }
    
})
router.post("/power", (req, res) => {
    let param1 = req.body.param1;
    let param2 = req.body.param2;

    
    if (isNaN(param1) || isNaN(param2)) {
        res.json({
            result: undefined,
            meta: {
                success: false,
                message: 'Both operands should be numeric',
                code: 501
            }
        })
    }
    else {
        res.json({
            result: Math.pow(param1, param2),
            meta: {
                success: true,
                message: `Calculated ${param1} raised to the power ${param2}`,
                code: 200
            }
        });
    }
});

module.exports = router;