function(t, r, n) {
    "use strict";
    var e = n("863664"),
        o = n("192291"),
        i = o.aTypedArray,
        u = o.exportTypedArrayMethod,
        f = o.getTypedArrayConstructor;
    u("toReversed", function() {
        return e(i(this), f(this))
    })
}