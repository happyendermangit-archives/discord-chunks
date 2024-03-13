function(t, r, e) {
    var n = e("486036"),
        o = e("501870"),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = function(t, r) {
        if (n(t)) return !1;
        var e = typeof t;
        return !!("number" == e || "symbol" == e || "boolean" == e || null == t || o(t)) || a.test(t) || !i.test(t) || null != r && t in Object(r)
    }
}