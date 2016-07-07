# Deployment



## Create Digital Ocean Droplets

Create two Digital Ocean Droplets using the `Docker 1.11.2 on 14.04` One-Click Apps

### Set up users with access

Log onto one of the droplets
  
  ssh root@<droplet-ip-address>

Run `docker run --detach --publish=7474:7474 --publish=7687:7687 --volume=$HOME/neo4j/data:/data --env=NEO4J_AUTH=none neo4j:3.0`
For more details, see the [Neo4j 3.0 Docker Page](https://neo4j.com/developer/docker-30/).

Browse to `<droplet-ip-address>:7474` > `Browser Settings` > `Network Connection`, check `Use Bolt protocol when available`



## Build Docker Image on Local Machine

* Create a file called `Dockerfile` in root directory
* Copy the content from `Dockerfile_example` to `Dockerfile`
* Define `MAINTAINER` (optional), `CLIENT_ID`, `CLIENT_SECRET`, `SESSION_SECRET`, `DB_BOLT_HOST`, `DB_USERNAME` and `DB_PASSWORD`.
* Ensure you have running docker machine. If no, run `docker-machine start`. You might need to run `eval $(docker-machine env)` to configure your shell.
* Run `docker build -t <image-name> .` in root directory to build an image.
* Ensure you have a Docker Hub account. if no, sign up on [Docker Hub](https://hub.docker.com/).
* Login your Docker Hub account on terminal.
* Run `docker push <image-name>`.



## Run Container on Remote Server

* Log onto another Digital Ocean Droplet
  ssh root@<droplet-ip-address>
* Run `docker run -p <port-number>:3000 -d <image-name>
* Browse to `<droplet-ip-address>:<port-number`

