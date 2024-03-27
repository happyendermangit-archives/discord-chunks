function(e, t, n) {
    var r = n("521092"),
        i = n("824362"),
        a = n("672744"),
        o = n("170630"),
        s = n("306216");

    function u(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    u.prototype.clear = r, u.prototype.delete = i, u.prototype.get = a, u.prototype.has = o, u.prototype.set = s, e.exports = u
}