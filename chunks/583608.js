function(e, t, n) {
    "use strict";
    var r = n("696586");
    e.exports = function(e) {
        return "symbol" == typeof e ? "Symbol" : "bigint" == typeof e ? "BigInt" : r(e)
    }
}