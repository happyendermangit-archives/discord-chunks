function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        var n = t.length,
            r = e.length;
        if (r > n) return !1;
        if (r === n) return e === t;
        e: for (var i = 0, o = 0; i < r; i++) {
            for (var s = e.charCodeAt(i); o < n;)
                if (t.charCodeAt(o++) === s) continue e;
            return !1
        }
        return !0
    }
}