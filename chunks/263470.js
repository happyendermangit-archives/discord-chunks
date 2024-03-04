function(e, t, n) {
    var r = n("186489"),
        i = n("235723"),
        o = n("236748"),
        s = n("285445"),
        a = n("956285");

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