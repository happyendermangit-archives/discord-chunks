function(t, e, s) {
    "use strict";
    var r = s("911718"),
        i = s("293471"),
        n = r("%SyntaxError%"),
        c = r("%TypeError%"),
        o = s("96289"),
        f = s("569785"),
        u = s("729197"),
        a = s("839259"),
        d = s("228140"),
        p = s("717721"),
        b = s("537992"),
        h = s("583608"),
        l = s("567619");
    t.exports = function(t, e, s) {
        if ("Object" !== h(t)) throw new c("Assertion failed: O must be an Object");
        if (!d(e)) throw new c("Assertion failed: P must be a Property Key");
        if (!o({
                Type: h,
                IsDataDescriptor: u,
                IsAccessorDescriptor: f
            }, s)) throw new c("Assertion failed: Desc must be a Property Descriptor");
        if (!i) {
            if (f(s)) throw new n("This environment does not support accessor property descriptors.");
            var r = !(e in t) && s["[[Writable]]"] && s["[[Enumerable]]"] && s["[[Configurable]]"] && "[[Value]]" in s,
                g = e in t && (!("[[Configurable]]" in s) || s["[[Configurable]]"]) && (!("[[Enumerable]]" in s) || s["[[Enumerable]]"]) && (!("[[Writable]]" in s) || s["[[Writable]]"]) && "[[Value]]" in s;
            if (r || g) return t[e] = s["[[Value]]"], b(t[e], s["[[Value]]"]);
            throw new n("This environment does not support defining non-writable, non-enumerable, or non-configurable properties")
        }
        var v = i(t, e),
            x = v && p(v),
            m = a(t);
        return l(t, e, m, s, x)
    }
}