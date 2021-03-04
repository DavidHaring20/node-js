const express = require('express');
const app = express();
app.use(express.static('templates'));

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/templates/home.html");
});


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } 
    console.log("App is running on server port", 8080);
});