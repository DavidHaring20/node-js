const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Home Page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/views/frontpage.html");
});

// Projects
app.get("/projects", (req, res) => {
    res.sendFile(__dirname + "/public/views/projects.html");
});

// Contacts
app.get("/contacts", (req, res) => {
    res.sendFile(__dirname + "/public/views/contacts.html");
});
app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }

    console.log("App is running on port: " + 8080);
});