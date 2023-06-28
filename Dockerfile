FROM node:18
# Open app directory from node version
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json ./

RUN npm install

# Bundle app source
COPY . .

# build the application for prod
RUN npm run build

# port that application it's go running after deploy and the name o default file.
EXPOSE 3000
CMD [ "node", "dist/index.js" ]