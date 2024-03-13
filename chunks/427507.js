function(t, e, n) {
    var r = n("921563"),
        i = n("169828"),
        o = n("227290"),
        a = n("952133");
    t.exports = function(t, e, n) {
        if (!a(n)) return !1;
        var u = typeof e;
        return ("number" == u ? !!(i(n) && o(e, n.length)) : "string" == u && e in n) && r(n[e], t)
    }
}