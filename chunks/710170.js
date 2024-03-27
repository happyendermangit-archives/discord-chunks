function(e, t, n) {
    var r = n("604175"),
        i = n("136019"),
        a = n("785330"),
        o = n("533652"),
        s = n("380092");

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