function(e, t, n) {
    "use strict";
    var r = n("286233"),
        i = n("796768"),
        a = n("192853"),
        o = n("815814"),
        s = n("673555"),
        u = s(),
        c = n("515171"),
        l = a("Array.prototype.slice"),
        d = function(e, t) {
            return i(e), u.apply(e, l(arguments, 1))
        };
    r(d, {
        getPolyfill: s,
        implementation: o,
        shim: c
    }), e.exports = d
}