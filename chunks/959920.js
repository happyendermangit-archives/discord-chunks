function(e, t, n) {
    "use strict";
    var r = n("911718")("%TypeError%"),
        i = n("96289"),
        o = n("362434"),
        s = n("890409"),
        a = n("569785"),
        c = n("729197"),
        u = n("228140"),
        d = n("537992"),
        l = n("717721"),
        f = n("583608");
    e.exports = function(e, t, n) {
        if ("Object" !== f(e)) throw new r("Assertion failed: Type(O) is not Object");
        if (!u(t)) throw new r("Assertion failed: IsPropertyKey(P) is not true");
        var p = i({
            Type: f,
            IsDataDescriptor: c,
            IsAccessorDescriptor: a
        }, n) ? n : l(n);
        if (!i({
                Type: f,
                IsDataDescriptor: c,
                IsAccessorDescriptor: a
            }, p)) throw new r("Assertion failed: Desc is not a valid Property Descriptor");
        return o(c, d, s, e, t, p)
    }
}