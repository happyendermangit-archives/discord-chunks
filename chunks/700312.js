function(t, e, r) {
    "use strict";
    var n = r("581031"),
        i = r("959318"),
        o = r("714050"),
        u = r("676125"),
        c = n("".charAt),
        a = n("".charCodeAt),
        s = n("".slice),
        f = function(t) {
            return function(e, r) {
                var n, f, l = o(u(e)),
                    v = i(r),
                    p = l.length;
                return v < 0 || v >= p ? t ? "" : void 0 : (n = a(l, v)) < 55296 || n > 56319 || v + 1 === p || (f = a(l, v + 1)) < 56320 || f > 57343 ? t ? c(l, v) : n : t ? s(l, v, v + 2) : (n - 55296 << 10) + (f - 56320) + 65536
            }
        };
    t.exports = {
        codeAt: f(!1),
        charAt: f(!0)
    }
}