"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyReducerFromMap = exports.eventsToReducersMap = void 0;

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

/**
 * Returns map [eventName -> reducer]
 */
var eventsToReducersMap = function eventsToReducersMap(events) {
  var reducersMapping = {};
  events.forEach(function (event) {
    reducersMapping[event.type] = event.reducer;
  });
  return reducersMapping;
};
/**
 * Applies reducer if action is present in the reducersMapping
 */


exports.eventsToReducersMap = eventsToReducersMap;

var applyReducerFromMap = function applyReducerFromMap(state, action, reducersMapping) {
  if (reducersMapping[action.type]) {
    return reducersMapping[action.type](state, action);
  }

  return state;
};

exports.applyReducerFromMap = applyReducerFromMap;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(eventsToReducersMap, "eventsToReducersMap", "/home/immortal/dev/github/immortal-redux/redux-events/packages/redux-simple-events/src/events/eventMappingUtil.ts");
  reactHotLoader.register(applyReducerFromMap, "applyReducerFromMap", "/home/immortal/dev/github/immortal-redux/redux-events/packages/redux-simple-events/src/events/eventMappingUtil.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=eventMappingUtil.js.map