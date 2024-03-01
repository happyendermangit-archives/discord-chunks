function(t, r, n) {
    "use strict";
    var e = n("188523"),
        o = n("64980"),
        i = n("727204"),
        u = n("447726"),
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