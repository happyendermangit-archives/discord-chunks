function(e, t, n) {
    "use strict";
    var r = n("814033"),
        i = n("685053"),
        a = i.getNAF,
        o = i.getJSF,
        s = i.assert;

    function u(e, t) {
        this.type = e, this.p = new r(t.p, 16), this.red = t.prime ? r.red(t.prime) : r.mont(this.p), this.zero = new r(0).toRed(this.red), this.one = new r(1).toRed(this.red), this.two = new r(2).toRed(this.red), this.n = t.n && new r(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
        var n = this.n && this.p.div(this.n);
        !n || n.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
    }

    function c(e, t) {
        this.curve = e, this.type = t, this.precomputed = null
    }
    e.exports = u, u.prototype.point = function() {
        throw Error("Not implemented")
    }, u.prototype.validate = function() {
        throw Error("Not implemented")
    }, u.prototype._fixedNafMul = function(e, t) {
        s(e.precomputed);
        var n, r, i = e._getDoubles(),
            o = a(t, 1, this._bitLength),
            u = (1 << i.step + 1) - (i.step % 2 == 0 ? 2 : 1);
        u /= 3;
        var c = [];
        for (n = 0; n < o.length; n += i.step) {
            r = 0;
            for (var l = n + i.step - 1; l >= n; l--) r = (r << 1) + o[l];
            c.push(r)
        }
        for (var d = this.jpoint(null, null, null), f = this.jpoint(null, null, null), p = u; p > 0; p--) {
            for (n = 0; n < c.length; n++)(r = c[n]) === p ? f = f.mixedAdd(i.points[n]) : r === -p && (f = f.mixedAdd(i.points[n].neg()));
            d = d.add(f)
        }
        return d.toP()
    }, u.prototype._wnafMul = function(e, t) {
        var n = 4,
            r = e._getNAFPoints(n);
        n = r.wnd;
        for (var i = r.points, o = a(t, n, this._bitLength), u = this.jpoint(null, null, null), c = o.length - 1; c >= 0; c--) {
            for (var l = 0; c >= 0 && 0 === o[c]; c--) l++;
            if (c >= 0 && l++, u = u.dblp(l), c < 0) break;
            var d = o[c];
            s(0 !== d), u = "affine" === e.type ? d > 0 ? u.mixedAdd(i[d - 1 >> 1]) : u.mixedAdd(i[-d - 1 >> 1].neg()) : d > 0 ? u.add(i[d - 1 >> 1]) : u.add(i[-d - 1 >> 1].neg())
        }
        return "affine" === e.type ? u.toP() : u
    }, u.prototype._wnafMulAdd = function(e, t, n, r, i) {
        var s, u, c, l = this._wnafT1,
            d = this._wnafT2,
            f = this._wnafT3,
            p = 0;
        for (s = 0; s < r; s++) {
            var h = (c = t[s])._getNAFPoints(e);
            l[s] = h.wnd, d[s] = h.points
        }
        for (s = r - 1; s >= 1; s -= 2) {
            var m = s - 1,
                g = s;
            if (1 !== l[m] || 1 !== l[g]) {
                f[m] = a(n[m], l[m], this._bitLength), f[g] = a(n[g], l[g], this._bitLength), p = Math.max(f[m].length, p), p = Math.max(f[g].length, p);
                continue
            }
            var _ = [t[m], null, null, t[g]];
            0 === t[m].y.cmp(t[g].y) ? (_[1] = t[m].add(t[g]), _[2] = t[m].toJ().mixedAdd(t[g].neg())) : 0 === t[m].y.cmp(t[g].y.redNeg()) ? (_[1] = t[m].toJ().mixedAdd(t[g]), _[2] = t[m].add(t[g].neg())) : (_[1] = t[m].toJ().mixedAdd(t[g]), _[2] = t[m].toJ().mixedAdd(t[g].neg()));
            var b = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                v = o(n[m], n[g]);
            for (u = 0, p = Math.max(v[0].length, p), f[m] = Array(p), f[g] = Array(p); u < p; u++) {
                var y = 0 | v[0][u],
                    E = 0 | v[1][u];
                f[m][u] = b[(y + 1) * 3 + (E + 1)], f[g][u] = 0, d[m] = _
            }
        }
        var S = this.jpoint(null, null, null),
            x = this._wnafT4;
        for (s = p; s >= 0; s--) {
            for (var w = 0; s >= 0;) {
                var T = !0;
                for (u = 0; u < r; u++) x[u] = 0 | f[u][s], 0 !== x[u] && (T = !1);
                if (!T) break;
                w++, s--
            }
            if (s >= 0 && w++, S = S.dblp(w), s < 0) break;
            for (u = 0; u < r; u++) {
                var C = x[u];
                if (0 !== C) {
                    C > 0 ? c = d[u][C - 1 >> 1] : C < 0 && (c = d[u][-C - 1 >> 1].neg());
                    S = "affine" === c.type ? S.mixedAdd(c) : S.add(c)
                }
            }
        }
        for (s = 0; s < r; s++) d[s] = null;
        return i ? S : S.toP()
    }, u.BasePoint = c, c.prototype.eq = function() {
        throw Error("Not implemented")
    }, c.prototype.validate = function() {
        return this.curve.validate(this)
    }, u.prototype.decodePoint = function(e, t) {
        e = i.toArray(e, t);
        var n = this.p.byteLength();
        if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * n) return 6 === e[0] ? s(e[e.length - 1] % 2 == 0) : 7 === e[0] && s(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + n), e.slice(1 + n, 1 + 2 * n));
        if ((2 === e[0] || 3 === e[0]) && e.length - 1 === n) return this.pointFromX(e.slice(1, 1 + n), 3 === e[0]);
        throw Error("Unknown point format")
    }, c.prototype.encodeCompressed = function(e) {
        return this.encode(e, !0)
    }, c.prototype._encode = function(e) {
        var t = this.curve.p.byteLength(),
            n = this.getX().toArray("be", t);
        return e ? [this.getY().isEven() ? 2 : 3].concat(n) : [4].concat(n, this.getY().toArray("be", t))
    }, c.prototype.encode = function(e, t) {
        return i.encode(this._encode(t), e)
    }, c.prototype.precompute = function(e) {
        if (this.precomputed) return this;
        var t = {
            doubles: null,
            naf: null,
            beta: null
        };
        return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
    }, c.prototype._hasDoubles = function(e) {
        if (!this.precomputed) return !1;
        var t = this.precomputed.doubles;
        return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
    }, c.prototype._getDoubles = function(e, t) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
        for (var n = [this], r = this, i = 0; i < t; i += e) {
            for (var a = 0; a < e; a++) r = r.dbl();
            n.push(r)
        }
        return {
            step: e,
            points: n
        }
    }, c.prototype._getNAFPoints = function(e) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
        for (var t = [this], n = (1 << e) - 1, r = 1 === n ? null : this.dbl(), i = 1; i < n; i++) t[i] = t[i - 1].add(r);
        return {
            wnd: e,
            points: t
        }
    }, c.prototype._getBeta = function() {
        return null
    }, c.prototype.dblp = function(e) {
        for (var t = this, n = 0; n < e; n++) t = t.dbl();
        return t
    }
}