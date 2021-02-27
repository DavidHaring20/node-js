const express = require("express");
const app = express();

// VARIABLES FOR GETTING TIME
const now = new Date();
const hoursNow = now.getHours();
const minutesNow = now.getMinutes();
const secondsNow = now.getSeconds();

// VARIABLES FOR GETTING DAY
const dayNow = now.getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const nameOfTheDay = days[dayNow];

// VARIABLES FOR GETTING MONTH
const monthNow = now.getMonth();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const nameOfTheMonth = months[monthNow];

// ROUTE WHICH GIVES TIME
app.get("/time", (req, res) => {
    res.send({
        time: hoursNow + ":" + minutesNow + ":" + secondsNow
    });
});

// ROUTE WHICH GIVES DAY
app.get("/day", (req, res) => {
    res.send({
        day: nameOfTheDay
    });
});

// ROUTE WHICH GIVES MONTH 
app.get("/month", (req, res) => {
    res.send({
        month: nameOfTheMonth
    });
});

app.listen(8080);