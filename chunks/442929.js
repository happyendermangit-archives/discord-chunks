function(t, r, e) {
    var Symbol = e("506264"),
        n = e("630574"),
        o = e("486036"),
        i = e("501870"),
        a = 1 / 0,
        u = Symbol ? Symbol.prototype : void 0,
        s = u ? u.toString : void 0;
    t.exports = function t(r) {
        if ("string" == typeof r) return r;
        if (o(r)) return n(r, t) + "";
        if (i(r)) return s ? s.call(r) : "";
        var e = r + "";
        return "0" == e && 1 / r == -a ? "-0" : e
    }
}