#!/bin/bash

# Some logging
echo
echo 'nginx is up and running. You should be able to access'
echo "it under: http://localhost or https://localhost"

# Start nginx like normal
nginx -g 'daemon off;'