FROM nginx:alpine

COPY  /build/ /usr/share/nginx/html/
COPY Shanghai /etc/localtime
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
ENV BACKEND_HOST 172.17.0.1
ENV BACKEND_PORT 9090
EXPOSE 13100
WORKDIR /etc/nginx/conf.d
ENTRYPOINT envsubst '${BACKEND_HOST} ${BACKEND_PORT}' < nginx.conf > /etc/nginx/nginx.conf && nginx -g 'daemon off;'