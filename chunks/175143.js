function(t, r, n) {
    "use strict";
    var e = n("859514"),
        i = n("116180"),
        o = n("308274"),
        u = n("969708"),
        a = n("505713");
    e({
        target: "Array",
        proto: !0
    }, {
        at: function(t) {
            var r = i(this),
                n = o(r),
                e = u(t),
                a = e >= 0 ? e : n + e;
            return a < 0 || a >= n ? void 0 : r[a]
        }
    }), a("at")
}