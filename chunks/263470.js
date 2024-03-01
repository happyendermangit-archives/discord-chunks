function(t, r, n) {
    var e = n("186489"),
        o = n("235723"),
        i = n("236748"),
        u = n("285445"),
        c = n("956285");

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