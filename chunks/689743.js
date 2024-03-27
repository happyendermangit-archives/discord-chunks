function(e, t, n) {
    "use strict";
    var r = n("814033"),
        i = n("689118"),
        a = n("806981"),
        o = n("685053");

    function s(e) {
        a.call(this, "mont", e), this.a = new r(e.a, 16).toRed(this.red), this.b = new r(e.b, 16).toRed(this.red), this.i4 = new r(4).toRed(this.red).redInvm(), this.two = new r(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
    }

    function u(e, t, n) {
        a.BasePoint.call(this, e, "projective"), null === t && null === n ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new r(t, 16), this.z = new r(n, 16), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)))
    }
    i(s, a), e.exports = s, s.prototype.validate = function(e) {
        var t = e.normalize().x,
            n = t.redSqr(),
            r = n.redMul(t).redAdd(n.redMul(this.a)).redAdd(t);
        return 0 === r.redSqrt().redSqr().cmp(r)
    }, i(u, a.BasePoint), s.prototype.decodePoint = function(e, t) {
        return this.point(o.toArray(e, t), 1)
    }, s.prototype.point = function(e, t) {
        return new u(this, e, t)
    }, s.prototype.pointFromJSON = function(e) {
        return u.fromJSON(this, e)
    }, u.prototype.precompute = function() {}, u.prototype._encode = function() {
        return this.getX().toArray("be", this.curve.p.byteLength())
    }, u.fromJSON = function(e, t) {
        return new u(e, t[0], t[1] || e.one)
    }, u.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }, u.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    }, u.prototype.dbl = function() {
        var e = this.x.redAdd(this.z).redSqr(),
            t = this.x.redSub(this.z).redSqr(),
            n = e.redSub(t),
            r = e.redMul(t),
            i = n.redMul(t.redAdd(this.curve.a24.redMul(n)));
        return this.curve.point(r, i)
    }, u.prototype.add = function() {
        throw Error("Not supported on Montgomery curve")
    }, u.prototype.diffAdd = function(e, t) {
        var n = this.x.redAdd(this.z),
            r = this.x.redSub(this.z),
            i = e.x.redAdd(e.z),
            a = e.x.redSub(e.z).redMul(n),
            o = i.redMul(r),
            s = t.z.redMul(a.redAdd(o).redSqr()),
            u = t.x.redMul(a.redISub(o).redSqr());
        return this.curve.point(s, u)
    }, u.prototype.mul = function(e) {
        for (var t = e.clone(), n = this, r = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.iushrn(1)) i.push(t.andln(1));
        for (var a = i.length - 1; a >= 0; a--) 0 === i[a] ? (n = n.diffAdd(r, this), r = r.dbl()) : (r = n.diffAdd(r, this), n = n.dbl());
        return r
    }, u.prototype.mulAdd = function() {
        throw Error("Not supported on Montgomery curve")
    }, u.prototype.jumlAdd = function() {
        throw Error("Not supported on Montgomery curve")
    }, u.prototype.eq = function(e) {
        return 0 === this.getX().cmp(e.getX())
    }, u.prototype.normalize = function() {
        return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
    }, u.prototype.getX = function() {
        return this.normalize(), this.x.fromRed()
    }
}