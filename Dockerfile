FROM node:20.15.1-alpine as base

COPY . /client

WORKDIR /client

RUN npm i
RUN npm i serve -g
RUN npm run build

ARG PORT

CMD serve -s build -p $PORT
