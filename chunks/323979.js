function(t, r, n) {
    "use strict";
    var e = n("545576"),
        o = n("354848"),
        i = n("838957"),
        u = n("769992"),
        c = Object;
    t.exports = u ? function(t) {
        return "symbol" == typeof t
    } : function(t) {
        var r = e("Symbol");
        return o(r) && i(r.prototype, c(t))
    }
}