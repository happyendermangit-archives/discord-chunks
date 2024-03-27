function(t, e, n) {
    var r = n("853647"),
        i = n("440073"),
        a = n("497903"),
        o = n("843832"),
        s = n("687074");

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