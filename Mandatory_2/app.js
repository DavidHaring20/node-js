// Imports
const { urlencoded } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();

// Using methods
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers 
const projectsRouter = require("./routes/projects.js");
const educationRouter = require("./routes/education.js")

// App using Routers 
app.use(projectsRouter.router);
app.use(educationRouter.router);

// Components
const header = fs.readFileSync(__dirname + "/public/header/header.html", { encoding: "UTF-8" });

const homeContent = fs.readFileSync(__dirname + "/public/home/index.html", { encoding: "UTF-8" });
const skillsContent = fs.readFileSync(__dirname + "/public/skills/skills.html", { encoding: "UTF-8" });
const projectsContent = fs.readFileSync(__dirname + "/public/projects/projects.html", { encoding: "UTF-8" });
const recommendationsContent = fs.readFileSync(__dirname + "/public/recommendations/recommendations.html", { encoding: "UTF-8" });
const educationContent = fs.readFileSync(__dirname + "/public/education/education.html", { encoding: "UTF-8" });
const contactContent = fs.readFileSync(__dirname + "/public/contact/contact.html", { encoding: "UTF-8" });

const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", { encoding: "UTF-8" });

// Routes
app.get("/", (req, res) => {
    res.send(header + homeContent + footer);
});

app.get("/skills", (req,res) => {
    res.send(header + skillsContent + footer);
});

app.get("/projects", (req,res) => {
    res.send(header + projectsContent + footer);
});

app.get("/recommendations", (req,res) => {
    res.send(header + recommendationsContent + footer);
});

app.get("/education", (req,res) => {
    res.send(header + educationContent + footer);
});

app.get("/contact", (req,res) => {
    res.send(header + contactContent + footer);
});

// Setting up the server
app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } 
    console.log("App is running on address --> localhost:8080/");
});