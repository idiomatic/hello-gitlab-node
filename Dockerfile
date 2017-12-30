FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install && npm cache clean --force

COPY . .

CMD [ "npm", "start" ]

EXPOSE 8000
