FROM node:4.6
WORKDIR /app

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

COPY package*.json /app
RUN npm install

COPY . /app

EXPOSE 3000
CMD [ "node", "index.js" ]
