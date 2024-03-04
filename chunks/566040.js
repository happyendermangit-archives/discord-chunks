function(e, t, n) {
    var r = n("561662"),
        i = n("603108"),
        o = n("476540"),
        s = n("285162");
    e.exports = function(e, t, n) {
        if (!s(n)) return !1;
        var a = typeof t;
        return ("number" == a ? !!(i(n) && o(t, n.length)) : "string" == a && t in n) && r(n[t], e)
    }
}