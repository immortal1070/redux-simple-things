"use strict";

var _eventMapping = require("../eventMapping");

var _testData = require("./testData");

describe('eventMapping', function () {
  var emptyState = {};
  it('eventsToReducersMap type->reducer mapping is correct', function () {
    var reducersMap = (0, _eventMapping.eventsToReducersMap)(_testData.testData);
    expect(Object.keys(reducersMap).length).toEqual(2);
    expect(Object.keys(reducersMap)).toContain(_testData.pageClosedEvent.type);
    expect(Object.keys(reducersMap)).toContain(_testData.pageOpenedEvent.type);
    expect(reducersMap[_testData.pageClosedEvent.type](emptyState)).toEqual(_testData.pageClosedEvent.reducer(emptyState));
    expect(reducersMap[_testData.pageOpenedEvent.type](emptyState).opened).toEqual(true);
    expect(reducersMap[_testData.pageClosedEvent.type](emptyState).opened).toEqual(false);
  });
  it('eventsToReducersMap processes undefined correctly', function () {
    var reducersMap = (0, _eventMapping.eventsToReducersMap)(undefined);
    expect(Object.keys(reducersMap).length).toEqual(0);
  });
  it('eventsToReducersMap processes empty array correctly', function () {
    var reducersMap = (0, _eventMapping.eventsToReducersMap)([]);
    expect(Object.keys(reducersMap).length).toEqual(0);
  });
});
//# sourceMappingURL=eventMapping.test.js.map