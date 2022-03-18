FROM node:17
ARG ${PORT}
ARG ${DATABASE_URL}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE ${PORT}
RUN npx prisma migrate deploy
RUN npx prisma generate
CMD [ "node", "server.mjs" ]
