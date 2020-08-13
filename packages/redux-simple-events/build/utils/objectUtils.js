"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlainObject = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

/**
 * Checks if object is a plain object
 */
var isPlainObject = function isPlainObject(obj) {
  if ((0, _typeof2.default)(obj) === 'object' && obj !== null) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }

  return false;
};

exports.isPlainObject = isPlainObject;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isPlainObject, "isPlainObject", "/home/immortal/dev/github/immortal-redux/redux-events/packages/redux-simple-events/src/utils/objectUtils.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=objectUtils.js.map