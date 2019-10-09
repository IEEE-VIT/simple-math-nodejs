const express = require('express');

const router = express.Router();

router.get('/check', (req, res) => {
    res.send("Congratulations! Your app works! :)");
})

router.post('modulo', (req, res) => {
    try {
	    const x = parseInt(req.body.x);
	    const y = parseInt(req.body.y);

	    const result = x%y;
	    isError = !result.error;

	    if( isError ) {
		    res.status(200).send(result);
	    }
	    else {
		    throw result;
	    }
		  
    } catch(error) {
	    res.status(400).send(error);
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

module.exports = router;
