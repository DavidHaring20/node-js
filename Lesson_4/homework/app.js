const express = require("express");
const app = express();

// MAKE ARRAY OF CARS FOR TESTING PURPOSES 
let cars = ["Lamborghini", "Ferrari", "BMW", "Mercedes", "Lotus", "Aston Martin", "Porsche", "Bugatti"];

// GET Http Methods 
// GET ALL CARS
// localhost:8080/cars
app.get("/cars", (req, res) => {
    res.send({
        cars: cars  
    });    
});

// GET CAR BY ID
// localhost:8080/cars/5
app.get("/cars/:id", (req, res) => {
    let carId = req.params.id;
    let carById = cars[carId];

    res.send({
        carById: carById
    });
});

// POST Http Methods
// CREATE 3 CARS SIMULTANEOUSLY
// THIS MUST BE WRITTEN IN POSTMAN AND HAVE POST REQUEST AND THIS IS BODY
// localhost:8080/cars/Bentley/McLaren/Subaru
app.post("/cars/:car1/:car2/:car3", (req, res) => {
    let car1 = req.params.car1;
    let car2 = req.params.car2;
    let car3 = req.params.car3;

    cars.push(car1);
    cars.push(car2);
    cars.push(car3);

    res.redirect("/cars")
});

// CREATE 1 CAR
// THIS MUST BE WRITTEN IN POSTMAN AND HAVE POST REQUEST AND THIS IS BODY
// localhost:8080/cars/Peugeot
app.post("/cars/:car1", (req, res) => {
    let car1 = req.params.car1;
    
    cars.push(car1);

    res.redirect("/cars");
});

// PUT Http Methods
// UPDATE 1 CAR
app.put("/cars/:id/:newCar", (req, res) => {
    let index = req.params.id;
    let newName = req.params.newCar;
    
    cars.splice(index, 1, newName);
    
    res.redirect("/cars");
});

// DELETE Http Methods
// DELETE ALL 
// THIS MUST BE WRITTEN IN POSTMAN AND HAVE POST REQUEST AND THIS IS BODY
// localhost:8080/cars
app.delete("/cars", (req, res) => {
    let deleteCount = cars.length;

    cars.splice(0, deleteCount);

    res.redirect("/cars");
});

// DELETE 1 CAR
// THIS MUST BE WRITTEN IN POSTMAN AND HAVE POST REQUEST AND THIS IS BODY
// localhost:8080/cars/2
app.delete("/cars/:id", (req, res) => {
    let id = req.params.id; 
    
    cars.splice(id, 1);

    res.redirect("/cars");
});

app.listen(8080);