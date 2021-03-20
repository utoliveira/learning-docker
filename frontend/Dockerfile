FROM node:12.21.0

#Directory that will hold the app code inside the image
WORKDIR /code

#Will copy both package.json and package-lock.json (-lock is available only in npm 5+)
#COPY package*.json ./

#it will copy everything to the image directory
COPY . ./

RUN npm install 
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3333

CMD [ "node", "src/server.js" ]