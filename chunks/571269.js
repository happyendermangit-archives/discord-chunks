function(e, t, n) {
    "use strict";
    var r = n("147018"),
        i = n("581031"),
        a = n("676125"),
        o = n("959318"),
        s = n("714050"),
        u = n("936940"),
        c = i("".charAt);
    r({
        target: "String",
        proto: !0,
        forced: u(function() {
            return "\uD842" !== "\uD842\uDFB7".at(-2)
        })
    }, {
        at: function(e) {
            var t = s(a(this)),
                n = t.length,
                r = o(e),
                i = r >= 0 ? r : n + r;
            return i < 0 || i >= n ? void 0 : c(t, i)
        }
    })
}