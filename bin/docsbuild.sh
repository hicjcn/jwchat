#!/bin/bash
yarn build

# yarn docs:build
vuepress build docs

node ./bin/copydist.js
   