#!/bin/bash

sudo npm rebuild node-sass
sudo npm i -D -E @ionic/app-scripts
sudo npm update
sudo npm install
sudo npm rebuild node-sass
sudo node node_modules/node-sass/scripts/install.js

sudo ionic serve
