function(e, t, n) {
    "use strict";
    var r = n("690244"),
        i = n("49662"),
        a = r("%SyntaxError%"),
        o = r("%TypeError%"),
        s = n("395238"),
        u = n("75150"),
        c = n("860438"),
        l = n("365916"),
        d = n("828148"),
        f = n("240919"),
        p = n("148309"),
        h = n("632384"),
        m = n("905125");
    e.exports = function(e, t, n) {
        if ("Object" !== h(e)) throw new o("Assertion failed: O must be an Object");
        if (!d(t)) throw new o("Assertion failed: P must be a Property Key");
        if (!s({
                Type: h,
                IsDataDescriptor: c,
                IsAccessorDescriptor: u
            }, n)) throw new o("Assertion failed: Desc must be a Property Descriptor");
        if (!i) {
            if (u(n)) throw new a("This environment does not support accessor property descriptors.");
            var r = !(t in e) && n["[[Writable]]"] && n["[[Enumerable]]"] && n["[[Configurable]]"] && "[[Value]]" in n,
                g = t in e && (!("[[Configurable]]" in n) || n["[[Configurable]]"]) && (!("[[Enumerable]]" in n) || n["[[Enumerable]]"]) && (!("[[Writable]]" in n) || n["[[Writable]]"]) && "[[Value]]" in n;
            if (r || g) return e[t] = n["[[Value]]"], p(e[t], n["[[Value]]"]);
            throw new a("This environment does not support defining non-writable, non-enumerable, or non-configurable properties")
        }
        var _ = i(e, t),
            b = _ && f(_),
            v = l(e);
        return m(e, t, v, n, b)
    }
}