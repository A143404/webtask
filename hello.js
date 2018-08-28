"use latest";
// const _ = require('lodash');
import {supportedLodashMethods} from './shared/shared.service';
module.exports = (ctx, cb) => {

    console.log('hello mithun');
    cb(null,supportedLodashMethods());
};
