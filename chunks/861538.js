function(t, e, n) {
    var r = n("159219"),
        i = n("995937"),
        a = n("544054"),
        o = n("999991"),
        s = n("662753");

    function u(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    u.prototype.clear = r, u.prototype.delete = i, u.prototype.get = a, u.prototype.has = o, u.prototype.set = s, t.exports = u
}