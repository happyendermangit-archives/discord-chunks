function(t) {
    "use strict";
    t.exports = function(t, e) {
        var r = e.length,
            n = t.length;
        if (n > r) return !1;
        if (n === r) return t === e;
        t: for (var i = 0, o = 0; i < n; i++) {
            for (var u = t.charCodeAt(i); o < r;)
                if (e.charCodeAt(o++) === u) continue t;
            return !1
        }
        return !0
    }
}