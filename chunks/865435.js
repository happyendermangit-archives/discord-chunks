function(t, e, s) {
    "use strict";
    var r = s("243636");
    t.exports = function(t) {
        return "symbol" == typeof t ? "Symbol" : "bigint" == typeof t ? "BigInt" : r(t)
    }
}