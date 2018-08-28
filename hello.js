"use latest";
// const _ = require('lodash');
import {supportedLodashMethods} from './shared/shared.service';
module.exports = (ctx, cb) => {
  // Respond with supported lodash methods
   // call an imported function.
    console.log('Hello Pankaj');
    cb(null,supportedLodashMethods());
};
