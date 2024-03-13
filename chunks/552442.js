function(t, r, e) {
    t = e.nmd(t), e("424973"), e("843762"), e("854508"), e("70102"), e("274635");
    var n = function(t) {
        "use strict";
        var r = c(9007199254740992),
            e = "0123456789abcdefghijklmnopqrstuvwxyz",
            o = "function" == typeof BigInt;

        function i(t, r, e, n) {
            return void 0 === t ? i[0] : void 0 !== r ? 10 != +r || e ? z(t, r, e, n) : $(t) : $(t)
        }

        function a(t, r) {
            this.value = t, this.sign = r, this.isSmall = !1
        }

        function u(t) {
            this.value = t, this.sign = t < 0, this.isSmall = !0
        }

        function s(t) {
            this.value = t
        }

        function f(t) {
            return -9007199254740992 < t && t < 9007199254740992
        }

        function c(t) {
            return t < 1e7 ? [t] : t < 1e14 ? [t % 1e7, Math.floor(t / 1e7)] : [t % 1e7, Math.floor(t / 1e7) % 1e7, Math.floor(t / 1e14)]
        }

        function l(t) {
            h(t);
            var e = t.length;
            if (e < 4 && 0 > R(t, r)) switch (e) {
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
            for (var r = Array(t), e = -1; ++e < t;) r[e] = 0;
            return r
        }

        function v(t) {
            return t > 0 ? Math.floor(t) : Math.ceil(t)
        }

        function d(t, r) {
            var e, n, o = t.length,
                i = r.length,
                a = Array(o),
                u = 0;
            for (n = 0; n < i; n++) u = (e = t[n] + r[n] + u) >= 1e7 ? 1 : 0, a[n] = e - 1e7 * u;
            for (; n < o;) u = 1e7 === (e = t[n] + u) ? 1 : 0, a[n++] = e - 1e7 * u;
            return u > 0 && a.push(u), a
        }

        function g(t, r) {
            return t.length >= r.length ? d(t, r) : d(r, t)
        }

        function b(t, r) {
            var e, n, o = t.length,
                i = Array(o);
            for (n = 0; n < o; n++) r = Math.floor((e = t[n] - 1e7 + r) / 1e7), i[n] = e - 1e7 * r, r += 1;
            for (; r > 0;) i[n++] = r % 1e7, r = Math.floor(r / 1e7);
            return i
        }

        function y(t, r) {
            var e, n, o = t.length,
                i = r.length,
                a = Array(o),
                u = 0;
            for (e = 0; e < i; e++)(n = t[e] - u - r[e]) < 0 ? (n += 1e7, u = 1) : u = 0, a[e] = n;
            for (e = i; e < o; e++) {
                if ((n = t[e] - u) < 0) n += 1e7;
                else {
                    a[e++] = n;
                    break
                }
                a[e] = n
            }
            for (; e < o; e++) a[e] = t[e];
            return h(a), a
        }
        a.prototype = Object.create(i.prototype), u.prototype = Object.create(i.prototype), s.prototype = Object.create(i.prototype), a.prototype.add = function(t) {
            var r = $(t);
            if (this.sign !== r.sign) return this.subtract(r.negate());
            var e = this.value,
                n = r.value;
            return r.isSmall ? new a(b(e, Math.abs(n)), this.sign) : new a(g(e, n), this.sign)
        }, a.prototype.plus = a.prototype.add, u.prototype.add = function(t) {
            var r = $(t),
                e = this.value;
            if (e < 0 !== r.sign) return this.subtract(r.negate());
            var n = r.value;
            if (r.isSmall) {
                if (f(e + n)) return new u(e + n);
                n = c(Math.abs(n))
            }
            return new a(b(n, Math.abs(e)), e < 0)
        }, u.prototype.plus = u.prototype.add, s.prototype.add = function(t) {
            return new s(this.value + $(t).value)
        }, s.prototype.plus = s.prototype.add;

        function m(t, r, e) {
            var n, o, i = t.length,
                s = Array(i),
                f = -r;
            for (n = 0; n < i; n++) f = Math.floor((o = t[n] + f) / 1e7), o %= 1e7, s[n] = o < 0 ? o + 1e7 : o;
            return "number" == typeof(s = l(s)) ? (e && (s = -s), new u(s)) : new a(s, e)
        }

        function w(t, r) {
            var e, n, o, i, a = t.length,
                u = r.length,
                s = p(a + u);
            for (o = 0; o < a; ++o) {
                i = t[o];
                for (var f = 0; f < u; ++f) n = Math.floor((e = i * r[f] + s[o + f]) / 1e7), s[o + f] = e - 1e7 * n, s[o + f + 1] += n
            }
            return h(s), s
        }

        function _(t, r) {
            var e, n, o = t.length,
                i = Array(o),
                a = 0;
            for (n = 0; n < o; n++) a = Math.floor((e = t[n] * r + a) / 1e7), i[n] = e - 1e7 * a;
            for (; a > 0;) i[n++] = a % 1e7, a = Math.floor(a / 1e7);
            return i
        }

        function k(t, r) {
            for (var e = []; r-- > 0;) e.push(0);
            return e.concat(t)
        }
        a.prototype.subtract = function(t) {
            var r, e, n, o, i = $(t);
            if (this.sign !== i.sign) return this.add(i.negate());
            var s = this.value,
                f = i.value;
            if (i.isSmall) return m(s, Math.abs(f), this.sign);
            return r = s, e = f, n = this.sign, (R(r, e) >= 0 ? o = y(r, e) : (o = y(e, r), n = !n), "number" == typeof(o = l(o))) ? (n && (o = -o), new u(o)) : new a(o, n)
        }, a.prototype.minus = a.prototype.subtract, u.prototype.subtract = function(t) {
            var r = $(t),
                e = this.value;
            if (e < 0 !== r.sign) return this.add(r.negate());
            var n = r.value;
            return r.isSmall ? new u(e - n) : m(n, Math.abs(e), e >= 0)
        }, u.prototype.minus = u.prototype.subtract, s.prototype.subtract = function(t) {
            return new s(this.value - $(t).value)
        }, s.prototype.minus = s.prototype.subtract, a.prototype.negate = function() {
            return new a(this.value, !this.sign)
        }, u.prototype.negate = function() {
            var t = this.sign,
                r = new u(-this.value);
            return r.sign = !t, r
        }, s.prototype.negate = function() {
            return new s(-this.value)
        }, a.prototype.abs = function() {
            return new a(this.value, !1)
        }, u.prototype.abs = function() {
            return new u(Math.abs(this.value))
        }, s.prototype.abs = function() {
            return new s(this.value >= 0 ? this.value : -this.value)
        };

        function x(t, r, e) {
            return t < 1e7 ? new a(_(r, t), e) : new a(w(r, c(t)), e)
        }

        function E(t) {
            var r, e, n, o, i = t.length,
                a = p(i + i);
            for (n = 0; n < i; n++) {
                e = 0 - (o = t[n]) * o;
                for (var u = n; u < i; u++) e = Math.floor((r = 2 * (o * t[u]) + a[n + u] + e) / 1e7), a[n + u] = r - 1e7 * e;
                a[n + i] = e
            }
            return h(a), a
        }
        a.prototype.multiply = function(t) {
            var r, e, n, o = $(t),
                u = this.value,
                s = o.value,
                f = this.sign !== o.sign;
            if (o.isSmall) {
                if (0 === s) return i[0];
                if (1 === s) return this;
                if (-1 === s) return this.negate();
                if ((n = Math.abs(s)) < 1e7) return new a(_(u, n), f);
                s = c(n)
            }
            return (r = u.length, -.012 * r - .012 * (e = s.length) + 15e-6 * r * e > 0) ? new a(function t(r, e) {
                var n = Math.max(r.length, e.length);
                if (n <= 30) return w(r, e);
                n = Math.ceil(n / 2);
                var o = r.slice(n),
                    i = r.slice(0, n),
                    a = e.slice(n),
                    u = e.slice(0, n),
                    s = t(i, u),
                    f = t(o, a),
                    c = t(g(i, o), g(u, a)),
                    l = g(g(s, k(y(y(c, s), f), n)), k(f, 2 * n));
                return h(l), l
            }(u, s), f) : new a(w(u, s), f)
        }, a.prototype.times = a.prototype.multiply, u.prototype._multiplyBySmall = function(t) {
            return f(t.value * this.value) ? new u(t.value * this.value) : x(Math.abs(t.value), c(Math.abs(this.value)), this.sign !== t.sign)
        }, a.prototype._multiplyBySmall = function(t) {
            return 0 === t.value ? i[0] : 1 === t.value ? this : -1 === t.value ? this.negate() : x(Math.abs(t.value), this.value, this.sign !== t.sign)
        }, u.prototype.multiply = function(t) {
            return $(t)._multiplyBySmall(this)
        }, u.prototype.times = u.prototype.multiply, s.prototype.multiply = function(t) {
            return new s(this.value * $(t).value)
        }, s.prototype.times = s.prototype.multiply, a.prototype.square = function() {
            return new a(E(this.value), !1)
        }, u.prototype.square = function() {
            var t = this.value * this.value;
            return f(t) ? new u(t) : new a(E(c(Math.abs(this.value))), !1)
        }, s.prototype.square = function(t) {
            return new s(this.value * this.value)
        };

        function S(t, r) {
            var e, n, o, i, a = t.length,
                u = p(a);
            for (o = 0, e = a - 1; e >= 0; --e) n = v((i = 1e7 * o + t[e]) / r), o = i - n * r, u[e] = 0 | n;
            return [u, 0 | o]
        }

        function M(t, r) {
            var e, n, f = $(r);
            if (o) return [new s(t.value / f.value), new s(t.value % f.value)];
            var d = t.value,
                g = f.value;
            if (0 === g) throw Error("Cannot divide by zero");
            if (t.isSmall) return f.isSmall ? [new u(v(d / g)), new u(d % g)] : [i[0], t];
            if (f.isSmall) {
                if (1 === g) return [t, i[0]];
                if (-1 == g) return [t.negate(), i[0]];
                var b = Math.abs(g);
                if (b < 1e7) {
                    e = l((n = S(d, b))[0]);
                    var m = n[1];
                    return (t.sign && (m = -m), "number" == typeof e) ? (t.sign !== f.sign && (e = -e), [new u(e), new u(m)]) : [new a(e, t.sign !== f.sign), new u(m)]
                }
                g = c(b)
            }
            var w = R(d, g);
            if (-1 === w) return [i[0], t];
            if (0 === w) return [i[t.sign === f.sign ? 1 : -1], i[0]];
            e = (n = d.length + g.length <= 200 ? function(t, r) {
                var e, n, o, i, a, u, s, f = t.length,
                    c = r.length,
                    h = p(r.length),
                    v = r[c - 1],
                    d = Math.ceil(1e7 / (2 * v)),
                    g = _(t, d),
                    b = _(r, d);
                for (g.length <= f && g.push(0), b.push(0), v = b[c - 1], n = f - c; n >= 0; n--) {
                    for (e = 1e7 - 1, g[n + c] !== v && (e = Math.floor((1e7 * g[n + c] + g[n + c - 1]) / v)), o = 0, i = 0, u = b.length, a = 0; a < u; a++) o += e * b[a], s = Math.floor(o / 1e7), i += g[n + a] - (o - 1e7 * s), o = s, i < 0 ? (g[n + a] = i + 1e7, i = -1) : (g[n + a] = i, i = 0);
                    for (; 0 !== i;) {
                        for (e -= 1, o = 0, a = 0; a < u; a++)(o += g[n + a] - 1e7 + b[a]) < 0 ? (g[n + a] = o + 1e7, o = 0) : (g[n + a] = o, o = 1);
                        i += o
                    }
                    h[n] = e
                }
                return g = S(g, d)[0], [l(h), l(g)]
            }(d, g) : function(t, r) {
                for (var e, n, o, i, a, u = t.length, s = r.length, f = [], c = []; u;) {
                    if (c.unshift(t[--u]), h(c), 0 > R(c, r)) {
                        f.push(0);
                        continue
                    }
                    n = c.length, o = 1e7 * c[n - 1] + c[n - 2], i = 1e7 * r[s - 1] + r[s - 2], n > s && (o = (o + 1) * 1e7), e = Math.ceil(o / i);
                    do {
                        if (0 >= R(a = _(r, e), c)) break;
                        e--
                    } while (e);
                    f.push(e), c = y(c, a)
                }
                return f.reverse(), [l(f), l(c)]
            }(d, g))[0];
            var k = t.sign !== f.sign,
                x = n[1],
                E = t.sign;
            return "number" == typeof e ? (k && (e = -e), e = new u(e)) : e = new a(e, k), "number" == typeof x ? (E && (x = -x), x = new u(x)) : x = new a(x, E), [e, x]
        }

        function R(t, r) {
            if (t.length !== r.length) return t.length > r.length ? 1 : -1;
            for (var e = t.length - 1; e >= 0; e--)
                if (t[e] !== r[e]) return t[e] > r[e] ? 1 : -1;
            return 0
        }

        function O(t) {
            var r = t.abs();
            return !r.isUnit() && (!!(r.equals(2) || r.equals(3) || r.equals(5)) || !(r.isEven() || r.isDivisibleBy(3) || r.isDivisibleBy(5)) && (!!r.lesser(49) || void 0))
        }

        function j(t, r) {
            for (var e, o, i, a = t.prev(), u = a, s = 0; u.isEven();) u = u.divide(2), s++;
            t: for (o = 0; o < r.length; o++) {
                if (!t.lesser(r[o])) {
                    if (!((i = n(r[o]).modPow(u, t)).isUnit() || i.equals(a))) {
                        for (e = s - 1; 0 != e && !(i = i.square().mod(t)).isUnit(); e--) {
                            ;
                            if (i.equals(a)) continue t
                        }
                        return !1
                    }
                }
            }
            return !0
        }
        a.prototype.divmod = function(t) {
            var r = M(this, t);
            return {
                quotient: r[0],
                remainder: r[1]
            }
        }, s.prototype.divmod = u.prototype.divmod = a.prototype.divmod, a.prototype.divide = function(t) {
            return M(this, t)[0]
        }, s.prototype.over = s.prototype.divide = function(t) {
            return new s(this.value / $(t).value)
        }, u.prototype.over = u.prototype.divide = a.prototype.over = a.prototype.divide, a.prototype.mod = function(t) {
            return M(this, t)[1]
        }, s.prototype.mod = s.prototype.remainder = function(t) {
            return new s(this.value % $(t).value)
        }, u.prototype.remainder = u.prototype.mod = a.prototype.remainder = a.prototype.mod, a.prototype.pow = function(t) {
            var r, e, n, o = $(t),
                a = this.value,
                s = o.value;
            if (0 === s) return i[1];
            if (0 === a) return i[0];
            if (1 === a) return i[1];
            if (-1 === a) return o.isEven() ? i[1] : i[-1];
            if (o.sign) return i[0];
            if (!o.isSmall) throw Error("The exponent " + o.toString() + " is too large.");
            if (this.isSmall && f(r = Math.pow(a, s))) return new u(v(r));
            for (e = this, n = i[1]; !0 & s && (n = n.times(e), --s), 0 !== s;) {
                ;
                s /= 2, e = e.square()
            }
            return n
        }, u.prototype.pow = a.prototype.pow, s.prototype.pow = function(t) {
            var r = $(t),
                e = this.value,
                n = r.value,
                o = BigInt(0),
                a = BigInt(1),
                u = BigInt(2);
            if (n === o) return i[1];
            if (e === o) return i[0];
            if (e === a) return i[1];
            if (e === BigInt(-1)) return r.isEven() ? i[1] : i[-1];
            if (r.isNegative()) return new s(o);
            for (var f = this, c = i[1];
                (n & a) === a && (c = c.times(f), --n), n !== o;) {
                ;
                n /= u, f = f.square()
            }
            return c
        }, a.prototype.modPow = function(t, r) {
            if (t = $(t), (r = $(r)).isZero()) throw Error("Cannot take modPow with modulus 0");
            var e = i[1],
                n = this.mod(r);
            for (t.isNegative() && (t = t.multiply(i[-1]), n = n.modInv(r)); t.isPositive();) {
                if (n.isZero()) return i[0];
                t.isOdd() && (e = e.multiply(n).mod(r)), t = t.divide(2), n = n.square().mod(r)
            }
            return e
        }, s.prototype.modPow = u.prototype.modPow = a.prototype.modPow, a.prototype.compareAbs = function(t) {
            var r = $(t),
                e = this.value,
                n = r.value;
            return r.isSmall ? 1 : R(e, n)
        }, u.prototype.compareAbs = function(t) {
            var r = $(t),
                e = Math.abs(this.value),
                n = r.value;
            return r.isSmall ? e === (n = Math.abs(n)) ? 0 : e > n ? 1 : -1 : -1
        }, s.prototype.compareAbs = function(t) {
            var r = this.value,
                e = $(t).value;
            return (r = r >= 0 ? r : -r) === (e = e >= 0 ? e : -e) ? 0 : r > e ? 1 : -1
        }, a.prototype.compare = function(t) {
            if (t === 1 / 0) return -1;
            if (t === -1 / 0) return 1;
            var r = $(t),
                e = this.value,
                n = r.value;
            return this.sign !== r.sign ? r.sign ? 1 : -1 : r.isSmall ? this.sign ? -1 : 1 : R(e, n) * (this.sign ? -1 : 1)
        }, a.prototype.compareTo = a.prototype.compare, u.prototype.compare = function(t) {
            if (t === 1 / 0) return -1;
            if (t === -1 / 0) return 1;
            var r = $(t),
                e = this.value,
                n = r.value;
            return r.isSmall ? e == n ? 0 : e > n ? 1 : -1 : e < 0 !== r.sign ? e < 0 ? -1 : 1 : e < 0 ? 1 : -1
        }, u.prototype.compareTo = u.prototype.compare, s.prototype.compare = function(t) {
            if (t === 1 / 0) return -1;
            if (t === -1 / 0) return 1;
            var r = this.value,
                e = $(t).value;
            return r === e ? 0 : r > e ? 1 : -1
        }, s.prototype.compareTo = s.prototype.compare, a.prototype.equals = function(t) {
            return 0 === this.compare(t)
        }, s.prototype.eq = s.prototype.equals = u.prototype.eq = u.prototype.equals = a.prototype.eq = a.prototype.equals, a.prototype.notEquals = function(t) {
            return 0 !== this.compare(t)
        }, s.prototype.neq = s.prototype.notEquals = u.prototype.neq = u.prototype.notEquals = a.prototype.neq = a.prototype.notEquals, a.prototype.greater = function(t) {
            return this.compare(t) > 0
        }, s.prototype.gt = s.prototype.greater = u.prototype.gt = u.prototype.greater = a.prototype.gt = a.prototype.greater, a.prototype.lesser = function(t) {
            return 0 > this.compare(t)
        }, s.prototype.lt = s.prototype.lesser = u.prototype.lt = u.prototype.lesser = a.prototype.lt = a.prototype.lesser, a.prototype.greaterOrEquals = function(t) {
            return this.compare(t) >= 0
        }, s.prototype.geq = s.prototype.greaterOrEquals = u.prototype.geq = u.prototype.greaterOrEquals = a.prototype.geq = a.prototype.greaterOrEquals, a.prototype.lesserOrEquals = function(t) {
            return 0 >= this.compare(t)
        }, s.prototype.leq = s.prototype.lesserOrEquals = u.prototype.leq = u.prototype.lesserOrEquals = a.prototype.leq = a.prototype.lesserOrEquals, a.prototype.isEven = function() {
            return (1 & this.value[0]) == 0
        }, u.prototype.isEven = function() {
            return (1 & this.value) == 0
        }, s.prototype.isEven = function() {
            return (this.value & BigInt(1)) === BigInt(0)
        }, a.prototype.isOdd = function() {
            return (1 & this.value[0]) == 1
        }, u.prototype.isOdd = function() {
            return (1 & this.value) == 1
        }, s.prototype.isOdd = function() {
            return (this.value & BigInt(1)) === BigInt(1)
        }, a.prototype.isPositive = function() {
            return !this.sign
        }, u.prototype.isPositive = function() {
            return this.value > 0
        }, s.prototype.isPositive = u.prototype.isPositive, a.prototype.isNegative = function() {
            return this.sign
        }, u.prototype.isNegative = function() {
            return this.value < 0
        }, s.prototype.isNegative = u.prototype.isNegative, a.prototype.isUnit = function() {
            return !1
        }, u.prototype.isUnit = function() {
            return 1 === Math.abs(this.value)
        }, s.prototype.isUnit = function() {
            return this.abs().value === BigInt(1)
        }, a.prototype.isZero = function() {
            return !1
        }, u.prototype.isZero = function() {
            return 0 === this.value
        }, s.prototype.isZero = function() {
            return this.value === BigInt(0)
        }, a.prototype.isDivisibleBy = function(t) {
            var r = $(t);
            return !r.isZero() && (!!r.isUnit() || (0 === r.compareAbs(2) ? this.isEven() : this.mod(r).isZero()))
        }, s.prototype.isDivisibleBy = u.prototype.isDivisibleBy = a.prototype.isDivisibleBy, a.prototype.isPrime = function(r) {
            var e = O(this);
            if (t !== e) return e;
            var o = this.abs(),
                i = o.bitLength();
            if (i <= 64) return j(o, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (var a = Math.log(2) * i.toJSNumber(), u = Math.ceil(!0 === r ? 2 * Math.pow(a, 2) : a), s = [], f = 0; f < u; f++) s.push(n(f + 2));
            return j(o, s)
        }, s.prototype.isPrime = u.prototype.isPrime = a.prototype.isPrime, a.prototype.isProbablePrime = function(r, e) {
            var o = O(this);
            if (t !== o) return o;
            for (var i = this.abs(), a = t === r ? 5 : r, u = [], s = 0; s < a; s++) u.push(n.randBetween(2, i.minus(2), e));
            return j(i, u)
        }, s.prototype.isProbablePrime = u.prototype.isProbablePrime = a.prototype.isProbablePrime, a.prototype.modInv = function(t) {
            for (var r, e, o, i = n.zero, a = n.one, u = $(t), s = this.abs(); !s.isZero();) r = u.divide(s), e = i, o = u, i = a, u = s, a = e.subtract(r.multiply(a)), s = o.subtract(r.multiply(s));
            if (!u.isUnit()) throw Error(this.toString() + " and " + t.toString() + " are not co-prime");
            return (-1 === i.compare(0) && (i = i.add(t)), this.isNegative()) ? i.negate() : i
        }, s.prototype.modInv = u.prototype.modInv = a.prototype.modInv, a.prototype.next = function() {
            var t = this.value;
            return this.sign ? m(t, 1, this.sign) : new a(b(t, 1), this.sign)
        }, u.prototype.next = function() {
            var t = this.value;
            return t + 1 < 9007199254740992 ? new u(t + 1) : new a(r, !1)
        }, s.prototype.next = function() {
            return new s(this.value + BigInt(1))
        }, a.prototype.prev = function() {
            var t = this.value;
            return this.sign ? new a(b(t, 1), !0) : m(t, 1, this.sign)
        }, u.prototype.prev = function() {
            var t = this.value;
            return t - 1 > -9007199254740992 ? new u(t - 1) : new a(r, !0)
        }, s.prototype.prev = function() {
            return new s(this.value - BigInt(1))
        };
        for (var A = [1]; 2 * A[A.length - 1] <= 1e7;) A.push(2 * A[A.length - 1]);
        var N = A.length,
            P = A[N - 1];

        function I(t) {
            return 1e7 >= Math.abs(t)
        }

        function q(t, r, e) {
            r = $(r);
            for (var o = t.isNegative(), i = r.isNegative(), a = o ? t.not() : t, u = i ? r.not() : r, s = 0, f = 0, c = null, l = null, h = []; !a.isZero() || !u.isZero();) s = (c = M(a, P))[1].toJSNumber(), o && (s = P - 1 - s), f = (l = M(u, P))[1].toJSNumber(), i && (f = P - 1 - f), a = c[0], u = l[0], h.push(e(s, f));
            for (var p = 0 !== e(o ? 1 : 0, i ? 1 : 0) ? n(-1) : n(0), v = h.length - 1; v >= 0; v -= 1) p = p.multiply(P).add(n(h[v]));
            return p
        }
        a.prototype.shiftLeft = function(t) {
            var r = $(t).toJSNumber();
            if (!I(r)) throw Error(String(r) + " is too large for shifting.");
            if (r < 0) return this.shiftRight(-r);
            var e = this;
            if (e.isZero()) return e;
            for (; r >= N;) e = e.multiply(P), r -= N - 1;
            return e.multiply(A[r])
        }, s.prototype.shiftLeft = u.prototype.shiftLeft = a.prototype.shiftLeft, a.prototype.shiftRight = function(t) {
            var r, e = $(t).toJSNumber();
            if (!I(e)) throw Error(String(e) + " is too large for shifting.");
            if (e < 0) return this.shiftLeft(-e);
            for (var n = this; e >= N;) {
                if (n.isZero() || n.isNegative() && n.isUnit()) return n;
                n = (r = M(n, P))[1].isNegative() ? r[0].prev() : r[0], e -= N - 1
            }
            return (r = M(n, A[e]))[1].isNegative() ? r[0].prev() : r[0]
        }, s.prototype.shiftRight = u.prototype.shiftRight = a.prototype.shiftRight, a.prototype.not = function() {
            return this.negate().prev()
        }, s.prototype.not = u.prototype.not = a.prototype.not, a.prototype.and = function(t) {
            return q(this, t, function(t, r) {
                return t & r
            })
        }, s.prototype.and = u.prototype.and = a.prototype.and, a.prototype.or = function(t) {
            return q(this, t, function(t, r) {
                return t | r
            })
        }, s.prototype.or = u.prototype.or = a.prototype.or, a.prototype.xor = function(t) {
            return q(this, t, function(t, r) {
                return t ^ r
            })
        }, s.prototype.xor = u.prototype.xor = a.prototype.xor;
        var U = 1073758208;

        function L(t) {
            var r = t.value,
                e = "number" == typeof r ? 1073741824 | r : "bigint" == typeof r ? r | BigInt(1073741824) : r[0] + 1e7 * r[1] | U;
            return e & -e
        }

        function B(t, r) {
            return t = $(t), r = $(r), t.greater(r) ? t : r
        }

        function T(t, r) {
            return t = $(t), r = $(r), t.lesser(r) ? t : r
        }

        function C(t, r) {
            if (t = $(t).abs(), r = $(r).abs(), t.equals(r)) return t;
            if (t.isZero()) return r;
            if (r.isZero()) return t;
            for (var e, n, o = i[1]; t.isEven() && r.isEven();) e = T(L(t), L(r)), t = t.divide(e), r = r.divide(e), o = o.multiply(e);
            for (; t.isEven();) t = t.divide(L(t));
            do {
                for (; r.isEven();) r = r.divide(L(r));
                t.greater(r) && (n = r, r = t, t = n), r = r.subtract(t)
            } while (!r.isZero());
            return o.isUnit() ? t : t.multiply(o)
        }
        a.prototype.bitLength = function() {
            var t = this;
            return (0 > t.compareTo(n(0)) && (t = t.negate().subtract(n(1))), 0 === t.compareTo(n(0))) ? n(0) : n(function t(r, e) {
                if (0 >= e.compareTo(r)) {
                    var o = t(r, e.square(e)),
                        i = o.p,
                        a = o.e,
                        u = i.multiply(e);
                    return 0 >= u.compareTo(r) ? {
                        p: u,
                        e: 2 * a + 1
                    } : {
                        p: i,
                        e: 2 * a
                    }
                }
                return {
                    p: n(1),
                    e: 0
                }
            }(t, n(2)).e).add(n(1))
        }, s.prototype.bitLength = u.prototype.bitLength = a.prototype.bitLength;
        var z = function(t, r, n, o) {
            n = n || e, t = String(t), !o && (t = t.toLowerCase(), n = n.toLowerCase());
            var i, a = t.length,
                u = Math.abs(r),
                s = {};
            for (i = 0; i < n.length; i++) s[n[i]] = i;
            for (i = 0; i < a; i++) {
                var f = t[i];
                if ("-" !== f && f in s && s[f] >= u) {
                    if ("1" === f && 1 === u) continue;
                    throw Error(f + " is not a valid digit in base " + r + ".")
                }
            }
            r = $(r);
            var c = [],
                l = "-" === t[0];
            for (i = l ? 1 : 0; i < t.length; i++) {
                var f = t[i];
                if (f in s) c.push($(s[f]));
                else if ("<" === f) {
                    var h = i;
                    do i++; while (">" !== t[i] && i < t.length);
                    c.push($(t.slice(h + 1, i)))
                } else throw Error(f + " is not a valid character")
            }
            return D(c, r, l)
        };

        function D(t, r, e) {
            var n, o = i[0],
                a = i[1];
            for (n = t.length - 1; n >= 0; n--) o = o.add(t[n].times(a)), a = a.times(r);
            return e ? o.negate() : o
        }

        function F(t, r) {
            if ((r = n(r)).isZero()) {
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
                var e = Array.apply(null, Array(t.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
                return e.unshift([1]), {
                    value: [].concat.apply([], e),
                    isNegative: !1
                }
            }
            var o = !1;
            if (t.isNegative() && r.isPositive() && (o = !0, t = t.abs()), r.isUnit()) return t.isZero() ? {
                value: [0],
                isNegative: !1
            } : {
                value: Array.apply(null, Array(t.toJSNumber())).map(Number.prototype.valueOf, 1),
                isNegative: o
            };
            for (var i = [], a, u = t; u.isNegative() || u.compareAbs(r) >= 0;) {
                u = (a = u.divmod(r)).quotient;
                var s = a.remainder;
                s.isNegative() && (s = r.minus(s).abs(), u = u.next()), i.push(s.toJSNumber())
            }
            return i.push(u.toJSNumber()), {
                value: i.reverse(),
                isNegative: o
            }
        }

        function H(t, r, n) {
            var o = F(t, r);
            return (o.isNegative ? "-" : "") + o.value.map(function(t) {
                var r, o;
                return (r = t) < (o = (o = n) || e).length ? o[r] : "<" + r + ">"
            }).join("")
        }

        function Z(t) {
            if (f(+t)) {
                var r = +t;
                if (r === v(r)) return o ? new s(BigInt(r)) : new u(r);
                throw Error("Invalid integer: " + t)
            }
            var e = "-" === t[0];
            e && (t = t.slice(1));
            var n = t.split(/e/i);
            if (n.length > 2) throw Error("Invalid integer: " + n.join("e"));
            if (2 === n.length) {
                var i = n[1];
                if ("+" === i[0] && (i = i.slice(1)), (i = +i) !== v(i) || !f(i)) throw Error("Invalid integer: " + i + " is not a valid exponent.");
                var c = n[0],
                    l = c.indexOf(".");
                if (l >= 0 && (i -= c.length - l - 1, c = c.slice(0, l) + c.slice(l + 1)), i < 0) throw Error("Cannot include negative exponent part for integers");
                c += Array(i + 1).join("0"), t = c
            }
            if (!/^([0-9][0-9]*)$/.test(t)) throw Error("Invalid integer: " + t);
            if (o) return new s(BigInt(e ? "-" + t : t));
            for (var p = [], d = t.length, g = d - 7; d > 0;) p.push(+t.slice(g, d)), (g -= 7) < 0 && (g = 0), d -= 7;
            return h(p), new a(p, e)
        }
        a.prototype.toArray = function(t) {
            return F(this, t)
        }, u.prototype.toArray = function(t) {
            return F(this, t)
        }, s.prototype.toArray = function(t) {
            return F(this, t)
        }, a.prototype.toString = function(r, e) {
            if (t === r && (r = 10), 10 !== r) return H(this, r, e);
            for (var n, o = this.value, i = o.length, a = String(o[--i]); --i >= 0;) n = String(o[i]), a += "0000000".slice(n.length) + n;
            return (this.sign ? "-" : "") + a
        }, u.prototype.toString = function(r, e) {
            return (t === r && (r = 10), 10 != r) ? H(this, r, e) : String(this.value)
        }, s.prototype.toString = u.prototype.toString, s.prototype.toJSON = a.prototype.toJSON = u.prototype.toJSON = function() {
            return this.toString()
        }, a.prototype.valueOf = function() {
            return parseInt(this.toString(), 10)
        }, a.prototype.toJSNumber = a.prototype.valueOf, u.prototype.valueOf = function() {
            return this.value
        }, u.prototype.toJSNumber = u.prototype.valueOf, s.prototype.valueOf = s.prototype.toJSNumber = function() {
            return parseInt(this.toString(), 10)
        };

        function $(t) {
            return "number" == typeof t ? function(t) {
                if (o) return new s(BigInt(t));
                if (f(t)) {
                    if (t !== v(t)) throw Error(t + " is not an integer.");
                    return new u(t)
                }
                return Z(t.toString())
            }(t) : "string" == typeof t ? Z(t) : "bigint" == typeof t ? new s(t) : t
        }
        for (var G = 0; G < 1e3; G++) i[G] = $(G), G > 0 && (i[-G] = $(-G));
        return i.one = i[1], i.zero = i[0], i.minusOne = i[-1], i.max = B, i.min = T, i.gcd = C, i.lcm = function(t, r) {
            return t = $(t).abs(), r = $(r).abs(), t.divide(C(t, r)).multiply(r)
        }, i.isInstance = function(t) {
            return t instanceof a || t instanceof u || t instanceof s
        }, i.randBetween = function(t, r, e) {
            t = $(t), r = $(r);
            var n = e || Math.random,
                o = T(t, r),
                a = B(t, r).subtract(o).add(1);
            if (a.isSmall) return o.add(Math.floor(n() * a));
            for (var u = F(a, 1e7).value, s = [], f = !0, c = 0; c < u.length; c++) {
                var l = f ? u[c] : 1e7,
                    h = v(n() * l);
                s.push(h), h < l && (f = !1)
            }
            return o.add(i.fromArray(s, 1e7, !1))
        }, i.fromArray = function(t, r, e) {
            return D(t.map($), $(r || 10), e)
        }, i
    }();
    void 0 !== t && t.hasOwnProperty("exports") && (t.exports = n), "function" == typeof define && define.amd && define(function() {
        return n
    })
}