function(t, r, n) {
    var e = n("725502"),
        o = n("27556"),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        u = /^\w*$/;
    t.exports = function(t, r) {
        if (e(t)) return !1;
        var n = typeof t;
        return !!("number" == n || "symbol" == n || "boolean" == n || null == t || o(t)) || u.test(t) || !i.test(t) || null != r && t in Object(r)
    }
}