function(t, e, s) {
    var r = s("839309"),
        i = s("125807");

    function n(t) {
        this.rand = t || new i.Rand
    }
    t.exports = n, n.create = function(t) {
        return new n(t)
    }, n.prototype._randbelow = function(t) {
        var e = Math.ceil(t.bitLength() / 8);
        do var s = new r(this.rand.generate(e)); while (s.cmp(t) >= 0);
        return s
    }, n.prototype._randrange = function(t, e) {
        var s = e.sub(t);
        return t.add(this._randbelow(s))
    }, n.prototype.test = function(t, e, s) {
        var i = t.bitLength(),
            n = r.mont(t),
            c = new r(1).toRed(n);
        !e && (e = Math.max(1, i / 48 | 0));
        for (var o = t.subn(1), f = 0; !o.testn(f); f++);
        for (var u = t.shrn(f), a = o.toRed(n); e > 0; e--) {
            var d = this._randrange(new r(2), o);
            s && s(d);
            var p = d.toRed(n).redPow(u);
            if (0 !== p.cmp(c) && 0 !== p.cmp(a)) {
                for (var b = 1; b < f; b++) {
                    if (0 === (p = p.redSqr()).cmp(c)) return !1;
                    if (0 === p.cmp(a)) break
                }
                if (b === f) return !1
            }
        }
        return !0
    }, n.prototype.getDivisor = function(t, e) {
        var s = t.bitLength(),
            i = r.mont(t),
            n = new r(1).toRed(i);
        !e && (e = Math.max(1, s / 48 | 0));
        for (var c = t.subn(1), o = 0; !c.testn(o); o++);
        for (var f = t.shrn(o), u = c.toRed(i); e > 0; e--) {
            var a = this._randrange(new r(2), c),
                d = t.gcd(a);
            if (0 !== d.cmpn(1)) return d;
            var p = a.toRed(i).redPow(f);
            if (0 !== p.cmp(n) && 0 !== p.cmp(u)) {
                for (var b = 1; b < o; b++) {
                    if (0 === (p = p.redSqr()).cmp(n)) return p.fromRed().subn(1).gcd(t);
                    if (0 === p.cmp(u)) break
                }
                if (b === o) return (p = p.redSqr()).fromRed().subn(1).gcd(t)
            }
        }
        return !1
    }
}