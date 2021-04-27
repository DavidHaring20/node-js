// Test if the /api/projects worls 
// fetch("/api/projects").then(res => res.json()).then(res => console.log(res));

(async function getProjectsFromApi() {
    try {
        const response = await fetch("/api/projects");
        const result = await response.json();

        const projectsDiv = document.getElementById('project-list');

        result.projects.map(project => {
            const projectDiv = document.createElement('div');
            
            const projectTitle = document.createElement('h3');
            projectTitle.classList.add('project-title');
            projectTitle.innerText = project.projectTitle;

            const projectDescription = document.createElement('p');
            projectDescription.classList.add('project-description');
            projectDescription.innerText = project.projectDescription;

            const projectType = document.createElement('p');
            projectType.classList.add('project-type');
            projectType.innerText = project.projectType;

            const projectTechUsed = document.createElement('p');
            projectTechUsed.classList.add('project-tech-used');
            
            let techUsed = "";
            for (tech in project.projectTechUsed) {
                techUsed += project.projectTechUsed[tech] + "\n";
            }
            projectTechUsed.innerText = techUsed;

            const projectLanguages = document.createElement('p');
            projectLanguages.classList.add('project-languages');
            
            let languagesUsed = "";
            for (lang in project.projectLanguages) {
                languagesUsed += project.projectLanguages[lang] + ", ";
            }
            projectLanguages.innerText = languagesUsed;

            const projectStartDate = document.createElement('p');
            projectStartDate.classList.add('project-start-date');
            projectStartDate.innerText = project.projectStartDate;

            const projectEndDate = document.createElement('p');
            projectEndDate.classList.add('project-end-date');
            projectEndDate.innerText = project.projectEndDate;

            const projectGitLink = document.createElement('a');
            projectGitLink.classList.add('project-git-link');
            projectGitLink.innerText = "Check out on GitHub";
            //= project.projectGitLink;

            projectDiv.appendChild(projectTitle);
            projectDiv.appendChild(projectDescription);
            projectDiv.appendChild(projectType);
            projectDiv.appendChild(projectTechUsed);
            projectDiv.appendChild(projectLanguages);
            projectDiv.appendChild(projectStartDate);
            projectDiv.appendChild(projectEndDate);
            projectDiv.appendChild(projectGitLink);
            projectsDiv.appendChild(projectDiv);
        });


    } catch (error) {
        console.log(error);
    }
})();
