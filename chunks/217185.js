function(t, e, n) {
    var r = n("466293"),
        i = n("467631"),
        a = n("402428"),
        o = n("42848"),
        s = 1 / 0,
        u = r ? r.prototype : void 0,
        c = u ? u.toString : void 0;
    t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (a(e)) return i(e, t) + "";
        if (o(e)) return c ? c.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -s ? "-0" : n
    }
}