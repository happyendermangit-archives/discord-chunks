function(t, e, s) {
    "use strict";
    var r = s("748795"),
        i = s("583608"),
        n = s("106488");
    t.exports = function(t) {
        return void 0 !== t && (n(i, "Property Descriptor", "Desc", t), !!(r(t, "[[Get]]") || r(t, "[[Set]]")) || !1)
    }
}