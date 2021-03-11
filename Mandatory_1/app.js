const express = require('express');
const app = express();
app.use(express.static('templates'));

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/templates/home.html");
});

app.get("/pourMeSomeWhiskey/:money", (req, res) => {
    const money = req.params.money;

    console.log("I am here.");
    
    if (money > 5) {
        res.send({
            msg: "Here you are lad"
        });
    } else {
        res.send({
            msg: "Get out"
        });
    }
});

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } 
    console.log("App is running on server port", 8080);
});