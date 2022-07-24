FROM node:lts-alpine3.15 as dependencies
WORKDIR /typeorm-service
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts-alpine3.15 as builder
WORKDIR /typeorm-service
COPY . .
COPY --from=dependencies /typeorm-service/node_modules ./node_modules
RUN yarn build

FROM node:lts-alpine3.15 as runner
WORKDIR /typeorm-service
COPY --from=builder /typeorm-service/build ./build
COPY --from=builder /typeorm-service/node_modules ./node_modules
COPY --from=builder /typeorm-service/package.json ./package.json
EXPOSE 8080
CMD yarn start