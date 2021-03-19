const express = require('express');
const app = express();

app.get("/candle/:action", (req, res) => {
    const action = req.params.action;
    if (action === "blow") {
        res.send({ lightsOn: false }); 
    } else {
        res.send({ lightsOn: true});
    }
});


app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("App is running on port: " + 8080);
});