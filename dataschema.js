(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(1);

	function DataSchema(){
	}

	DataSchema.parse=parse.parse;

	module.exports = {
	    DataSchema: DataSchema
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	function parse(obj) {
	  var parsedObj = {};
	  if (!obj) return;
	  for (key in obj) {
	    if (getType(obj[key]) == 'object') {
	      parsedObj[key] = parse(obj[key]);
	    } else {
	      parsedObj[key] = getType(obj[key]);
	    }
	  }
	  return parsedObj;
	}

	function getType(el) {
	  for (var i in checkTypes) {
	    if (checkTypes[i](el) == true) {
	      return i
	    }
	  }
	}

	var checkTypes = {
	  "function": function(element) {
	    return typeof element === 'function';
	  },
	  "string": function(element) {
	    return typeof element === 'string';
	  },
	  "number": function(element) {
	    return typeof element === 'number' && !isNaN(element);
	  },
	  "integer": function(element) {
	    return typeof element === 'number' && element % 1 === 0;
	  },
	  "NaN": function(element) {
	    return typeof element === 'number' && isNaN(element);
	  },
	  "boolean": function(element) {
	    return typeof element === 'boolean';
	  },
	  "null": function(element) {
	    return element === null;
	  },
	  "date": function(element) {
	    return element != null && element.constructor === Date;
	  },
	  "object": function(element) {
	    return element != null && element.constructor === Object;
	  },
	  "array": function(element) {
	    return element != null && element.constructor === Array;
	  }
	};


	exports.parse= parse;


/***/ }
/******/ ])
});
;