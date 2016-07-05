FROM node
FROM neo4j

# Assign environment variables
ENV CLIENT_ID 51c9df3c10ffb5841f2f
ENV CLIENT_SECRET eda9ae2b59e0df32315cde60919e9fd2e2b49c7d
ENV SESSION_SECRET asdghfwutry
ENV NODE_ENV production


RUN mkdir apps
ADD . /apps
WORKDIR /apps

RUN npm install
RUN neo4j start

# think how to specify database location

EXPOSE 3000

CMD [npm, start]