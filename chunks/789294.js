function(t, e, s) {
    "use strict";
    s("781738"), s("424973");

    function r(t) {
        return 1 === t.length ? "0" + t : t
    }

    function i(t) {
        for (var e = "", s = 0; s < t.length; s++) e += r(t[s].toString(16));
        return e
    }
    e.toArray = function(t, e) {
        if (Array.isArray(t)) return t.slice();
        if (!t) return [];
        var s = [];
        if ("string" != typeof t) {
            for (var r = 0; r < t.length; r++) s[r] = 0 | t[r];
            return s
        }
        if ("hex" === e) {
            (t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t);
            for (var r = 0; r < t.length; r += 2) s.push(parseInt(t[r] + t[r + 1], 16))
        } else
            for (var r = 0; r < t.length; r++) {
                var i = t.charCodeAt(r),
                    n = i >> 8,
                    c = 255 & i;
                n ? s.push(n, c) : s.push(c)
            }
        return s
    }, e.zero2 = r, e.toHex = i, e.encode = function(t, e) {
        return "hex" === e ? i(t) : t
    }
}