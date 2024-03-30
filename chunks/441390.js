function(e, t, n) {
    "use strict";
    var r = n("325008"),
        i = n("581031"),
        a = n("926515"),
        o = n("936940"),
        s = n("835884"),
        u = n("279129"),
        c = n("610067"),
        l = n("339718"),
        d = n("470592"),
        f = Object.assign,
        p = Object.defineProperty,
        h = i([].concat);
    e.exports = !f || o(function() {
        if (r && 1 !== f({
                b: 1
            }, f(p({}, "a", {
                enumerable: !0,
                get: function() {
                    p(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b) return !0;
        var e = {},
            t = {},
            n = Symbol("assign detection"),
            i = "abcdefghijklmnopqrst";
        return e[n] = 7, i.split("").forEach(function(e) {
            t[e] = e
        }), 7 !== f({}, e)[n] || s(f({}, t)).join("") !== i
    }) ? function(e, t) {
        for (var n = l(e), i = arguments.length, o = 1, f = u.f, p = c.f; i > o;) {
            for (var m, g = d(arguments[o++]), _ = f ? h(s(g), f(g)) : s(g), b = _.length, v = 0; b > v;) m = _[v++], (!r || a(p, g, m)) && (n[m] = g[m])
        }
        return n
    } : f
}