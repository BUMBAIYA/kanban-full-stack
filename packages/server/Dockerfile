FROM node:18.16.0

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

ARG SERVER_PORT
ENV SERVER_PORT=${SERVER_PORT}

WORKDIR /app

COPY package.json .
RUN npm install

COPY /src /src
COPY prisma/ prisma/

EXPOSE ${SERVER_PORT}

RUN npm run db:generate
# RUN npm run db:migrate
# RUN npm run db:migrate-deploy
# RUN npm run db:generate

ENV NODE_ENV=production

CMD ["npm", "start"]