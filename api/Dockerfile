# Use the official Python image as the base image
FROM python:3

# Create a new directory for the server code
RUN mkdir -p /usr/src/server

# Set the working directory to the new directory
WORKDIR /usr/src/server

# Copy the requirements.txt file to the working directory
COPY requirements.txt .

# Install the dependencies
RUN pip install -r requirements.txt

# Copy the server code to the working directory
COPY . .

# Expose the default port for the server
EXPOSE 8000

# Run the server when the container is started
CMD ["python", "api.py"]