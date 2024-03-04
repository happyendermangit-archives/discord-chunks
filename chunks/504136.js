function(e, t, n) {
    "use strict";
    n("70102"), n("274635");
    var r = n("550511"),
        i = n("839309"),
        o = n("599235"),
        s = n("275201"),
        a = r.assert;

    function c(e) {
        s.call(this, "short", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ]
    }

    function u(e, t, n, r) {
        s.BasePoint.call(this, e, "affine"), null === t && null === n ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(t, 16), this.y = new i(n, 16), r && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
    }

    function d(e, t, n, r) {
        s.BasePoint.call(this, e, "jacobian"), null === t && null === n && null === r ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(t, 16), this.y = new i(n, 16), this.z = new i(r, 16)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
    }
    o(c, s), e.exports = c, c.prototype._getEndomorphism = function(e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (e.beta) t = new i(e.beta, 16).toRed(this.red);
            else {
                var t, n, r, o = this._getEndoRoots(this.p);
                t = (t = 0 > o[0].cmp(o[1]) ? o[0] : o[1]).toRed(this.red)
            }
            if (e.lambda) n = new i(e.lambda, 16);
            else {
                var s = this._getEndoRoots(this.n);
                0 === this.g.mul(s[0]).x.cmp(this.g.x.redMul(t)) ? n = s[0] : (n = s[1], a(0 === this.g.mul(n).x.cmp(this.g.x.redMul(t))))
            }
            return r = e.basis ? e.basis.map(function(e) {
                return {
                    a: new i(e.a, 16),
                    b: new i(e.b, 16)
                }
            }) : this._getEndoBasis(n), {
                beta: t,
                lambda: n,
                basis: r
            }
        }
    }, c.prototype._getEndoRoots = function(e) {
        var t = e === this.p ? this.red : i.mont(e),
            n = new i(2).toRed(t).redInvm(),
            r = n.redNeg(),
            o = new i(3).toRed(t).redNeg().redSqrt().redMul(n);
        return [r.redAdd(o).fromRed(), r.redSub(o).fromRed()]
    }, c.prototype._getEndoBasis = function(e) {
        for (var t, n, r, o, s, a, c, u, d, l = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), f = e, p = this.n.clone(), h = new i(1), v = new i(0), g = new i(0), b = new i(1), m = 0; 0 !== f.cmpn(0);) {
            var y = p.div(f);
            u = p.sub(y.mul(f)), d = g.sub(y.mul(h));
            var x = b.sub(y.mul(v));
            if (!r && 0 > u.cmp(l)) t = c.neg(), n = h, r = u.neg(), o = d;
            else if (r && 2 == ++m) break;
            c = u, p = f, f = u, g = h, h = d, b = v, v = x
        }
        s = u.neg(), a = d;
        var w = r.sqr().add(o.sqr());
        return s.sqr().add(a.sqr()).cmp(w) >= 0 && (s = t, a = n), r.negative && (r = r.neg(), o = o.neg()), s.negative && (s = s.neg(), a = a.neg()), [{
            a: r,
            b: o
        }, {
            a: s,
            b: a
        }]
    }, c.prototype._endoSplit = function(e) {
        var t = this.endo.basis,
            n = t[0],
            r = t[1],
            i = r.b.mul(e).divRound(this.n),
            o = n.b.neg().mul(e).divRound(this.n),
            s = i.mul(n.a),
            a = o.mul(r.a),
            c = i.mul(n.b),
            u = o.mul(r.b);
        return {
            k1: e.sub(s).sub(a),
            k2: c.add(u).neg()
        }
    }, c.prototype.pointFromX = function(e, t) {
        !(e = new i(e, 16)).red && (e = e.toRed(this.red));
        var n = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
            r = n.redSqrt();
        if (0 !== r.redSqr().redSub(n).cmp(this.zero)) throw Error("invalid point");
        var o = r.fromRed().isOdd();
        return (t && !o || !t && o) && (r = r.redNeg()), this.point(e, r)
    }, c.prototype.validate = function(e) {
        if (e.inf) return !0;
        var t = e.x,
            n = e.y,
            r = this.a.redMul(t),
            i = t.redSqr().redMul(t).redIAdd(r).redIAdd(this.b);
        return 0 === n.redSqr().redISub(i).cmpn(0)
    }, c.prototype._endoWnafMulAdd = function(e, t, n) {
        for (var r = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < e.length; o++) {
            var s = this._endoSplit(t[o]),
                a = e[o],
                c = a._getBeta();
            s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), c = c.neg(!0)), r[2 * o] = a, r[2 * o + 1] = c, i[2 * o] = s.k1, i[2 * o + 1] = s.k2
        }
        for (var u = this._wnafMulAdd(1, r, i, 2 * o, n), d = 0; d < 2 * o; d++) r[d] = null, i[d] = null;
        return u
    }, o(u, s.BasePoint), c.prototype.point = function(e, t, n) {
        return new u(this, e, t, n)
    }, c.prototype.pointFromJSON = function(e, t) {
        return u.fromJSON(this, e, t)
    }, u.prototype._getBeta = function() {
        if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (e) {
                var n = this.curve,
                    r = function(e) {
                        return n.point(e.x.redMul(n.endo.beta), e.y)
                    };
                e.beta = t, t.precomputed = {
                    beta: null,
                    naf: e.naf && {
                        wnd: e.naf.wnd,
                        points: e.naf.points.map(r)
                    },
                    doubles: e.doubles && {
                        step: e.doubles.step,
                        points: e.doubles.points.map(r)
                    }
                }
            }
            return t
        }
    }, u.prototype.toJSON = function() {
        return this.precomputed ? [this.x, this.y, this.precomputed && {
            doubles: this.precomputed.doubles && {
                step: this.precomputed.doubles.step,
                points: this.precomputed.doubles.points.slice(1)
            },
            naf: this.precomputed.naf && {
                wnd: this.precomputed.naf.wnd,
                points: this.precomputed.naf.points.slice(1)
            }
        }] : [this.x, this.y]
    }, u.fromJSON = function(e, t, n) {
        "string" == typeof t && (t = JSON.parse(t));
        var r = e.point(t[0], t[1], n);
        if (!t[2]) return r;

        function i(t) {
            return e.point(t[0], t[1], n)
        }
        var o = t[2];
        return r.precomputed = {
            beta: null,
            doubles: o.doubles && {
                step: o.doubles.step,
                points: [r].concat(o.doubles.points.map(i))
            },
            naf: o.naf && {
                wnd: o.naf.wnd,
                points: [r].concat(o.naf.points.map(i))
            }
        }, r
    }, u.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
    }, u.prototype.isInfinity = function() {
        return this.inf
    }, u.prototype.add = function(e) {
        if (this.inf) return e;
        if (e.inf) return this;
        if (this.eq(e)) return this.dbl();
        if (this.neg().eq(e) || 0 === this.x.cmp(e.x)) return this.curve.point(null, null);
        var t = this.y.redSub(e.y);
        0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
        var n = t.redSqr().redISub(this.x).redISub(e.x),
            r = t.redMul(this.x.redSub(n)).redISub(this.y);
        return this.curve.point(n, r)
    }, u.prototype.dbl = function() {
        if (this.inf) return this;
        var e = this.y.redAdd(this.y);
        if (0 === e.cmpn(0)) return this.curve.point(null, null);
        var t = this.curve.a,
            n = this.x.redSqr(),
            r = e.redInvm(),
            i = n.redAdd(n).redIAdd(n).redIAdd(t).redMul(r),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            s = i.redMul(this.x.redSub(o)).redISub(this.y);
        return this.curve.point(o, s)
    }, u.prototype.getX = function() {
        return this.x.fromRed()
    }, u.prototype.getY = function() {
        return this.y.fromRed()
    }, u.prototype.mul = function(e) {
        if (e = new i(e, 16), this.isInfinity()) return this;
        if (this._hasDoubles(e)) return this.curve._fixedNafMul(this, e);
        if (this.curve.endo) return this.curve._endoWnafMulAdd([this], [e]);
        else return this.curve._wnafMul(this, e)
    }, u.prototype.mulAdd = function(e, t, n) {
        var r = [this, t],
            i = [e, n];
        return this.curve.endo ? this.curve._endoWnafMulAdd(r, i) : this.curve._wnafMulAdd(1, r, i, 2)
    }, u.prototype.jmulAdd = function(e, t, n) {
        var r = [this, t],
            i = [e, n];
        return this.curve.endo ? this.curve._endoWnafMulAdd(r, i, !0) : this.curve._wnafMulAdd(1, r, i, 2, !0)
    }, u.prototype.eq = function(e) {
        return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
    }, u.prototype.neg = function(e) {
        if (this.inf) return this;
        var t = this.curve.point(this.x, this.y.redNeg());
        if (e && this.precomputed) {
            var n = this.precomputed,
                r = function(e) {
                    return e.neg()
                };
            t.precomputed = {
                naf: n.naf && {
                    wnd: n.naf.wnd,
                    points: n.naf.points.map(r)
                },
                doubles: n.doubles && {
                    step: n.doubles.step,
                    points: n.doubles.points.map(r)
                }
            }
        }
        return t
    }, u.prototype.toJ = function() {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
    }, o(d, s.BasePoint), c.prototype.jpoint = function(e, t, n) {
        return new d(this, e, t, n)
    }, d.prototype.toP = function() {
        if (this.isInfinity()) return this.curve.point(null, null);
        var e = this.z.redInvm(),
            t = e.redSqr(),
            n = this.x.redMul(t),
            r = this.y.redMul(t).redMul(e);
        return this.curve.point(n, r)
    }, d.prototype.neg = function() {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
    }, d.prototype.add = function(e) {
        if (this.isInfinity()) return e;
        if (e.isInfinity()) return this;
        var t = e.z.redSqr(),
            n = this.z.redSqr(),
            r = this.x.redMul(t),
            i = e.x.redMul(n),
            o = this.y.redMul(t.redMul(e.z)),
            s = e.y.redMul(n.redMul(this.z)),
            a = r.redSub(i),
            c = o.redSub(s);
        if (0 === a.cmpn(0)) return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var u = a.redSqr(),
            d = u.redMul(a),
            l = r.redMul(u),
            f = c.redSqr().redIAdd(d).redISub(l).redISub(l),
            p = c.redMul(l.redISub(f)).redISub(o.redMul(d)),
            h = this.z.redMul(e.z).redMul(a);
        return this.curve.jpoint(f, p, h)
    }, d.prototype.mixedAdd = function(e) {
        if (this.isInfinity()) return e.toJ();
        if (e.isInfinity()) return this;
        var t = this.z.redSqr(),
            n = this.x,
            r = e.x.redMul(t),
            i = this.y,
            o = e.y.redMul(t).redMul(this.z),
            s = n.redSub(r),
            a = i.redSub(o);
        if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var c = s.redSqr(),
            u = c.redMul(s),
            d = n.redMul(c),
            l = a.redSqr().redIAdd(u).redISub(d).redISub(d),
            f = a.redMul(d.redISub(l)).redISub(i.redMul(u)),
            p = this.z.redMul(s);
        return this.curve.jpoint(l, f, p)
    }, d.prototype.dblp = function(e) {
        if (0 === e || this.isInfinity()) return this;
        if (!e) return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
            var t, n = this;
            for (t = 0; t < e; t++) n = n.dbl();
            return n
        }
        var r = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            s = this.y,
            a = this.z,
            c = a.redSqr().redSqr(),
            u = s.redAdd(s);
        for (t = 0; t < e; t++) {
            var d = o.redSqr(),
                l = u.redSqr(),
                f = l.redSqr(),
                p = d.redAdd(d).redIAdd(d).redIAdd(r.redMul(c)),
                h = o.redMul(l),
                v = p.redSqr().redISub(h.redAdd(h)),
                g = h.redISub(v),
                b = p.redMul(g);
            b = b.redIAdd(b).redISub(f);
            var m = u.redMul(a);
            t + 1 < e && (c = c.redMul(f)), o = v, a = m, u = b
        }
        return this.curve.jpoint(o, u.redMul(i), a)
    }, d.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
    }, d.prototype._zeroDbl = function() {
        if (this.zOne) {
            var e, t, n, r = this.x.redSqr(),
                i = this.y.redSqr(),
                o = i.redSqr(),
                s = this.x.redAdd(i).redSqr().redISub(r).redISub(o);
            s = s.redIAdd(s);
            var a = r.redAdd(r).redIAdd(r),
                c = a.redSqr().redISub(s).redISub(s),
                u = o.redIAdd(o);
            u = (u = u.redIAdd(u)).redIAdd(u), e = c, t = a.redMul(s.redISub(c)).redISub(u), n = this.y.redAdd(this.y)
        } else {
            var d = this.x.redSqr(),
                l = this.y.redSqr(),
                f = l.redSqr(),
                p = this.x.redAdd(l).redSqr().redISub(d).redISub(f);
            p = p.redIAdd(p);
            var h = d.redAdd(d).redIAdd(d),
                v = h.redSqr(),
                g = f.redIAdd(f);
            g = (g = g.redIAdd(g)).redIAdd(g), e = v.redISub(p).redISub(p), t = h.redMul(p.redISub(e)).redISub(g), n = (n = this.y.redMul(this.z)).redIAdd(n)
        }
        return this.curve.jpoint(e, t, n)
    }, d.prototype._threeDbl = function() {
        if (this.zOne) {
            var e, t, n, r = this.x.redSqr(),
                i = this.y.redSqr(),
                o = i.redSqr(),
                s = this.x.redAdd(i).redSqr().redISub(r).redISub(o);
            s = s.redIAdd(s);
            var a = r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),
                c = a.redSqr().redISub(s).redISub(s);
            e = c;
            var u = o.redIAdd(o);
            u = (u = u.redIAdd(u)).redIAdd(u), t = a.redMul(s.redISub(c)).redISub(u), n = this.y.redAdd(this.y)
        } else {
            var d = this.z.redSqr(),
                l = this.y.redSqr(),
                f = this.x.redMul(l),
                p = this.x.redSub(d).redMul(this.x.redAdd(d));
            p = p.redAdd(p).redIAdd(p);
            var h = f.redIAdd(f),
                v = (h = h.redIAdd(h)).redAdd(h);
            e = p.redSqr().redISub(v), n = this.y.redAdd(this.z).redSqr().redISub(l).redISub(d);
            var g = l.redSqr();
            g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g), t = p.redMul(h.redISub(e)).redISub(g)
        }
        return this.curve.jpoint(e, t, n)
    }, d.prototype._dbl = function() {
        var e = this.curve.a,
            t = this.x,
            n = this.y,
            r = this.z,
            i = r.redSqr().redSqr(),
            o = t.redSqr(),
            s = n.redSqr(),
            a = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
            c = t.redAdd(t),
            u = (c = c.redIAdd(c)).redMul(s),
            d = a.redSqr().redISub(u.redAdd(u)),
            l = u.redISub(d),
            f = s.redSqr();
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var p = a.redMul(l).redISub(f),
            h = n.redAdd(n).redMul(r);
        return this.curve.jpoint(d, p, h)
    }, d.prototype.trpl = function() {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var e = this.x.redSqr(),
            t = this.y.redSqr(),
            n = this.z.redSqr(),
            r = t.redSqr(),
            i = e.redAdd(e).redIAdd(e),
            o = i.redSqr(),
            s = this.x.redAdd(t).redSqr().redISub(e).redISub(r),
            a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
            c = r.redIAdd(r);
        c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
        var u = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(c),
            d = t.redMul(u);
        d = (d = d.redIAdd(d)).redIAdd(d);
        var l = this.x.redMul(a).redISub(d);
        l = (l = l.redIAdd(l)).redIAdd(l);
        var f = this.y.redMul(u.redMul(c.redISub(u)).redISub(s.redMul(a)));
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var p = this.z.redAdd(s).redSqr().redISub(n).redISub(a);
        return this.curve.jpoint(l, f, p)
    }, d.prototype.mul = function(e, t) {
        return e = new i(e, t), this.curve._wnafMul(this, e)
    }, d.prototype.eq = function(e) {
        if ("affine" === e.type) return this.eq(e.toJ());
        if (this === e) return !0;
        var t = this.z.redSqr(),
            n = e.z.redSqr();
        if (0 !== this.x.redMul(n).redISub(e.x.redMul(t)).cmpn(0)) return !1;
        var r = t.redMul(this.z),
            i = n.redMul(e.z);
        return 0 === this.y.redMul(i).redISub(e.y.redMul(r)).cmpn(0)
    }, d.prototype.eqXToP = function(e) {
        var t = this.z.redSqr(),
            n = e.toRed(this.curve.red).redMul(t);
        if (0 === this.x.cmp(n)) return !0;
        for (var r = e.clone(), i = this.curve.redN.redMul(t);;) {
            if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
            if (n.redIAdd(i), 0 === this.x.cmp(n)) return !0
        }
    }, d.prototype.inspect = function() {
        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
    }, d.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    }
}