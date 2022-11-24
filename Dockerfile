FROM node:lts-alpine as build-stage
WORKDIR /Desktop/hellovue3
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
RUN rm -rf /etc/nginx/nginx.conf
COPY --from=build-stage /Desktop/hellovue3/nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /user/share/nginx/html/*
COPY --from=build-stage /Desktop/hellovue3/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]