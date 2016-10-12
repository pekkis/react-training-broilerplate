# Hardcore React Training

Course material for my two-day hardcore React Training.

This repo also acts as a broilerplate to kickstart a React project with sane defaults and necessary tooling.

The `master` branch contains the full broilerplated example application. `training` is empty.

Use as you wish, but still read the license from LICENSE.

Pull requests are most welcome!

## Requirements

- MacOS or Linux. Might work in Windows too, but I don't really care.
- A new Node.js. I'm running 6.x nowadays.
- NPM version 3.
- Will install and utilize the [yarn](https://yarnpkg.com) package manager by default.

## Suggestions

- A good editor / IDE that supports Flow real-time. I use [Nuclide](https://nuclide.io/) myself because I think it's great!
- If you want to run production mode, an [example configuration file(docs/nginx.conf) for Nginx is included.

## Stack

- Babel
- Latest ES preset (2017) + React addons
- Linting with AirBnb style + some additions
- Flow
- Webpack
- React
- Redux
- React Router + react-router-redux
- CSS modules with PostCSS
- Testing with Mocha, Chai and Enzyme
- React Storybook

## Howto

### Initialize

- npm run initialize
  - npm install -g yarn
  - cp config.client.example.js config.client.js
  - cp config.server.example.js config.server.js
  - yarn

### develop

(until yarn run works)

- npm run start
  - open browser and go to http://localhost:8888
- npm run storybook
- npm run test
- npm run flow

### build

- npm run build
