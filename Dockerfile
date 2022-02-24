FROM node:17
ARG PORT
ARG MYSQL_URL
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
RUN npx prisma migrate deploy
CMD [ "node", "server.mjs" ]
