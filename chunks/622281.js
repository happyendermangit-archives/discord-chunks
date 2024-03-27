function(t, r, n) {
    "use strict";
    var e = n("354848"),
        o = n("174124"),
        i = o.all;
    t.exports = o.IS_HTMLDDA ? function(t) {
        return "object" == typeof t ? null !== t : e(t) || t === i
    } : function(t) {
        return "object" == typeof t ? null !== t : e(t)
    }
}