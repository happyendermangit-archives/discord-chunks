function(t, r, e) {
    "use strict";
    var n = e("814026"),
        o = e("64980"),
        i = e("868822"),
        a = e("664144"),
        u = e("172479"),
        s = e("493399"),
        f = e("202463"),
        c = e("116180"),
        l = e("949580"),
        h = Object.assign,
        p = Object.defineProperty,
        v = o([].concat);
    t.exports = !h || a(function() {
        if (n && 1 !== h({
                b: 1
            }, h(p({}, "a", {
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
        var t = {},
            r = {},
            e = Symbol("assign detection"),
            o = "abcdefghijklmnopqrst";
        return t[e] = 7, o.split("").forEach(function(t) {
            r[t] = t
        }), 7 !== h({}, t)[e] || u(h({}, r)).join("") !== o
    }) ? function(t, r) {
        for (var e = c(t), o = arguments.length, a = 1, h = s.f, p = f.f; o > a;) {
            for (var d, g = l(arguments[a++]), b = h ? v(u(g), h(g)) : u(g), y = b.length, m = 0; y > m;) d = b[m++], (!n || i(p, g, d)) && (e[d] = g[d])
        }
        return e
    } : h
}