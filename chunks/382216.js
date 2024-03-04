function(e, t, n) {
    "use strict";
    var r = n("109033");
    e.exports = function(e) {
        return ("number" == typeof e || "bigint" == typeof e) && !r(e) && e !== 1 / 0 && e !== -1 / 0
    }
}