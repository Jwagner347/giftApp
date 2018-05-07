FROM node:9

EXPOSE 3000
WORKDIR /usr/src/app

COPY package.json package.json
RUN npm install
COPY . .
ENTRYPOINT npm run start-dev
