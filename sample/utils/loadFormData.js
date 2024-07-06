export let loadFormData = () => {
    console.log("Loading Form Data");
    try {
        const formData = JSON.parse(localStorage.getItem("formData")) || {};

        document.getElementById("first-name").value = formData.firstName || '';
        document.getElementById("last-name").value = formData.lastName || '';
        document.getElementById("skills").value = formData.skills || '';
        document.getElementById("experiences").value = formData.experiences || '';
        document.getElementById("projects").value = formData.projects || '';
        document.getElementById("certifications").value = formData.certifications || '';
        console.log("Successfully loaded Form Data")
    } catch (error) {
        console.error("Error loading form data:", error); 
    }
}