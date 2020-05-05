#Step 1-------------------
FROM node:12-alpine as react-build

WORKDIR /app

COPY . ./

RUN yarn

RUN yarn build

#Step 2-------------------
FROM node:12-alpine

# Create and change to the app directory.
WORKDIR /root

RUN npm install -g serve

COPY --from=react-build /app/build /root

EXPOSE 8080

CMD ["serve", "-s", "-l", "8080", "./"]
