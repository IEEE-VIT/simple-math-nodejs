const express = require('express');

const router = express.Router();

router.get('/check', (req, res) => {
  res.send('Congratulations! Your app works! :)');
});

router.post('/add', (req, res) => {
  // Add logic here
});

router.post('/mul', (req, res) => {
  const { param1, param2 } = req.body;
  const mul = param1 * param2;
  res.json({
    result: mul,
  });
});

module.exports = router;
