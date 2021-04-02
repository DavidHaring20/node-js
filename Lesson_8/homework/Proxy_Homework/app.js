const fetch = require('node-fetch');
const express = require('express');
const app = express();

let homePage = "";

(async function() {
    const response = await fetch('https://google.com');
    const res = await response.text();
    homePage = await res;
})()
// GET GOOGLE HOME PAGE


app.get('/proxy', (req, res) => {
    res.send("\"" + homePage + "\"");
});

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("App is running on port: " + 8080);
});