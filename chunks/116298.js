function(e, t, n) {
    "use strict";
    var r = n("768175"),
        i = n("81021"),
        a = r() && i("%Object.defineProperty%", !0),
        o = r.hasArrayLengthDefineBug(),
        s = o && n("453312"),
        u = n("903390")("Object.prototype.propertyIsEnumerable");
    e.exports = function(e, t, n, r, i, c) {
        if (!a) {
            if (!e(c) || !c["[[Configurable]]"] || !c["[[Writable]]"] || i in r && u(r, i) !== !!c["[[Enumerable]]"]) return !1;
            var l = c["[[Value]]"];
            return r[i] = l, t(r[i], l)
        }
        return o && "length" === i && "[[Value]]" in c && s(r) && r.length !== c["[[Value]]"] ? (r.length = c["[[Value]]"], r.length === c["[[Value]]"]) : (a(r, i, n(c)), !0)
    }
}