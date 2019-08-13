'use strict';

var castSlice = require('./castSlice');
var hasUnicode = require('./hasUnicode');
var stringToArray = require('./stringToArray');

/**
 * Creates a function like `lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined

    var chr = strSymbols
      ? strSymbols[0]
      : string[0]

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1)

    return chr[methodName]() + trailing
  }
}

module.exports = createCaseFirst;
