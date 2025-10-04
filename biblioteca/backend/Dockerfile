FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm install
RUN npx prisma generate
EXPOSE 3000
CMD ["npx", "nodemon", "src/index.js"]
