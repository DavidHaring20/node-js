const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({message: "First call to /" });
});

app.listen(8080);

