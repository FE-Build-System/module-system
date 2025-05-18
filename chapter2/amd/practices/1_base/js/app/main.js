define(function (require) {
  const { getBody } = require('./lib');

  const body = getBody();
  body.append("<h1>Hello World!</h1>");
});