const express = require("express");
const app = express();

let animeArray = [
    {
        id: 1,
        title: "Attack on Titan",
        protagonist: "Eren Jeager"
    },
    {
        id: 2,
        title: "One Punch Man",
        protagonist: "Saitama"
    }
];

// IMPLEMENTATION OF GET METHOD FOR EVERYTHING
app.get("/anime_names", (req, res) => {
    res.send({
        animes: animeArray
    });
});

// IMPLEMENTATION OF GET METHOD FOR SPECIFIC ID
app.get("/anime_names/:id", (req, res) => {
    const id = req.params.id;
    const animeById = animeArray.find(anime => anime.id == id);

    res.send({
        id: id,
        animeById: animeById
    });
});

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("App is running on port", 8080);
    }
});