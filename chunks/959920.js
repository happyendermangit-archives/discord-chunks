function(t, e, s) {
    "use strict";
    var r = s("911718")("%TypeError%"),
        i = s("96289"),
        n = s("362434"),
        c = s("890409"),
        o = s("569785"),
        f = s("729197"),
        u = s("228140"),
        a = s("537992"),
        d = s("717721"),
        p = s("583608");
    t.exports = function(t, e, s) {
        if ("Object" !== p(t)) throw new r("Assertion failed: Type(O) is not Object");
        if (!u(e)) throw new r("Assertion failed: IsPropertyKey(P) is not true");
        var b = i({
            Type: p,
            IsDataDescriptor: f,
            IsAccessorDescriptor: o
        }, s) ? s : d(s);
        if (!i({
                Type: p,
                IsDataDescriptor: f,
                IsAccessorDescriptor: o
            }, b)) throw new r("Assertion failed: Desc is not a valid Property Descriptor");
        return n(f, a, c, t, e, b)
    }
}