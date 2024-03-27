function(e, t, n) {
    "use strict";
    var r = n("705806"),
        i = n("286233"),
        a = n("535213"),
        o = n("383252"),
        s = n("234268"),
        u = n("751340");
    a();
    var c = r(s()),
        l = function(e) {
            return c(void 0 === this ? Promise : this, e)
        };
    i(l, {
        getPolyfill: s,
        implementation: o,
        shim: u
    }), e.exports = l
}