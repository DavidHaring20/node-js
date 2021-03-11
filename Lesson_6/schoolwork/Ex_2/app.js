const { response } = require("express");
const express = require("express");
const app = express();

const PORT = 8080;
delete process.env.myEnvVariable;
console.log(process.env);

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