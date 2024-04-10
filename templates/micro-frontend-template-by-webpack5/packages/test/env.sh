#!/bin/sh

LOCATION_CONF="{
    \"test\": {
        \"production\": {
            \"href\": \"http://$HOST_IP:12003\"
        }
    },
    \"basic-data-app\": {
        \"production\": {
            \"href\": \"http://$HOST_IP:12003/basic-data-app\"
        }
    },
    \"common-lib\": {
        \"production\": {
            \"href\": \"http://$HOST_IP:12003/common-lib\"
        }
    },
}"

ENVIRONMENT_CONF="{
    \"environment\": \"production\"
}"

#echo $LOCATION_CONF > /usr/share/nginx/html/location.config.json
echo $ENVIRONMENT_CONF > /usr/share/nginx/html/environment.config.json

cd /etc/nginx/conf.d
envsubst '${DEVICE_HOST} ${BACKEND_HOST} ${HOST_IP}' < nginx.conf > /etc/nginx/nginx.conf && nginx -g 'daemon off;'