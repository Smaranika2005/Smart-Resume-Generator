const preview = document.getElementById("resume-preview");
const codeBox = document.getElementById("editable-html");

const savedHTML = localStorage.getItem("resumeHTML");
if (savedHTML) {
  preview.innerHTML = savedHTML;
  codeBox.value = savedHTML;
}

document.getElementById("recompile-btn").addEventListener("click", () => {
  const newHTML = codeBox.value;
  preview.innerHTML = newHTML;
  localStorage.setItem("resumeHTML", newHTML);
});

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

