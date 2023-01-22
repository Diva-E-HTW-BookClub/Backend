# Deploying the API service

### Requires docker to be installed and running!
### To build and Push the api's docker Image execute the following commands from repository Root
 
``docker build . -t leanderak/bookclub_api:latest``

``docker push leanderak/bookclub_api:latest``

### Once the push is complete go to digitalocean at (https://cloud.digitalocean.com/apps/eca80e2b-9180-4335-b76a-dd1baca0b5d5) and redeploy as seen in the image below
![Screenshot 2023-01-19 215125](https://user-images.githubusercontent.com/82841550/213556982-c11a4ef3-b0f2-4209-b1ab-0d2ecc82092b.png)


### To check if service is reachable
``curl  https://bookclub-api-px7nv.ondigitalocean.app/test``
#### should return   ``{"data":"Service is running!"}``
