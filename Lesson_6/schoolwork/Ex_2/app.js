const { response } = require("express");
const express = require("express");
const app = express();

const PORT = process.env.port;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/pizzaParlor", (req, res) => {
    res.sendFile(__dirname + "/views/pizzaParlor.html");
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("App is running on port", Number(PORT));
});