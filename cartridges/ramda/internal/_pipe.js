'use strict';

module.exports = function _pipe(f, g) {
    return function () {
        return g.call(this, f.apply(this, arguments));
    };
};
