function(e, t, n) {
    "use strict";
    var r = n("685053"),
        i = n("814033"),
        a = n("689118"),
        o = n("806981"),
        s = r.assert;

    function u(e) {
        this.twisted = (0 | e.a) != 1, this.mOneA = this.twisted && (0 | e.a) == -1, this.extended = this.mOneA, o.call(this, "edwards", e), this.a = new i(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new i(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new i(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), s(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = (0 | e.c) == 1
    }

    function c(e, t, n, r, a) {
        o.BasePoint.call(this, e, "projective"), null === t && null === n && null === r ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new i(t, 16), this.y = new i(n, 16), this.z = r ? new i(r, 16) : this.curve.one, this.t = a && new i(a, 16), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), !this.zOne && (this.t = this.t.redMul(this.z.redInvm()))))
    }
    a(u, o), e.exports = u, u.prototype._mulA = function(e) {
        return this.mOneA ? e.redNeg() : this.a.redMul(e)
    }, u.prototype._mulC = function(e) {
        return this.oneC ? e : this.c.redMul(e)
    }, u.prototype.jpoint = function(e, t, n, r) {
        return this.point(e, t, n, r)
    }, u.prototype.pointFromX = function(e, t) {
        !(e = new i(e, 16)).red && (e = e.toRed(this.red));
        var n = e.redSqr(),
            r = this.c2.redSub(this.a.redMul(n)),
            a = this.one.redSub(this.c2.redMul(this.d).redMul(n)),
            o = r.redMul(a.redInvm()),
            s = o.redSqrt();
        if (0 !== s.redSqr().redSub(o).cmp(this.zero)) throw Error("invalid point");
        var u = s.fromRed().isOdd();
        return (t && !u || !t && u) && (s = s.redNeg()), this.point(e, s)
    }, u.prototype.pointFromY = function(e, t) {
        !(e = new i(e, 16)).red && (e = e.toRed(this.red));
        var n = e.redSqr(),
            r = n.redSub(this.c2),
            a = n.redMul(this.d).redMul(this.c2).redSub(this.a),
            o = r.redMul(a.redInvm());
        if (0 === o.cmp(this.zero)) {
            if (!t) return this.point(this.zero, e);
            throw Error("invalid point")
        }
        var s = o.redSqrt();
        if (0 !== s.redSqr().redSub(o).cmp(this.zero)) throw Error("invalid point");
        return s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e)
    }, u.prototype.validate = function(e) {
        if (e.isInfinity()) return !0;
        e.normalize();
        var t = e.x.redSqr(),
            n = e.y.redSqr(),
            r = t.redMul(this.a).redAdd(n),
            i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(n)));
        return 0 === r.cmp(i)
    }, a(c, o.BasePoint), u.prototype.pointFromJSON = function(e) {
        return c.fromJSON(this, e)
    }, u.prototype.point = function(e, t, n, r) {
        return new c(this, e, t, n, r)
    }, c.fromJSON = function(e, t) {
        return new c(e, t[0], t[1], t[2])
    }, c.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }, c.prototype.isInfinity = function() {
        return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
    }, c.prototype._extDbl = function() {
        var e = this.x.redSqr(),
            t = this.y.redSqr(),
            n = this.z.redSqr();
        n = n.redIAdd(n);
        var r = this.curve._mulA(e),
            i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
            a = r.redAdd(t),
            o = a.redSub(n),
            s = r.redSub(t),
            u = i.redMul(o),
            c = a.redMul(s),
            l = i.redMul(s),
            d = o.redMul(a);
        return this.curve.point(u, c, d, l)
    }, c.prototype._projDbl = function() {
        var e, t, n, r, i, a, o = this.x.redAdd(this.y).redSqr(),
            s = this.x.redSqr(),
            u = this.y.redSqr();
        if (this.curve.twisted) {
            var c = (r = this.curve._mulA(s)).redAdd(u);
            this.zOne ? (e = o.redSub(s).redSub(u).redMul(c.redSub(this.curve.two)), t = c.redMul(r.redSub(u)), n = c.redSqr().redSub(c).redSub(c)) : (i = this.z.redSqr(), a = c.redSub(i).redISub(i), e = o.redSub(s).redISub(u).redMul(a), t = c.redMul(r.redSub(u)), n = c.redMul(a))
        } else r = s.redAdd(u), i = this.curve._mulC(this.z).redSqr(), a = r.redSub(i).redSub(i), e = this.curve._mulC(o.redISub(r)).redMul(a), t = this.curve._mulC(r).redMul(s.redISub(u)), n = r.redMul(a);
        return this.curve.point(e, t, n)
    }, c.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
    }, c.prototype._extAdd = function(e) {
        var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            n = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            r = this.t.redMul(this.curve.dd).redMul(e.t),
            i = this.z.redMul(e.z.redAdd(e.z)),
            a = n.redSub(t),
            o = i.redSub(r),
            s = i.redAdd(r),
            u = n.redAdd(t),
            c = a.redMul(o),
            l = s.redMul(u),
            d = a.redMul(u),
            f = o.redMul(s);
        return this.curve.point(c, l, f, d)
    }, c.prototype._projAdd = function(e) {
        var t, n, r = this.z.redMul(e.z),
            i = r.redSqr(),
            a = this.x.redMul(e.x),
            o = this.y.redMul(e.y),
            s = this.curve.d.redMul(a).redMul(o),
            u = i.redSub(s),
            c = i.redAdd(s),
            l = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(a).redISub(o),
            d = r.redMul(u).redMul(l);
        return this.curve.twisted ? (t = r.redMul(c).redMul(o.redSub(this.curve._mulA(a))), n = u.redMul(c)) : (t = r.redMul(c).redMul(o.redSub(a)), n = this.curve._mulC(u).redMul(c)), this.curve.point(d, t, n)
    }, c.prototype.add = function(e) {
        return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
    }, c.prototype.mul = function(e) {
        return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
    }, c.prototype.mulAdd = function(e, t, n) {
        return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !1)
    }, c.prototype.jmulAdd = function(e, t, n) {
        return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !0)
    }, c.prototype.normalize = function() {
        if (this.zOne) return this;
        var e = this.z.redInvm();
        return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this
    }, c.prototype.neg = function() {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
    }, c.prototype.getX = function() {
        return this.normalize(), this.x.fromRed()
    }, c.prototype.getY = function() {
        return this.normalize(), this.y.fromRed()
    }, c.prototype.eq = function(e) {
        return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
    }, c.prototype.eqXToP = function(e) {
        var t = e.toRed(this.curve.red).redMul(this.z);
        if (0 === this.x.cmp(t)) return !0;
        for (var n = e.clone(), r = this.curve.redN.redMul(this.z);;) {
            if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
            if (t.redIAdd(r), 0 === this.x.cmp(t)) return !0
        }
    }, c.prototype.toP = c.prototype.normalize, c.prototype.mixedAdd = c.prototype.add
}