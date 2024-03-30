function(t, e, r) {
    "use strict";
    var n = r("680500"),
        o = r("24033"),
        i = r("340618");
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, e = !1,
            r = {};
        try {
            (t = n(Object.prototype, "__proto__", "set"))(r, []), e = r instanceof Array
        } catch (t) {}
        return function(r, n) {
            return o(r), i(n), e ? t(r, n) : r.__proto__ = n, r
        }
    }() : void 0)
}