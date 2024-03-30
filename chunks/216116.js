function(e, t, n) {
    "use strict";
    var r = n("859209"),
        i = n("581031"),
        a = n("714050"),
        o = n("202934"),
        s = URLSearchParams,
        u = s.prototype,
        c = i(u.append),
        l = i(u.delete),
        d = i(u.forEach),
        f = i([].push),
        p = new s("a=1&a=2&b=3");
    p.delete("a", 1), p.delete("b", void 0), p + "" != "a=2" && r(u, "delete", function(e) {
        var t, n = arguments.length,
            r = n < 2 ? void 0 : arguments[1];
        if (n && void 0 === r) return l(this, e);
        var i = [];
        d(this, function(e, t) {
            f(i, {
                key: t,
                value: e
            })
        }), o(n, 1);
        for (var s = a(e), u = a(r), p = 0, h = 0, m = !1, g = i.length; p < g;) t = i[p++], m || t.key === s ? (m = !0, l(this, t.key)) : h++;
        for (; h < g;) !((t = i[h++]).key === s && t.value === u) && c(this, t.key, t.value)
    }, {
        enumerable: !0,
        unsafe: !0
    })
}