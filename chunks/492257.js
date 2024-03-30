function(t, r, n) {
    "use strict";
    var e = n("192291"),
        o = n("581031"),
        i = n("526988"),
        u = n("436330"),
        f = e.aTypedArray,
        c = e.getTypedArrayConstructor,
        a = e.exportTypedArrayMethod,
        s = o(e.TypedArrayPrototype.sort);
    a("toSorted", function(t) {
        void 0 !== t && i(t);
        var r = f(this);
        return s(u(c(r), r), t)
    })
}