const preview = document.getElementById("resume-preview");
const codeBox = document.getElementById("generated-code");


// Load data from localStorage
const name = localStorage.getItem("name");
const email = localStorage.getItem("email");
const phone = localStorage.getItem("phone");
const linkedin = localStorage.getItem("linkedin");
const github = localStorage.getItem("github");
const about = localStorage.getItem("about");
const skills = localStorage.getItem("skills")?.split(",") || [];
const education = JSON.parse(localStorage.getItem("education")) || [];
const projects = JSON.parse(localStorage.getItem("projects")) || [];
const certifications = JSON.parse(localStorage.getItem("certifications")) || [];
const hobbies = JSON.parse(localStorage.getItem("hobbies")) || [];



const resumeHTML = `

  <style>
    body {
  margin: 0;
  padding: 0;
}

#resume-preview {
  padding: 20px;
  margin: 0;
}
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px;
}

.preview-container {
  max-width: 900px;
  margin: auto;
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.resume-template h1 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 5px;
}

.resume-template p {
  text-align: center;
  margin: 2px 0;
  color: #555;
}

.resume-section {
  margin-top: 30px;
}

.resume-section h2 {
  font-size: 20px;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 6px;
  margin-bottom: 10px;
}

.resume-section ul {
  list-style: disc;
  padding-left: 20px;
}

.resume-section ul li {
  margin-bottom: 6px;
  color: #333;
}
  .resume-header {
  text-align: center;
  margin-bottom: 20px;
}

.resume-header h1 {
  font-size: 2em;
  margin: 0;
  color: #222;
}

.resume-header p {
  font-size: 14px;
  color: #666;
  margin: 4px 0;
}

.resume-header a {
  color: #007bff;
  text-decoration: none;
}

.resume-section h2 {
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-badge {
  background: #e0ecff;
  color: #0d47a1;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
}
.resume-section p {
  font-size: 15px;
  color: #333;
  line-height: 1.6;
  text-align: left;
}
.edu-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.edu-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.edu-left {
  width: 70%;
}

.edu-right {
  width: 28%;
  text-align: right;
  font-size: 0.9em;
  color: #555;
}
.project-list {
  list-style-type: disc;
  padding-left: 20px;
}

.project-list li {
  margin-bottom: 10px;
  line-height: 1.6;
}
.certification-list {
  list-style-type: disc;
  padding-left: 20px;
}

.cert-platform {
  border: 1px solid #00bfc4;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.9em;
  display: inline-block;
  text-decoration: none;
  color: #007b8a;
  transition: background 0.2s ease;
}

.cert-platform:hover {
  background: #e0f7fa;
}
@media print {
  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact; /* Standard version for other browsers */
  }

  .resume-section {
    page-break-inside: avoid;
  }
}
.platform-link {
  border: 1px solid #00b3b3;
  padding: 2px 6px;
  border-radius: 4px;
  text-decoration: none;
  color: #007777;
  font-weight: 500;
  background-color: #e6fafa;
  transition: background-color 0.3s ease;
}

.platform-link:hover {
  background-color: #ccf0f0;
}
</style>
  <div class="resume-header">
    <h1>${name}</h1>
    <p>${email} | ${phone}</p>
    <p><a href="${linkedin}">LinkedIn</a> | <a href="${github}">GitHub</a></p>
  </div>

  <div class="resume-section">
    <h2>About Me</h2>
    <p>${about}</p>
  </div>

<div class="resume-section">
  <h2>Education</h2>
  <div class="edu-list">
    ${education.map(item => {
      const [institute, degree, score, location, duration] = item.split("||");
      return `
        <div class="edu-item">
          <div class="edu-left">
            <strong>${institute}</strong><br />
            <em>${degree} — ${score}</em>
          </div>
          <div class="edu-right">
            <span>${location}</span><br />
            <em>${duration}</em>
          </div>
        </div>
      `;
    }).join("")}
  </div>
</div>


  <div class="resume-section">
    <h2>Skills</h2>
    <div class="skill-list">
      ${skills.map(skill => `<span class="skill-badge">${skill.trim()}</span>`).join("")}
    </div>
  </div>

  <div class="resume-section">
  <h2>Projects & Open Source</h2>
  <ul class="project-list">
  ${projects.map(project => {
    const [title, description] = project.split("||");
    return `<li><strong>${title}:</strong> ${description}</li>`;
  }).join("")}
</ul>
</div>

<div class="resume-section">
  <h2>Certifications</h2>
  <ul>
    ${certifications.map(cert => {
      const [name, platform, url] = cert.split("||");
      return `
        <li>
          ${name} —
          <a href="${url}" target="_blank" class="platform-link">${platform}</a>
        </li>`;
    }).join("")}
  </ul>
</div>



  <div class="resume-section">
    <h2>Hobbies</h2>
    <ul>
      ${hobbies.map(hobby => `<li>${hobby}</li>`).join("")}
    </ul>
  </div>
`;

preview.innerHTML = resumeHTML;
localStorage.setItem("resumeHTML", resumeHTML);
codeBox.textContent = resumeHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;");

function downloadResume() {
  const element = document.getElementById("resume-preview");
  const opt = {
    margin: 0,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}

