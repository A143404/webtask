"use latest";
// const _ = require('lodash');
import {supportedLodashMethods} from './shared/shared.service';
module.exports = (ctx, cb) => {
  // Respond with supported lodash methods
   // call an imported function.
    console.log('hello justine');
    cb(null,supportedLodashMethods());
};
