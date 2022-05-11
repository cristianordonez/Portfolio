"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio_custom_template"] = self["webpackChunkportfolio_custom_template"] || []).push([["client_src_components_pages_Projects_ProjectList_jsx"],{

/***/ "./client/src/components/pages/Projects/Project.jsx":
/*!**********************************************************!*\
  !*** ./client/src/components/pages/Projects/Project.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Project = ({\n  name,\n  description,\n  githubUrl\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"single project\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://portfolio-custom-template/./client/src/components/pages/Projects/Project.jsx?");

/***/ }),

/***/ "./client/src/components/pages/Projects/ProjectList.jsx":
/*!**************************************************************!*\
  !*** ./client/src/components/pages/Projects/ProjectList.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Project_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.jsx */ \"./client/src/components/pages/Projects/Project.jsx\");\n\n\n\nconst ProjectList = ({\n  repos\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"project page\"), repos.map(repo => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Project_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    key: repo._id,\n    name: repo.name,\n    description: repo.description,\n    githubUrl: repo.url\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);\n\n//# sourceURL=webpack://portfolio-custom-template/./client/src/components/pages/Projects/ProjectList.jsx?");

/***/ })

}]);