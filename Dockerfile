# Start from base
FROM node:8.11.2-alpine 

# make the directory on the Alpine Linux machine 
RUN mkdir -p /usr/src/app

# set working directory 
WORKDIR /usr/src/app

# copy the application code to the working directory
COPY . . 

# fetch app specific dependencies 
RUN npm install git -g
RUN npm install

# expose port
EXPOSE 4000

# start run with this command
CMD [ "node", "./server/index.js"]