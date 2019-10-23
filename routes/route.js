const express = require("express");

const router = express.Router();

router.get("/check", (req, res) => {
  res.send("Congratulations! Your app works! :)");
});

router.post("add", (req, res) => {
  // Add logic here
  res.send("sum can be printed here");
});
// hacktoberfest2019
router.post("/power", (req, res) => {
  let darthvader = req.body.darthvader;
  let param2 = req.body.param2;
  
  res.json({
    result: Math.pow(darthvader, param2),
    meta: {
      success: true,
      message: `Calculated ${} raised to the power ${param2}`,
      code: 200
    }
  });
});

router.post("/factorial", (req, res) => {
  const { darthvader } = req.body;

  try {
    let result = parseInt(darthvader, 10);

    if (result < 0) {
      return res.json({
        meta: {
          success: false,
          message: `${darthvader} is a negative number`,
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
        message: `Calculated ${darthvader} factorial`,
        code: 200
      }
    }); //hacktoberfest2019
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
    const { darthvader } = req.body;

    let result = Math.ceil(parseFloat(darthvader, 10));
    res.json({
      result,
      meta: {
        success: true,
        message: `Calculated ${darthvader} ceil`,
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
