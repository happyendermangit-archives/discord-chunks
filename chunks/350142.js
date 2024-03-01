function(t, r, n) {
    "use strict";
    var e = n("64980"),
        i = Error,
        u = e("".replace),
        o = String(i("zxcasd").stack),
        c = /\n\s*at [^:]*:[^\n]*/,
        a = c.test(o);
    t.exports = function(t, r) {
        if (a && "string" == typeof t && !i.prepareStackTrace)
            for (; r--;) t = u(t, c, "");
        return t
    }
}