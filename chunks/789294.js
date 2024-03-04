function(e, t, n) {
    "use strict";
    n("781738"), n("424973");

    function r(e) {
        return 1 === e.length ? "0" + e : e
    }

    function i(e) {
        for (var t = "", n = 0; n < e.length; n++) t += r(e[n].toString(16));
        return t
    }
    t.toArray = function(e, t) {
        if (Array.isArray(e)) return e.slice();
        if (!e) return [];
        var n = [];
        if ("string" != typeof e) {
            for (var r = 0; r < e.length; r++) n[r] = 0 | e[r];
            return n
        }
        if ("hex" === t) {
            (e = e.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (e = "0" + e);
            for (var r = 0; r < e.length; r += 2) n.push(parseInt(e[r] + e[r + 1], 16))
        } else
            for (var r = 0; r < e.length; r++) {
                var i = e.charCodeAt(r),
                    o = i >> 8,
                    s = 255 & i;
                o ? n.push(o, s) : n.push(s)
            }
        return n
    }, t.zero2 = r, t.toHex = i, t.encode = function(e, t) {
        return "hex" === t ? i(e) : e
    }
}