#!/bin/bash

npm run build

npm run docs:build

vuepress build docs

node ./bin/copydist.js

node ./bin/pushdoc.sh
