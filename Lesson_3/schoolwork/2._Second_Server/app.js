const express = require("express");
const app = express();

// SENDS BACK EMPTY JSON 
app.get("/", (req, res) => {
    res.send({});
})

// SENDS BACK INFORMATION ABOUT ME 
app.get("/me", (req, res) => {
    res.send({
        name: "David",
        age: 10, 
        hobby: "learning Javascript",
        nodemonWorking: "YES"
    });
});
app.listen(8080);