function(e, t, n) {
    "use strict";
    var r = n("911718")("%TypeError%"),
        i = n("362434"),
        o = n("650855"),
        s = n("96289"),
        a = n("890409"),
        c = n("569785"),
        u = n("729197"),
        d = n("228702"),
        l = n("228140"),
        f = n("537992"),
        p = n("583608");
    e.exports = function(e, t, n, h, v) {
        var g, b, m = p(e);
        if ("Undefined" !== m && "Object" !== m) throw new r("Assertion failed: O must be undefined or an Object");
        if (!l(t)) throw new r("Assertion failed: P must be a Property Key");
        if ("Boolean" !== p(n)) throw new r("Assertion failed: extensible must be a Boolean");
        if (!s({
                Type: p,
                IsDataDescriptor: u,
                IsAccessorDescriptor: c
            }, h)) throw new r("Assertion failed: Desc must be a Property Descriptor");
        if ("Undefined" !== p(v) && !s({
                Type: p,
                IsDataDescriptor: u,
                IsAccessorDescriptor: c
            }, v)) throw new r("Assertion failed: current must be a Property Descriptor, or undefined");
        if ("Undefined" === p(v)) return !!n && ("Undefined" === m || (c(h) ? i(u, f, a, e, t, h) : i(u, f, a, e, t, {
            "[[Configurable]]": !!h["[[Configurable]]"],
            "[[Enumerable]]": !!h["[[Enumerable]]"],
            "[[Value]]": h["[[Value]]"],
            "[[Writable]]": !!h["[[Writable]]"]
        })));
        if (!o({
                IsAccessorDescriptor: c,
                IsDataDescriptor: u
            }, v)) throw new r("`current`, when present, must be a fully populated and valid Property Descriptor");
        if (!v["[[Configurable]]"]) {
            if ("[[Configurable]]" in h && h["[[Configurable]]"] || "[[Enumerable]]" in h && !f(h["[[Enumerable]]"], v["[[Enumerable]]"]) || !d(h) && !f(c(h), c(v))) return !1;
            if (c(v)) {
                if ("[[Get]]" in h && !f(h["[[Get]]"], v["[[Get]]"]) || "[[Set]]" in h && !f(h["[[Set]]"], v["[[Set]]"])) return !1
            } else if (!v["[[Writable]]"] && ("[[Writable]]" in h && h["[[Writable]]"] || "[[Value]]" in h && !f(h["[[Value]]"], v["[[Value]]"]))) return !1
        }
        if ("Undefined" !== m) return u(v) && c(h) ? (g = ("[[Configurable]]" in h ? h : v)["[[Configurable]]"], i(u, f, a, e, t, {
            "[[Configurable]]": !!g,
            "[[Enumerable]]": !!(b = ("[[Enumerable]]" in h ? h : v)["[[Enumerable]]"]),
            "[[Get]]": ("[[Get]]" in h ? h : v)["[[Get]]"],
            "[[Set]]": ("[[Set]]" in h ? h : v)["[[Set]]"]
        })) : c(v) && u(h) ? (g = ("[[Configurable]]" in h ? h : v)["[[Configurable]]"], i(u, f, a, e, t, {
            "[[Configurable]]": !!g,
            "[[Enumerable]]": !!(b = ("[[Enumerable]]" in h ? h : v)["[[Enumerable]]"]),
            "[[Value]]": ("[[Value]]" in h ? h : v)["[[Value]]"],
            "[[Writable]]": !!("[[Writable]]" in h ? h : v)["[[Writable]]"]
        })) : i(u, f, a, e, t, h);
        return !0
    }
}