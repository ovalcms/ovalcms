'use strict';
const ky = require('ky-universal');

function OvalCMS(client_token) {
  if (typeof client_token !== "string") {
    throw new TypeError("Must be a string!");
  }

  return await ky.get('http://www.ovalcms.com/api/content/' + client_token).json();
};

module.exports = OvalCMS;
