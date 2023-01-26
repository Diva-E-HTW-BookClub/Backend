# Deploying the API service

### Requires docker to be installed and running!
Download here and follow the installation instructions
<br>
 https://www.docker.com/products/docker-desktop/
### Build the Docker image locally and push it to Docker Hub
 
 
 1. To build the image, make sure docker is running and execute the following command in the repository root. <br> 
 ``docker build . -t leanderak/bookclub_api:latest``

 2. To push the image your just created to docker hub execute the following command in the repository root. <br> 
 ``docker push leanderak/bookclub_api:latest``

### Once the push is complete go to the digitalocean web app control panel and redeploy as seen in the image below
https://cloud.digitalocean.com/apps/eca80e2b-9180-4335-b76a-dd1baca0b5d5
![Screenshot 2023-01-19 215125](https://user-images.githubusercontent.com/82841550/213556982-c11a4ef3-b0f2-4209-b1ab-0d2ecc82092b.png)


### To check if service is reachable
``curl  https://bookclub-api-px7nv.ondigitalocean.app/test``
#### should return   <br>
``{"data":"Service is running!"}``
