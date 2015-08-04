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
