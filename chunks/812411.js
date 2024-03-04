function(e, t, n) {
    var r = n("725502"),
        i = n("27556"),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/;
    e.exports = function(e, t) {
        if (r(e)) return !1;
        var n = typeof e;
        return !!("number" == n || "symbol" == n || "boolean" == n || null == e || i(e)) || s.test(e) || !o.test(e) || null != t && e in Object(t)
    }
}