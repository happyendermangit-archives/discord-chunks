function(t, r, n) {
    "use strict";
    var e = n("434978"),
        o = n("125359"),
        i = n("470984"),
        u = n("22147"),
        c = Object;
    t.exports = u ? function(t) {
        return "symbol" == typeof t
    } : function(t) {
        var r = e("Symbol");
        return o(r) && i(r.prototype, c(t))
    }
}