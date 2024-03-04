function(e, t, n) {
    var r = n("839309"),
        i = n("125807");

    function o(e) {
        this.rand = e || new i.Rand
    }
    e.exports = o, o.create = function(e) {
        return new o(e)
    }, o.prototype._randbelow = function(e) {
        var t = Math.ceil(e.bitLength() / 8);
        do var n = new r(this.rand.generate(t)); while (n.cmp(e) >= 0);
        return n
    }, o.prototype._randrange = function(e, t) {
        var n = t.sub(e);
        return e.add(this._randbelow(n))
    }, o.prototype.test = function(e, t, n) {
        var i = e.bitLength(),
            o = r.mont(e),
            s = new r(1).toRed(o);
        !t && (t = Math.max(1, i / 48 | 0));
        for (var a = e.subn(1), c = 0; !a.testn(c); c++);
        for (var u = e.shrn(c), d = a.toRed(o); t > 0; t--) {
            var l = this._randrange(new r(2), a);
            n && n(l);
            var f = l.toRed(o).redPow(u);
            if (0 !== f.cmp(s) && 0 !== f.cmp(d)) {
                for (var p = 1; p < c; p++) {
                    if (0 === (f = f.redSqr()).cmp(s)) return !1;
                    if (0 === f.cmp(d)) break
                }
                if (p === c) return !1
            }
        }
        return !0
    }, o.prototype.getDivisor = function(e, t) {
        var n = e.bitLength(),
            i = r.mont(e),
            o = new r(1).toRed(i);
        !t && (t = Math.max(1, n / 48 | 0));
        for (var s = e.subn(1), a = 0; !s.testn(a); a++);
        for (var c = e.shrn(a), u = s.toRed(i); t > 0; t--) {
            var d = this._randrange(new r(2), s),
                l = e.gcd(d);
            if (0 !== l.cmpn(1)) return l;
            var f = d.toRed(i).redPow(c);
            if (0 !== f.cmp(o) && 0 !== f.cmp(u)) {
                for (var p = 1; p < a; p++) {
                    if (0 === (f = f.redSqr()).cmp(o)) return f.fromRed().subn(1).gcd(e);
                    if (0 === f.cmp(u)) break
                }
                if (p === a) return (f = f.redSqr()).fromRed().subn(1).gcd(e)
            }
        }
        return !1
    }
}