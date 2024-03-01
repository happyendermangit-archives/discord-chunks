function(t, r, n) {
    "use strict";
    var e = n("64980"),
        o = n("664144"),
        i = n("125359"),
        u = n("681802"),
        f = n("434978"),
        c = n("602178"),
        a = function() {},
        s = [],
        y = f("Reflect", "construct"),
        h = /^\s*(?:class|function)\b/,
        p = e(h.exec),
        v = !h.exec(a),
        d = function(t) {
            if (!i(t)) return !1;
            try {
                return y(a, s, t), !0
            } catch (t) {
                return !1
            }
        },
        g = function(t) {
            if (!i(t)) return !1;
            switch (u(t)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                    return !1
            }
            try {
                return v || !!p(h, c(t))
            } catch (t) {
                return !0
            }
        };
    g.sham = !0, t.exports = !y || o(function() {
        var t;
        return d(d.call) || !d(Object) || !d(function() {
            t = !0
        }) || t
    }) ? g : d
}