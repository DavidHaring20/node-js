const router = require('express').Router();

/*
    Education schema: 
    Name => educationName (string)
    Description => educationDescription (string)
    Start Date => educationStartDate (date)
    End Date => educationEndDate (date)
*/

const educations = [
    {
        "educationName": "Osnovna škola Podmurvice",
        "educationDescription": "Elementary school",
        "educationStartDate": new Date("September 2007"),
        "educationEndDate": new Date("July 2015")
    },
    {
        "educationName": "Salezijanska klasična gimnazija s pravom javnosti",
        "educationDescription": "High School",
        "educationStartDate": new Date("September 2015"),
        "educationEndDate": new Date("July 2019")
    },
    {
        "educationName": "Københavns Erhvervsakademi (KEA)",
        "educationDescription": "AP Degree in Computer Science",
        "educationStartDate": new Date("September 2019"),
        "educationEndDate": new Date("February 2022")
    }
];

router.get("/api/education", (req, res) => {
    res.send({ educations });
});


module.exports = {
    router
};