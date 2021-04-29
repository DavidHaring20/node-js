// Test if the /api/education works 
// fetch("/api/education").then(res => res.json()).then(res => console.log(res));

(async function getEducationFromApi() {
    try {
        const response = await fetch("/api/education");
        const result = await response.json();

        const educationsDiv = document.getElementById('education-list');

        result.educations.map(education => {
            const educationDiv = document.createElement('div');
            educationDiv.classList.add('education');

            // Education name
            const educationName = document.createElement('h2');
            educationName.classList.add('education-name');
            educationName.innerText = education.educationName;

            // Education description
            const educationDescription = document.createElement('p');
            educationDescription.classList.add('education-description');
            educationDescription.innerText = education.educationDescription;

            // Education start date 
            const educationStartDate = document.createElement('p');
            educationStartDate.classList.add('education-start-date');
            const startDate = new Date (education.educationStartDate).toDateString();
            educationStartDate.innerText = startDate;

            // Education end date
            const educationEndDate = document.createElement('p');
            educationEndDate.classList.add('education-end-date');
            const endDate = new Date (education.educationEndDate).toDateString();
            educationEndDate.innerText = endDate;

            const educationBorderDiv = document.createElement('div');
            educationBorderDiv.classList.add('education-border-div');

            educationBorderDiv.appendChild(educationName);
            educationBorderDiv.appendChild(educationDescription);
            educationBorderDiv.appendChild(educationStartDate);
            educationBorderDiv.appendChild(educationEndDate);
            educationDiv.appendChild(educationBorderDiv);
            educationsDiv.appendChild(educationDiv);
        });
    } catch (error) {
        console.log(error);
    }
})();