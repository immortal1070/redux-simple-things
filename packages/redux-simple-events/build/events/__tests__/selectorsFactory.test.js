"use strict";

var _selectorsFactory = require("../selectorsFactory");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var initialState = {
  loading: false,
  users: [],
  dictionary: {
    countries: [],
    cities: {
      districts: []
    }
  }
};
var testState = {
  users: [{
    name: 'Duncan',
    lastname: 'Macleod'
  }],
  dictionary: {
    countries: ['Russia', 'Germany', 'Bulgaria']
  }
};
describe('selectorsFactory', function () {
  var simpleSelectors = (0, _selectorsFactory.fillSimpleSelectors)(initialState);
  it('first level selectors are created', function () {
    var usersSelector = simpleSelectors.users.selector;
    expect(usersSelector(testState)).toEqual(testState.users);
  });
  it('nested level selectors are created', function () {
    var countriesSelector = simpleSelectors.dictionary.countries.selector;
    expect(countriesSelector(testState)).toEqual(testState.dictionary.countries);
  });
  it('if state does not have nested data, then selector returns undefined', function () {
    var districtsSelector = simpleSelectors.dictionary.cities.districts.selector;
    expect(districtsSelector(testState)).toEqual(undefined);
  });
});
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/home/immortal/dev/github/immortal-redux/redux-events/packages/redux-simple-events/src/events/__tests__/selectorsFactory.test.js");
  reactHotLoader.register(testState, "testState", "/home/immortal/dev/github/immortal-redux/redux-events/packages/redux-simple-events/src/events/__tests__/selectorsFactory.test.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
//# sourceMappingURL=selectorsFactory.test.js.map