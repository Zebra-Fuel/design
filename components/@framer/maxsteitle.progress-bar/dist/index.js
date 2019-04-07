(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
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
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ProgressBar.tsx": "./code/ProgressBar.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/ProgressBar.tsx":
/*!******************************!*\
  !*** ./code/ProgressBar.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nclass ProgressBar extends React.Component {\n    constructor() {\n        super(...arguments);\n        this.progressBarWidth = framer_1.Animatable(0);\n        this.animationWidth = framer_1.Animatable(0);\n        this.animationOpacity = framer_1.Animatable(1);\n        this.state = {\n            loading: true\n        };\n        this.loadingAnimation = () => __awaiter(this, void 0, void 0, function* () {\n            window[\"__checkBudget__\"]();\n            let currentWidth = (this.props.width / this.props.animationDuration) * 3;\n            while (this.state.loading === true) {\n                window[\"__checkBudget__\"]();\n                yield framer_1.animate.ease(this.animationWidth, currentWidth, {\n                    duration: 1.5\n                }).finished;\n                yield framer_1.animate.linear(this.animationOpacity, 0, { duration: 0.6 }).finished;\n                yield framer_1.animate.linear(this.animationWidth, 0, { duration: 0 }).finished;\n                yield framer_1.animate.linear(this.animationOpacity, 1, { duration: 0.2 }).finished;\n                currentWidth = Math.min(this.props.width, currentWidth + (this.props.width / this.props.animationDuration) * 4.7);\n            }\n        });\n        this.percentageAnimation = () => __awaiter(this, void 0, void 0, function* () {\n            window[\"__checkBudget__\"]();\n            yield framer_1.animate.ease(this.progressBarWidth, this.props.width, {\n                duration: this.props.animationDuration\n            }).finished;\n            this.setState({ loading: false });\n        });\n    }\n    componentDidMount() {\n        window[\"__checkBudget__\"]();\n        this.loadingAnimation();\n        this.percentageAnimation();\n    }\n    render() {\n        window[\"__checkBudget__\"]();\n        return (React.createElement(framer_1.Frame, { style: outerBar(this.props.backgroundColor) }, innerBar(this.progressBarWidth, this.props.primaryColor, this.animationWidth, this.animationOpacity)));\n    }\n}\nProgressBar.defaultProps = {\n    width: 200,\n    height: 8,\n    animationDuration: 10,\n    primaryColor: '#0055FF',\n    backgroundColor: '#CCDDFF'\n};\nProgressBar.propertyControls = {\n    animationDuration: {\n        type: framer_1.ControlType.Number,\n        title: 'Duration',\n        min: 1\n    },\n    primaryColor: {\n        type: framer_1.ControlType.Color,\n        title: 'Progress'\n    },\n    backgroundColor: {\n        type: framer_1.ControlType.Color,\n        title: 'Background'\n    }\n};\nexports.ProgressBar = ProgressBar;\nfunction innerBar(barWidth, barColor, animationWidth, animationOpacity) {\n    window[\"__checkBudget__\"]();\n    return (React.createElement(framer_1.Frame, { style: {\n            height: '100%',\n            background: barColor,\n            borderRadius: 16,\n            position: 'absolute',\n            maxHeight: 16\n        }, width: barWidth, left: 0, top: 0, overflow: 'hidden' },\n        React.createElement(framer_1.Frame, { style: {\n                background: 'linear-gradient(-90deg, rgba(255,255,255,.3), rgba(255,255,255,0))',\n                height: '100%',\n                borderRadius: 16,\n                maxHeight: 16\n            }, width: animationWidth, opacity: animationOpacity, left: 0, top: 0 })));\n}\nfunction outerBar(color) {\n    window[\"__checkBudget__\"]();\n    return {\n        height: '100%',\n        width: '100%',\n        background: color,\n        borderRadius: 16,\n        overflow: 'hidden',\n        maxHeight: 16\n    };\n}\nexports.__info__ = [{ name: \"ProgressBar\", children: false, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1Byb2dyZXNzQmFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQix5RUFBeUUsZ0JBQWdCO0FBQ3pGLHVFQUF1RSxjQUFjO0FBQ3JGLHlFQUF5RSxnQkFBZ0I7QUFDekY7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiwyQkFBMkIsaUJBQWlCO0FBQzVDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDhDQUE4QztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHdEQUF3RDtBQUNqRSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFFQUFxRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMERBQTBEIiwiZmlsZSI6Ii4vY29kZS9Qcm9ncmVzc0Jhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBmcmFtZXJfMSA9IHJlcXVpcmUoXCJmcmFtZXJcIik7XG5jbGFzcyBQcm9ncmVzc0JhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJXaWR0aCA9IGZyYW1lcl8xLkFuaW1hdGFibGUoMCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uV2lkdGggPSBmcmFtZXJfMS5BbmltYXRhYmxlKDApO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbk9wYWNpdHkgPSBmcmFtZXJfMS5BbmltYXRhYmxlKDEpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxvYWRpbmdBbmltYXRpb24gPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50V2lkdGggPSAodGhpcy5wcm9wcy53aWR0aCAvIHRoaXMucHJvcHMuYW5pbWF0aW9uRHVyYXRpb24pICogMztcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnN0YXRlLmxvYWRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBmcmFtZXJfMS5hbmltYXRlLmVhc2UodGhpcy5hbmltYXRpb25XaWR0aCwgY3VycmVudFdpZHRoLCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjVcbiAgICAgICAgICAgICAgICB9KS5maW5pc2hlZDtcbiAgICAgICAgICAgICAgICB5aWVsZCBmcmFtZXJfMS5hbmltYXRlLmxpbmVhcih0aGlzLmFuaW1hdGlvbk9wYWNpdHksIDAsIHsgZHVyYXRpb246IDAuNiB9KS5maW5pc2hlZDtcbiAgICAgICAgICAgICAgICB5aWVsZCBmcmFtZXJfMS5hbmltYXRlLmxpbmVhcih0aGlzLmFuaW1hdGlvbldpZHRoLCAwLCB7IGR1cmF0aW9uOiAwIH0pLmZpbmlzaGVkO1xuICAgICAgICAgICAgICAgIHlpZWxkIGZyYW1lcl8xLmFuaW1hdGUubGluZWFyKHRoaXMuYW5pbWF0aW9uT3BhY2l0eSwgMSwgeyBkdXJhdGlvbjogMC4yIH0pLmZpbmlzaGVkO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRXaWR0aCA9IE1hdGgubWluKHRoaXMucHJvcHMud2lkdGgsIGN1cnJlbnRXaWR0aCArICh0aGlzLnByb3BzLndpZHRoIC8gdGhpcy5wcm9wcy5hbmltYXRpb25EdXJhdGlvbikgKiA0LjcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlQW5pbWF0aW9uID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICB5aWVsZCBmcmFtZXJfMS5hbmltYXRlLmVhc2UodGhpcy5wcm9ncmVzc0JhcldpZHRoLCB0aGlzLnByb3BzLndpZHRoLCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMucHJvcHMuYW5pbWF0aW9uRHVyYXRpb25cbiAgICAgICAgICAgIH0pLmZpbmlzaGVkO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICB0aGlzLmxvYWRpbmdBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlQW5pbWF0aW9uKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChmcmFtZXJfMS5GcmFtZSwgeyBzdHlsZTogb3V0ZXJCYXIodGhpcy5wcm9wcy5iYWNrZ3JvdW5kQ29sb3IpIH0sIGlubmVyQmFyKHRoaXMucHJvZ3Jlc3NCYXJXaWR0aCwgdGhpcy5wcm9wcy5wcmltYXJ5Q29sb3IsIHRoaXMuYW5pbWF0aW9uV2lkdGgsIHRoaXMuYW5pbWF0aW9uT3BhY2l0eSkpKTtcbiAgICB9XG59XG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgd2lkdGg6IDIwMCxcbiAgICBoZWlnaHQ6IDgsXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IDEwLFxuICAgIHByaW1hcnlDb2xvcjogJyMwMDU1RkYnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNDQ0RERkYnXG59O1xuUHJvZ3Jlc3NCYXIucHJvcGVydHlDb250cm9scyA9IHtcbiAgICBhbmltYXRpb25EdXJhdGlvbjoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5OdW1iZXIsXG4gICAgICAgIHRpdGxlOiAnRHVyYXRpb24nLFxuICAgICAgICBtaW46IDFcbiAgICB9LFxuICAgIHByaW1hcnlDb2xvcjoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5Db2xvcixcbiAgICAgICAgdGl0bGU6ICdQcm9ncmVzcydcbiAgICB9LFxuICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5Db2xvcixcbiAgICAgICAgdGl0bGU6ICdCYWNrZ3JvdW5kJ1xuICAgIH1cbn07XG5leHBvcnRzLlByb2dyZXNzQmFyID0gUHJvZ3Jlc3NCYXI7XG5mdW5jdGlvbiBpbm5lckJhcihiYXJXaWR0aCwgYmFyQ29sb3IsIGFuaW1hdGlvbldpZHRoLCBhbmltYXRpb25PcGFjaXR5KSB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KGZyYW1lcl8xLkZyYW1lLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJhckNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiAxNlxuICAgICAgICB9LCB3aWR0aDogYmFyV2lkdGgsIGxlZnQ6IDAsIHRvcDogMCwgb3ZlcmZsb3c6ICdoaWRkZW4nIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoZnJhbWVyXzEuRnJhbWUsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KC05MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwuMyksIHJnYmEoMjU1LDI1NSwyNTUsMCkpJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogMTZcbiAgICAgICAgICAgIH0sIHdpZHRoOiBhbmltYXRpb25XaWR0aCwgb3BhY2l0eTogYW5pbWF0aW9uT3BhY2l0eSwgbGVmdDogMCwgdG9wOiAwIH0pKSk7XG59XG5mdW5jdGlvbiBvdXRlckJhcihjb2xvcikge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBtYXhIZWlnaHQ6IDE2XG4gICAgfTtcbn1cbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIlByb2dyZXNzQmFyXCIsIGNoaWxkcmVuOiBmYWxzZSwgdHlwZTogXCJjb21wb25lbnRcIiB9XTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/ProgressBar.tsx\n");

/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"0.10.5","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"^7.0.2","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^9.6.0","@types/react":"^16","@types/react-dom":"^16","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-junit":"^5.2.0","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"~16.4","react-dev-utils":"^5.0.1","react-dom":"~16.4","semver":"^5.6.0","ts-jest":"^23.10.5","ts-loader":"^4.1.0","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3","react-dom":"^16.3"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16","framer":"^0.10.5"},"peerDependencies":{"framer":"^0.10.5","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"1a37a50b-df40-4d4c-a9fb-b37810601c5b","displayName":"Progress Bar"},"author":"Max Steitle","dependencies":{},"name":"@framer/maxsteitle.progress-bar","version":"1.1.0"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});