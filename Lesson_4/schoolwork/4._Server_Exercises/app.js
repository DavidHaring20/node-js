const express = require("express");
const app = express();

const versionNumber = "4.17.1";

app.get("/about", (req, res) => {
    res.send({
        "version": versionNumber
    });
});


// TRYING TO SEND A HEADER TAG
app.get("/page", (req, res) => {
    res.send(
        "<h1>WELCOME</h1> "
    );
});
app.listen(8080);