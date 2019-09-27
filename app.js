const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/math', require('./routes/route'));

app.listen(PORT, () => {
    console.log("App started successfully on PORT: ", PORT);
})

module.exports = app;