const express = require('express');
const app = express();
app.use(express.static('assets'));
app.use(express.static('styles'));

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/templates/home.html");
});

app.get("/lesson_1", (req, res) => {
    res.sendFile(__dirname + "/templates/lesson_1.html");
});

app.get("/lesson_2", (req, res) => {
    res.sendFile(__dirname + "/templates/lesson_2.html");
});

app.get("/lesson_3", (req, res) => {
    res.sendFile(__dirname + "/templates/lesson_3.html");
});

app.get("/lesson_4", (req, res) => {
    res.sendFile(__dirname + "/templates/lesson_4.html");
});

app.get("/lesson_5", (req, res) => {
    res.sendFile(__dirname + "/templates/lesson_5.html");
});

app.get("/lesson_6", (req, res) => {
    res.sendFile(__dirname + "/templates/lesson_6.html");
});

app.get("/lesson_7", (req, res) => {
    res.sendFile(__dirname + "/templates/lesson_7.html");
});

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } 
    console.log("App is running on server port " + 8080);
    console.log("Go here to see the home web page: " + "localhost:8080/home");
});