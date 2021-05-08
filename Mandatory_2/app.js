// Imports
const { urlencoded } = require('express');
const nodemailer = require('nodemailer');
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

// Sending an email 
    app.post("/sendEmail", (req, res) => {
        // Get all user input
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.emailAddress;
        const subject = req.body.subject;
        const message = req.body.message;

        // Generate email
        const output = `
            You have new e-mail from: ${firstName} ${lastName}. 
            Subject: ${subject}
            E-mail Body: ${message}

            Sender's e-mail Address: ${email}
        `; 

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, 
            auth: {
              user: 'test4contactpage@gmail.com', 
              pass: 'test4contactpage123?*', 
            },
          });
        
          // send mail with defined transport object
          let info = transporter.sendMail({
            from: '"Node.js Contacter " <test4contactpage@gmail.com>', // sender address
            to: "davidharingri@gmail.com", // receiver
            subject: "Portofolio Contact me", // Subject line
            text: output // plain text body
          });
        
          console.log("Message sent: %s", output);
        res.redirect('/contact');
    });

// Setting up the server
app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } 
    console.log("App is running on address --> localhost:8080/");
});