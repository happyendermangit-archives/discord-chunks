function(e, t, r) {
    r("70102");
    var n = r("478098"),
        i = r("952133");
    e.exports = function(e, t, r) {
        var o = !0,
            a = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return i(r) && (o = "leading" in r ? !!r.leading : o, a = "trailing" in r ? !!r.trailing : a), n(e, t, {
            leading: o,
            maxWait: t,
            trailing: a
        })
    }
}