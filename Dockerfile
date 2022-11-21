FROM node:16-alpine

WORKDIR /Desktop/hellovue3

COPY package.json .

ADD . .
RUN npm install --force

EXPOSE 8080

CMD ["npm","run","serve"]