# Hardcore React Training

Course material for my two-day hardcore React Training.

This repo also acts as a broilerplate to kickstart a React project with sane defaults, necessary tooling and
some reusable, copy-paste-preventing boilerplate stuff.

The `master` branch contains the full broilerplated example application. `training` is empty.

Use as you wish, but still read the license from LICENSE.

Pull requests are most welcome!

## Requirements

- MacOS or Linux. Might work in Windows too, but I don't know. Please report if it doesn't!
- A new Node.js. I'm running 6.x nowadays.
- NPM version 3+ or Yarn.

## Suggestions

- I really recommend you utilize the [yarn](https://yarnpkg.com) package manager.
- A good editor / IDE that supports Flow real-time. I use [Nuclide](https://nuclide.io/) myself because I think it's great!
- If you want to run production mode, an [example configuration file(docs/nginx.conf) for Nginx is included.

## Stack
- React
- Redux
  - Thunk middleware
  - Promise middleware
- React Router + react-router-redux
- Immutable.js
- Recompose
- Sane styling
  - CSS modules
  - PostCSS
  - Normalize.css
- Babel
  - Latest ES preset (2017) + usual React addons
  - Flow + flow-typed
- Webpack
  - Hot reloading
- Linting
  - AirBnb style + some additions
- Testing with Mocha, Chai and Enzyme
- Component development with React Storybook

## Howto

### Initialize

#### With Yarn

- install yarn (`npm install -g yarn`)
- `yarn`

#### With NPM

- `npm install`

#### Common steps

- `cp config.client.example.js config.client.js`
- `cp config.server.example.js config.server.js`

### develop

Until yarn run works correctly, we default to npm.

- `npm run start`
  - open browser and go to http://localhost:8888
- `npm run storybook`
- `npm run test`
- `npm run flow`
- `npm run lint`

### build

Builds to `dist/` folder.

- `npm run build`
