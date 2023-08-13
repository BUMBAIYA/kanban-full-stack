FROM node:18.16.0

ARG APP_PORT
ENV APP_PORT=${APP_PORT}

WORKDIR /app

COPY package*.json ./
RUN npm install

EXPOSE ${APP_PORT}

CMD ["npm","run", "dev"]