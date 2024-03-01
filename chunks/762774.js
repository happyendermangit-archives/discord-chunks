function(t, r, n) {
    var e = n("843879"),
        o = n("169160"),
        i = n("927794"),
        u = n("979334"),
        c = n("898346");

    function a(t) {
        var r = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++r < n;) {
            var e = t[r];
            this.set(e[0], e[1])
        }
    }
    a.prototype.clear = e, a.prototype.delete = o, a.prototype.get = i, a.prototype.has = u, a.prototype.set = c, t.exports = a
}