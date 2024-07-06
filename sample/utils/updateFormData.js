export let updateFormData = () => {
    let formData = {
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        skills: document.getElementById("skills").value,
        experiences: document.getElementById("experiences").value,
        projects: document.getElementById("projects").value,
        certifications: document.getElementById("certifications").value,
        jobdescription: document.getElementById("jobdescription").value
      };
      localStorage.setItem("formData", JSON.stringify(formData));

      console.log("Updating Form Data\n" + JSON.parse(localStorage.getItem("formData")))
}