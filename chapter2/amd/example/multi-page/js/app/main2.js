define(function (require) {
  var $ = require('jquery'),
      lib = require('./lib'),
      controller = require('./controller/c2'),
      model = require('./model/m2');

  controller.setModel(model);
  $(function () {
      controller.render(lib.getBody());
  });
});