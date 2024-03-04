function(e, t, n) {
    "use strict";
    var r = n("638839"),
        i = n("911718"),
        o = r() && i("%Object.defineProperty%", !0),
        s = r.hasArrayLengthDefineBug(),
        a = s && n("753994"),
        c = n("314970")("Object.prototype.propertyIsEnumerable");
    e.exports = function(e, t, n, r, i, u) {
        if (!o) {
            if (!e(u) || !u["[[Configurable]]"] || !u["[[Writable]]"] || i in r && c(r, i) !== !!u["[[Enumerable]]"]) return !1;
            var d = u["[[Value]]"];
            return r[i] = d, t(r[i], d)
        }
        return s && "length" === i && "[[Value]]" in u && a(r) && r.length !== u["[[Value]]"] ? (r.length = u["[[Value]]"], r.length === u["[[Value]]"]) : (o(r, i, n(u)), !0)
    }
}