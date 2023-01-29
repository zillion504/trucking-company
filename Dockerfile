FROM nginx
LABEL version="1.1"
COPY ./build /usr/share/nginx/html