function(e, t, n) {
    "use strict";
    var r = n("859514"),
        a = n("116180"),
        o = n("308274"),
        i = n("969708"),
        s = n("505713");
    r({
        target: "Array",
        proto: !0
    }, {
        at: function(e) {
            var t = a(this),
                n = o(t),
                r = i(e),
                s = r >= 0 ? r : n + r;
            return s < 0 || s >= n ? void 0 : t[s]
        }
    }), s("at")
}