FROM node:21.6.2-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8888

CMD [ "npm", "run", "dev:node", "--", "--host", "0.0.0.0", "--port", "8888" ]