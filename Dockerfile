FROM cypress/browsers:node18.12.0-chrome103-ff107
# create the working directory inside the container
RUN mkdir /cypress-docker-image
# Set the working directory inside the container
WORKDIR /cypress-docker-image
# Copy the package.json and package-lock.json files
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
COPY ./docker-compose.yml .
COPY ./multi-reporter-config.json .
# Install the Cypress dependencies
RUN npm install
# Install Cypress
RUN npm install cypress --save-dev