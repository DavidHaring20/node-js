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


            projectDiv.appendChild(projectTitle);
            projectDiv.appendChild(projectDescription);
            projectDiv.appendChild(projectType);
            projectDiv.appendChild(projectTechUsed);
            projectsDiv.appendChild(projectDiv);
        });


    } catch (error) {
        console.log(error);
    }
})();
