function(e, t, n) {
    "use strict";
    var r = Math.floor;
    e.exports = function(e, t) {
        var n = e % t;
        return r(n >= 0 ? n : n + t)
    }
}