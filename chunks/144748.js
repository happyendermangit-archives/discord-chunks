function(t, e, r) {
    "use strict";
    var n = r("740362"),
        o = r("354848"),
        i = r("339718"),
        c = r("883539"),
        s = r("442975"),
        u = c("IE_PROTO"),
        a = Object,
        f = a.prototype;
    t.exports = s ? a.getPrototypeOf : function(t) {
        var e = i(t);
        if (n(e, u)) return e[u];
        var r = e.constructor;
        return o(r) && e instanceof r ? r.prototype : e instanceof a ? f : null
    }
}