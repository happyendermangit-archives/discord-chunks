function(t) {
    "use strict";
    var r = Math.round;
    t.exports = function(t) {
        var n = r(t);
        return n < 0 ? 0 : n > 255 ? 255 : 255 & n
    }
}