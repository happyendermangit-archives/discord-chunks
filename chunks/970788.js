function(e, t, n) {
    "use strict";
    var r = n("911718"),
        i = n("293471"),
        o = r("%SyntaxError%"),
        s = r("%TypeError%"),
        a = n("96289"),
        c = n("569785"),
        u = n("729197"),
        d = n("839259"),
        l = n("228140"),
        f = n("717721"),
        p = n("537992"),
        h = n("583608"),
        v = n("567619");
    e.exports = function(e, t, n) {
        if ("Object" !== h(e)) throw new s("Assertion failed: O must be an Object");
        if (!l(t)) throw new s("Assertion failed: P must be a Property Key");
        if (!a({
                Type: h,
                IsDataDescriptor: u,
                IsAccessorDescriptor: c
            }, n)) throw new s("Assertion failed: Desc must be a Property Descriptor");
        if (!i) {
            if (c(n)) throw new o("This environment does not support accessor property descriptors.");
            var r = !(t in e) && n["[[Writable]]"] && n["[[Enumerable]]"] && n["[[Configurable]]"] && "[[Value]]" in n,
                g = t in e && (!("[[Configurable]]" in n) || n["[[Configurable]]"]) && (!("[[Enumerable]]" in n) || n["[[Enumerable]]"]) && (!("[[Writable]]" in n) || n["[[Writable]]"]) && "[[Value]]" in n;
            if (r || g) return e[t] = n["[[Value]]"], p(e[t], n["[[Value]]"]);
            throw new o("This environment does not support defining non-writable, non-enumerable, or non-configurable properties")
        }
        var b = i(e, t),
            m = b && f(b),
            y = d(e);
        return v(e, t, y, n, m)
    }
}