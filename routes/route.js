const express = require('express');

const router = express.Router();

router.get('/check', (req, res) => {
    res.send("Congratulations! Your app works! :)");
})

router.post('/add', (req, res) => {
    //ADD LOGIC
    

    //MULTIPLICATION LOGIC
    router.get('/multiply', (req, res) => {
        if (req.body.x && req.body.y) {                                         //checking for existance both the numbers
            if ((!isNaN(req.body.x)) && (!isNaN(req.body.y))) {                 //checking for the values for both the numbers
                const multiplication = parseInt(req.body.x) * parseInt(req.body.y);
                res.status(200).send(`${req.body.x} * ${req.body.y} = ${multiplication}`);
            } else {
                res.status(400).send('The arguments are not numbers, Please enter valid arguments');
            }
        } else {
            res.status(400).send('Both arguments were not provided, Please provide valid arguments');
        }
    })
    
    module.exports = router;
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

module.exports = router;