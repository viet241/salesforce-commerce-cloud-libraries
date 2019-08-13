'use strict';

var baseGet= require('./baseGet.js');
var slice= require('../slice.js');

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, slice(path, 0, -1))
}

module.exports = parent;
