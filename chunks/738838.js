function(e, t, n) {
    "use strict";
    var r = n("366400"),
        i = n("732123"),
        o = n("314970"),
        s = n("331543"),
        a = n("16662"),
        c = a(),
        u = n("60426"),
        d = o("Array.prototype.slice"),
        l = function(e, t) {
            return i(e), c.apply(e, d(arguments, 1))
        };
    r(l, {
        getPolyfill: a,
        implementation: s,
        shim: u
    }), e.exports = l
}