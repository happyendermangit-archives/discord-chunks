function(t, r, n) {
    "use strict";
    var e = Math.ceil,
        o = Math.floor;
    t.exports = Math.trunc || function(t) {
        var r = +t;
        return (r > 0 ? o : e)(r)
    }
}