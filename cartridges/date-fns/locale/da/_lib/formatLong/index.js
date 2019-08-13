'use strict';

var buildFormatLongFn = require('../../../_lib/buildFormatLongFn/index');

var dateFormats = {
    full: "EEEE 'den' d. MMMM y",
    long: 'd. MMMM y',
    medium: 'd. MMM y',
    short: 'dd/MM/y'
};

var timeFormats = {
    full: 'HH:mm:ss zzzz',
    long: 'HH:mm:ss z',
    medium: 'HH:mm:ss',
    short: 'HH:mm'
};

var dateTimeFormats = {
    full: "{{date}} 'kl'. {{time}}",
    long: "{{date}} 'kl'. {{time}}",
    medium: '{{date}} {{time}}',
    short: '{{date}} {{time}}'
};

var formatLong = {
    date: buildFormatLongFn({
        formats: dateFormats,
        defaultWidth: 'full'
    }),

    time: buildFormatLongFn({
        formats: timeFormats,
        defaultWidth: 'full'
    }),

    dateTime: buildFormatLongFn({
        formats: dateTimeFormats,
        defaultWidth: 'full'
    })
};

module.exports = formatLong;
