#!/bin/bash

npm run build

vuepress build docs

node ./bin/copydist.js

