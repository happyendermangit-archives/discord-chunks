function(t, r, e) {
    "use strict";
    var n = e("484784"),
        o = e("64980"),
        i = e("998270"),
        a = e("79807"),
        u = URLSearchParams,
        s = u.prototype,
        f = o(s.append),
        c = o(s.delete),
        l = o(s.forEach),
        h = o([].push),
        p = new u("a=1&a=2&b=3");
    p.delete("a", 1), p.delete("b", void 0), p + "" != "a=2" && n(s, "delete", function(t) {
        var r, e = arguments.length,
            n = e < 2 ? void 0 : arguments[1];
        if (e && void 0 === n) return c(this, t);
        var o = [];
        l(this, function(t, r) {
            h(o, {
                key: r,
                value: t
            })
        }), a(e, 1);
        for (var u = i(t), s = i(n), p = 0, v = 0, d = !1, g = o.length; p < g;) r = o[p++], d || r.key === u ? (d = !0, c(this, r.key)) : v++;
        for (; v < g;) !((r = o[v++]).key === u && r.value === s) && f(this, r.key, r.value)
    }, {
        enumerable: !0,
        unsafe: !0
    })
}