#dev
#FROM node:13.12.0-alpine
#
#WORKDIR /app
#
#ENV PATH /app/node_modules/.bin:$PATH
#
#COPY package.json ./
#COPY package-lock.json ./
#
#RUN npm install --silent
#RUN npm install react-scripts@3.4.1 -g --silent
#
#COPY . ./
#
#CMD ["npm", "start"]

#prod
FROM node:13.12.0-alpine

RUN mkdir -p /home/deploy/app/node_modules && chown -R deploy /home/deploy/app

WORKDIR /home/deploy/app

COPY package.json ./
COPY package-lock.json ./

USER deploy

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY --chown=deploy . .

EXPOSE 3000

CMD ["npm", "start"]