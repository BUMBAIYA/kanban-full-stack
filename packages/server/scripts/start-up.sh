#!/bin/bash
# check if database is ready for migration than start the server
./scripts/wait-for-it.sh -h postgres -p 5432 -t 10

npm run db:migrate
npm run db:migrate-deploy
npm run db:generate
npm run start