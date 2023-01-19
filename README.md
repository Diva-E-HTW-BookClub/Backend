# Deploying the API service

## To build and Push the api's docker Image execute the following commands from repository Root

``docker build ./server -t leanderak/bookclub_api:latest``

``docker push leanderak/bookclub_api:latest``

## Once the push is complete go to digitalocean at (https://cloud.digitalocean.com/apps/eca80e2b-9180-4335-b76a-dd1baca0b5d5) and redeploy as seen in the image below
![image](https://user-images.githubusercontent.com/82841550/213556656-8c3da04c-5b52-4966-a29a-e28bd06fae14.png)

## To check if service is reachable
``curl  https://bookclub-api-px7nv.ondigitalocean.app/test``
## ->  ``{"data":"Service is running!"}``
