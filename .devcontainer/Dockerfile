ARG ALPINE_VERSION="3.12"

FROM alpine:${ALPINE_VERSION}

ENV WAKATIME_HOME="/host/wakatime"

RUN apk add --update git

RUN apk add --update nodejs npm

RUN addgroup -S node && adduser -S node -G node

RUN npm install -g npm-check-updates

USER node