const express = require('express');
const app = express();

console.log(__dirname);

app.get("/catFact", (req, res) => {
    res.sendFile(__dirname + "/public/catFacts.html");
});

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("App is running on port: " + 8080);
});