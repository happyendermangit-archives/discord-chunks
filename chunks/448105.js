function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        var n = t.length,
            r = e.length;
        if (r > n) return !1;
        if (r === n) return e === t;
        e: for (var a = 0, o = 0; a < r; a++) {
            for (var i = e.charCodeAt(a); o < n;)
                if (t.charCodeAt(o++) === i) continue e;
            return !1
        }
        return !0
    }
}