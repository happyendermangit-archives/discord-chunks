function(t, r, n) {
    "use strict";
    var e = n("472960"),
        o = Math.floor;
    t.exports = Number.isInteger || function(t) {
        return !e(t) && isFinite(t) && o(t) === t
    }
}