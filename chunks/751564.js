function(e, t, n) {
    "use strict";
    var r = n("81021")("%TypeError%"),
        i = n("395238"),
        a = n("116298"),
        o = n("441596"),
        s = n("75150"),
        u = n("860438"),
        c = n("828148"),
        l = n("148309"),
        d = n("240919"),
        f = n("632384");
    e.exports = function(e, t, n) {
        if ("Object" !== f(e)) throw new r("Assertion failed: Type(O) is not Object");
        if (!c(t)) throw new r("Assertion failed: IsPropertyKey(P) is not true");
        var p = i({
            Type: f,
            IsDataDescriptor: u,
            IsAccessorDescriptor: s
        }, n) ? n : d(n);
        if (!i({
                Type: f,
                IsDataDescriptor: u,
                IsAccessorDescriptor: s
            }, p)) throw new r("Assertion failed: Desc is not a valid Property Descriptor");
        return a(u, l, o, e, t, p)
    }
}