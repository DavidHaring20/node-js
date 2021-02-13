const express = require("express");
const app = express();
var id = 1;

app.get("/cars", (req, res) => {
    res.send({message: "This is list of all cars: " });
});

app.get("/cars/" + id, (req, res) => {
    res.send({message: "You have searched for car with ID: " + id});
});

app.listen(8080);