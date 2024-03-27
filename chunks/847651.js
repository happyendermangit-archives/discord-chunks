function(e, t) {
    "use strict";

    function n(e) {
        return 1 === e.length ? "0" + e : e
    }

    function r(e) {
        for (var t = "", r = 0; r < e.length; r++) t += n(e[r].toString(16));
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
                    a = i >> 8,
                    o = 255 & i;
                a ? n.push(a, o) : n.push(o)
            }
        return n
    }, t.zero2 = n, t.toHex = r, t.encode = function(e, t) {
        return "hex" === t ? r(e) : e
    }
}