# The instructions for the first stage
FROM node:14-alpine

ENV NODE_ENV=development

WORKDIR /app

COPY package*.json yarn.lock /app/
RUN yarn install

CMD yarn dev
