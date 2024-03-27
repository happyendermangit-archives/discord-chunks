function(t, r, n) {
    "use strict";
    var e = n("498576"),
        o = n("933676"),
        i = n("622281"),
        u = n("641236")("species"),
        f = Array;
    t.exports = function(t) {
        var r;
        return e(t) && (o(r = t.constructor) && (r === f || e(r.prototype)) ? r = void 0 : i(r) && null === (r = r[u]) && (r = void 0)), void 0 === r ? f : r
    }
}