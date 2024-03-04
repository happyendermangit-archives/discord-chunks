function(e, t, n) {
    n("70102");
    var r = n("483366"),
        i = n("285162");
    e.exports = function(e, t, n) {
        var o = !0,
            s = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return i(n) && (o = "leading" in n ? !!n.leading : o, s = "trailing" in n ? !!n.trailing : s), r(e, t, {
            leading: o,
            maxWait: t,
            trailing: s
        })
    }
}