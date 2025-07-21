function addField(section) {
  const container = document.getElementById(`${section}-container`);

  const label = document.createElement("div");
  label.innerText = getPlaceholderText(section);
  label.style.fontSize = "12px";
  label.style.color = "#666";
  label.style.marginBottom = "4px";

  const textarea = document.createElement("textarea");
  textarea.classList.add(section);
  textarea.placeholder = getPlaceholderText(section);

  container.appendChild(label);
  container.appendChild(textarea);
}
function getPlaceholderText(section) {
  switch (section) {
    case "education":
      return "Institute Name||Course||Marks||Location||Duration";
    case "projects":
      return "Project Title||Brief Description";
    case "certification":
      return "Course Title||Platform||Certificate URL";
    case "hobbies":
      return "Hobby (e.g., Drawing, Coding)";
    default:
      return section.charAt(0).toUpperCase() + section.slice(1);
  }
}



function saveAndRedirect() {
  // Basic text inputs
  const fields = ["name", "email", "phone", "linkedin", "github", "skills","about"];
  fields.forEach(id => {
    const value = document.getElementById(id)?.value.trim();
    localStorage.setItem(id, value || "");
  });

  // Education (array of <textarea class="education">)
  const education = Array.from(document.getElementsByClassName("education"))
    .map(el => el.value.trim()).filter(Boolean);
  localStorage.setItem("education", JSON.stringify(education));

  // Projects (array of <textarea class="projects">)
  const projects = Array.from(document.getElementsByClassName("projects"))
  .map(el => el.value.trim()).filter(Boolean);

  localStorage.setItem("projects", JSON.stringify(projects));


  // Certifications
  const certifications = Array.from(document.getElementsByClassName("certification"))
    .map(el => el.value.trim()).filter(Boolean);
  localStorage.setItem("certifications", JSON.stringify(certifications));

  // Hobbies
  const hobbies = Array.from(document.getElementsByClassName("hobbies"))
    .map(el => el.value.trim()).filter(Boolean);
  localStorage.setItem("hobbies", JSON.stringify(hobbies));

  // Redirect to preview
  window.location.href = "preview.html";
}

