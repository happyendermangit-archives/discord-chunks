function(t, r, n) {
    "use strict";
    var e = n("192291"),
        o = n("692994"),
        i = n("165915"),
        u = n("974971"),
        f = n("926515"),
        c = n("581031"),
        a = n("936940"),
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