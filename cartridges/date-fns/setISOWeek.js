'use strict';

var toInteger = require('./_lib/toInteger/index');
var toDate = require('./toDate');
var getISOWeek = require('./getISOWeek');

/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|number} dirtyDate - the date to be changed
 * @param {number} dirtyISOWeek - the ISO week of the new date
 * @returns {Date} the new date with the ISO week set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * var result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
module.exports = function setISOWeek(dirtyDate, dirtyISOWeek) {
    if (arguments.length < 2) {
        throw new TypeError(
            '2 arguments required, but only ' + arguments.length + ' present'
        );
    }

    var date = toDate(dirtyDate);
    var isoWeek = toInteger(dirtyISOWeek);
    var diff = getISOWeek(date) - isoWeek;
    date.setDate(date.getDate() - (diff * 7));
    return date;
};
