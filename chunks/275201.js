function(e, t, n) {
    "use strict";
    n("70102"), n("424973");
    var r = n("839309"),
        i = n("550511"),
        o = i.getNAF,
        s = i.getJSF,
        a = i.assert;

    function c(e, t) {
        this.type = e, this.p = new r(t.p, 16), this.red = t.prime ? r.red(t.prime) : r.mont(this.p), this.zero = new r(0).toRed(this.red), this.one = new r(1).toRed(this.red), this.two = new r(2).toRed(this.red), this.n = t.n && new r(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
        var n = this.n && this.p.div(this.n);
        !n || n.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
    }

    function u(e, t) {
        this.curve = e, this.type = t, this.precomputed = null
    }
    e.exports = c, c.prototype.point = function() {
        throw Error("Not implemented")
    }, c.prototype.validate = function() {
        throw Error("Not implemented")
    }, c.prototype._fixedNafMul = function(e, t) {
        a(e.precomputed);
        var n, r, i = e._getDoubles(),
            s = o(t, 1, this._bitLength),
            c = (1 << i.step + 1) - (i.step % 2 == 0 ? 2 : 1);
        c /= 3;
        var u = [];
        for (n = 0; n < s.length; n += i.step) {
            r = 0;
            for (var d = n + i.step - 1; d >= n; d--) r = (r << 1) + s[d];
            u.push(r)
        }
        for (var l = this.jpoint(null, null, null), f = this.jpoint(null, null, null), p = c; p > 0; p--) {
            for (n = 0; n < u.length; n++)(r = u[n]) === p ? f = f.mixedAdd(i.points[n]) : r === -p && (f = f.mixedAdd(i.points[n].neg()));
            l = l.add(f)
        }
        return l.toP()
    }, c.prototype._wnafMul = function(e, t) {
        var n = 4,
            r = e._getNAFPoints(n);
        n = r.wnd;
        for (var i = r.points, s = o(t, n, this._bitLength), c = this.jpoint(null, null, null), u = s.length - 1; u >= 0; u--) {
            for (var d = 0; u >= 0 && 0 === s[u]; u--) d++;
            if (u >= 0 && d++, c = c.dblp(d), u < 0) break;
            var l = s[u];
            a(0 !== l), c = "affine" === e.type ? l > 0 ? c.mixedAdd(i[l - 1 >> 1]) : c.mixedAdd(i[-l - 1 >> 1].neg()) : l > 0 ? c.add(i[l - 1 >> 1]) : c.add(i[-l - 1 >> 1].neg())
        }
        return "affine" === e.type ? c.toP() : c
    }, c.prototype._wnafMulAdd = function(e, t, n, r, i) {
        var a, c, u, d = this._wnafT1,
            l = this._wnafT2,
            f = this._wnafT3,
            p = 0;
        for (a = 0; a < r; a++) {
            var h = (u = t[a])._getNAFPoints(e);
            d[a] = h.wnd, l[a] = h.points
        }
        for (a = r - 1; a >= 1; a -= 2) {
            var v = a - 1,
                g = a;
            if (1 !== d[v] || 1 !== d[g]) {
                f[v] = o(n[v], d[v], this._bitLength), f[g] = o(n[g], d[g], this._bitLength), p = Math.max(f[v].length, p), p = Math.max(f[g].length, p);
                continue
            }
            var b = [t[v], null, null, t[g]];
            0 === t[v].y.cmp(t[g].y) ? (b[1] = t[v].add(t[g]), b[2] = t[v].toJ().mixedAdd(t[g].neg())) : 0 === t[v].y.cmp(t[g].y.redNeg()) ? (b[1] = t[v].toJ().mixedAdd(t[g]), b[2] = t[v].add(t[g].neg())) : (b[1] = t[v].toJ().mixedAdd(t[g]), b[2] = t[v].toJ().mixedAdd(t[g].neg()));
            var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                y = s(n[v], n[g]);
            for (c = 0, p = Math.max(y[0].length, p), f[v] = Array(p), f[g] = Array(p); c < p; c++) {
                var x = 0 | y[0][c],
                    w = 0 | y[1][c];
                f[v][c] = m[(x + 1) * 3 + (w + 1)], f[g][c] = 0, l[v] = b
            }
        }
        var S = this.jpoint(null, null, null),
            k = this._wnafT4;
        for (a = p; a >= 0; a--) {
            for (var E = 0; a >= 0;) {
                var _ = !0;
                for (c = 0; c < r; c++) k[c] = 0 | f[c][a], 0 !== k[c] && (_ = !1);
                if (!_) break;
                E++, a--
            }
            if (a >= 0 && E++, S = S.dblp(E), a < 0) break;
            for (c = 0; c < r; c++) {
                var M = k[c];
                if (0 !== M) {
                    M > 0 ? u = l[c][M - 1 >> 1] : M < 0 && (u = l[c][-M - 1 >> 1].neg());
                    S = "affine" === u.type ? S.mixedAdd(u) : S.add(u)
                }
            }
        }
        for (a = 0; a < r; a++) l[a] = null;
        return i ? S : S.toP()
    }, c.BasePoint = u, u.prototype.eq = function() {
        throw Error("Not implemented")
    }, u.prototype.validate = function() {
        return this.curve.validate(this)
    }, c.prototype.decodePoint = function(e, t) {
        e = i.toArray(e, t);
        var n = this.p.byteLength();
        if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * n) return 6 === e[0] ? a(e[e.length - 1] % 2 == 0) : 7 === e[0] && a(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + n), e.slice(1 + n, 1 + 2 * n));
        if ((2 === e[0] || 3 === e[0]) && e.length - 1 === n) return this.pointFromX(e.slice(1, 1 + n), 3 === e[0]);
        throw Error("Unknown point format")
    }, u.prototype.encodeCompressed = function(e) {
        return this.encode(e, !0)
    }, u.prototype._encode = function(e) {
        var t = this.curve.p.byteLength(),
            n = this.getX().toArray("be", t);
        return e ? [this.getY().isEven() ? 2 : 3].concat(n) : [4].concat(n, this.getY().toArray("be", t))
    }, u.prototype.encode = function(e, t) {
        return i.encode(this._encode(t), e)
    }, u.prototype.precompute = function(e) {
        if (this.precomputed) return this;
        var t = {
            doubles: null,
            naf: null,
            beta: null
        };
        return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
    }, u.prototype._hasDoubles = function(e) {
        if (!this.precomputed) return !1;
        var t = this.precomputed.doubles;
        return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
    }, u.prototype._getDoubles = function(e, t) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
        for (var n = [this], r = this, i = 0; i < t; i += e) {
            for (var o = 0; o < e; o++) r = r.dbl();
            n.push(r)
        }
        return {
            step: e,
            points: n
        }
    }, u.prototype._getNAFPoints = function(e) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
        for (var t = [this], n = (1 << e) - 1, r = 1 === n ? null : this.dbl(), i = 1; i < n; i++) t[i] = t[i - 1].add(r);
        return {
            wnd: e,
            points: t
        }
    }, u.prototype._getBeta = function() {
        return null
    }, u.prototype.dblp = function(e) {
        for (var t = this, n = 0; n < e; n++) t = t.dbl();
        return t
    }
}