function(e, t, n) {
    "use strict";
    var r = n("648644"),
        i = n("366400"),
        o = n("975169"),
        s = n("463067"),
        a = n("658683"),
        c = n("284400");
    o();
    var u = r(a()),
        d = function(e) {
            return u(void 0 === this ? Promise : this, e)
        };
    i(d, {
        getPolyfill: a,
        implementation: s,
        shim: c
    }), e.exports = d
}