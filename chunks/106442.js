function(t, r, n) {
    "use strict";
    var e = n("859514"),
        i = n("64980"),
        o = n("590455"),
        u = n("969708"),
        a = n("998270"),
        f = n("664144"),
        c = i("".charAt);
    e({
        target: "String",
        proto: !0,
        forced: f(function() {
            return "\uD842" !== "\uD842\uDFB7".at(-2)
        })
    }, {
        at: function(t) {
            var r = a(o(this)),
                n = r.length,
                e = u(t),
                i = e >= 0 ? e : n + e;
            return i < 0 || i >= n ? void 0 : c(r, i)
        }
    })
}