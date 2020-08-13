"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

test('renders learn react link', function () {
  var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(App, null)),
      getByText = _render.getByText;

  var linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
//# sourceMappingURL=App.test.js.map