from nginx:latest

copy . /usr/share/nginx/html

expose 80

CMD ["nginx", "-g", "daemon off;"]
