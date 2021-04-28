// Test if the /api/projects worls 
// fetch("/api/projects").then(res => res.json()).then(res => console.log(res));

(async function getProjectsFromApi() {
    try {
        const response = await fetch("/api/projects");
        const result = await response.json();

        const projectsDiv = document.getElementById('project-list');

        result.projects.map(project => {
            const projectDiv = document.createElement('div');
            
            // Project title 
            const projectTitle = document.createElement('h3');
            projectTitle.classList.add('project-title');
            projectTitle.innerText = project.projectTitle;

            // Project description
            const projectDescription = document.createElement('p');
            projectDescription.classList.add('project-description');
            projectDescription.innerText = project.projectDescription;

            // Project type
            const projectType = document.createElement('p');
            projectType.classList.add('project-type');
            projectType.innerText = project.projectType;

            // Project tech used
            const projectTechUsed = document.createElement('p');
            projectTechUsed.classList.add('project-tech-used');
            
            // let techUsed = "";
            // for (tech in project.projectTechUsed) {
            //     techUsed += project.projectTechUsed[tech] + "\n";
            // }
            // projectTechUsed.innerText = techUsed;

            let lengthForTech = 0;
            for (tech in project.projectTechUsed) {
                lengthForTech++;
            }

            let techUsed = "";
            for (tech in project.projectTechUsed) {
                techUsed += project.projectTechUsed[tech];
                lengthForTech--;

                if (lengthForTech > 0) {
                    techUsed += " | ";
                }
            }
            projectTechUsed.innerText = techUsed;

            // Project languages
            const projectLanguages = document.createElement('p');
            projectLanguages.classList.add('project-languages');
            
            let lengthForLanguages = 0;
            for (lang in project.projectLanguages) {
                lengthForLanguages++;
            }

            let languagesUsed = "";
            for (lang in project.projectLanguages) {
                languagesUsed += project.projectLanguages[lang];
                lengthForLanguages--;

                if (lengthForLanguages > 0) {
                    languagesUsed += ", ";
                }
            }
            projectLanguages.innerText = languagesUsed;

            // Project start date
            const projectStartDate = document.createElement('p');
            projectStartDate.classList.add('project-start-date');
            const startDate = new Date(project.projectStartDate).toDateString();
            projectStartDate.innerText = startDate;

            // Project end date
            const projectEndDate = document.createElement('p');
            projectEndDate.classList.add('project-end-date');
            const endDate = new Date(project.projectEndDate).toDateString();
            projectEndDate.innerText = endDate;

            // Project git link 
            const projectGitLink = document.createElement('a');
            projectGitLink.classList.add('project-git-link');
            const linkText = document.createTextNode("Check on GitHub");
            projectGitLink.appendChild(linkText);
            projectGitLink.title = "Check on GitHub";
            projectGitLink.href = project.projectGitLink;

            // Project image link
            const projectImageLink = document.createElement('img');
            projectImageLink.classList.add('project-image');
            projectImageLink.setAttribute('src', project.projectImageLink);
            projectImageLink.setAttribute('alt', "Folder picture.");

            projectDiv.appendChild(projectTitle);
            projectDiv.appendChild(projectDescription);
            projectDiv.appendChild(projectType);
            projectDiv.appendChild(projectTechUsed);
            projectDiv.appendChild(projectLanguages);
            projectDiv.appendChild(projectStartDate);
            projectDiv.appendChild(projectEndDate);
            projectDiv.appendChild(projectGitLink);
            projectDiv.appendChild(projectImageLink);
            projectsDiv.appendChild(projectDiv);
        });


    } catch (error) {
        console.log(error);
    }
})();
