FROM nginx:alpine

COPY /packages/test/dist/ /usr/share/nginx/html/
COPY /packages/common-lib/dist/ /usr/share/nginx/html/common-lib/
COPY /packages/basic-data-app/dist/ /usr/share/nginx/html/basic-data-app/
COPY Shanghai /etc/localtime
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
ENV BACKEND_HOST 192.168.30.115:9300
ENV DEVICE_HOST 192.168.28.67:8999
EXPOSE 12003
WORKDIR /etc/nginx/conf.d
CMD ["sh", "/usr/share/nginx/html/env.sh"]