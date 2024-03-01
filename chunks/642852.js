function(t, e, s) {
    "use strict";
    var r = s("648644"),
        i = s("366400"),
        n = s("975169"),
        c = s("463067"),
        o = s("658683"),
        f = s("284400");
    n();
    var u = r(o()),
        a = function(t) {
            return u(void 0 === this ? Promise : this, t)
        };
    i(a, {
        getPolyfill: o,
        implementation: c,
        shim: f
    }), t.exports = a
}