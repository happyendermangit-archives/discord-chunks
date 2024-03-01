function(t, e, n) {
    var Symbol = n("330206"),
        r = n("626785"),
        i = n("725502"),
        o = n("27556"),
        a = 1 / 0,
        u = Symbol ? Symbol.prototype : void 0,
        s = u ? u.toString : void 0;
    t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (i(e)) return r(e, t) + "";
        if (o(e)) return s ? s.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -a ? "-0" : n
    }
}