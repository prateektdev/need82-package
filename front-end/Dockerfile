# base image
FROM node:10-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . .
RUN npm install react-scripts -g
RUN npm install

RUN ls ./node_modules/

# start app
CMD ["npm", "start"]