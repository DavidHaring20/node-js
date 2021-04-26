const router = require('express').Router();

/* 
    Project schema:
    Title => projectTitle (string)
    Description => projectDescription (string)
    Type => projectType (string)
    Tech Used => projectTechUsed (array)
    Languages => projectLanguages (array)
    Start Date => projectStartDate (date)
    End Date => projectEndDate (date)
    GitHub Link => projectGitLink (string)
*/

const projects = [
    {
        "projectTitle": "Bike Shop",
        "projectDescription": "Developed a Web App for Bike Shop. Web App enables for efficient management of Bike Shop inventory.",
        "projectType": "Exam Project",
        "projectTechUsed": {
            "technology1": "Postman",
            "technology2": "Google Docs",
            "technology3": "Git",
            "technology4": "AdobeXD",
            "technology5": "IntelliJ",
            "technology6": "MySQL Workbench"
        },
        "projectLanguages": {
            "language1": "Java",
            "language2": "MySQL",
            "language3": "JavaScript",
            "language4": "HTML5",
            "language5": "CSS3"
        },
        "projectStartDate": new Date("October 9, 2020"),
        "projectEndDate": new Date("November 5, 2020"),
        "projectGitLink": "https://github.com/DavidKrtolica/DnDcykler"
    },
    {
        "projectTitle": "Social Media App",
        "projectDescription": "Developed a Web App which imitates social media platform, but on much smaller scale. Has some elementary features like logging in, adding and removing friends and making posts.",
        "projectType": "Exam Project",
        "projectTechUsed": {
            "technology1": "Google Docs",
            "technology2": "Git and GitKraken",
            "technology3": "Microsoft Excel",
            "technology4": "Adobe XD",
            "technology5": "MySQL Workbench",
            "technology6": "Visual Paradigm",
            "technology7": "Thymeleaf",
            "technology8": "IntelliJ"
        },
        "projectLanguages": {
            "language1": "Java",
            "language2": "MySql",
            "language3": "CSS3",
            "language4": "HTML5"
        },
        "projectStartDate": new Date("November 15, 2020"),
        "projectEndDate": new Date("December 18, 2020"),
        "projectGitLink": "https://github.com/DavidKrtolica/SocialMediaApp",
    },
    {
        "projectTitle": "Nordic Motorhome Rental",
        "projectDescription": "Developed a Web App that makes handling renting of the Motorhomes more efficient. Implemented CRUD on Motorhomes, Contracts and Renting Persons. Also implemented calculating prices based on many different factors.",
        "projectType": "Exam Project",
        "projectTechUsed": {
            "technology1": "Google Docs",
            "technology2": "MySQL Workbench",
            "technology3": "Visual Paradigm",
            "technology4": "IntelliJ"
        },
        "projectLanguages": {
            "language1": "Java",
            "language2": "MySQL",
            "language3": "CSS3",
            "language4": "HTML5"
        },
        "projectStartDate": new Date("July 2, 2020"),
        "projectEndDate": new Date("June 3, 2020"),
        "projectGitLink": "https://github.com/nirenrawal/NordicMotorhomeProject"
    },
    {
        "projectTitle": "Roskilde Daycare",
        "projectDescription": "Developed a Web App that makes interaction with Daycare much easier. Managing the Daycare groups and Employees responsible for each group.",
        "projectType": "Mandatory Project",
        "projectTechUsed": {
            "technology1": "MySQL Workbench",
            "technology2": "Git",
            "technology3": "IntelliJ",
            "technology4": "Visual Paradigm",
            "technology5": "Google Docs"
        },
        "projectLanguages": {
            "language1": "Java",
            "language2": "MySQL",
            "language3": "HTML5",
            "language4": "CSS3"
        },
        "projectStartDate": new Date("March 19, 2020"),
        "projectEndDate": new Date("March 26, 2020"),
        "projectGitLink": "https://github.com/mana998/RoskildeDayCare"
    }
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
};