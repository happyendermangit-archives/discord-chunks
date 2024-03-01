function(t, r, n) {
    "use strict";
    var e = n("664144"),
        i = n("503486").RegExp,
        u = e(function() {
            var t = i("a", "y");
            return t.lastIndex = 2, null !== t.exec("abcd")
        }),
        o = u || e(function() {
            return !i("a", "y").sticky
        }),
        c = u || e(function() {
            var t = i("^r", "gy");
            return t.lastIndex = 2, null !== t.exec("str")
        });
    t.exports = {
        BROKEN_CARET: c,
        MISSED_STICKY: o,
        UNSUPPORTED_Y: u
    }
}