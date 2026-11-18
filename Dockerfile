# ==============================================================================
# Production Dockerfile: CloudPulse Web Application
# Training: Docker [Part 2] - Custom Image & Orchestration
# ==============================================================================

# 1. Use an official, minimal, and secure Alpine-based Nginx base image
FROM nginx:1.27-alpine

# 2. Set the working directory to Nginx's default public HTML document root
WORKDIR /usr/share/nginx/html

# 3. Clean up default boilerplate Nginx placeholder files to ensure a pristine deployment
RUN rm -rf ./*

# 4. Copy static application assets into the web server root
COPY index.html styles.css app.js ./

# 5. Document that the containerized application listens on HTTP port 80
EXPOSE 80

# 6. Define the primary executable command: run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
