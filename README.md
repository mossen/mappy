# Archistar Front-End Quiz

This is a test that I have done for a front-end role. You can find the quiz in [here](https://github.com/mossen/archistar/blob/master/Quize.md)
Demo at [https://mossen-archistar.netlify.com/](https://mossen-archistar.netlify.com/)

## Solution architecture

Vue.js has been used as the main framework in addition to the following libraries/plugins:

* [Vue Bootstrap](https://bootstrap-vue.js.org/)
* [Vue-Mapbox wrapper](https://github.com/soal/vue-mapbox)

## Getting started

These instructions will get you a copy of the project up and running on your local machine. 

### Prerequisites

* Application environment
   ```
   node v13.10.1
   yarn 1.22.0
   ```
* Local development & builds
   ```
   node v13.10.1
   yarn 1.22.0
   ```
* Local development & builds (using Docker)
   ```
   Docker
   ```

### Installing

* Docker
    ```
    cd TO_PROJECT_ROOT
    INIT=1 docker-compose up
    ```
  ```INIT=1``` is needed for the first time to install everything needed.
  Use ```docker-compose exec www bash``` to ssh into the container.

* Local
    ```
    cd TO_PROJECT_ROOT
    yarn global add @vue/cli  
    yarn global add @vue/cli-service-global
    yarn install
    yarn serve
    ```

## Running the tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

## Deployment
* [Netlify](https://www.netlify.com/)

## Built With

* [Vue.js](https://vuejs.org/) - Frontend framework
* [Vue CLI](https://cli.vuejs.org/guide/installation.html)


## Author

* **Mohsen Khodadadi** - *Initial work* - [Linkedin](https://www.linkedin.com/in/mohsen-khodadadi/u)
