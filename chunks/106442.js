function(e, t, n) {
    "use strict";
    var r = n("859514"),
        a = n("64980"),
        o = n("590455"),
        i = n("969708"),
        s = n("998270"),
        u = n("664144"),
        l = a("".charAt);
    r({
        target: "String",
        proto: !0,
        forced: u(function() {
            return "\uD842" !== "\uD842\uDFB7".at(-2)
        })
    }, {
        at: function(e) {
            var t = s(o(this)),
                n = t.length,
                r = i(e),
                a = r >= 0 ? r : n + r;
            return a < 0 || a >= n ? void 0 : l(t, a)
        }
    })
}