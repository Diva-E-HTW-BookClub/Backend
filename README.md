# Deploying the API service

## To build and Push the api's docker Image execute the following commands from repository Root

``docker build ./server -t leanderak/bookclub_api:latest``

``docker push leanderak/bookclub_api:latest``

## To check if service is reachable
``curl  https://bookclub-api-px7nv.ondigitalocean.app/test``
## ->  ``{"data":"Service is running!"}``
