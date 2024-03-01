function(t, r, n) {
    "use strict";
    var e = Math.round;
    t.exports = function(t) {
        var r = e(t);
        return r < 0 ? 0 : r > 255 ? 255 : 255 & r
    }
}