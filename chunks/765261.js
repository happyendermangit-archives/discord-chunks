function(t, e, s) {
    "use strict";
    s("70102"), s("424973");
    var r = s("839309"),
        i = s("599235"),
        n = s("275201"),
        c = s("550511");

    function o(t) {
        n.call(this, "mont", t), this.a = new r(t.a, 16).toRed(this.red), this.b = new r(t.b, 16).toRed(this.red), this.i4 = new r(4).toRed(this.red).redInvm(), this.two = new r(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
    }

    function f(t, e, s) {
        n.BasePoint.call(this, t, "projective"), null === e && null === s ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new r(e, 16), this.z = new r(s, 16), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)))
    }
    i(o, n), t.exports = o, o.prototype.validate = function(t) {
        var e = t.normalize().x,
            s = e.redSqr(),
            r = s.redMul(e).redAdd(s.redMul(this.a)).redAdd(e);
        return 0 === r.redSqrt().redSqr().cmp(r)
    }, i(f, n.BasePoint), o.prototype.decodePoint = function(t, e) {
        return this.point(c.toArray(t, e), 1)
    }, o.prototype.point = function(t, e) {
        return new f(this, t, e)
    }, o.prototype.pointFromJSON = function(t) {
        return f.fromJSON(this, t)
    }, f.prototype.precompute = function() {}, f.prototype._encode = function() {
        return this.getX().toArray("be", this.curve.p.byteLength())
    }, f.fromJSON = function(t, e) {
        return new f(t, e[0], e[1] || t.one)
    }, f.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }, f.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    }, f.prototype.dbl = function() {
        var t = this.x.redAdd(this.z).redSqr(),
            e = this.x.redSub(this.z).redSqr(),
            s = t.redSub(e),
            r = t.redMul(e),
            i = s.redMul(e.redAdd(this.curve.a24.redMul(s)));
        return this.curve.point(r, i)
    }, f.prototype.add = function() {
        throw Error("Not supported on Montgomery curve")
    }, f.prototype.diffAdd = function(t, e) {
        var s = this.x.redAdd(this.z),
            r = this.x.redSub(this.z),
            i = t.x.redAdd(t.z),
            n = t.x.redSub(t.z).redMul(s),
            c = i.redMul(r),
            o = e.z.redMul(n.redAdd(c).redSqr()),
            f = e.x.redMul(n.redISub(c).redSqr());
        return this.curve.point(o, f)
    }, f.prototype.mul = function(t) {
        for (var e = t.clone(), s = this, r = this.curve.point(null, null), i = []; 0 !== e.cmpn(0); e.iushrn(1)) i.push(e.andln(1));
        for (var n = i.length - 1; n >= 0; n--) 0 === i[n] ? (s = s.diffAdd(r, this), r = r.dbl()) : (r = s.diffAdd(r, this), s = s.dbl());
        return r
    }, f.prototype.mulAdd = function() {
        throw Error("Not supported on Montgomery curve")
    }, f.prototype.jumlAdd = function() {
        throw Error("Not supported on Montgomery curve")
    }, f.prototype.eq = function(t) {
        return 0 === this.getX().cmp(t.getX())
    }, f.prototype.normalize = function() {
        return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
    }, f.prototype.getX = function() {
        return this.normalize(), this.x.fromRed()
    }
}