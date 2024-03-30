function(t, e, n) {
    "use strict";
    var r = n("581031"),
        i = Error,
        a = r("".replace),
        o = String(i("zxcasd").stack),
        s = /\n\s*at [^:]*:[^\n]*/,
        u = s.test(o);
    t.exports = function(t, e) {
        if (u && "string" == typeof t && !i.prepareStackTrace)
            for (; e--;) t = a(t, s, "");
        return t
    }
}