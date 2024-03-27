function(e, t, n) {
    "use strict";
    var r = n("685053"),
        i = n("814033"),
        a = n("689118"),
        o = n("806981"),
        s = r.assert;

    function u(e) {
        o.call(this, "short", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ]
    }

    function c(e, t, n, r) {
        o.BasePoint.call(this, e, "affine"), null === t && null === n ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(t, 16), this.y = new i(n, 16), r && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
    }

    function l(e, t, n, r) {
        o.BasePoint.call(this, e, "jacobian"), null === t && null === n && null === r ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(t, 16), this.y = new i(n, 16), this.z = new i(r, 16)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
    }
    a(u, o), e.exports = u, u.prototype._getEndomorphism = function(e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (e.beta) t = new i(e.beta, 16).toRed(this.red);
            else {
                var t, n, r, a = this._getEndoRoots(this.p);
                t = (t = 0 > a[0].cmp(a[1]) ? a[0] : a[1]).toRed(this.red)
            }
            if (e.lambda) n = new i(e.lambda, 16);
            else {
                var o = this._getEndoRoots(this.n);
                0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t)) ? n = o[0] : (n = o[1], s(0 === this.g.mul(n).x.cmp(this.g.x.redMul(t))))
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
    }, u.prototype._getEndoRoots = function(e) {
        var t = e === this.p ? this.red : i.mont(e),
            n = new i(2).toRed(t).redInvm(),
            r = n.redNeg(),
            a = new i(3).toRed(t).redNeg().redSqrt().redMul(n);
        return [r.redAdd(a).fromRed(), r.redSub(a).fromRed()]
    }, u.prototype._getEndoBasis = function(e) {
        for (var t, n, r, a, o, s, u, c, l, d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), f = e, p = this.n.clone(), h = new i(1), m = new i(0), g = new i(0), _ = new i(1), b = 0; 0 !== f.cmpn(0);) {
            var v = p.div(f);
            c = p.sub(v.mul(f)), l = g.sub(v.mul(h));
            var y = _.sub(v.mul(m));
            if (!r && 0 > c.cmp(d)) t = u.neg(), n = h, r = c.neg(), a = l;
            else if (r && 2 == ++b) break;
            u = c, p = f, f = c, g = h, h = l, _ = m, m = y
        }
        o = c.neg(), s = l;
        var E = r.sqr().add(a.sqr());
        return o.sqr().add(s.sqr()).cmp(E) >= 0 && (o = t, s = n), r.negative && (r = r.neg(), a = a.neg()), o.negative && (o = o.neg(), s = s.neg()), [{
            a: r,
            b: a
        }, {
            a: o,
            b: s
        }]
    }, u.prototype._endoSplit = function(e) {
        var t = this.endo.basis,
            n = t[0],
            r = t[1],
            i = r.b.mul(e).divRound(this.n),
            a = n.b.neg().mul(e).divRound(this.n),
            o = i.mul(n.a),
            s = a.mul(r.a),
            u = i.mul(n.b),
            c = a.mul(r.b);
        return {
            k1: e.sub(o).sub(s),
            k2: u.add(c).neg()
        }
    }, u.prototype.pointFromX = function(e, t) {
        !(e = new i(e, 16)).red && (e = e.toRed(this.red));
        var n = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
            r = n.redSqrt();
        if (0 !== r.redSqr().redSub(n).cmp(this.zero)) throw Error("invalid point");
        var a = r.fromRed().isOdd();
        return (t && !a || !t && a) && (r = r.redNeg()), this.point(e, r)
    }, u.prototype.validate = function(e) {
        if (e.inf) return !0;
        var t = e.x,
            n = e.y,
            r = this.a.redMul(t),
            i = t.redSqr().redMul(t).redIAdd(r).redIAdd(this.b);
        return 0 === n.redSqr().redISub(i).cmpn(0)
    }, u.prototype._endoWnafMulAdd = function(e, t, n) {
        for (var r = this._endoWnafT1, i = this._endoWnafT2, a = 0; a < e.length; a++) {
            var o = this._endoSplit(t[a]),
                s = e[a],
                u = s._getBeta();
            o.k1.negative && (o.k1.ineg(), s = s.neg(!0)), o.k2.negative && (o.k2.ineg(), u = u.neg(!0)), r[2 * a] = s, r[2 * a + 1] = u, i[2 * a] = o.k1, i[2 * a + 1] = o.k2
        }
        for (var c = this._wnafMulAdd(1, r, i, 2 * a, n), l = 0; l < 2 * a; l++) r[l] = null, i[l] = null;
        return c
    }, a(c, o.BasePoint), u.prototype.point = function(e, t, n) {
        return new c(this, e, t, n)
    }, u.prototype.pointFromJSON = function(e, t) {
        return c.fromJSON(this, e, t)
    }, c.prototype._getBeta = function() {
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
    }, c.prototype.toJSON = function() {
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
    }, c.fromJSON = function(e, t, n) {
        "string" == typeof t && (t = JSON.parse(t));
        var r = e.point(t[0], t[1], n);
        if (!t[2]) return r;

        function i(t) {
            return e.point(t[0], t[1], n)
        }
        var a = t[2];
        return r.precomputed = {
            beta: null,
            doubles: a.doubles && {
                step: a.doubles.step,
                points: [r].concat(a.doubles.points.map(i))
            },
            naf: a.naf && {
                wnd: a.naf.wnd,
                points: [r].concat(a.naf.points.map(i))
            }
        }, r
    }, c.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
    }, c.prototype.isInfinity = function() {
        return this.inf
    }, c.prototype.add = function(e) {
        if (this.inf) return e;
        if (e.inf) return this;
        if (this.eq(e)) return this.dbl();
        if (this.neg().eq(e) || 0 === this.x.cmp(e.x)) return this.curve.point(null, null);
        var t = this.y.redSub(e.y);
        0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
        var n = t.redSqr().redISub(this.x).redISub(e.x),
            r = t.redMul(this.x.redSub(n)).redISub(this.y);
        return this.curve.point(n, r)
    }, c.prototype.dbl = function() {
        if (this.inf) return this;
        var e = this.y.redAdd(this.y);
        if (0 === e.cmpn(0)) return this.curve.point(null, null);
        var t = this.curve.a,
            n = this.x.redSqr(),
            r = e.redInvm(),
            i = n.redAdd(n).redIAdd(n).redIAdd(t).redMul(r),
            a = i.redSqr().redISub(this.x.redAdd(this.x)),
            o = i.redMul(this.x.redSub(a)).redISub(this.y);
        return this.curve.point(a, o)
    }, c.prototype.getX = function() {
        return this.x.fromRed()
    }, c.prototype.getY = function() {
        return this.y.fromRed()
    }, c.prototype.mul = function(e) {
        if (e = new i(e, 16), this.isInfinity()) return this;
        if (this._hasDoubles(e)) return this.curve._fixedNafMul(this, e);
        if (this.curve.endo) return this.curve._endoWnafMulAdd([this], [e]);
        else return this.curve._wnafMul(this, e)
    }, c.prototype.mulAdd = function(e, t, n) {
        var r = [this, t],
            i = [e, n];
        return this.curve.endo ? this.curve._endoWnafMulAdd(r, i) : this.curve._wnafMulAdd(1, r, i, 2)
    }, c.prototype.jmulAdd = function(e, t, n) {
        var r = [this, t],
            i = [e, n];
        return this.curve.endo ? this.curve._endoWnafMulAdd(r, i, !0) : this.curve._wnafMulAdd(1, r, i, 2, !0)
    }, c.prototype.eq = function(e) {
        return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
    }, c.prototype.neg = function(e) {
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
    }, c.prototype.toJ = function() {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
    }, a(l, o.BasePoint), u.prototype.jpoint = function(e, t, n) {
        return new l(this, e, t, n)
    }, l.prototype.toP = function() {
        if (this.isInfinity()) return this.curve.point(null, null);
        var e = this.z.redInvm(),
            t = e.redSqr(),
            n = this.x.redMul(t),
            r = this.y.redMul(t).redMul(e);
        return this.curve.point(n, r)
    }, l.prototype.neg = function() {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
    }, l.prototype.add = function(e) {
        if (this.isInfinity()) return e;
        if (e.isInfinity()) return this;
        var t = e.z.redSqr(),
            n = this.z.redSqr(),
            r = this.x.redMul(t),
            i = e.x.redMul(n),
            a = this.y.redMul(t.redMul(e.z)),
            o = e.y.redMul(n.redMul(this.z)),
            s = r.redSub(i),
            u = a.redSub(o);
        if (0 === s.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var c = s.redSqr(),
            l = c.redMul(s),
            d = r.redMul(c),
            f = u.redSqr().redIAdd(l).redISub(d).redISub(d),
            p = u.redMul(d.redISub(f)).redISub(a.redMul(l)),
            h = this.z.redMul(e.z).redMul(s);
        return this.curve.jpoint(f, p, h)
    }, l.prototype.mixedAdd = function(e) {
        if (this.isInfinity()) return e.toJ();
        if (e.isInfinity()) return this;
        var t = this.z.redSqr(),
            n = this.x,
            r = e.x.redMul(t),
            i = this.y,
            a = e.y.redMul(t).redMul(this.z),
            o = n.redSub(r),
            s = i.redSub(a);
        if (0 === o.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var u = o.redSqr(),
            c = u.redMul(o),
            l = n.redMul(u),
            d = s.redSqr().redIAdd(c).redISub(l).redISub(l),
            f = s.redMul(l.redISub(d)).redISub(i.redMul(c)),
            p = this.z.redMul(o);
        return this.curve.jpoint(d, f, p)
    }, l.prototype.dblp = function(e) {
        if (0 === e || this.isInfinity()) return this;
        if (!e) return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
            var t, n = this;
            for (t = 0; t < e; t++) n = n.dbl();
            return n
        }
        var r = this.curve.a,
            i = this.curve.tinv,
            a = this.x,
            o = this.y,
            s = this.z,
            u = s.redSqr().redSqr(),
            c = o.redAdd(o);
        for (t = 0; t < e; t++) {
            var l = a.redSqr(),
                d = c.redSqr(),
                f = d.redSqr(),
                p = l.redAdd(l).redIAdd(l).redIAdd(r.redMul(u)),
                h = a.redMul(d),
                m = p.redSqr().redISub(h.redAdd(h)),
                g = h.redISub(m),
                _ = p.redMul(g);
            _ = _.redIAdd(_).redISub(f);
            var b = c.redMul(s);
            t + 1 < e && (u = u.redMul(f)), a = m, s = b, c = _
        }
        return this.curve.jpoint(a, c.redMul(i), s)
    }, l.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
    }, l.prototype._zeroDbl = function() {
        if (this.zOne) {
            var e, t, n, r = this.x.redSqr(),
                i = this.y.redSqr(),
                a = i.redSqr(),
                o = this.x.redAdd(i).redSqr().redISub(r).redISub(a);
            o = o.redIAdd(o);
            var s = r.redAdd(r).redIAdd(r),
                u = s.redSqr().redISub(o).redISub(o),
                c = a.redIAdd(a);
            c = (c = c.redIAdd(c)).redIAdd(c), e = u, t = s.redMul(o.redISub(u)).redISub(c), n = this.y.redAdd(this.y)
        } else {
            var l = this.x.redSqr(),
                d = this.y.redSqr(),
                f = d.redSqr(),
                p = this.x.redAdd(d).redSqr().redISub(l).redISub(f);
            p = p.redIAdd(p);
            var h = l.redAdd(l).redIAdd(l),
                m = h.redSqr(),
                g = f.redIAdd(f);
            g = (g = g.redIAdd(g)).redIAdd(g), e = m.redISub(p).redISub(p), t = h.redMul(p.redISub(e)).redISub(g), n = (n = this.y.redMul(this.z)).redIAdd(n)
        }
        return this.curve.jpoint(e, t, n)
    }, l.prototype._threeDbl = function() {
        if (this.zOne) {
            var e, t, n, r = this.x.redSqr(),
                i = this.y.redSqr(),
                a = i.redSqr(),
                o = this.x.redAdd(i).redSqr().redISub(r).redISub(a);
            o = o.redIAdd(o);
            var s = r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),
                u = s.redSqr().redISub(o).redISub(o);
            e = u;
            var c = a.redIAdd(a);
            c = (c = c.redIAdd(c)).redIAdd(c), t = s.redMul(o.redISub(u)).redISub(c), n = this.y.redAdd(this.y)
        } else {
            var l = this.z.redSqr(),
                d = this.y.redSqr(),
                f = this.x.redMul(d),
                p = this.x.redSub(l).redMul(this.x.redAdd(l));
            p = p.redAdd(p).redIAdd(p);
            var h = f.redIAdd(f),
                m = (h = h.redIAdd(h)).redAdd(h);
            e = p.redSqr().redISub(m), n = this.y.redAdd(this.z).redSqr().redISub(d).redISub(l);
            var g = d.redSqr();
            g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g), t = p.redMul(h.redISub(e)).redISub(g)
        }
        return this.curve.jpoint(e, t, n)
    }, l.prototype._dbl = function() {
        var e = this.curve.a,
            t = this.x,
            n = this.y,
            r = this.z,
            i = r.redSqr().redSqr(),
            a = t.redSqr(),
            o = n.redSqr(),
            s = a.redAdd(a).redIAdd(a).redIAdd(e.redMul(i)),
            u = t.redAdd(t),
            c = (u = u.redIAdd(u)).redMul(o),
            l = s.redSqr().redISub(c.redAdd(c)),
            d = c.redISub(l),
            f = o.redSqr();
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var p = s.redMul(d).redISub(f),
            h = n.redAdd(n).redMul(r);
        return this.curve.jpoint(l, p, h)
    }, l.prototype.trpl = function() {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var e = this.x.redSqr(),
            t = this.y.redSqr(),
            n = this.z.redSqr(),
            r = t.redSqr(),
            i = e.redAdd(e).redIAdd(e),
            a = i.redSqr(),
            o = this.x.redAdd(t).redSqr().redISub(e).redISub(r),
            s = (o = (o = (o = o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(a)).redSqr(),
            u = r.redIAdd(r);
        u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
        var c = i.redIAdd(o).redSqr().redISub(a).redISub(s).redISub(u),
            l = t.redMul(c);
        l = (l = l.redIAdd(l)).redIAdd(l);
        var d = this.x.redMul(s).redISub(l);
        d = (d = d.redIAdd(d)).redIAdd(d);
        var f = this.y.redMul(c.redMul(u.redISub(c)).redISub(o.redMul(s)));
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var p = this.z.redAdd(o).redSqr().redISub(n).redISub(s);
        return this.curve.jpoint(d, f, p)
    }, l.prototype.mul = function(e, t) {
        return e = new i(e, t), this.curve._wnafMul(this, e)
    }, l.prototype.eq = function(e) {
        if ("affine" === e.type) return this.eq(e.toJ());
        if (this === e) return !0;
        var t = this.z.redSqr(),
            n = e.z.redSqr();
        if (0 !== this.x.redMul(n).redISub(e.x.redMul(t)).cmpn(0)) return !1;
        var r = t.redMul(this.z),
            i = n.redMul(e.z);
        return 0 === this.y.redMul(i).redISub(e.y.redMul(r)).cmpn(0)
    }, l.prototype.eqXToP = function(e) {
        var t = this.z.redSqr(),
            n = e.toRed(this.curve.red).redMul(t);
        if (0 === this.x.cmp(n)) return !0;
        for (var r = e.clone(), i = this.curve.redN.redMul(t);;) {
            if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
            if (n.redIAdd(i), 0 === this.x.cmp(n)) return !0
        }
    }, l.prototype.inspect = function() {
        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
    }, l.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    }
}