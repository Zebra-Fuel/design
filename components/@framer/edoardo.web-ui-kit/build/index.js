(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require("framer"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["framer"], factory);
	else {
		var a = typeof exports === 'object' ? factory((function webpackLoadOptionalExternalModule() { try { return require("framer"); } catch(e) {} }())) : factory(root["Framer"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error('Cannot find module \"' + req + '\".');\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./code sync recursive \\\\.(t|j)s(x?)|\\\\.css$\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlIHN5bmMgXFwuKHR8ailzKHgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvZGUgc3luYyByZWN1cnNpdmUgXFwuKHR8ailzKHg/KXxcXC5jc3MkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIG1vZHVsZSBcIicgKyByZXEgKyAnXCIuJyk7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9jb2RlIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHR8ailzKHg/KXxcXFxcLmNzcyRcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code sync recursive \\.(t|j)s(x?)|\\.css$\n");

/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// The template for the dynamic webpack entry. Be aware of the variables\n\nconst packageJson = __webpack_require__(/*! ./package.json */ \"./package.json\")\n\nconst package = {\n    packageJson,\n    sourceModules: {},\n    dependencies: {},\n}\n\n// This is a special webpack thing that watches the whole directory\n// https://github.com/webpack/docs/wiki/context\nconst ctx = __webpack_require__(\"./code sync recursive \\\\.(t|j)s(x?)|\\\\.css$\")\n\nctx.keys().forEach(key => {\n    package.sourceModules[key] = () => ctx(key)\n})\n\n// The packages are passed in through a template\nconst packages = {}\n\n                packages[\"framer\"] = () => {\n                    var package = {}\n                    try {\n                        package = __webpack_require__(/*! framer */ \"framer\")\n                    } catch (e) {\n                        console.log(e)\n                    }\n                    package.__framer__ = package.__framer__ || {}\n                    package.__framer__.packageJson = {\"name\":\"framer\",\"version\":\"0.1.18\",\"main\":\"build/framer.js\",\"types\":\"build/framer.d.ts\",\"author\":\"Framer\",\"license\":\"UNLICENSED\",\"devDependencies\":{\"@types/chalk\":\"^2.2.0\",\"@types/draft-js\":\"0.10.19\",\"@types/enzyme\":\"^3.1.10\",\"@types/hsluv\":\"https://github.com/framer/typed_hsluv#bump\",\"@types/jest\":\"^23.0.0\",\"@types/jest-diff\":\"^20.0.0\",\"@types/node\":\"^9.6.0\",\"@types/react\":\"16.3.12\",\"@types/react-dom\":\"^16.0.5\",\"cache-loader\":\"^1.2.2\",\"chalk\":\"^2.4.1\",\"convert-tsconfig-paths-to-webpack-aliases\":\"^0.9.2\",\"css.escape\":\"^1.5.1\",\"dts-bundle\":\"^0.7.3\",\"enzyme\":\"^3.3.0\",\"enzyme-adapter-react-16\":\"^1.1.1\",\"fork-ts-checker-webpack-plugin\":\"^0.4.1\",\"hoist-non-react-statics\":\"^2.5.0\",\"jest\":\"^23.1.0\",\"jest-diff\":\"^22.0.3\",\"jest-junit\":\"^3.4.1\",\"progress-bar-webpack-plugin\":\"^1.11.0\",\"raf\":\"^3.4.0\",\"react\":\"^16.3.2\",\"react-dev-utils\":\"^5.0.1\",\"react-dom\":\"^16.3.2\",\"ts-jest\":\"^22.4.5\",\"ts-loader\":\"^4.1.0\",\"tslint\":\"^5.10.0\",\"tslint-microsoft-contrib\":\"^5.0.3\",\"typescript\":\"^2.8.3\",\"watch\":\"^1.0.2\",\"webpack\":\"^4.4.1\",\"webpack-cli\":\"^2.0.13\",\"webpack-dev-server\":\"^3.1.4\",\"xcssmatrix\":\"^0.2.2\"},\"peerDependencies\":{\"react\":\"^16.3.2\",\"react-dom\":\"^16.3.2\"},\"dependencies\":{\"draft-js\":\"0.10.4\",\"eventemitter3\":\"^3.1.0\",\"hsluv\":\"^0.0.3\",\"immutable\":\"^3.8.2\"},\"framer\":{\"components\":[{\"name\":\"Scroll\",\"children\":true,\"properties\":[{\"key\":\"direction\",\"title\":\"Direction\",\"kind\":\"enum\",\"options\":[\"horizontal\",\"vertical\",\"both\"]}]},{\"name\":\"Page\",\"children\":true},{\"name\":\"Stack\",\"children\":true},{\"name\":\"FramerAppleWatch38\",\"type\":\"device\"},{\"name\":\"FramerAppleWatch42\",\"type\":\"device\"},{\"name\":\"FramerSonySmartWatch\",\"type\":\"device\"},{\"name\":\"FramerAppleIPhoneSE\",\"type\":\"device\"},{\"name\":\"FramerAppleIPhone8\",\"type\":\"device\"},{\"name\":\"FramerAppleIPhone8Plus\",\"type\":\"device\"},{\"name\":\"FramerAppleIPhoneX\",\"type\":\"device\"},{\"name\":\"FramerGoogleNexus4\",\"type\":\"device\"},{\"name\":\"FramerGoogleNexus5X\",\"type\":\"device\"},{\"name\":\"FramerGoogleNexus6\",\"type\":\"device\"},{\"name\":\"FramerGooglePixel2\",\"type\":\"device\"},{\"name\":\"FramerGooglePixel2XL\",\"type\":\"device\"},{\"name\":\"FramerHTCOneA9\",\"type\":\"device\"},{\"name\":\"FramerMicrosoftLumia950\",\"type\":\"device\"},{\"name\":\"FramerSamsungNote5\",\"type\":\"device\"},{\"name\":\"FramerSamsungGalaxyS8\",\"type\":\"device\"},{\"name\":\"FramerAppleIPadAir\",\"type\":\"device\"},{\"name\":\"FramerAppleIPadMini\",\"type\":\"device\"},{\"name\":\"FramerAppleIPadPro\",\"type\":\"device\"},{\"name\":\"FramerGoogleNexusTablet\",\"type\":\"device\"},{\"name\":\"FramerMicrosoftSurfacePro3\",\"type\":\"device\"},{\"name\":\"FramerMicrosoftSurfacePro4\",\"type\":\"device\"},{\"name\":\"FramerAppleIMac\",\"type\":\"device\"},{\"name\":\"FramerAppleThunderboltDisplay\",\"type\":\"device\"},{\"name\":\"FramerAppleMacBook\",\"type\":\"device\"},{\"name\":\"FramerAppleMacBookAir\",\"type\":\"device\"},{\"name\":\"FramerAppleMacBookPro\",\"type\":\"device\"},{\"name\":\"FramerDellXPS\",\"type\":\"device\"},{\"name\":\"FramerMicrosoftSurfaceBook\",\"type\":\"device\"},{\"name\":\"FramerSonyW850C\",\"type\":\"device\"}]},\"scripts\":{\"coverage\":\"jest --config jest.json --coverage\",\"test\":\"jest --config jest.json\",\"watch\":\"jest --config jest.json --watch\"}}\n                    return package\n                }\n\npackage.dependencies = packages\n\nexports.__framer__ = package\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxvSkFBb0oscTdCQUFxN0IscUJBQXFCLHdDQUF3QyxpQkFBaUIsbUZBQW1GLFdBQVcsZUFBZSwrQ0FBK0MsK0ZBQStGLEVBQUUsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSw0Q0FBNEMsRUFBRSw0Q0FBNEMsRUFBRSw4Q0FBOEMsRUFBRSw2Q0FBNkMsRUFBRSw0Q0FBNEMsRUFBRSxnREFBZ0QsRUFBRSw0Q0FBNEMsRUFBRSw0Q0FBNEMsRUFBRSw2Q0FBNkMsRUFBRSw0Q0FBNEMsRUFBRSw0Q0FBNEMsRUFBRSw4Q0FBOEMsRUFBRSx3Q0FBd0MsRUFBRSxpREFBaUQsRUFBRSw0Q0FBNEMsRUFBRSwrQ0FBK0MsRUFBRSw0Q0FBNEMsRUFBRSw2Q0FBNkMsRUFBRSw0Q0FBNEMsRUFBRSxpREFBaUQsRUFBRSxvREFBb0QsRUFBRSxvREFBb0QsRUFBRSx5Q0FBeUMsRUFBRSx1REFBdUQsRUFBRSw0Q0FBNEMsRUFBRSwrQ0FBK0MsRUFBRSwrQ0FBK0MsRUFBRSx1Q0FBdUMsRUFBRSxvREFBb0QsRUFBRSx5Q0FBeUMsRUFBRSxZQUFZO0FBQy82RjtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6Ii4vcGFja2FnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSB0ZW1wbGF0ZSBmb3IgdGhlIGR5bmFtaWMgd2VicGFjayBlbnRyeS4gQmUgYXdhcmUgb2YgdGhlIHZhcmlhYmxlc1xuXG5jb25zdCBwYWNrYWdlSnNvbiA9IHJlcXVpcmUoXCIuL3BhY2thZ2UuanNvblwiKVxuXG5jb25zdCBwYWNrYWdlID0ge1xuICAgIHBhY2thZ2VKc29uLFxuICAgIHNvdXJjZU1vZHVsZXM6IHt9LFxuICAgIGRlcGVuZGVuY2llczoge30sXG59XG5cbi8vIFRoaXMgaXMgYSBzcGVjaWFsIHdlYnBhY2sgdGhpbmcgdGhhdCB3YXRjaGVzIHRoZSB3aG9sZSBkaXJlY3Rvcnlcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL2RvY3Mvd2lraS9jb250ZXh0XG5jb25zdCBjdHggPSByZXF1aXJlLmNvbnRleHQoXCIuL2NvZGVcIiwgdHJ1ZSwgL1xcLih0fGopcyh4Pyl8XFwuY3NzJC8pXG5cbmN0eC5rZXlzKCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIHBhY2thZ2Uuc291cmNlTW9kdWxlc1trZXldID0gKCkgPT4gY3R4KGtleSlcbn0pXG5cbi8vIFRoZSBwYWNrYWdlcyBhcmUgcGFzc2VkIGluIHRocm91Z2ggYSB0ZW1wbGF0ZVxuY29uc3QgcGFja2FnZXMgPSB7fVxuXG4gICAgICAgICAgICAgICAgcGFja2FnZXNbXCJmcmFtZXJcIl0gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWNrYWdlID0ge31cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhY2thZ2UgPSByZXF1aXJlKFwiZnJhbWVyXCIpXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFja2FnZS5fX2ZyYW1lcl9fID0gcGFja2FnZS5fX2ZyYW1lcl9fIHx8IHt9XG4gICAgICAgICAgICAgICAgICAgIHBhY2thZ2UuX19mcmFtZXJfXy5wYWNrYWdlSnNvbiA9IHtcIm5hbWVcIjpcImZyYW1lclwiLFwidmVyc2lvblwiOlwiMC4xLjE4XCIsXCJtYWluXCI6XCJidWlsZC9mcmFtZXIuanNcIixcInR5cGVzXCI6XCJidWlsZC9mcmFtZXIuZC50c1wiLFwiYXV0aG9yXCI6XCJGcmFtZXJcIixcImxpY2Vuc2VcIjpcIlVOTElDRU5TRURcIixcImRldkRlcGVuZGVuY2llc1wiOntcIkB0eXBlcy9jaGFsa1wiOlwiXjIuMi4wXCIsXCJAdHlwZXMvZHJhZnQtanNcIjpcIjAuMTAuMTlcIixcIkB0eXBlcy9lbnp5bWVcIjpcIl4zLjEuMTBcIixcIkB0eXBlcy9oc2x1dlwiOlwiaHR0cHM6Ly9naXRodWIuY29tL2ZyYW1lci90eXBlZF9oc2x1diNidW1wXCIsXCJAdHlwZXMvamVzdFwiOlwiXjIzLjAuMFwiLFwiQHR5cGVzL2plc3QtZGlmZlwiOlwiXjIwLjAuMFwiLFwiQHR5cGVzL25vZGVcIjpcIl45LjYuMFwiLFwiQHR5cGVzL3JlYWN0XCI6XCIxNi4zLjEyXCIsXCJAdHlwZXMvcmVhY3QtZG9tXCI6XCJeMTYuMC41XCIsXCJjYWNoZS1sb2FkZXJcIjpcIl4xLjIuMlwiLFwiY2hhbGtcIjpcIl4yLjQuMVwiLFwiY29udmVydC10c2NvbmZpZy1wYXRocy10by13ZWJwYWNrLWFsaWFzZXNcIjpcIl4wLjkuMlwiLFwiY3NzLmVzY2FwZVwiOlwiXjEuNS4xXCIsXCJkdHMtYnVuZGxlXCI6XCJeMC43LjNcIixcImVuenltZVwiOlwiXjMuMy4wXCIsXCJlbnp5bWUtYWRhcHRlci1yZWFjdC0xNlwiOlwiXjEuMS4xXCIsXCJmb3JrLXRzLWNoZWNrZXItd2VicGFjay1wbHVnaW5cIjpcIl4wLjQuMVwiLFwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIjpcIl4yLjUuMFwiLFwiamVzdFwiOlwiXjIzLjEuMFwiLFwiamVzdC1kaWZmXCI6XCJeMjIuMC4zXCIsXCJqZXN0LWp1bml0XCI6XCJeMy40LjFcIixcInByb2dyZXNzLWJhci13ZWJwYWNrLXBsdWdpblwiOlwiXjEuMTEuMFwiLFwicmFmXCI6XCJeMy40LjBcIixcInJlYWN0XCI6XCJeMTYuMy4yXCIsXCJyZWFjdC1kZXYtdXRpbHNcIjpcIl41LjAuMVwiLFwicmVhY3QtZG9tXCI6XCJeMTYuMy4yXCIsXCJ0cy1qZXN0XCI6XCJeMjIuNC41XCIsXCJ0cy1sb2FkZXJcIjpcIl40LjEuMFwiLFwidHNsaW50XCI6XCJeNS4xMC4wXCIsXCJ0c2xpbnQtbWljcm9zb2Z0LWNvbnRyaWJcIjpcIl41LjAuM1wiLFwidHlwZXNjcmlwdFwiOlwiXjIuOC4zXCIsXCJ3YXRjaFwiOlwiXjEuMC4yXCIsXCJ3ZWJwYWNrXCI6XCJeNC40LjFcIixcIndlYnBhY2stY2xpXCI6XCJeMi4wLjEzXCIsXCJ3ZWJwYWNrLWRldi1zZXJ2ZXJcIjpcIl4zLjEuNFwiLFwieGNzc21hdHJpeFwiOlwiXjAuMi4yXCJ9LFwicGVlckRlcGVuZGVuY2llc1wiOntcInJlYWN0XCI6XCJeMTYuMy4yXCIsXCJyZWFjdC1kb21cIjpcIl4xNi4zLjJcIn0sXCJkZXBlbmRlbmNpZXNcIjp7XCJkcmFmdC1qc1wiOlwiMC4xMC40XCIsXCJldmVudGVtaXR0ZXIzXCI6XCJeMy4xLjBcIixcImhzbHV2XCI6XCJeMC4wLjNcIixcImltbXV0YWJsZVwiOlwiXjMuOC4yXCJ9LFwiZnJhbWVyXCI6e1wiY29tcG9uZW50c1wiOlt7XCJuYW1lXCI6XCJTY3JvbGxcIixcImNoaWxkcmVuXCI6dHJ1ZSxcInByb3BlcnRpZXNcIjpbe1wia2V5XCI6XCJkaXJlY3Rpb25cIixcInRpdGxlXCI6XCJEaXJlY3Rpb25cIixcImtpbmRcIjpcImVudW1cIixcIm9wdGlvbnNcIjpbXCJob3Jpem9udGFsXCIsXCJ2ZXJ0aWNhbFwiLFwiYm90aFwiXX1dfSx7XCJuYW1lXCI6XCJQYWdlXCIsXCJjaGlsZHJlblwiOnRydWV9LHtcIm5hbWVcIjpcIlN0YWNrXCIsXCJjaGlsZHJlblwiOnRydWV9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlV2F0Y2gzOFwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlV2F0Y2g0MlwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lclNvbnlTbWFydFdhdGNoXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVJUGhvbmVTRVwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlSVBob25lOFwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlSVBob25lOFBsdXNcIixcInR5cGVcIjpcImRldmljZVwifSx7XCJuYW1lXCI6XCJGcmFtZXJBcHBsZUlQaG9uZVhcIixcInR5cGVcIjpcImRldmljZVwifSx7XCJuYW1lXCI6XCJGcmFtZXJHb29nbGVOZXh1czRcIixcInR5cGVcIjpcImRldmljZVwifSx7XCJuYW1lXCI6XCJGcmFtZXJHb29nbGVOZXh1czVYXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyR29vZ2xlTmV4dXM2XCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyR29vZ2xlUGl4ZWwyXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyR29vZ2xlUGl4ZWwyWExcIixcInR5cGVcIjpcImRldmljZVwifSx7XCJuYW1lXCI6XCJGcmFtZXJIVENPbmVBOVwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lck1pY3Jvc29mdEx1bWlhOTUwXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyU2Ftc3VuZ05vdGU1XCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyU2Ftc3VuZ0dhbGF4eVM4XCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVJUGFkQWlyXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVJUGFkTWluaVwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlSVBhZFByb1wiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckdvb2dsZU5leHVzVGFibGV0XCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyTWljcm9zb2Z0U3VyZmFjZVBybzNcIixcInR5cGVcIjpcImRldmljZVwifSx7XCJuYW1lXCI6XCJGcmFtZXJNaWNyb3NvZnRTdXJmYWNlUHJvNFwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlSU1hY1wiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlVGh1bmRlcmJvbHREaXNwbGF5XCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVNYWNCb29rXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVNYWNCb29rQWlyXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVNYWNCb29rUHJvXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyRGVsbFhQU1wiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lck1pY3Jvc29mdFN1cmZhY2VCb29rXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyU29ueVc4NTBDXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn1dfSxcInNjcmlwdHNcIjp7XCJjb3ZlcmFnZVwiOlwiamVzdCAtLWNvbmZpZyBqZXN0Lmpzb24gLS1jb3ZlcmFnZVwiLFwidGVzdFwiOlwiamVzdCAtLWNvbmZpZyBqZXN0Lmpzb25cIixcIndhdGNoXCI6XCJqZXN0IC0tY29uZmlnIGplc3QuanNvbiAtLXdhdGNoXCJ9fVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFja2FnZVxuICAgICAgICAgICAgICAgIH1cblxucGFja2FnZS5kZXBlbmRlbmNpZXMgPSBwYWNrYWdlc1xuXG5leHBvcnRzLl9fZnJhbWVyX18gPSBwYWNrYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./package.js\n");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, devDependencies, peerDependencies, framer, keywords, author, license, name, version, default */
/***/ (function(module) {

eval("module.exports = {\"main\":\"build/index.js\",\"devDependencies\":{\"@types/react\":\"^16.0.31\",\"framer\":\"^0.1.18\"},\"peerDependencies\":{\"framer\":\"^0.1.18\",\"react\":\"^16.3.0\",\"react-dom\":\"^16.3.0\"},\"framer\":{\"displayName\":\"Web UI Kit\",\"id\":\"6e8f8e67-2199-47d9-92db-2c3a641251bc\"},\"keywords\":[\"web\",\"kit\",\"destop\",\"ui\"],\"author\":\"Edoardo Mercati\",\"license\":\"MIT\",\"name\":\"@framer/edoardo.web-ui-kit\",\"version\":\"1.0.0\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhY2thZ2UuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./package.json\n");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if(typeof __WEBPACK_EXTERNAL_MODULE_framer__ === 'undefined') {var e = new Error(\"Cannot find module \\\"undefined\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e;}\nmodule.exports = __WEBPACK_EXTERNAL_MODULE_framer__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiRnJhbWVyXCIsXCJjb21tb25qczJcIjpcImZyYW1lclwiLFwiY29tbW9uanNcIjpcImZyYW1lclwiLFwiYW1kXCI6XCJmcmFtZXJcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0RBQStELHNEQUFzRCw2QkFBNkI7QUFDbEoiLCJmaWxlIjoiZnJhbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYodHlwZW9mIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZnJhbWVyX18gPT09ICd1bmRlZmluZWQnKSB7dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgXFxcInVuZGVmaW5lZFxcXCJcIik7IGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJzsgdGhyb3cgZTt9XG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZnJhbWVyX187Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///framer\n");

/***/ })

/******/ });
});