function(t, r, n) {
    "use strict";
    var e = n("188523"),
        o = n("308274"),
        i = n("969708"),
        u = e.aTypedArray;
    (0, e.exportTypedArrayMethod)("at", function(t) {
        var r = u(this),
            n = o(r),
            e = i(t),
            f = e >= 0 ? e : n + e;
        return f < 0 || f >= n ? void 0 : r[f]
    })
}