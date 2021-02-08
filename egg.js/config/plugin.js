'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
// };

exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
// exports.security = {
//   xframe: {
//     enable: false,
//   },
// };