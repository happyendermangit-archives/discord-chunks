function(e, t, n) {
    var r = n("954955"),
        i = n("661233");
    e.exports = function(e, t, n) {
        var a = !0,
            o = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return i(n) && (a = "leading" in n ? !!n.leading : a, o = "trailing" in n ? !!n.trailing : o), r(e, t, {
            leading: a,
            maxWait: t,
            trailing: o
        })
    }
}