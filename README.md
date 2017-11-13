# react-redux-webpack-scaffolding

## Introduction

This is my web app scaffolding for a *static* Node.js web application:

  1. React for DOM rendering
  1. Redux for UI state management
  1. StandardJS for linting
  1. Webpack for bundling
  1. Glamor for inline CSS
  1. Mocha+Expect for unit testing

You can easily convert this to an Express/<insert HTTP framework> app.

YMMV

Please log Github issues for questions.

## Requirements

- Node.js. TODO: define the supported node engines in package.json
- Git

## Clone, test, run

After cloning the repository, install dependencies:

    $ npm i

Link & run the unit tests

    $ npm test

![screen shot 2017-11-13 at 11 56 32](https://user-images.githubusercontent.com/57994/32719750-18c9a4b2-c86a-11e7-92f5-2fa33c5d9a80.png)

Run Webpack

    $ npm run webpack

![screen shot 2017-11-13 at 11 58 22](https://user-images.githubusercontent.com/57994/32719756-1c315ef6-c86a-11e7-89a9-0e69a12cbe72.png)


Start the static HTTP server. I use httpserver.

    $ cd public/
    <optional> $ npm i -g httpserver
    $ httpserver
    <new tab> $ open http://localhost:8080

![screen shot 2017-11-13 at 12 00 56](https://user-images.githubusercontent.com/57994/32719834-57a169d6-c86a-11e7-979e-72a0cfe4dd39.png)

## Check the redux logging in the web inspector:

When you click '+' or '-', the redux state changes will be show in the javascript console:

![screen shot 2017-11-13 at 12 02 40](https://user-images.githubusercontent.com/57994/32719925-a30c50e8-c86a-11e7-8aa6-872c8503c1f0.png)

## Directory layout:

TODO

## Developing

While developing, I have 3 tabs open:

 1. The process running the development web server. It used ```nodemon```, so file changes will restart the server.
 1. A process watching for changes and re-executing Webpack: ```$ npm run webpack:watch```
 1. A process watching for changes and re-executing the unit tests ```$ npm run unit:watch```
