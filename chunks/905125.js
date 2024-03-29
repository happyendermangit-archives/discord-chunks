function(e, t, n) {
    "use strict";
    var r = n("690244")("%TypeError%"),
        i = n("116298"),
        a = n("125179"),
        o = n("395238"),
        s = n("441596"),
        u = n("75150"),
        c = n("860438"),
        l = n("465555"),
        d = n("828148"),
        f = n("148309"),
        p = n("632384");
    e.exports = function(e, t, n, h, m) {
        var g, _, b = p(e);
        if ("Undefined" !== b && "Object" !== b) throw new r("Assertion failed: O must be undefined or an Object");
        if (!d(t)) throw new r("Assertion failed: P must be a Property Key");
        if ("Boolean" !== p(n)) throw new r("Assertion failed: extensible must be a Boolean");
        if (!o({
                Type: p,
                IsDataDescriptor: c,
                IsAccessorDescriptor: u
            }, h)) throw new r("Assertion failed: Desc must be a Property Descriptor");
        if ("Undefined" !== p(m) && !o({
                Type: p,
                IsDataDescriptor: c,
                IsAccessorDescriptor: u
            }, m)) throw new r("Assertion failed: current must be a Property Descriptor, or undefined");
        if ("Undefined" === p(m)) return !!n && ("Undefined" === b || (u(h) ? i(c, f, s, e, t, h) : i(c, f, s, e, t, {
            "[[Configurable]]": !!h["[[Configurable]]"],
            "[[Enumerable]]": !!h["[[Enumerable]]"],
            "[[Value]]": h["[[Value]]"],
            "[[Writable]]": !!h["[[Writable]]"]
        })));
        if (!a({
                IsAccessorDescriptor: u,
                IsDataDescriptor: c
            }, m)) throw new r("`current`, when present, must be a fully populated and valid Property Descriptor");
        if (!m["[[Configurable]]"]) {
            if ("[[Configurable]]" in h && h["[[Configurable]]"] || "[[Enumerable]]" in h && !f(h["[[Enumerable]]"], m["[[Enumerable]]"]) || !l(h) && !f(u(h), u(m))) return !1;
            if (u(m)) {
                if ("[[Get]]" in h && !f(h["[[Get]]"], m["[[Get]]"]) || "[[Set]]" in h && !f(h["[[Set]]"], m["[[Set]]"])) return !1
            } else if (!m["[[Writable]]"] && ("[[Writable]]" in h && h["[[Writable]]"] || "[[Value]]" in h && !f(h["[[Value]]"], m["[[Value]]"]))) return !1
        }
        if ("Undefined" !== b) return c(m) && u(h) ? (g = ("[[Configurable]]" in h ? h : m)["[[Configurable]]"], i(c, f, s, e, t, {
            "[[Configurable]]": !!g,
            "[[Enumerable]]": !!(_ = ("[[Enumerable]]" in h ? h : m)["[[Enumerable]]"]),
            "[[Get]]": ("[[Get]]" in h ? h : m)["[[Get]]"],
            "[[Set]]": ("[[Set]]" in h ? h : m)["[[Set]]"]
        })) : u(m) && c(h) ? (g = ("[[Configurable]]" in h ? h : m)["[[Configurable]]"], i(c, f, s, e, t, {
            "[[Configurable]]": !!g,
            "[[Enumerable]]": !!(_ = ("[[Enumerable]]" in h ? h : m)["[[Enumerable]]"]),
            "[[Value]]": ("[[Value]]" in h ? h : m)["[[Value]]"],
            "[[Writable]]": !!("[[Writable]]" in h ? h : m)["[[Writable]]"]
        })) : i(c, f, s, e, t, h);
        return !0
    }
}