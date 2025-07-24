FROM nginx:latest

# Copy the Nginx configuration file
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

