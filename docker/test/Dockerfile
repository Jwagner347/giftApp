FROM node:9

WORKDIR /usr/src/app

COPY package.json package.json
RUN npm install
COPY . .
ENTRYPOINT node_modules/jasmine-node/bin/jasmine-node spec/unit-tests
