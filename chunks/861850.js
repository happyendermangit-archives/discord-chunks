function(t, r, n) {
    "use strict";
    var e = n("503486"),
        o = Object.defineProperty;
    t.exports = function(t, r) {
        try {
            o(e, t, {
                value: r,
                configurable: !0,
                writable: !0
            })
        } catch (n) {
            e[t] = r
        }
        return r
    }
}