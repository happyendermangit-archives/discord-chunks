function(t, e, s) {
    t.exports = function(t, e, s) {
        for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
            if (s(e, t[r])) return !0;
        return !1
    }
}