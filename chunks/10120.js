function(t, r, e) {
    t.exports = function(t, r) {
        for (var e = -1, n = null == t ? 0 : t.length; ++e < n;)
            if (r(t[e], e, t)) return !0;
        return !1
    }
}