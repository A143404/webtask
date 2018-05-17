# Webtask with ES6 Code and shared services
Steps to build and deploy webtask.
npm install
This uses wt cli for creating and deploying the webtask.

## Setup wt cli and profile
# 1) npm install -g wt-cli
# 2) wt init --container "agl-dev" --url "https://sandbox8-au.it.auth0.com" -p "agl-dev-au" --auth0
##

## To deploy the hello web task on dev
# 3) npm run deploy-wt-dev
This basically calls the wt-cli to bundle and deploy the webtask(wt create hello.js -p agl-dev-au --bundle).
The option --bundle does the trick to include all the modules required.

## To deploy an express app on dev
# 4) npm run deploy-express-wt
This again calls the wt-cli to bundle and deploy the web task (wt create --name express-api -p agl-dev-au --bundle webtask-express-api.js)

## Optional
## node starter.js --> to run the express app on local