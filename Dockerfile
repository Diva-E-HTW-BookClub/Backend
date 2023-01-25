# Use the official Python image as the base image
FROM node:alpine

COPY package.json .
COPY package-lock.json .

# Install the dependencies
RUN npm install 

# Set the NODE_ENV variable
ENV NODE_ENV=dev

# Copy the appropriate .env file based on the NODE_ENV variable
COPY .env.${NODE_ENV} .env

# Copy the server code to the working directory
COPY . .

# Expose the default port for the server
EXPOSE 80

LABEL version="1.0"

# Run the server when the container is started
ENTRYPOINT ["npm", "run", "start"]

