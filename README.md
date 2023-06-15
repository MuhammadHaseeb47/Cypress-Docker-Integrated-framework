# Cypress-Docker-Integrated-framework

In this project I implemented Page Object Model and integrated Docker in it.

## Description

Welcome to the Docker-Integrated Framework repository by Muhammad Haseeb (haseebshafiq47@gmail.com). This Git repository showcases a powerful and flexible framework designed to enhance the development process by seamlessly integrating Docker into your workflow. With this framework, you can effortlessly manage and deploy containerized applications, making testing a breeze.

## Getting Started

### Dependencies

* Download latest Visual Studio Code
* Download Nodejs

### Build and Test

* Clone the Repo:
```
    git clone https://github.com/MuhammadHaseeb47/Cypress-Docker-Integrated-framework.git
```
* Download NodeModules
```
    npm install
```
* How to run tests
```
    npm cypress open
```
* How to run tests on command prompt
```
    npm run test
```
### Executing tests in Docker

* Create a docker image by running following command in this command cypress-docker is a image name that can be changed according to your choice and replace it everywhere
```
    docker build -t cypress-docker:1.0.0 .
```

* In docker-compose.yml file the first two containers will run the tests in parallel.
* The first container (e2e-electron) will run the tests in electron browser and will run the tests found in login folder.
* The second container (e2e-chrome) will run the tests in chrome browser and will run the tests found in logout folder.
* The third container (e2e) will run all the tests in firefox browser and will run all the tests found in e2e folder.

#### Note:

* You can customize the containers according to your need.


```
code blocks for commands
```

## Authors

Muhammad Haseeb
```
haseebshafiq47@gmail.com
```
```
https://www.linkedin.com/in/muhammad-haseeb47/
```