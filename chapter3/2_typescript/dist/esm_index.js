(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./esm_add"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const esm_add_1 = require("./esm_add");
    console.log("add(10, 5)", (0, esm_add_1.add)(10, 5));
    console.log("test", esm_add_1.test);
    console.log("esm_add", esm_add_1.default);
});
// import def from "./esm_add";
// import lodash from "lodash";
// console.log("default", def);
// console.log("lodash", lodash);
