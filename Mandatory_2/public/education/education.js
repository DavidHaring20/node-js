// Test if the /api/education works 
fetch("/api/education").then(res => res.json()).then(res => console.log(res));