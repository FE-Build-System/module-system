define(function (require) {
  const $ = require('jquery');
  const { getBody } = require('./lib');

  const body = getBody();
  body.append("<h1>Hello World!</h1>");
});