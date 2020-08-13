"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testData = exports.pageClosedEvent = exports.pageOpenedEvent = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _initEvents2 = _interopRequireDefault(require("../initEvents"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _initEvents = (0, _initEvents2.default)(),
    event = _initEvents.event,
    allEvents = _initEvents.allEvents;

var pageOpenedEvent = event({
  type: 'PAGE_OPENED',
  action: function action(someOpenParam) {
    return {
      payload: {
        someOpenParam: someOpenParam
      }
    };
  },
  reducer: function reducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      opened: true
    }, action.payload);
  }
});
exports.pageOpenedEvent = pageOpenedEvent;
var pageClosedEvent = event({
  type: 'PAGE_CLOSED',
  action: function action() {
    return {};
  },
  reducer: function reducer(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
      opened: false
    });
  }
});
exports.pageClosedEvent = pageClosedEvent;
var testData = allEvents;
exports.testData = testData;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(event, "event", "/home/immortal/dev/github/immortal-redux/redux-events/packages/redux-simple-events/src/events/__tests__/testData.js");
  reactHotLoader.register(allEvents, "allEvents", "/home/immortal/dev/github/immortal-redux/redux-events/packages/redux-simple-events/src/events/__tests__/testData.js");
  reactHotLoader.register(pageOpenedEvent, "pageOpenedEvent", "/home/immortal/dev/github/immortal-redux/redux-events/packages/redux-simple-events/src/events/__tests__/testData.js");
  reactHotLoader.register(pageClosedEvent, "pageClosedEvent", "/home/immortal/dev/github/immortal-redux/redux-events/packages/redux-simple-events/src/events/__tests__/testData.js");
  reactHotLoader.register(testData, "testData", "/home/immortal/dev/github/immortal-redux/redux-events/packages/redux-simple-events/src/events/__tests__/testData.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=testData.js.map