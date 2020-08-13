"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fillSimpleSelectors = void 0;

var _reselect = require("reselect");

var _objectUtils = require("../utils/objectUtils");

var _ramda = require("ramda");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

/**
 * selector with deep equals instead of "==="
 */
var createSelector = (0, _reselect.createSelectorCreator)(_reselect.defaultMemoize, _ramda.equals);
var selectorFieldName = 'selector';

var fillSelectorsRec = function fillSelectorsRec(object) {
  for (var _len = arguments.length, pathParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pathParams[_key - 1] = arguments[_key];
  }

  if (object) {
    if (!object[selectorFieldName]) {
      // eslint-disable-next-line no-param-reassign
      object[selectorFieldName] = createSelector((0, _ramda.path)(pathParams), function (value) {
        return value;
      });
    }

    Object.keys(object).filter(function (key) {
      return key !== selectorFieldName;
    }).forEach(function (key) {
      // eslint-disable-next-line prettier/prettier
      if (!(0, _objectUtils.isPlainObject)(object[key])) {
        // eslint-disable-next-line no-param-reassign
        object[key] = {};
      } // eslint-disable-next-line prettier/prettier


      fillSelectorsRec.apply(void 0, [object[key]].concat([].concat(pathParams), [key]));
    });
  }

  return object;
};
/**
 * Builds selectors for each field in the initialState using reselect lib.
 *
 * e.g. for state
 * const initialState = {
    samlConfigs: [],
    operation: OperationTypes.OVERVIEW,
    types: {
        protocolVersionTypes: [],
    ...

    this will return object
    {
        samlConfigs: {
            selector: >correct selector<
       },
       operation: {
            selector: >correct selector<
       },
       types: {
            selector: >correct selector<,
            protocolVersionTypes: {
                selector: >correct selector<,
            }
       },
    }

 Usage:
 const protocolVersionTypes = useSelector(samlConfigStoreRouting.types.protocolVersionTypes._selector)

 */


var fillSimpleSelectors = function fillSimpleSelectors(initialState) {
  var stateDeepCopy = (0, _ramda.clone)(initialState);

  for (var _len2 = arguments.length, pathParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    pathParams[_key2 - 1] = arguments[_key2];
  }

  return fillSelectorsRec.apply(void 0, [stateDeepCopy].concat([].concat(pathParams)));
};

exports.fillSimpleSelectors = fillSimpleSelectors;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createSelector, "createSelector", "/home/immortal/dev/github/immortal-redux/redux-events/packages/redux-simple-events/src/events/selectorsFactory.ts");
  reactHotLoader.register(selectorFieldName, "selectorFieldName", "/home/immortal/dev/github/immortal-redux/redux-events/packages/redux-simple-events/src/events/selectorsFactory.ts");
  reactHotLoader.register(fillSelectorsRec, "fillSelectorsRec", "/home/immortal/dev/github/immortal-redux/redux-events/packages/redux-simple-events/src/events/selectorsFactory.ts");
  reactHotLoader.register(fillSimpleSelectors, "fillSimpleSelectors", "/home/immortal/dev/github/immortal-redux/redux-events/packages/redux-simple-events/src/events/selectorsFactory.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=selectorsFactory.js.map