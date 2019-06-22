FROM node:11.12.0
WORKDIR /todo/src/app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 5000
CMD [ "npm", "start" ]