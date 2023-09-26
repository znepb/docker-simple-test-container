FROM node:18
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 2000
CMD [ "node", "index.js" ]