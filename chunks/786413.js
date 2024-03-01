function(t, e, s) {
    "use strict";
    var r = s("583608"),
        i = Math.floor;
    t.exports = function(t) {
        return "BigInt" === r(t) ? t : i(t)
    }
}