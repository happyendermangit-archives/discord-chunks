function(e, t, n) {
    var r = n("779648"),
        i = n("678137"),
        a = n("204597"),
        o = n("60098"),
        s = n("687424");

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