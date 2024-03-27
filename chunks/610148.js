function(t, r, n) {
    "use strict";
    var e = n("325008"),
        o = n("498576"),
        i = TypeError,
        u = Object.getOwnPropertyDescriptor,
        f = e && ! function() {
            if (void 0 !== this) return !0;
            try {
                Object.defineProperty([], "length", {
                    writable: !1
                }).length = 1
            } catch (t) {
                return t instanceof TypeError
            }
        }();
    t.exports = f ? function(t, r) {
        if (o(t) && !u(t, "length").writable) throw i("Cannot set read only .length");
        return t.length = r
    } : function(t, r) {
        return t.length = r
    }
}