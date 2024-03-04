function(e, t, n) {
    "use strict";
    var r = n("748795"),
        i = n("583608"),
        o = n("106488");
    e.exports = function(e) {
        return void 0 !== e && (o(i, "Property Descriptor", "Desc", e), !!(r(e, "[[Value]]") || r(e, "[[Writable]]")) || !1)
    }
}