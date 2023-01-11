# Use the official Python image as the base image
FROM node

COPY package.json .
COPY package-lock.json .

# Install the dependencies
RUN npm install 

# Copy the server code to the working directory
COPY . .

# Expose the default port for the server
EXPOSE 3001

ENV GENERATE_SOURCEMAP false

# Run the server when the container is started
CMD ["nodemon", "index.js"]

