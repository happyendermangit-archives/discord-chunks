function(e, t, n) {
    var r = n("679991"),
        i = n("169789"),
        o = n("406449"),
        s = n("66703"),
        a = n("245510");

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