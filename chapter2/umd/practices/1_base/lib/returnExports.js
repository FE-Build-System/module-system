(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['b'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('b'));
    } else {
        root.returnExports = factory(root.b);
    }
}(typeof self !== 'undefined' ? self : this, function (b) {
    return {};
}));


(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.returnExports = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

    return {};
}));