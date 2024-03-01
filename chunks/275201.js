function(t, e, s) {
    "use strict";
    s("70102"), s("424973");
    var r = s("839309"),
        i = s("550511"),
        n = i.getNAF,
        c = i.getJSF,
        o = i.assert;

    function f(t, e) {
        this.type = t, this.p = new r(e.p, 16), this.red = e.prime ? r.red(e.prime) : r.mont(this.p), this.zero = new r(0).toRed(this.red), this.one = new r(1).toRed(this.red), this.two = new r(2).toRed(this.red), this.n = e.n && new r(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
        var s = this.n && this.p.div(this.n);
        !s || s.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
    }

    function u(t, e) {
        this.curve = t, this.type = e, this.precomputed = null
    }
    t.exports = f, f.prototype.point = function() {
        throw Error("Not implemented")
    }, f.prototype.validate = function() {
        throw Error("Not implemented")
    }, f.prototype._fixedNafMul = function(t, e) {
        o(t.precomputed);
        var s, r, i = t._getDoubles(),
            c = n(e, 1, this._bitLength),
            f = (1 << i.step + 1) - (i.step % 2 == 0 ? 2 : 1);
        f /= 3;
        var u = [];
        for (s = 0; s < c.length; s += i.step) {
            r = 0;
            for (var a = s + i.step - 1; a >= s; a--) r = (r << 1) + c[a];
            u.push(r)
        }
        for (var d = this.jpoint(null, null, null), p = this.jpoint(null, null, null), b = f; b > 0; b--) {
            for (s = 0; s < u.length; s++)(r = u[s]) === b ? p = p.mixedAdd(i.points[s]) : r === -b && (p = p.mixedAdd(i.points[s].neg()));
            d = d.add(p)
        }
        return d.toP()
    }, f.prototype._wnafMul = function(t, e) {
        var s = 4,
            r = t._getNAFPoints(s);
        s = r.wnd;
        for (var i = r.points, c = n(e, s, this._bitLength), f = this.jpoint(null, null, null), u = c.length - 1; u >= 0; u--) {
            for (var a = 0; u >= 0 && 0 === c[u]; u--) a++;
            if (u >= 0 && a++, f = f.dblp(a), u < 0) break;
            var d = c[u];
            o(0 !== d), f = "affine" === t.type ? d > 0 ? f.mixedAdd(i[d - 1 >> 1]) : f.mixedAdd(i[-d - 1 >> 1].neg()) : d > 0 ? f.add(i[d - 1 >> 1]) : f.add(i[-d - 1 >> 1].neg())
        }
        return "affine" === t.type ? f.toP() : f
    }, f.prototype._wnafMulAdd = function(t, e, s, r, i) {
        var o, f, u, a = this._wnafT1,
            d = this._wnafT2,
            p = this._wnafT3,
            b = 0;
        for (o = 0; o < r; o++) {
            var h = (u = e[o])._getNAFPoints(t);
            a[o] = h.wnd, d[o] = h.points
        }
        for (o = r - 1; o >= 1; o -= 2) {
            var l = o - 1,
                g = o;
            if (1 !== a[l] || 1 !== a[g]) {
                p[l] = n(s[l], a[l], this._bitLength), p[g] = n(s[g], a[g], this._bitLength), b = Math.max(p[l].length, b), b = Math.max(p[g].length, b);
                continue
            }
            var v = [e[l], null, null, e[g]];
            0 === e[l].y.cmp(e[g].y) ? (v[1] = e[l].add(e[g]), v[2] = e[l].toJ().mixedAdd(e[g].neg())) : 0 === e[l].y.cmp(e[g].y.redNeg()) ? (v[1] = e[l].toJ().mixedAdd(e[g]), v[2] = e[l].add(e[g].neg())) : (v[1] = e[l].toJ().mixedAdd(e[g]), v[2] = e[l].toJ().mixedAdd(e[g].neg()));
            var x = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                m = c(s[l], s[g]);
            for (f = 0, b = Math.max(m[0].length, b), p[l] = Array(b), p[g] = Array(b); f < b; f++) {
                var y = 0 | m[0][f],
                    _ = 0 | m[1][f];
                p[l][f] = x[(y + 1) * 3 + (_ + 1)], p[g][f] = 0, d[l] = v
            }
        }
        var w = this.jpoint(null, null, null),
            M = this._wnafT4;
        for (o = b; o >= 0; o--) {
            for (var S = 0; o >= 0;) {
                var k = !0;
                for (f = 0; f < r; f++) M[f] = 0 | p[f][o], 0 !== M[f] && (k = !1);
                if (!k) break;
                S++, o--
            }
            if (o >= 0 && S++, w = w.dblp(S), o < 0) break;
            for (f = 0; f < r; f++) {
                var A = M[f];
                if (0 !== A) {
                    A > 0 ? u = d[f][A - 1 >> 1] : A < 0 && (u = d[f][-A - 1 >> 1].neg());
                    w = "affine" === u.type ? w.mixedAdd(u) : w.add(u)
                }
            }
        }
        for (o = 0; o < r; o++) d[o] = null;
        return i ? w : w.toP()
    }, f.BasePoint = u, u.prototype.eq = function() {
        throw Error("Not implemented")
    }, u.prototype.validate = function() {
        return this.curve.validate(this)
    }, f.prototype.decodePoint = function(t, e) {
        t = i.toArray(t, e);
        var s = this.p.byteLength();
        if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * s) return 6 === t[0] ? o(t[t.length - 1] % 2 == 0) : 7 === t[0] && o(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + s), t.slice(1 + s, 1 + 2 * s));
        if ((2 === t[0] || 3 === t[0]) && t.length - 1 === s) return this.pointFromX(t.slice(1, 1 + s), 3 === t[0]);
        throw Error("Unknown point format")
    }, u.prototype.encodeCompressed = function(t) {
        return this.encode(t, !0)
    }, u.prototype._encode = function(t) {
        var e = this.curve.p.byteLength(),
            s = this.getX().toArray("be", e);
        return t ? [this.getY().isEven() ? 2 : 3].concat(s) : [4].concat(s, this.getY().toArray("be", e))
    }, u.prototype.encode = function(t, e) {
        return i.encode(this._encode(e), t)
    }, u.prototype.precompute = function(t) {
        if (this.precomputed) return this;
        var e = {
            doubles: null,
            naf: null,
            beta: null
        };
        return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
    }, u.prototype._hasDoubles = function(t) {
        if (!this.precomputed) return !1;
        var e = this.precomputed.doubles;
        return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
    }, u.prototype._getDoubles = function(t, e) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
        for (var s = [this], r = this, i = 0; i < e; i += t) {
            for (var n = 0; n < t; n++) r = r.dbl();
            s.push(r)
        }
        return {
            step: t,
            points: s
        }
    }, u.prototype._getNAFPoints = function(t) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
        for (var e = [this], s = (1 << t) - 1, r = 1 === s ? null : this.dbl(), i = 1; i < s; i++) e[i] = e[i - 1].add(r);
        return {
            wnd: t,
            points: e
        }
    }, u.prototype._getBeta = function() {
        return null
    }, u.prototype.dblp = function(t) {
        for (var e = this, s = 0; s < t; s++) e = e.dbl();
        return e
    }
}