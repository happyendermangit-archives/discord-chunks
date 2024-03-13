function(e, t, n) {
    n("70102");
    var r = n("478098"),
        a = n("952133");
    e.exports = function(e, t, n) {
        var o = !0,
            i = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return a(n) && (o = "leading" in n ? !!n.leading : o, i = "trailing" in n ? !!n.trailing : i), r(e, t, {
            leading: o,
            maxWait: t,
            trailing: i
        })
    }
}