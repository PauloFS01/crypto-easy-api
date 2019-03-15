FROM node:latest
LABEL maintainer="paulofs10.sea@gmail.com"
ENV PORT=3000
ENV NODE_ENV=production
ENV DB=mongodb://easy-db:27017
COPY package*.json ./
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
ENTRYPOINT node index
EXPOSE $PORT