"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = function _default() {
  var allEvents = [];

  var actionCreatorWrapper = function actionCreatorWrapper(type, action) {
    return function () {
      var actionObj = action ? _objectSpread({}, action.apply(void 0, arguments)) : {};
      return _objectSpread(_objectSpread({}, actionObj), {}, {
        type: type
      });
    };
  };

  var event = function event(eventTemplate) {
    var type = eventTemplate.type;

    var event = _objectSpread({}, eventTemplate);

    event.action = actionCreatorWrapper(type, event.action);
    allEvents.push(event);
    return event;
  };

  return {
    /**
     * Consumes object with type, action and reducer;
     * {
                type: 'SAML_CONFIG_PAGE_OPENED',
                action: (initOperation, initSamlConfigId) => ({
                    payload: {
                        initOperation,
                        initSamlConfigId
                    }
                }),
                reducer: (state) => {
                    return {
                        ...state,
                        loading: true
                    }
                }
            }
      provides object with the same fields which can be already used usual in Redux flows.
     */
    event: event,

    /**
     * "allEvents" array will be filled when event() is called
     */
    allEvents: allEvents
  };
};

/**
 * "event" is an object which joins
 * 1) "redux action type" constant
 * 2) "redux action" itself
 * 3) "redux reducer" for this action.
 *
 * returns "event" function which will create the event object, based on template.
 * See usages for more details.
 *
 * allEvents array will be filled when event() is called
 */
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/immortal/dev/github/immortal-redux/redux-events/packages/redux-simple-events/src/events/initEvents.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=initEvents.js.map