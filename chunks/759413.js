function(t, r, n) {
    "use strict";
    var e = n("124852"),
        o = n("165022"),
        i = n("308274"),
        u = function(t) {
            return function(r, n, u) {
                var c, s = e(r),
                    f = i(s),
                    a = o(u, f);
                if (t && n != n) {
                    for (; f > a;)
                        if ((c = s[a++]) != c) return !0
                } else
                    for (; f > a; a++)
                        if ((t || a in s) && s[a] === n) return t || a || 0;
                return !t && -1
            }
        };
    t.exports = {
        includes: u(!0),
        indexOf: u(!1)
    }
}