function(e, t, n) {
    "use strict";
    var r = n("81021"),
        i = n("54341"),
        a = r("%TypeError%");
    e.exports = function(e, t) {
        if ("Object" !== e.Type(t)) return !1;
        var n = {
            "[[Configurable]]": !0,
            "[[Enumerable]]": !0,
            "[[Get]]": !0,
            "[[Set]]": !0,
            "[[Value]]": !0,
            "[[Writable]]": !0
        };
        for (var r in t)
            if (i(t, r) && !n[r]) return !1;
        if (e.IsDataDescriptor(t) && e.IsAccessorDescriptor(t)) throw new a("Property Descriptors may not be both accessor and data descriptors");
        return !0
    }
}