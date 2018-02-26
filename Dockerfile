# VERSION 0.3
FROM  node

# App
ADD . /src
# Install app dependencies
RUN cd /src; npm install
RUN npm install -g http-server
RUN cd /src; npm run build

EXPOSE  8080
CMD cd /src/dist; hs