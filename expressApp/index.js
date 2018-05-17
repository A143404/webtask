"use latest";
import Express from 'express';

const expressApp = Express();
let router = Express.Router({});

// Set up any middleware
expressApp.use(router);


router.all('*', handleRoot);

export default expressApp;

function handleRoot(req, res) {
    res.send('<h1>WebTask from express app using ES6 code</h1>');
}
