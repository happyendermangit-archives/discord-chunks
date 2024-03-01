function(t, r, n) {
    "use strict";
    var e = n("188523"),
        o = n("620756"),
        i = n("590035"),
        u = n("681802"),
        f = n("868822"),
        c = n("64980"),
        a = n("664144"),
        s = e.aTypedArray,
        y = e.exportTypedArrayMethod,
        h = c("".slice);
    y("fill", function(t) {
        var r = arguments.length;
        return s(this), f(o, this, "Big" === h(u(this), 0, 3) ? i(t) : +t, r > 1 ? arguments[1] : void 0, r > 2 ? arguments[2] : void 0)
    }, a(function() {
        var t = 0;
        return new Int8Array(2).fill({
            valueOf: function() {
                return t++
            }
        }), 1 !== t
    }))
}