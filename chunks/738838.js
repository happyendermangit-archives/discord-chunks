function(t, e, s) {
    "use strict";
    var r = s("366400"),
        i = s("732123"),
        n = s("314970"),
        c = s("331543"),
        o = s("16662"),
        f = o(),
        u = s("60426"),
        a = n("Array.prototype.slice"),
        d = function(t, e) {
            return i(t), f.apply(t, a(arguments, 1))
        };
    r(d, {
        getPolyfill: o,
        implementation: c,
        shim: u
    }), t.exports = d
}