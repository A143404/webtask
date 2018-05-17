"use latest";
import * as Webtask from 'webtask-tools';
import expressApp from './expressApp';
module.exports = Webtask.fromExpress(expressApp);