function(t, r, n) {
    "use strict";
    var e = n("581031"),
        o = n("936940"),
        i = n("354848"),
        u = n("974971"),
        f = n("545576"),
        c = n("943329"),
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
        l = function(t) {
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
    l.sham = !0, t.exports = !y || o(function() {
        var t;
        return d(d.call) || !d(Object) || !d(function() {
            t = !0
        }) || t
    }) ? l : d
}