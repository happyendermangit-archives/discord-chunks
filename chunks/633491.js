function(t, r, e) {
    var n = e("486835"),
        o = e("148807");
    t.exports = function(t, r) {
        r = n(r, t);
        for (var e = 0, i = r.length; null != t && e < i;) t = t[o(r[e++])];
        return e && e == i ? t : void 0
    }
}