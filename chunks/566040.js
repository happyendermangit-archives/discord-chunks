function(e, t, n) {
    var r = n("561662"),
        a = n("603108"),
        i = n("476540"),
        o = n("285162");
    e.exports = function(e, t, n) {
        if (!o(n)) return !1;
        var s = typeof t;
        return ("number" == s ? !!(a(n) && i(t, n.length)) : "string" == s && t in n) && r(n[t], e)
    }
}