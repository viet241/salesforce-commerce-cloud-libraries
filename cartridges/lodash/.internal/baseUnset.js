'use strict';

var castPath= require('./castPath.js');
var last= require('../last.js');
var parent= require('./parent.js');
var toKey= require('./toKey.js');

/**
 * The base implementation of `unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object)
  object = parent(object, path)
  return object == null || delete object[toKey(last(path))]
}

module.exports = baseUnset;
