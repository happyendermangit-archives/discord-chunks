function(t, r, n) {
    "use strict";
    var e = n("717441"),
        o = n("192291"),
        i = n("536524"),
        u = n("959318"),
        f = n("165915"),
        c = o.aTypedArray,
        a = o.getTypedArrayConstructor;
    (0, o.exportTypedArrayMethod)("with", {
        with: function(t, r) {
            var n = c(this),
                o = u(t),
                s = i(n) ? f(r) : +r;
            return e(n, a(n), o, s)
        }
    }.with, ! function() {
        try {
            new Int8Array(1).with(2, {
                valueOf: function() {
                    throw 8
                }
            })
        } catch (t) {
            return 8 === t
        }
    }())
}