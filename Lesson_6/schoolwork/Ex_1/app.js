const express = require("express");
const app = express();
app.use(express.json());

const PORT = 8080;

let animes = 
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
let autoincrement = animes.length;

// METHOD TO CHECK IF IT WORKS
app.get("/", (req, res) => {
    res.send({ 
        hello: "Greeting"
    });
});

// GET ALL ANIMES
app.get("/animes", (req, res) => {
    res.send({
        animes: animes
    });
});

// HAD PROBLEMS HERE BECAUSE req.params RETRIEVES EVERYTHING AS A STRING. YOU NEED TO ENFORCE DATA TYPE 
// IF YOU WANT TO PERFORM SOME OPERATIONS AS INTEGER WITH THE DATA THAT IS RETRIEVED BY USING req.params
// app.get("/animes/:id", (req, res) => {
//     const id = req.params.id;
//     const wantedAnime = animes.find(anime => anime.id == id);

//     res.send({
//         animeById: wantedAnime
//     });
// })

// GET A SPECIFIC ANIME USING ID
app.get("/animes/:id", (req, res) => {
    const id = Number(req.params.id);
    const wantedAnime = animes.find(anime => anime.id === id);

    res.send({ wantedAnimeById: wantedAnime });
});

// CREATE NEW ANIME
app.post("/animes", (req, res) => {
    let newAnime = {};
    newAnime.id = ++autoincrement;
    newAnime.title = req.body.title;
    newAnime.protagonist = req.body.protagonist;
    newAnime.grade = req.body.grade;
    console.log(req.body);
    
    animes.push(newAnime);
    
    res.send({ data: newAnime});
});

// DELETE AN ANIME BY ID
app.delete("/animes/:id", (req, res) => {
    const id = Number(req.params.id);
    const deletedAnime = animes.find(anime => anime.id === id);
    animes = animes.filter(anime => anime.id !== id);
    
    res.send({ deletedAnime });
});

// UPDATE A PART OF A RESOURCE WHICH IS SELECTEY BY AN ID
app.patch("/animes/:id", (req, res) => {
    const id = Number(req.params.id);

    animes = animes.map(anime => {
        if (anime.id === id) {
            return { ...anime, ...req.body, id: anime.id};
        }
        return anime;
    });

    res.send({ message: "updated" });
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } 
    console.log("App is running on port", Number(PORT));
});