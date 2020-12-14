webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Headers/HomePageHeaders.js":
/*!***************************************************!*\
  !*** ./src/components/Headers/HomePageHeaders.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomePageHeaders; });\n/* harmony import */ var _home_acer_Diversos_devweek_dev_oculto_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_acer_Diversos_devweek_dev_oculto_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_acer_Diversos_devweek_dev_oculto_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_acer_Diversos_devweek_dev_oculto_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Container_ImageContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Container/ImageContainer */ \"./src/components/Container/ImageContainer.js\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logo */ \"./src/components/logo.js\");\n/* harmony import */ var _nameEmailForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nameEmailForm */ \"./src/components/nameEmailForm.js\");\n\n\n\nvar _jsxFileName = \"/home/acer/Diversos/devweek/dev-oculto/src/components/Headers/HomePageHeaders.js\";\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"HomePageHeaders__Container\",\n  componentId: \"sc-1mo9hg1-0\"\n})([\"display:flex;flex-direction:column;justify-content:center;min-height:80vh;color:\", \" padding-left:40px;\"], function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.light;\n});\n_c = Container;\nvar FormDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"HomePageHeaders__FormDiv\",\n  componentId: \"sc-1mo9hg1-1\"\n})([\"display:flex;flex-direction:row;justify-content:center;align-items:center;flex-shrink:0;\"]);\n_c2 = FormDiv;\nfunction HomePageHeaders() {\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref3 = Object(_home_acer_Diversos_devweek_dev_oculto_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_acer_Diversos_devweek_dev_oculto_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n      var name, email, NEXT_PUBLIC_API_URL, data;\n      return _home_acer_Diversos_devweek_dev_oculto_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              name = _ref2.name, email = _ref2.email;\n              NEXT_PUBLIC_API_URL = \"http://zljh87a1cb.execute.api.us-east-1.amazonaws.com/dev\";\n              _context.next = 4;\n              return fetch(\"\".concat(NEXT_PUBLIC_API_URL, \"/secrets\"), {\n                method: 'POST',\n                body: JSON.stringify({\n                  name: name,\n                  email: email\n                })\n              });\n\n            case 4:\n              data = _context.sent;\n              _context.t0 = handleResponse;\n              _context.next = 8;\n              return data.json();\n\n            case 8:\n              _context.t1 = _context.sent;\n              (0, _context.t0)(_context.t1);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var handleResponse = function handleResponse(response) {\n    if (response.success) {}\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_Container_ImageContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Container, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_logo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 8\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n        children: \"A melhor brincadeira do Natal \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 8\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 8\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(FormDiv, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_nameEmailForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        onSubmit: handleSubmit\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 12\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 8\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, this);\n}\n_c3 = HomePageHeaders;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"FormDiv\");\n$RefreshReg$(_c3, \"HomePageHeaders\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVycy9Ib21lUGFnZUhlYWRlcnMuanM/NjlhOSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsImNvbG9ycyIsImxpZ2h0IiwiRm9ybURpdiIsIkhvbWVQYWdlSGVhZGVycyIsImhhbmRsZVN1Ym1pdCIsIm5hbWUiLCJlbWFpbCIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJwcm9jZXNzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJoYW5kbGVSZXNwb25zZSIsImpzb24iLCJyZXNwb25zZSIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnSEFLTjtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWNBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUEzQjtBQUFBLENBTE0sQ0FBZjtLQUFNTCxTO0FBVU4sSUFBTU0sT0FBTyxHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdHQUFiO01BQU1JLE87QUFTUyxTQUFTQyxlQUFULEdBQTJCO0FBRXRDLE1BQU1DLFlBQVk7QUFBQSx1U0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUUMsa0JBQVIsU0FBUUEsSUFBUixFQUFjQyxLQUFkLFNBQWNBLEtBQWQ7QUFDZkMsaUNBRGUsR0FDU0MsMkRBRFQ7QUFBQTtBQUFBLHFCQUVIQyxLQUFLLFdBQUlGLG1CQUFKLGVBQW1DO0FBQ3ZERyxzQkFBTSxFQUFFLE1BRCtDO0FBRXZEQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQlIsc0JBQUksRUFBSkEsSUFEaUI7QUFFakJDLHVCQUFLLEVBQUxBO0FBRmlCLGlCQUFmO0FBRmlELGVBQW5DLENBRkY7O0FBQUE7QUFFaEJRLGtCQUZnQjtBQUFBLDRCQVV0QkMsY0FWc0I7QUFBQTtBQUFBLHFCQVVERCxJQUFJLENBQUNFLElBQUwsRUFWQzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSjs7QUFBQSxvQkFBWlosWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFZQSxNQUFNVyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNFLFFBQUQsRUFBYztBQUNqQyxRQUFHQSxRQUFRLENBQUNDLE9BQVosRUFBcUIsQ0FFcEI7QUFDSixHQUpEOztBQUtKLHNCQUNJLHFFQUFDLGlFQUFEO0FBQUEsNEJBQ0cscUVBQUMsU0FBRDtBQUFBLDhCQUNBLHFFQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREgsZUFLRyxxRUFBQyxPQUFEO0FBQUEsNkJBQ0kscUVBQUMsc0RBQUQ7QUFBZSxnQkFBUSxFQUFFZDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0M7TUE5QnVCRCxlIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGVhZGVycy9Ib21lUGFnZUhlYWRlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gJy4uL0NvbnRhaW5lci9JbWFnZUNvbnRhaW5lcic7XG5pbXBvcnQgTG9nbyBmcm9tICcuLi9sb2dvJztcbmltcG9ydCBOYW1lRW1haWxGb3JtIGZyb20gJy4uL25hbWVFbWFpbEZvcm0nO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbm1pbi1oZWlnaHQ6IDgwdmg7XG5jb2xvcjogJHsoeyB0aGVtZSB9KT0+IHRoZW1lLmNvbG9ycy5saWdodH1cbnBhZGRpbmctbGVmdDogNDBweDtcblxuYDtcblxuY29uc3QgRm9ybURpdiA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IHJvdztcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmZsZXgtc2hyaW5rOiAwO1xuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZUhlYWRlcnMgKCl7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAgYXN5bmMgKHtuYW1lLCBlbWFpbH0pID0+IHtcbiAgICBjb25zdHsgTkVYVF9QVUJMSUNfQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke05FWFRfUFVCTElDX0FQSV9VUkx9L3NlY3JldHNgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG5cbiAgICAgICAgfSlcbiAgICB9KSBcbiAgICBoYW5kbGVSZXNwb25zZShhd2FpdCBkYXRhLmpzb24oKSk7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcblxuICAgICAgICB9XG4gICAgfVxucmV0dXJuIChcbiAgICA8SW1hZ2VDb250YWluZXI+XG4gICAgICAgPENvbnRhaW5lcj5cbiAgICAgICA8TG9nbyAvPlxuICAgICAgIDxoMj5BIG1lbGhvciBicmluY2FkZWlyYSBkbyBOYXRhbCA8L2gyPlxuICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgIDxGb3JtRGl2PlxuICAgICAgICAgICA8TmFtZUVtYWlsRm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSAvPlxuICAgICAgIDwvRm9ybURpdj5cbiAgICA8L0ltYWdlQ29udGFpbmVyPlxuKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Headers/HomePageHeaders.js\n");

/***/ })

})