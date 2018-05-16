# Webtask with ES6 Code and shared services
Steps to build and deploy webtask.
npm install
This uses wt cli for creating and deploying the webtask.

## Setup wt cli and profile
npm install -g wt-cli
wt init --container "agl-dev" --url "https://sandbox8-au.it.auth0.com" -p "agl-dev-au" --auth0
##

## To deploy the web task on dev
npm run deploy-wt-dev

This basically calls the wt-cli to deploy the webtask(wt create hello.js -p agl-dev-au --bundle).
The option --bundle does the trick to include all the modules required.



