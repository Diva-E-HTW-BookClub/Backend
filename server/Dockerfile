# Use the official Python image as the base image
FROM node

COPY package.json .
COPY package-lock.json .

# Install the dependencies
RUN npm install 

# Copy the server code to the working directory
COPY . .

# Expose the default port for the server
EXPOSE 3002

LABEL version="1.0"

ENV GENERATE_SOURCEMAP false

ENV PORT = 3002
ENV FIREBASE_API_KEY = "AIzaSyDarZyJqdfwiqwwsHMnzHqm5IPwHgeaUQQ"

# Run the server when the container is started
CMD ["npm", "run", "start"]

