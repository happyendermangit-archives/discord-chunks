function(e, t, n) {
    "use strict";
    n("70102"), n("424973");
    var r = n("839309"),
        i = n("599235"),
        o = n("275201"),
        s = n("550511");

    function a(e) {
        o.call(this, "mont", e), this.a = new r(e.a, 16).toRed(this.red), this.b = new r(e.b, 16).toRed(this.red), this.i4 = new r(4).toRed(this.red).redInvm(), this.two = new r(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
    }

    function c(e, t, n) {
        o.BasePoint.call(this, e, "projective"), null === t && null === n ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new r(t, 16), this.z = new r(n, 16), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)))
    }
    i(a, o), e.exports = a, a.prototype.validate = function(e) {
        var t = e.normalize().x,
            n = t.redSqr(),
            r = n.redMul(t).redAdd(n.redMul(this.a)).redAdd(t);
        return 0 === r.redSqrt().redSqr().cmp(r)
    }, i(c, o.BasePoint), a.prototype.decodePoint = function(e, t) {
        return this.point(s.toArray(e, t), 1)
    }, a.prototype.point = function(e, t) {
        return new c(this, e, t)
    }, a.prototype.pointFromJSON = function(e) {
        return c.fromJSON(this, e)
    }, c.prototype.precompute = function() {}, c.prototype._encode = function() {
        return this.getX().toArray("be", this.curve.p.byteLength())
    }, c.fromJSON = function(e, t) {
        return new c(e, t[0], t[1] || e.one)
    }, c.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }, c.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    }, c.prototype.dbl = function() {
        var e = this.x.redAdd(this.z).redSqr(),
            t = this.x.redSub(this.z).redSqr(),
            n = e.redSub(t),
            r = e.redMul(t),
            i = n.redMul(t.redAdd(this.curve.a24.redMul(n)));
        return this.curve.point(r, i)
    }, c.prototype.add = function() {
        throw Error("Not supported on Montgomery curve")
    }, c.prototype.diffAdd = function(e, t) {
        var n = this.x.redAdd(this.z),
            r = this.x.redSub(this.z),
            i = e.x.redAdd(e.z),
            o = e.x.redSub(e.z).redMul(n),
            s = i.redMul(r),
            a = t.z.redMul(o.redAdd(s).redSqr()),
            c = t.x.redMul(o.redISub(s).redSqr());
        return this.curve.point(a, c)
    }, c.prototype.mul = function(e) {
        for (var t = e.clone(), n = this, r = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.iushrn(1)) i.push(t.andln(1));
        for (var o = i.length - 1; o >= 0; o--) 0 === i[o] ? (n = n.diffAdd(r, this), r = r.dbl()) : (r = n.diffAdd(r, this), n = n.dbl());
        return r
    }, c.prototype.mulAdd = function() {
        throw Error("Not supported on Montgomery curve")
    }, c.prototype.jumlAdd = function() {
        throw Error("Not supported on Montgomery curve")
    }, c.prototype.eq = function(e) {
        return 0 === this.getX().cmp(e.getX())
    }, c.prototype.normalize = function() {
        return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
    }, c.prototype.getX = function() {
        return this.normalize(), this.x.fromRed()
    }
}