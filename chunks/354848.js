function(t, r, n) {
    "use strict";
    var e = n("174124"),
        o = e.all;
    t.exports = e.IS_HTMLDDA ? function(t) {
        return "function" == typeof t || t === o
    } : function(t) {
        return "function" == typeof t
    }
}