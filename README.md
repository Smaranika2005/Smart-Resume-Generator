# Smart-Resume-Generator
An interactive and customizable resume builder that allows users to create professional resumes through a user-friendly form interface. Features include live resume preview, direct code editing for advanced customization, and one-click PDF download—designed to make resume creation simple, efficient, and elegant.

### 🔧 Build the Docker Image

```bash
docker build -t smart-resume-img .

docker run -d -p 80:80 --name Smart_resume_generator smart-resume-img
