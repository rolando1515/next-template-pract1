"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/ui/shared/Footer /footer_styles.tsx":
/*!*************************************************!*\
  !*** ./src/ui/shared/Footer /footer_styles.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Style\": function() { return /* binding */ Style; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n         height: 123px;\\n         width: 100%;\\n         border: 1px #000000;\\n         display: grid;\\n         //place-items: end;\\n         position: fixed;\\n         bottom: 0;\\n         background-color: #000000;\\n\\n        @media (max-width: 768px) {\\n            span{\\n                margin-bottom: 10px;\\n             }\\n        }\\n        // justify content throws the list to the right. \\n        .footer-content{\\n          width: var(--width);\\n          color: #ffffff;\\n          max-width: var(--max-width);\\n          height: 100%;\\n          border: 1px #000000;\\n          display: flex;\\n          align-items: center;\\n          justify-content: space-between;\\n          place-items: center;\\n            @media (max-width: 768px) {\\n             flex-direction: column;\\n            }\\n\\n\\n        }\\n        .footer-contact{\\n            width: 86px;\\n            height: 22px;\\n            font-family: 'Inter';\\n            font-style: normal;\\n            font-weight: 300;\\n            font-size: 18px;\\n            line-height: 22px;\\n            box-sizing: border-box;\\n        }\\n\\n        ul{\\n            list-style: none;\\n             margin: 0;\\n             padding: 0;\\n             display: flex;\\n  // display flex is what makes it so the list items are next to each other.\\n\\n        }\\n        li{\\n            display: flex;\\n            margin-left: 30px;\\n            font-size: 15px;\\n            font-family: 'Inter';\\n            font-style: normal;\\n            font-weight: 300;\\n            border: 1px solid red;\\n            border-radius: 4px;\\n            box-sizing: border-box;\\n            text-transform:uppercase;   \\n            text-align: center;\\n            padding: 5px 20px;\\n            align-items: center;\\n        }\\n\\n      \\n\\n\\n\\n         svg {\\n        display: flex;\\n        width: 15px;\\n        margin-right: 15px;\\n      }\\n\\n\\n\\n        \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst Style = {\n    Container: styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer.withConfig({\n        displayName: \"footer_styles__Container\",\n        componentId: \"sc-f47007b8-0\"\n    })(_templateObject())\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvc2hhcmVkL0Zvb3RlciAvZm9vdGVyX3N0eWxlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUVoQyxNQUFNQyxRQUFRO0lBQ2pCQyxTQUFTLEVBQUNGLDJFQUFhOzs7O0FBZ0YzQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91aS9zaGFyZWQvRm9vdGVyIC9mb290ZXJfc3R5bGVzLnRzeD9lNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBTdHlsZSA9IHtcbiAgICBDb250YWluZXI6c3R5bGVkLmZvb3RlcmBcbiAgICAgICAgIGhlaWdodDogMTIzcHg7XG4gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgIGJvcmRlcjogMXB4ICMwMDAwMDA7XG4gICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgLy9wbGFjZS1pdGVtczogZW5kO1xuICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8ganVzdGlmeSBjb250ZW50IHRocm93cyB0aGUgbGlzdCB0byB0aGUgcmlnaHQuIFxuICAgICAgICAuZm9vdGVyLWNvbnRlbnR7XG4gICAgICAgICAgd2lkdGg6IHZhcigtLXdpZHRoKTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4ICMwMDAwMDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1jb250YWN0e1xuICAgICAgICAgICAgd2lkdGg6IDg2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cblxuICAgICAgICB1bHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgLy8gZGlzcGxheSBmbGV4IGlzIHdoYXQgbWFrZXMgaXQgc28gdGhlIGxpc3QgaXRlbXMgYXJlIG5leHQgdG8gZWFjaCBvdGhlci5cblxuICAgICAgICB9XG4gICAgICAgIGxpe1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTsgICBcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICBcblxuXG5cbiAgICAgICAgIHN2ZyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICB9XG5cblxuXG4gICAgICAgIGAsXG59OyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJTdHlsZSIsIkNvbnRhaW5lciIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ui/shared/Footer /footer_styles.tsx\n"));

/***/ })

});