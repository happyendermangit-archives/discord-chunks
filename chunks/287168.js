function(t, r, e) {
    "use strict";
    var n = e("484784"),
        o = e("64980"),
        i = e("998270"),
        a = e("79807"),
        u = URLSearchParams,
        s = u.prototype,
        f = o(s.getAll),
        c = o(s.has),
        l = new u("a=1");
    (l.has("a", 2) || !l.has("a", void 0)) && n(s, "has", function(t) {
        var r = arguments.length,
            e = r < 2 ? void 0 : arguments[1];
        if (r && void 0 === e) return c(this, t);
        var n = f(this, t);
        a(r, 1);
        for (var o = i(e), u = 0; u < n.length;)
            if (n[u++] === o) return !0;
        return !1
    }, {
        enumerable: !0,
        unsafe: !0
    })
}