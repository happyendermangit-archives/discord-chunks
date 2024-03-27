function(t, e, r) {
    "use strict";
    var n = r("936940"),
        i = r("161581").RegExp,
        o = n(function() {
            var t = i("a", "y");
            return t.lastIndex = 2, null !== t.exec("abcd")
        }),
        u = o || n(function() {
            return !i("a", "y").sticky
        }),
        c = o || n(function() {
            var t = i("^r", "gy");
            return t.lastIndex = 2, null !== t.exec("str")
        });
    t.exports = {
        BROKEN_CARET: c,
        MISSED_STICKY: u,
        UNSUPPORTED_Y: o
    }
}