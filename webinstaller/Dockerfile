FROM node:17-alpine as node_base

RUN mkdir /app && chown node /app && chmod 700 /app
RUN mkdir /var/node_modules && chown node /var/node_modules

WORKDIR /app

FROM node_base as development

COPY install-frontend-dev.sh /usr/local/bin/
RUN sed -i 's/\r$//g' /usr/local/bin/install-frontend-dev.sh \
    && chmod +x /usr/local/bin/install-frontend-dev.sh
RUN npm config set unsafe-perm true

CMD ["/usr/local/bin/install-frontend-dev.sh"]


FROM node_base as production

COPY ./front/src /app/src
COPY ./front/.babelrc ./front/package-lock.json ./front/package.json ./front/webpack.config.js ./front/tsconfig.json /app/
RUN chown node .babelrc package-lock.json package.json webpack.config.js tsconfig.json

COPY ./webinstaller/install-frontend-prod.sh /usr/local/bin/
RUN sed -i 's/\r$//g' /usr/local/bin/install-frontend-prod.sh \
    && chmod +x /usr/local/bin/install-frontend-prod.sh

# Supprimer les node_modules potentiellement existants
RUN rm -rf ./front/node_modules

CMD ["/usr/local/bin/install-frontend-prod.sh"]