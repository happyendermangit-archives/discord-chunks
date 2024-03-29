function(e, t, n) {
    "use strict";
    var r = n("706165"),
        i = n("632384"),
        a = n("807985");
    e.exports = function(e) {
        return void 0 !== e && (a(i, "Property Descriptor", "Desc", e), !!(r(e, "[[Get]]") || r(e, "[[Set]]")) || !1)
    }
}