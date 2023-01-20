# Use the official Python image as the base image
FROM node:alpine

COPY package.json .
COPY package-lock.json .

# Install the dependencies
RUN npm install 

# Copy the server code to the working directory
COPY . .

# Expose the default port for the server
EXPOSE 80

LABEL version="1.0"

ENV PORT = 80
ENV FIREBASE_API_KEY = AIzaSyDarZyJqdfwiqwwsHMnzHqm5IPwHgeaUQQ
ENV FRONTEND_AUTH_KEY = ae9bcd3c-0113-4953-8525-125e27db185e

# Run the server when the container is started
CMD ["npm", "run", "start"]

