"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _initEvents5 = _interopRequireDefault(require("../initEvents"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

describe('initEvents', function () {
  var pageOpenedType = 'PAGE_OPENED';

  var pageOpenedActionCreator = function pageOpenedActionCreator(someOpenParam) {
    return {
      payload: {
        someOpenParam: someOpenParam
      }
    };
  };

  var pageOpenedReducer = function pageOpenedReducer(state, action) {
    return _objectSpread(_objectSpread({}, state), {}, {
      opened: true
    }, action.payload);
  };

  var pageOpenedEventTemplate = {
    type: pageOpenedType,
    action: pageOpenedActionCreator,
    reducer: pageOpenedReducer
  };
  var pageClosedEventTemplate = {
    type: 'PAGE_CLOSED',
    action: function action() {
      return {};
    },
    reducer: function reducer(state) {
      return _objectSpread(_objectSpread({}, state), {}, {
        opened: false
      });
    }
  };
  it('initEvents inserts new event in the allEvents array', function () {
    var _initEvents = (0, _initEvents5.default)(),
        event = _initEvents.event,
        allEvents = _initEvents.allEvents;

    var pageOpenedEvent = event(pageOpenedEventTemplate);
    expect(allEvents).toContain(pageOpenedEvent);
    var pageClosedEvent = event(pageClosedEventTemplate);
    expect(allEvents).toContain(pageClosedEvent);
    expect(allEvents).toHaveLength(2);
  });
  it('event method sets type correctly', function () {
    var _initEvents2 = (0, _initEvents5.default)(),
        event = _initEvents2.event;

    var pageOpenedEvent = event(pageOpenedEventTemplate);
    expect(pageOpenedEvent.type).toEqual(pageOpenedType);
  });
  it('event method creates action creator correctly', function () {
    var _initEvents3 = (0, _initEvents5.default)(),
        event = _initEvents3.event;

    var pageOpenedEvent = event(pageOpenedEventTemplate);
    expect(pageOpenedEvent.action().type).toEqual(pageOpenedType);
    var someOpenParam = 'someOpenParam';
    expect(pageOpenedEvent.action(someOpenParam)).toEqual(_objectSpread({
      type: pageOpenedType
    }, pageOpenedActionCreator(someOpenParam)));
  });
  it('event method creates reducer correctly', function () {
    var _pageOpenedEvent$redu;

    var _initEvents4 = (0, _initEvents5.default)(),
        event = _initEvents4.event;

    var pageOpenedEvent = event(pageOpenedEventTemplate);
    expect(pageOpenedEvent.type).toEqual(pageOpenedType);
    var state = {};
    var action = {
      payload: {
        someOpenParam: 'someOpenParam'
      }
    };
    expect((_pageOpenedEvent$redu = pageOpenedEvent.reducer) === null || _pageOpenedEvent$redu === void 0 ? void 0 : _pageOpenedEvent$redu.call(pageOpenedEvent, state, action)).toEqual(pageOpenedReducer(state, action));
  });
});
//# sourceMappingURL=initEvents.test.js.map