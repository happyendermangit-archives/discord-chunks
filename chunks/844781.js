function(t, e, n) {
    var r = n("402428"),
        i = n("42848"),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        o = /^\w*$/;
    t.exports = function(t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return !!("number" == n || "symbol" == n || "boolean" == n || null == t || i(t)) || o.test(t) || !a.test(t) || null != e && t in Object(e)
    }
}