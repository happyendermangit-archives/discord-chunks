function(t, r, n) {
    "use strict";
    var e = n("188523"),
        o = n("427191").findLast,
        i = e.aTypedArray;
    (0, e.exportTypedArrayMethod)("findLast", function(t) {
        return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
    })
}