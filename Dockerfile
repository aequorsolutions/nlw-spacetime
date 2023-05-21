FROM node:18.16.0-slim

WORKDIR /home/node/app

# RUN apt update && apt upgrade -y && apt install unzip -y

USER node

CMD [ "tail", "-f", "/dev/null" ]