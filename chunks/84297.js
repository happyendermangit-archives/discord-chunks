function(t, e, r) {
    "use strict";
    var n, o, i, c = r("936940"),
        s = r("354848"),
        u = r("622281"),
        a = r("803938"),
        f = r("144748"),
        p = r("859209"),
        l = r("641236"),
        y = r("992051"),
        v = l("iterator"),
        d = !1;
    [].keys && ("next" in (i = [].keys()) ? (o = f(f(i))) !== Object.prototype && (n = o) : d = !0), !u(n) || c(function() {
        var t = {};
        return n[v].call(t) !== t
    }) ? n = {} : y && (n = a(n)), !s(n[v]) && p(n, v, function() {
        return this
    }), t.exports = {
        IteratorPrototype: n,
        BUGGY_SAFARI_ITERATORS: d
    }
}