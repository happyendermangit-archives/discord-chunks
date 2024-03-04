function(e, t, n) {
    "use strict";
    n("70102");
    var r = n("550511"),
        i = n("839309"),
        o = n("599235"),
        s = n("275201"),
        a = r.assert;

    function c(e) {
        this.twisted = (0 | e.a) != 1, this.mOneA = this.twisted && (0 | e.a) == -1, this.extended = this.mOneA, s.call(this, "edwards", e), this.a = new i(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new i(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new i(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), a(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = (0 | e.c) == 1
    }

    function u(e, t, n, r, o) {
        s.BasePoint.call(this, e, "projective"), null === t && null === n && null === r ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new i(t, 16), this.y = new i(n, 16), this.z = r ? new i(r, 16) : this.curve.one, this.t = o && new i(o, 16), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), !this.zOne && (this.t = this.t.redMul(this.z.redInvm()))))
    }
    o(c, s), e.exports = c, c.prototype._mulA = function(e) {
        return this.mOneA ? e.redNeg() : this.a.redMul(e)
    }, c.prototype._mulC = function(e) {
        return this.oneC ? e : this.c.redMul(e)
    }, c.prototype.jpoint = function(e, t, n, r) {
        return this.point(e, t, n, r)
    }, c.prototype.pointFromX = function(e, t) {
        !(e = new i(e, 16)).red && (e = e.toRed(this.red));
        var n = e.redSqr(),
            r = this.c2.redSub(this.a.redMul(n)),
            o = this.one.redSub(this.c2.redMul(this.d).redMul(n)),
            s = r.redMul(o.redInvm()),
            a = s.redSqrt();
        if (0 !== a.redSqr().redSub(s).cmp(this.zero)) throw Error("invalid point");
        var c = a.fromRed().isOdd();
        return (t && !c || !t && c) && (a = a.redNeg()), this.point(e, a)
    }, c.prototype.pointFromY = function(e, t) {
        !(e = new i(e, 16)).red && (e = e.toRed(this.red));
        var n = e.redSqr(),
            r = n.redSub(this.c2),
            o = n.redMul(this.d).redMul(this.c2).redSub(this.a),
            s = r.redMul(o.redInvm());
        if (0 === s.cmp(this.zero)) {
            if (!t) return this.point(this.zero, e);
            throw Error("invalid point")
        }
        var a = s.redSqrt();
        if (0 !== a.redSqr().redSub(s).cmp(this.zero)) throw Error("invalid point");
        return a.fromRed().isOdd() !== t && (a = a.redNeg()), this.point(a, e)
    }, c.prototype.validate = function(e) {
        if (e.isInfinity()) return !0;
        e.normalize();
        var t = e.x.redSqr(),
            n = e.y.redSqr(),
            r = t.redMul(this.a).redAdd(n),
            i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(n)));
        return 0 === r.cmp(i)
    }, o(u, s.BasePoint), c.prototype.pointFromJSON = function(e) {
        return u.fromJSON(this, e)
    }, c.prototype.point = function(e, t, n, r) {
        return new u(this, e, t, n, r)
    }, u.fromJSON = function(e, t) {
        return new u(e, t[0], t[1], t[2])
    }, u.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }, u.prototype.isInfinity = function() {
        return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
    }, u.prototype._extDbl = function() {
        var e = this.x.redSqr(),
            t = this.y.redSqr(),
            n = this.z.redSqr();
        n = n.redIAdd(n);
        var r = this.curve._mulA(e),
            i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
            o = r.redAdd(t),
            s = o.redSub(n),
            a = r.redSub(t),
            c = i.redMul(s),
            u = o.redMul(a),
            d = i.redMul(a),
            l = s.redMul(o);
        return this.curve.point(c, u, l, d)
    }, u.prototype._projDbl = function() {
        var e, t, n, r, i, o, s = this.x.redAdd(this.y).redSqr(),
            a = this.x.redSqr(),
            c = this.y.redSqr();
        if (this.curve.twisted) {
            var u = (r = this.curve._mulA(a)).redAdd(c);
            this.zOne ? (e = s.redSub(a).redSub(c).redMul(u.redSub(this.curve.two)), t = u.redMul(r.redSub(c)), n = u.redSqr().redSub(u).redSub(u)) : (i = this.z.redSqr(), o = u.redSub(i).redISub(i), e = s.redSub(a).redISub(c).redMul(o), t = u.redMul(r.redSub(c)), n = u.redMul(o))
        } else r = a.redAdd(c), i = this.curve._mulC(this.z).redSqr(), o = r.redSub(i).redSub(i), e = this.curve._mulC(s.redISub(r)).redMul(o), t = this.curve._mulC(r).redMul(a.redISub(c)), n = r.redMul(o);
        return this.curve.point(e, t, n)
    }, u.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
    }, u.prototype._extAdd = function(e) {
        var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            n = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            r = this.t.redMul(this.curve.dd).redMul(e.t),
            i = this.z.redMul(e.z.redAdd(e.z)),
            o = n.redSub(t),
            s = i.redSub(r),
            a = i.redAdd(r),
            c = n.redAdd(t),
            u = o.redMul(s),
            d = a.redMul(c),
            l = o.redMul(c),
            f = s.redMul(a);
        return this.curve.point(u, d, f, l)
    }, u.prototype._projAdd = function(e) {
        var t, n, r = this.z.redMul(e.z),
            i = r.redSqr(),
            o = this.x.redMul(e.x),
            s = this.y.redMul(e.y),
            a = this.curve.d.redMul(o).redMul(s),
            c = i.redSub(a),
            u = i.redAdd(a),
            d = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(s),
            l = r.redMul(c).redMul(d);
        return this.curve.twisted ? (t = r.redMul(u).redMul(s.redSub(this.curve._mulA(o))), n = c.redMul(u)) : (t = r.redMul(u).redMul(s.redSub(o)), n = this.curve._mulC(c).redMul(u)), this.curve.point(l, t, n)
    }, u.prototype.add = function(e) {
        return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
    }, u.prototype.mul = function(e) {
        return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
    }, u.prototype.mulAdd = function(e, t, n) {
        return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !1)
    }, u.prototype.jmulAdd = function(e, t, n) {
        return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !0)
    }, u.prototype.normalize = function() {
        if (this.zOne) return this;
        var e = this.z.redInvm();
        return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this
    }, u.prototype.neg = function() {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
    }, u.prototype.getX = function() {
        return this.normalize(), this.x.fromRed()
    }, u.prototype.getY = function() {
        return this.normalize(), this.y.fromRed()
    }, u.prototype.eq = function(e) {
        return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
    }, u.prototype.eqXToP = function(e) {
        var t = e.toRed(this.curve.red).redMul(this.z);
        if (0 === this.x.cmp(t)) return !0;
        for (var n = e.clone(), r = this.curve.redN.redMul(this.z);;) {
            if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
            if (t.redIAdd(r), 0 === this.x.cmp(t)) return !0
        }
    }, u.prototype.toP = u.prototype.normalize, u.prototype.mixedAdd = u.prototype.add
}