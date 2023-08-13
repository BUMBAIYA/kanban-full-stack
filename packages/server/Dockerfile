FROM node:18.16.0

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

ARG SERVER_PORT
ENV SERVER_PORT=${SERVER_PORT}

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE ${SERVER_PORT}

RUN npm run db:generate

RUN chmod +x ./scripts/start-up.sh

ENV NODE_ENV=production

CMD ["./scripts/start-up.sh"]