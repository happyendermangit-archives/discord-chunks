function(t, e, n) {
    var r = n("553070"),
        i = n("883638"),
        a = n("538444"),
        o = n("455877"),
        s = n("58990");

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