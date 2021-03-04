const express = require("express");
const app = express();

const scorpion = require("./scorpion.json");

app.listen(8080, (error) => {
    console.log("Server is running on: " + 8080);
    console.log(scorpion);
});