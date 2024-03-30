function(e, t, n) {
    "use strict";
    var r = n("859209"),
        i = n("581031"),
        a = n("714050"),
        o = n("202934"),
        s = URLSearchParams,
        u = s.prototype,
        c = i(u.getAll),
        l = i(u.has),
        d = new s("a=1");
    (d.has("a", 2) || !d.has("a", void 0)) && r(u, "has", function(e) {
        var t = arguments.length,
            n = t < 2 ? void 0 : arguments[1];
        if (t && void 0 === n) return l(this, e);
        var r = c(this, e);
        o(t, 1);
        for (var i = a(n), s = 0; s < r.length;)
            if (r[s++] === i) return !0;
        return !1
    }, {
        enumerable: !0,
        unsafe: !0
    })
}