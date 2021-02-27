const express = require("express");
const app = express();

// RETURN EMPTY JSON
app.get("/emptyJSON", (req, res) => {
    res.send({});
});

// RETURN SEARCHED QUERY
app.get("/search", (req, res) => {
    res.send({ searchquery: req.query });
});

// TELEGRAM
app.get("/telegram/:message", (req, res) => {
    const messageForClient = req.params;
    res.send({ msg: messageForClient });
});

// NAME PATH VARIABLE
app.get("/telegram/:message/:name", (req, res) => {
    res.send({
        name: req.params.name,
        message: req.params.message
    });
});

app.listen(8080);