function(e, t, n) {
    var r = n("814033"),
        i = n("526808");

    function a(e) {
        this.rand = e || new i.Rand
    }
    e.exports = a, a.create = function(e) {
        return new a(e)
    }, a.prototype._randbelow = function(e) {
        var t = Math.ceil(e.bitLength() / 8);
        do var n = new r(this.rand.generate(t)); while (n.cmp(e) >= 0);
        return n
    }, a.prototype._randrange = function(e, t) {
        var n = t.sub(e);
        return e.add(this._randbelow(n))
    }, a.prototype.test = function(e, t, n) {
        var i = e.bitLength(),
            a = r.mont(e),
            o = new r(1).toRed(a);
        !t && (t = Math.max(1, i / 48 | 0));
        for (var s = e.subn(1), u = 0; !s.testn(u); u++);
        for (var c = e.shrn(u), l = s.toRed(a); t > 0; t--) {
            var d = this._randrange(new r(2), s);
            n && n(d);
            var f = d.toRed(a).redPow(c);
            if (0 !== f.cmp(o) && 0 !== f.cmp(l)) {
                for (var p = 1; p < u; p++) {
                    if (0 === (f = f.redSqr()).cmp(o)) return !1;
                    if (0 === f.cmp(l)) break
                }
                if (p === u) return !1
            }
        }
        return !0
    }, a.prototype.getDivisor = function(e, t) {
        var n = e.bitLength(),
            i = r.mont(e),
            a = new r(1).toRed(i);
        !t && (t = Math.max(1, n / 48 | 0));
        for (var o = e.subn(1), s = 0; !o.testn(s); s++);
        for (var u = e.shrn(s), c = o.toRed(i); t > 0; t--) {
            var l = this._randrange(new r(2), o),
                d = e.gcd(l);
            if (0 !== d.cmpn(1)) return d;
            var f = l.toRed(i).redPow(u);
            if (0 !== f.cmp(a) && 0 !== f.cmp(c)) {
                for (var p = 1; p < s; p++) {
                    if (0 === (f = f.redSqr()).cmp(a)) return f.fromRed().subn(1).gcd(e);
                    if (0 === f.cmp(c)) break
                }
                if (p === s) return (f = f.redSqr()).fromRed().subn(1).gcd(e)
            }
        }
        return !1
    }
}