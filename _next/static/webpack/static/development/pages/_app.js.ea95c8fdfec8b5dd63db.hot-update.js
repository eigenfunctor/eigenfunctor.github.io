webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_theme_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/theme-provider */ "./components/theme-provider.tsx");






var _jsxFileName = "/Users/armintaheri/repos/eigenfunctor.github.io/pages/_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







var App =
/*#__PURE__*/
function (_NextApp) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _NextApp);

  function App() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Remove the server-side injected CSS.
      var jssStyles = document.querySelector("#jss-server-side");

      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "eigenfunctor.io"), __jsx("link", {
        rel: "icon",
        href: "/eigenfunctor_logo.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), __jsx("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "\nhtml,body\n{\n      width: 100%;\n      margin: 0px;\n      padding: 0px;\n      overflow-x: hidden; \n  \n}\n        ")), __jsx(_components_theme_provider__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CssBaseline"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(next_app__WEBPACK_IMPORTED_MODULE_7___default.a);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=_app.js.ea95c8fdfec8b5dd63db.hot-update.js.map