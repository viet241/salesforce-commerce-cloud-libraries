'use strict';

var formatRelativeLocale = {
    lastWeek: "'viime' eeee 'klo' p",
    yesterday: "'eilen klo' p",
    today: "'tänään klo' p",
    tomorrow: "'huomenna klo' p",
    nextWeek: "'ensi' eeee 'klo' p",
    other: 'P'
};

module.exports = function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
