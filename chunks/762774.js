function(e, t, n) {
    var r = n("843879"),
        i = n("169160"),
        o = n("927794"),
        s = n("979334"),
        a = n("898346");

    function c(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = s, c.prototype.set = a, e.exports = c
}