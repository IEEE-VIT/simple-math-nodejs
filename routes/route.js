const express = require("express");

const router = express.Router();

router.get("/check", (req, res) => {
  res.send("Congratulations! Your app works! :)");
});

router.post("add", (req, res) => {
  // Add logic here
});

router.post('/mul', (req, res) => {
  if (req.body.param1 && req.body.param2) {
    if ((!isNaN(req.body.param1)) && (!isNaN(req.body.param2))) {
      const multi = parseInt(req.body.param1) * parseInt(req.body.param2);
      res.json({
        result: multi,
        meta: {
          success: true,
          message: `${req.body.param1} * ${req.body.param2} = ${multi}`,
          code: 200,
        }
      });
    } else {
      res.json({
        result: null,
        meta: {
          success: false,
          message: 'Both arguments (x, y) must be numbers.',
          code: 400,
        }
      });
    }
  } else {
    res.json({
            result: null,
            meta: {
              success: false,
              message: 'Both arguments (x, y) must be provided.',
              code: 400,
            }
          });
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

router.post("/ceil", (req, res) => {
  try {
    const { param1 } = req.body;

    let result = Math.ceil(parseFloat(param1, 10));
    res.json({
      result,
      meta: {
        success: true,
        message: `Calculated ${param1} ceil`,
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
