const express = require("express");
const app = express();

const PORT = process.env.port || 8080;
const animes = 
[
    {
        id: 1,
        title: "Naruto",
        protagonist: "Naruto",
        grade: 5
    },
    {
        id: 2,
        title:"Attack on Titan",
        protagonist: "Eren Jeager",
        grade: 4
    },
    {
        id: 3,
        title: "Yu-Gi-Oh GX",
        protagonist: "Jayden Yuki",
        grade: 4.5
    }
];

app.get("/", (req, res) => {
    res.send(
        { hello: "Greeting"
    });
});

app.get("/animes", (req, res) => {
    res.send({
        animes: animes
    });
});

app.get("/animes/:id", (req, res) => {
    const id = req.params.id;
    const wantedAnime = animes.find(anime => anime.id == id);

    res.send({
        animeById: wantedAnime
    });
})

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } 
    console.log("App is running on port", Number(PORT));
});