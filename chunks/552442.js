function(t, r, n) {
    t = n.nmd(t), n("424973"), n("843762"), n("854508"), n("70102"), n("274635");
    var e = function(t) {
        "use strict";
        var r = s(9007199254740992),
            n = "0123456789abcdefghijklmnopqrstuvwxyz",
            i = "function" == typeof BigInt;

        function o(t, r, n, e) {
            return void 0 === t ? o[0] : void 0 !== r ? 10 != +r || n ? z(t, r, n, e) : H(t) : H(t)
        }

        function u(t, r) {
            this.value = t, this.sign = r, this.isSmall = !1
        }

        function a(t) {
            this.value = t, this.sign = t < 0, this.isSmall = !0
        }

        function f(t) {
            this.value = t
        }

        function c(t) {
            return -9007199254740992 < t && t < 9007199254740992
        }

        function s(t) {
            return t < 1e7 ? [t] : t < 1e14 ? [t % 1e7, Math.floor(t / 1e7)] : [t % 1e7, Math.floor(t / 1e7) % 1e7, Math.floor(t / 1e14)]
        }

        function l(t) {
            h(t);
            var n = t.length;
            if (n < 4 && 0 > S(t, r)) switch (n) {
                case 0:
                    return 0;
                case 1:
                    return t[0];
                case 2:
                    return t[0] + 1e7 * t[1];
                default:
                    return t[0] + (t[1] + 1e7 * t[2]) * 1e7
            }
            return t
        }

        function h(t) {
            for (var r = t.length; 0 === t[--r];);
            t.length = r + 1
        }

        function p(t) {
            for (var r = Array(t), n = -1; ++n < t;) r[n] = 0;
            return r
        }

        function v(t) {
            return t > 0 ? Math.floor(t) : Math.ceil(t)
        }

        function g(t, r) {
            var n, e, i = t.length,
                o = r.length,
                u = Array(i),
                a = 0;
            for (e = 0; e < o; e++) a = (n = t[e] + r[e] + a) >= 1e7 ? 1 : 0, u[e] = n - 1e7 * a;
            for (; e < i;) a = 1e7 === (n = t[e] + a) ? 1 : 0, u[e++] = n - 1e7 * a;
            return a > 0 && u.push(a), u
        }

        function d(t, r) {
            return t.length >= r.length ? g(t, r) : g(r, t)
        }

        function y(t, r) {
            var n, e, i = t.length,
                o = Array(i);
            for (e = 0; e < i; e++) r = Math.floor((n = t[e] - 1e7 + r) / 1e7), o[e] = n - 1e7 * r, r += 1;
            for (; r > 0;) o[e++] = r % 1e7, r = Math.floor(r / 1e7);
            return o
        }

        function b(t, r) {
            var n, e, i = t.length,
                o = r.length,
                u = Array(i),
                a = 0;
            for (n = 0; n < o; n++)(e = t[n] - a - r[n]) < 0 ? (e += 1e7, a = 1) : a = 0, u[n] = e;
            for (n = o; n < i; n++) {
                if ((e = t[n] - a) < 0) e += 1e7;
                else {
                    u[n++] = e;
                    break
                }
                u[n] = e
            }
            for (; n < i; n++) u[n] = t[n];
            return h(u), u
        }
        u.prototype = Object.create(o.prototype), a.prototype = Object.create(o.prototype), f.prototype = Object.create(o.prototype), u.prototype.add = function(t) {
            var r = H(t);
            if (this.sign !== r.sign) return this.subtract(r.negate());
            var n = this.value,
                e = r.value;
            return r.isSmall ? new u(y(n, Math.abs(e)), this.sign) : new u(d(n, e), this.sign)
        }, u.prototype.plus = u.prototype.add, a.prototype.add = function(t) {
            var r = H(t),
                n = this.value;
            if (n < 0 !== r.sign) return this.subtract(r.negate());
            var e = r.value;
            if (r.isSmall) {
                if (c(n + e)) return new a(n + e);
                e = s(Math.abs(e))
            }
            return new u(y(e, Math.abs(n)), n < 0)
        }, a.prototype.plus = a.prototype.add, f.prototype.add = function(t) {
            return new f(this.value + H(t).value)
        }, f.prototype.plus = f.prototype.add;

        function m(t, r, n) {
            var e, i, o = t.length,
                f = Array(o),
                c = -r;
            for (e = 0; e < o; e++) c = Math.floor((i = t[e] + c) / 1e7), i %= 1e7, f[e] = i < 0 ? i + 1e7 : i;
            return "number" == typeof(f = l(f)) ? (n && (f = -f), new a(f)) : new u(f, n)
        }

        function _(t, r) {
            var n, e, i, o, u = t.length,
                a = r.length,
                f = p(u + a);
            for (i = 0; i < u; ++i) {
                o = t[i];
                for (var c = 0; c < a; ++c) e = Math.floor((n = o * r[c] + f[i + c]) / 1e7), f[i + c] = n - 1e7 * e, f[i + c + 1] += e
            }
            return h(f), f
        }

        function w(t, r) {
            var n, e, i = t.length,
                o = Array(i),
                u = 0;
            for (e = 0; e < i; e++) u = Math.floor((n = t[e] * r + u) / 1e7), o[e] = n - 1e7 * u;
            for (; u > 0;) o[e++] = u % 1e7, u = Math.floor(u / 1e7);
            return o
        }

        function k(t, r) {
            for (var n = []; r-- > 0;) n.push(0);
            return n.concat(t)
        }
        u.prototype.subtract = function(t) {
            var r, n, e, i, o = H(t);
            if (this.sign !== o.sign) return this.add(o.negate());
            var f = this.value,
                c = o.value;
            if (o.isSmall) return m(f, Math.abs(c), this.sign);
            return r = f, n = c, e = this.sign, (S(r, n) >= 0 ? i = b(r, n) : (i = b(n, r), e = !e), "number" == typeof(i = l(i))) ? (e && (i = -i), new a(i)) : new u(i, e)
        }, u.prototype.minus = u.prototype.subtract, a.prototype.subtract = function(t) {
            var r = H(t),
                n = this.value;
            if (n < 0 !== r.sign) return this.add(r.negate());
            var e = r.value;
            return r.isSmall ? new a(n - e) : m(e, Math.abs(n), n >= 0)
        }, a.prototype.minus = a.prototype.subtract, f.prototype.subtract = function(t) {
            return new f(this.value - H(t).value)
        }, f.prototype.minus = f.prototype.subtract, u.prototype.negate = function() {
            return new u(this.value, !this.sign)
        }, a.prototype.negate = function() {
            var t = this.sign,
                r = new a(-this.value);
            return r.sign = !t, r
        }, f.prototype.negate = function() {
            return new f(-this.value)
        }, u.prototype.abs = function() {
            return new u(this.value, !1)
        }, a.prototype.abs = function() {
            return new a(Math.abs(this.value))
        }, f.prototype.abs = function() {
            return new f(this.value >= 0 ? this.value : -this.value)
        };

        function E(t, r, n) {
            return t < 1e7 ? new u(w(r, t), n) : new u(_(r, s(t)), n)
        }

        function R(t) {
            var r, n, e, i, o = t.length,
                u = p(o + o);
            for (e = 0; e < o; e++) {
                n = 0 - (i = t[e]) * i;
                for (var a = e; a < o; a++) n = Math.floor((r = 2 * (i * t[a]) + u[e + a] + n) / 1e7), u[e + a] = r - 1e7 * n;
                u[e + o] = n
            }
            return h(u), u
        }
        u.prototype.multiply = function(t) {
            var r, n, e, i = H(t),
                a = this.value,
                f = i.value,
                c = this.sign !== i.sign;
            if (i.isSmall) {
                if (0 === f) return o[0];
                if (1 === f) return this;
                if (-1 === f) return this.negate();
                if ((e = Math.abs(f)) < 1e7) return new u(w(a, e), c);
                f = s(e)
            }
            return (r = a.length, -.012 * r - .012 * (n = f.length) + 15e-6 * r * n > 0) ? new u(function t(r, n) {
                var e = Math.max(r.length, n.length);
                if (e <= 30) return _(r, n);
                e = Math.ceil(e / 2);
                var i = r.slice(e),
                    o = r.slice(0, e),
                    u = n.slice(e),
                    a = n.slice(0, e),
                    f = t(o, a),
                    c = t(i, u),
                    s = t(d(o, i), d(a, u)),
                    l = d(d(f, k(b(b(s, f), c), e)), k(c, 2 * e));
                return h(l), l
            }(a, f), c) : new u(_(a, f), c)
        }, u.prototype.times = u.prototype.multiply, a.prototype._multiplyBySmall = function(t) {
            return c(t.value * this.value) ? new a(t.value * this.value) : E(Math.abs(t.value), s(Math.abs(this.value)), this.sign !== t.sign)
        }, u.prototype._multiplyBySmall = function(t) {
            return 0 === t.value ? o[0] : 1 === t.value ? this : -1 === t.value ? this.negate() : E(Math.abs(t.value), this.value, this.sign !== t.sign)
        }, a.prototype.multiply = function(t) {
            return H(t)._multiplyBySmall(this)
        }, a.prototype.times = a.prototype.multiply, f.prototype.multiply = function(t) {
            return new f(this.value * H(t).value)
        }, f.prototype.times = f.prototype.multiply, u.prototype.square = function() {
            return new u(R(this.value), !1)
        }, a.prototype.square = function() {
            var t = this.value * this.value;
            return c(t) ? new a(t) : new u(R(s(Math.abs(this.value))), !1)
        }, f.prototype.square = function(t) {
            return new f(this.value * this.value)
        };

        function x(t, r) {
            var n, e, i, o, u = t.length,
                a = p(u);
            for (i = 0, n = u - 1; n >= 0; --n) e = v((o = 1e7 * i + t[n]) / r), i = o - e * r, a[n] = 0 | e;
            return [a, 0 | i]
        }

        function A(t, r) {
            var n, e, c = H(r);
            if (i) return [new f(t.value / c.value), new f(t.value % c.value)];
            var g = t.value,
                d = c.value;
            if (0 === d) throw Error("Cannot divide by zero");
            if (t.isSmall) return c.isSmall ? [new a(v(g / d)), new a(g % d)] : [o[0], t];
            if (c.isSmall) {
                if (1 === d) return [t, o[0]];
                if (-1 == d) return [t.negate(), o[0]];
                var y = Math.abs(d);
                if (y < 1e7) {
                    n = l((e = x(g, y))[0]);
                    var m = e[1];
                    return (t.sign && (m = -m), "number" == typeof n) ? (t.sign !== c.sign && (n = -n), [new a(n), new a(m)]) : [new u(n, t.sign !== c.sign), new a(m)]
                }
                d = s(y)
            }
            var _ = S(g, d);
            if (-1 === _) return [o[0], t];
            if (0 === _) return [o[t.sign === c.sign ? 1 : -1], o[0]];
            n = (e = g.length + d.length <= 200 ? function(t, r) {
                var n, e, i, o, u, a, f, c = t.length,
                    s = r.length,
                    h = p(r.length),
                    v = r[s - 1],
                    g = Math.ceil(1e7 / (2 * v)),
                    d = w(t, g),
                    y = w(r, g);
                for (d.length <= c && d.push(0), y.push(0), v = y[s - 1], e = c - s; e >= 0; e--) {
                    for (n = 1e7 - 1, d[e + s] !== v && (n = Math.floor((1e7 * d[e + s] + d[e + s - 1]) / v)), i = 0, o = 0, a = y.length, u = 0; u < a; u++) i += n * y[u], f = Math.floor(i / 1e7), o += d[e + u] - (i - 1e7 * f), i = f, o < 0 ? (d[e + u] = o + 1e7, o = -1) : (d[e + u] = o, o = 0);
                    for (; 0 !== o;) {
                        for (n -= 1, i = 0, u = 0; u < a; u++)(i += d[e + u] - 1e7 + y[u]) < 0 ? (d[e + u] = i + 1e7, i = 0) : (d[e + u] = i, i = 1);
                        o += i
                    }
                    h[e] = n
                }
                return d = x(d, g)[0], [l(h), l(d)]
            }(g, d) : function(t, r) {
                for (var n, e, i, o, u, a = t.length, f = r.length, c = [], s = []; a;) {
                    if (s.unshift(t[--a]), h(s), 0 > S(s, r)) {
                        c.push(0);
                        continue
                    }
                    e = s.length, i = 1e7 * s[e - 1] + s[e - 2], o = 1e7 * r[f - 1] + r[f - 2], e > f && (i = (i + 1) * 1e7), n = Math.ceil(i / o);
                    do {
                        if (0 >= S(u = w(r, n), s)) break;
                        n--
                    } while (n);
                    c.push(n), s = b(s, u)
                }
                return c.reverse(), [l(c), l(s)]
            }(g, d))[0];
            var k = t.sign !== c.sign,
                E = e[1],
                R = t.sign;
            return "number" == typeof n ? (k && (n = -n), n = new a(n)) : n = new u(n, k), "number" == typeof E ? (R && (E = -E), E = new a(E)) : E = new u(E, R), [n, E]
        }

        function S(t, r) {
            if (t.length !== r.length) return t.length > r.length ? 1 : -1;
            for (var n = t.length - 1; n >= 0; n--)
                if (t[n] !== r[n]) return t[n] > r[n] ? 1 : -1;
            return 0
        }

        function M(t) {
            var r = t.abs();
            return !r.isUnit() && (!!(r.equals(2) || r.equals(3) || r.equals(5)) || !(r.isEven() || r.isDivisibleBy(3) || r.isDivisibleBy(5)) && (!!r.lesser(49) || void 0))
        }

        function I(t, r) {
            for (var n, i, o, u = t.prev(), a = u, f = 0; a.isEven();) a = a.divide(2), f++;
            t: for (i = 0; i < r.length; i++) {
                if (!t.lesser(r[i])) {
                    if (!((o = e(r[i]).modPow(a, t)).isUnit() || o.equals(u))) {
                        for (n = f - 1; 0 != n && !(o = o.square().mod(t)).isUnit(); n--) {
                            ;
                            if (o.equals(u)) continue t
                        }
                        return !1
                    }
                }
            }
            return !0
        }
        u.prototype.divmod = function(t) {
            var r = A(this, t);
            return {
                quotient: r[0],
                remainder: r[1]
            }
        }, f.prototype.divmod = a.prototype.divmod = u.prototype.divmod, u.prototype.divide = function(t) {
            return A(this, t)[0]
        }, f.prototype.over = f.prototype.divide = function(t) {
            return new f(this.value / H(t).value)
        }, a.prototype.over = a.prototype.divide = u.prototype.over = u.prototype.divide, u.prototype.mod = function(t) {
            return A(this, t)[1]
        }, f.prototype.mod = f.prototype.remainder = function(t) {
            return new f(this.value % H(t).value)
        }, a.prototype.remainder = a.prototype.mod = u.prototype.remainder = u.prototype.mod, u.prototype.pow = function(t) {
            var r, n, e, i = H(t),
                u = this.value,
                f = i.value;
            if (0 === f) return o[1];
            if (0 === u) return o[0];
            if (1 === u) return o[1];
            if (-1 === u) return i.isEven() ? o[1] : o[-1];
            if (i.sign) return o[0];
            if (!i.isSmall) throw Error("The exponent " + i.toString() + " is too large.");
            if (this.isSmall && c(r = Math.pow(u, f))) return new a(v(r));
            for (n = this, e = o[1]; !0 & f && (e = e.times(n), --f), 0 !== f;) {
                ;
                f /= 2, n = n.square()
            }
            return e
        }, a.prototype.pow = u.prototype.pow, f.prototype.pow = function(t) {
            var r = H(t),
                n = this.value,
                e = r.value,
                i = BigInt(0),
                u = BigInt(1),
                a = BigInt(2);
            if (e === i) return o[1];
            if (n === i) return o[0];
            if (n === u) return o[1];
            if (n === BigInt(-1)) return r.isEven() ? o[1] : o[-1];
            if (r.isNegative()) return new f(i);
            for (var c = this, s = o[1];
                (e & u) === u && (s = s.times(c), --e), e !== i;) {
                ;
                e /= a, c = c.square()
            }
            return s
        }, u.prototype.modPow = function(t, r) {
            if (t = H(t), (r = H(r)).isZero()) throw Error("Cannot take modPow with modulus 0");
            var n = o[1],
                e = this.mod(r);
            for (t.isNegative() && (t = t.multiply(o[-1]), e = e.modInv(r)); t.isPositive();) {
                if (e.isZero()) return o[0];
                t.isOdd() && (n = n.multiply(e).mod(r)), t = t.divide(2), e = e.square().mod(r)
            }
            return n
        }, f.prototype.modPow = a.prototype.modPow = u.prototype.modPow, u.prototype.compareAbs = function(t) {
            var r = H(t),
                n = this.value,
                e = r.value;
            return r.isSmall ? 1 : S(n, e)
        }, a.prototype.compareAbs = function(t) {
            var r = H(t),
                n = Math.abs(this.value),
                e = r.value;
            return r.isSmall ? n === (e = Math.abs(e)) ? 0 : n > e ? 1 : -1 : -1
        }, f.prototype.compareAbs = function(t) {
            var r = this.value,
                n = H(t).value;
            return (r = r >= 0 ? r : -r) === (n = n >= 0 ? n : -n) ? 0 : r > n ? 1 : -1
        }, u.prototype.compare = function(t) {
            if (t === 1 / 0) return -1;
            if (t === -1 / 0) return 1;
            var r = H(t),
                n = this.value,
                e = r.value;
            return this.sign !== r.sign ? r.sign ? 1 : -1 : r.isSmall ? this.sign ? -1 : 1 : S(n, e) * (this.sign ? -1 : 1)
        }, u.prototype.compareTo = u.prototype.compare, a.prototype.compare = function(t) {
            if (t === 1 / 0) return -1;
            if (t === -1 / 0) return 1;
            var r = H(t),
                n = this.value,
                e = r.value;
            return r.isSmall ? n == e ? 0 : n > e ? 1 : -1 : n < 0 !== r.sign ? n < 0 ? -1 : 1 : n < 0 ? 1 : -1
        }, a.prototype.compareTo = a.prototype.compare, f.prototype.compare = function(t) {
            if (t === 1 / 0) return -1;
            if (t === -1 / 0) return 1;
            var r = this.value,
                n = H(t).value;
            return r === n ? 0 : r > n ? 1 : -1
        }, f.prototype.compareTo = f.prototype.compare, u.prototype.equals = function(t) {
            return 0 === this.compare(t)
        }, f.prototype.eq = f.prototype.equals = a.prototype.eq = a.prototype.equals = u.prototype.eq = u.prototype.equals, u.prototype.notEquals = function(t) {
            return 0 !== this.compare(t)
        }, f.prototype.neq = f.prototype.notEquals = a.prototype.neq = a.prototype.notEquals = u.prototype.neq = u.prototype.notEquals, u.prototype.greater = function(t) {
            return this.compare(t) > 0
        }, f.prototype.gt = f.prototype.greater = a.prototype.gt = a.prototype.greater = u.prototype.gt = u.prototype.greater, u.prototype.lesser = function(t) {
            return 0 > this.compare(t)
        }, f.prototype.lt = f.prototype.lesser = a.prototype.lt = a.prototype.lesser = u.prototype.lt = u.prototype.lesser, u.prototype.greaterOrEquals = function(t) {
            return this.compare(t) >= 0
        }, f.prototype.geq = f.prototype.greaterOrEquals = a.prototype.geq = a.prototype.greaterOrEquals = u.prototype.geq = u.prototype.greaterOrEquals, u.prototype.lesserOrEquals = function(t) {
            return 0 >= this.compare(t)
        }, f.prototype.leq = f.prototype.lesserOrEquals = a.prototype.leq = a.prototype.lesserOrEquals = u.prototype.leq = u.prototype.lesserOrEquals, u.prototype.isEven = function() {
            return (1 & this.value[0]) == 0
        }, a.prototype.isEven = function() {
            return (1 & this.value) == 0
        }, f.prototype.isEven = function() {
            return (this.value & BigInt(1)) === BigInt(0)
        }, u.prototype.isOdd = function() {
            return (1 & this.value[0]) == 1
        }, a.prototype.isOdd = function() {
            return (1 & this.value) == 1
        }, f.prototype.isOdd = function() {
            return (this.value & BigInt(1)) === BigInt(1)
        }, u.prototype.isPositive = function() {
            return !this.sign
        }, a.prototype.isPositive = function() {
            return this.value > 0
        }, f.prototype.isPositive = a.prototype.isPositive, u.prototype.isNegative = function() {
            return this.sign
        }, a.prototype.isNegative = function() {
            return this.value < 0
        }, f.prototype.isNegative = a.prototype.isNegative, u.prototype.isUnit = function() {
            return !1
        }, a.prototype.isUnit = function() {
            return 1 === Math.abs(this.value)
        }, f.prototype.isUnit = function() {
            return this.abs().value === BigInt(1)
        }, u.prototype.isZero = function() {
            return !1
        }, a.prototype.isZero = function() {
            return 0 === this.value
        }, f.prototype.isZero = function() {
            return this.value === BigInt(0)
        }, u.prototype.isDivisibleBy = function(t) {
            var r = H(t);
            return !r.isZero() && (!!r.isUnit() || (0 === r.compareAbs(2) ? this.isEven() : this.mod(r).isZero()))
        }, f.prototype.isDivisibleBy = a.prototype.isDivisibleBy = u.prototype.isDivisibleBy, u.prototype.isPrime = function(r) {
            var n = M(this);
            if (t !== n) return n;
            var i = this.abs(),
                o = i.bitLength();
            if (o <= 64) return I(i, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (var u = Math.log(2) * o.toJSNumber(), a = Math.ceil(!0 === r ? 2 * Math.pow(u, 2) : u), f = [], c = 0; c < a; c++) f.push(e(c + 2));
            return I(i, f)
        }, f.prototype.isPrime = a.prototype.isPrime = u.prototype.isPrime, u.prototype.isProbablePrime = function(r, n) {
            var i = M(this);
            if (t !== i) return i;
            for (var o = this.abs(), u = t === r ? 5 : r, a = [], f = 0; f < u; f++) a.push(e.randBetween(2, o.minus(2), n));
            return I(o, a)
        }, f.prototype.isProbablePrime = a.prototype.isProbablePrime = u.prototype.isProbablePrime, u.prototype.modInv = function(t) {
            for (var r, n, i, o = e.zero, u = e.one, a = H(t), f = this.abs(); !f.isZero();) r = a.divide(f), n = o, i = a, o = u, a = f, u = n.subtract(r.multiply(u)), f = i.subtract(r.multiply(f));
            if (!a.isUnit()) throw Error(this.toString() + " and " + t.toString() + " are not co-prime");
            return (-1 === o.compare(0) && (o = o.add(t)), this.isNegative()) ? o.negate() : o
        }, f.prototype.modInv = a.prototype.modInv = u.prototype.modInv, u.prototype.next = function() {
            var t = this.value;
            return this.sign ? m(t, 1, this.sign) : new u(y(t, 1), this.sign)
        }, a.prototype.next = function() {
            var t = this.value;
            return t + 1 < 9007199254740992 ? new a(t + 1) : new u(r, !1)
        }, f.prototype.next = function() {
            return new f(this.value + BigInt(1))
        }, u.prototype.prev = function() {
            var t = this.value;
            return this.sign ? new u(y(t, 1), !0) : m(t, 1, this.sign)
        }, a.prototype.prev = function() {
            var t = this.value;
            return t - 1 > -9007199254740992 ? new a(t - 1) : new u(r, !0)
        }, f.prototype.prev = function() {
            return new f(this.value - BigInt(1))
        };
        for (var O = [1]; 2 * O[O.length - 1] <= 1e7;) O.push(2 * O[O.length - 1]);
        var N = O.length,
            L = O[N - 1];

        function j(t) {
            return 1e7 >= Math.abs(t)
        }

        function P(t, r, n) {
            r = H(r);
            for (var i = t.isNegative(), o = r.isNegative(), u = i ? t.not() : t, a = o ? r.not() : r, f = 0, c = 0, s = null, l = null, h = []; !u.isZero() || !a.isZero();) f = (s = A(u, L))[1].toJSNumber(), i && (f = L - 1 - f), c = (l = A(a, L))[1].toJSNumber(), o && (c = L - 1 - c), u = s[0], a = l[0], h.push(n(f, c));
            for (var p = 0 !== n(i ? 1 : 0, o ? 1 : 0) ? e(-1) : e(0), v = h.length - 1; v >= 0; v -= 1) p = p.multiply(L).add(e(h[v]));
            return p
        }
        u.prototype.shiftLeft = function(t) {
            var r = H(t).toJSNumber();
            if (!j(r)) throw Error(String(r) + " is too large for shifting.");
            if (r < 0) return this.shiftRight(-r);
            var n = this;
            if (n.isZero()) return n;
            for (; r >= N;) n = n.multiply(L), r -= N - 1;
            return n.multiply(O[r])
        }, f.prototype.shiftLeft = a.prototype.shiftLeft = u.prototype.shiftLeft, u.prototype.shiftRight = function(t) {
            var r, n = H(t).toJSNumber();
            if (!j(n)) throw Error(String(n) + " is too large for shifting.");
            if (n < 0) return this.shiftLeft(-n);
            for (var e = this; n >= N;) {
                if (e.isZero() || e.isNegative() && e.isUnit()) return e;
                e = (r = A(e, L))[1].isNegative() ? r[0].prev() : r[0], n -= N - 1
            }
            return (r = A(e, O[n]))[1].isNegative() ? r[0].prev() : r[0]
        }, f.prototype.shiftRight = a.prototype.shiftRight = u.prototype.shiftRight, u.prototype.not = function() {
            return this.negate().prev()
        }, f.prototype.not = a.prototype.not = u.prototype.not, u.prototype.and = function(t) {
            return P(this, t, function(t, r) {
                return t & r
            })
        }, f.prototype.and = a.prototype.and = u.prototype.and, u.prototype.or = function(t) {
            return P(this, t, function(t, r) {
                return t | r
            })
        }, f.prototype.or = a.prototype.or = u.prototype.or, u.prototype.xor = function(t) {
            return P(this, t, function(t, r) {
                return t ^ r
            })
        }, f.prototype.xor = a.prototype.xor = u.prototype.xor;
        var U = 1073758208;

        function q(t) {
            var r = t.value,
                n = "number" == typeof r ? 1073741824 | r : "bigint" == typeof r ? r | BigInt(1073741824) : r[0] + 1e7 * r[1] | U;
            return n & -n
        }

        function B(t, r) {
            return t = H(t), r = H(r), t.greater(r) ? t : r
        }

        function C(t, r) {
            return t = H(t), r = H(r), t.lesser(r) ? t : r
        }

        function T(t, r) {
            if (t = H(t).abs(), r = H(r).abs(), t.equals(r)) return t;
            if (t.isZero()) return r;
            if (r.isZero()) return t;
            for (var n, e, i = o[1]; t.isEven() && r.isEven();) n = C(q(t), q(r)), t = t.divide(n), r = r.divide(n), i = i.multiply(n);
            for (; t.isEven();) t = t.divide(q(t));
            do {
                for (; r.isEven();) r = r.divide(q(r));
                t.greater(r) && (e = r, r = t, t = e), r = r.subtract(t)
            } while (!r.isZero());
            return i.isUnit() ? t : t.multiply(i)
        }
        u.prototype.bitLength = function() {
            var t = this;
            return (0 > t.compareTo(e(0)) && (t = t.negate().subtract(e(1))), 0 === t.compareTo(e(0))) ? e(0) : e(function t(r, n) {
                if (0 >= n.compareTo(r)) {
                    var i = t(r, n.square(n)),
                        o = i.p,
                        u = i.e,
                        a = o.multiply(n);
                    return 0 >= a.compareTo(r) ? {
                        p: a,
                        e: 2 * u + 1
                    } : {
                        p: o,
                        e: 2 * u
                    }
                }
                return {
                    p: e(1),
                    e: 0
                }
            }(t, e(2)).e).add(e(1))
        }, f.prototype.bitLength = a.prototype.bitLength = u.prototype.bitLength;
        var z = function(t, r, e, i) {
            e = e || n, t = String(t), !i && (t = t.toLowerCase(), e = e.toLowerCase());
            var o, u = t.length,
                a = Math.abs(r),
                f = {};
            for (o = 0; o < e.length; o++) f[e[o]] = o;
            for (o = 0; o < u; o++) {
                var c = t[o];
                if ("-" !== c && c in f && f[c] >= a) {
                    if ("1" === c && 1 === a) continue;
                    throw Error(c + " is not a valid digit in base " + r + ".")
                }
            }
            r = H(r);
            var s = [],
                l = "-" === t[0];
            for (o = l ? 1 : 0; o < t.length; o++) {
                var c = t[o];
                if (c in f) s.push(H(f[c]));
                else if ("<" === c) {
                    var h = o;
                    do o++; while (">" !== t[o] && o < t.length);
                    s.push(H(t.slice(h + 1, o)))
                } else throw Error(c + " is not a valid character")
            }
            return D(s, r, l)
        };

        function D(t, r, n) {
            var e, i = o[0],
                u = o[1];
            for (e = t.length - 1; e >= 0; e--) i = i.add(t[e].times(u)), u = u.times(r);
            return n ? i.negate() : i
        }

        function F(t, r) {
            if ((r = e(r)).isZero()) {
                if (t.isZero()) return {
                    value: [0],
                    isNegative: !1
                };
                throw Error("Cannot convert nonzero numbers to base 0.")
            }
            if (r.equals(-1)) {
                if (t.isZero()) return {
                    value: [0],
                    isNegative: !1
                };
                if (t.isNegative()) return {
                    value: [].concat.apply([], Array.apply(null, Array(-t.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
                    isNegative: !1
                };
                var n = Array.apply(null, Array(t.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
                return n.unshift([1]), {
                    value: [].concat.apply([], n),
                    isNegative: !1
                }
            }
            var i = !1;
            if (t.isNegative() && r.isPositive() && (i = !0, t = t.abs()), r.isUnit()) return t.isZero() ? {
                value: [0],
                isNegative: !1
            } : {
                value: Array.apply(null, Array(t.toJSNumber())).map(Number.prototype.valueOf, 1),
                isNegative: i
            };
            for (var o = [], u, a = t; a.isNegative() || a.compareAbs(r) >= 0;) {
                a = (u = a.divmod(r)).quotient;
                var f = u.remainder;
                f.isNegative() && (f = r.minus(f).abs(), a = a.next()), o.push(f.toJSNumber())
            }
            return o.push(a.toJSNumber()), {
                value: o.reverse(),
                isNegative: i
            }
        }

        function W(t, r, e) {
            var i = F(t, r);
            return (i.isNegative ? "-" : "") + i.value.map(function(t) {
                var r, i;
                return (r = t) < (i = (i = e) || n).length ? i[r] : "<" + r + ">"
            }).join("")
        }

        function $(t) {
            if (c(+t)) {
                var r = +t;
                if (r === v(r)) return i ? new f(BigInt(r)) : new a(r);
                throw Error("Invalid integer: " + t)
            }
            var n = "-" === t[0];
            n && (t = t.slice(1));
            var e = t.split(/e/i);
            if (e.length > 2) throw Error("Invalid integer: " + e.join("e"));
            if (2 === e.length) {
                var o = e[1];
                if ("+" === o[0] && (o = o.slice(1)), (o = +o) !== v(o) || !c(o)) throw Error("Invalid integer: " + o + " is not a valid exponent.");
                var s = e[0],
                    l = s.indexOf(".");
                if (l >= 0 && (o -= s.length - l - 1, s = s.slice(0, l) + s.slice(l + 1)), o < 0) throw Error("Cannot include negative exponent part for integers");
                s += Array(o + 1).join("0"), t = s
            }
            if (!/^([0-9][0-9]*)$/.test(t)) throw Error("Invalid integer: " + t);
            if (i) return new f(BigInt(n ? "-" + t : t));
            for (var p = [], g = t.length, d = g - 7; g > 0;) p.push(+t.slice(d, g)), (d -= 7) < 0 && (d = 0), g -= 7;
            return h(p), new u(p, n)
        }
        u.prototype.toArray = function(t) {
            return F(this, t)
        }, a.prototype.toArray = function(t) {
            return F(this, t)
        }, f.prototype.toArray = function(t) {
            return F(this, t)
        }, u.prototype.toString = function(r, n) {
            if (t === r && (r = 10), 10 !== r) return W(this, r, n);
            for (var e, i = this.value, o = i.length, u = String(i[--o]); --o >= 0;) e = String(i[o]), u += "0000000".slice(e.length) + e;
            return (this.sign ? "-" : "") + u
        }, a.prototype.toString = function(r, n) {
            return (t === r && (r = 10), 10 != r) ? W(this, r, n) : String(this.value)
        }, f.prototype.toString = a.prototype.toString, f.prototype.toJSON = u.prototype.toJSON = a.prototype.toJSON = function() {
            return this.toString()
        }, u.prototype.valueOf = function() {
            return parseInt(this.toString(), 10)
        }, u.prototype.toJSNumber = u.prototype.valueOf, a.prototype.valueOf = function() {
            return this.value
        }, a.prototype.toJSNumber = a.prototype.valueOf, f.prototype.valueOf = f.prototype.toJSNumber = function() {
            return parseInt(this.toString(), 10)
        };

        function H(t) {
            return "number" == typeof t ? function(t) {
                if (i) return new f(BigInt(t));
                if (c(t)) {
                    if (t !== v(t)) throw Error(t + " is not an integer.");
                    return new a(t)
                }
                return $(t.toString())
            }(t) : "string" == typeof t ? $(t) : "bigint" == typeof t ? new f(t) : t
        }
        for (var Z = 0; Z < 1e3; Z++) o[Z] = H(Z), Z > 0 && (o[-Z] = H(-Z));
        return o.one = o[1], o.zero = o[0], o.minusOne = o[-1], o.max = B, o.min = C, o.gcd = T, o.lcm = function(t, r) {
            return t = H(t).abs(), r = H(r).abs(), t.divide(T(t, r)).multiply(r)
        }, o.isInstance = function(t) {
            return t instanceof u || t instanceof a || t instanceof f
        }, o.randBetween = function(t, r, n) {
            t = H(t), r = H(r);
            var e = n || Math.random,
                i = C(t, r),
                u = B(t, r).subtract(i).add(1);
            if (u.isSmall) return i.add(Math.floor(e() * u));
            for (var a = F(u, 1e7).value, f = [], c = !0, s = 0; s < a.length; s++) {
                var l = c ? a[s] : 1e7,
                    h = v(e() * l);
                f.push(h), h < l && (c = !1)
            }
            return i.add(o.fromArray(f, 1e7, !1))
        }, o.fromArray = function(t, r, n) {
            return D(t.map(H), H(r || 10), n)
        }, o
    }();
    void 0 !== t && t.hasOwnProperty("exports") && (t.exports = e), "function" == typeof define && define.amd && define(function() {
        return e
    })
}