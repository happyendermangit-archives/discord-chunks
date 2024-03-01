function(t, e, r) {
    "use strict";
    var n, o, i, c = r("664144"),
        u = r("125359"),
        s = r("472960"),
        a = r("148066"),
        f = r("80282"),
        p = r("484784"),
        l = r("174669"),
        y = r("140925"),
        v = l("iterator"),
        h = !1;
    [].keys && ("next" in (i = [].keys()) ? (o = f(f(i))) !== Object.prototype && (n = o) : h = !0), !s(n) || c(function() {
        var t = {};
        return n[v].call(t) !== t
    }) ? n = {} : y && (n = a(n)), !u(n[v]) && p(n, v, function() {
        return this
    }), t.exports = {
        IteratorPrototype: n,
        BUGGY_SAFARI_ITERATORS: h
    }
}