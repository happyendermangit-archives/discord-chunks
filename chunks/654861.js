function(t, e, n) {
    t = n.nmd(t);
    var r = function(t) {
        "use strict";
        var e = c(9007199254740992),
            n = "0123456789abcdefghijklmnopqrstuvwxyz",
            i = "function" == typeof BigInt;

        function a(t, e, n, r) {
            return void 0 === t ? a[0] : void 0 !== e ? 10 != +e || n ? F(t, e, n, r) : $(t) : $(t)
        }

        function o(t, e) {
            this.value = t, this.sign = e, this.isSmall = !1
        }

        function s(t) {
            this.value = t, this.sign = t < 0, this.isSmall = !0
        }

        function u(t) {
            this.value = t
        }

        function l(t) {
            return -9007199254740992 < t && t < 9007199254740992
        }

        function c(t) {
            return t < 1e7 ? [t] : t < 1e14 ? [t % 1e7, Math.floor(t / 1e7)] : [t % 1e7, Math.floor(t / 1e7) % 1e7, Math.floor(t / 1e14)]
        }

        function d(t) {
            f(t);
            var n = t.length;
            if (n < 4 && 0 > R(t, e)) switch (n) {
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

        function f(t) {
            for (var e = t.length; 0 === t[--e];);
            t.length = e + 1
        }

        function p(t) {
            for (var e = Array(t), n = -1; ++n < t;) e[n] = 0;
            return e
        }

        function h(t) {
            return t > 0 ? Math.floor(t) : Math.ceil(t)
        }

        function _(t, e) {
            var n, r, i = t.length,
                a = e.length,
                o = Array(i),
                s = 0;
            for (r = 0; r < a; r++) s = (n = t[r] + e[r] + s) >= 1e7 ? 1 : 0, o[r] = n - 1e7 * s;
            for (; r < i;) s = 1e7 === (n = t[r] + s) ? 1 : 0, o[r++] = n - 1e7 * s;
            return s > 0 && o.push(s), o
        }

        function g(t, e) {
            return t.length >= e.length ? _(t, e) : _(e, t)
        }

        function m(t, e) {
            var n, r, i = t.length,
                a = Array(i);
            for (r = 0; r < i; r++) e = Math.floor((n = t[r] - 1e7 + e) / 1e7), a[r] = n - 1e7 * e, e += 1;
            for (; e > 0;) a[r++] = e % 1e7, e = Math.floor(e / 1e7);
            return a
        }

        function y(t, e) {
            var n, r, i = t.length,
                a = e.length,
                o = Array(i),
                s = 0;
            for (n = 0; n < a; n++)(r = t[n] - s - e[n]) < 0 ? (r += 1e7, s = 1) : s = 0, o[n] = r;
            for (n = a; n < i; n++) {
                if ((r = t[n] - s) < 0) r += 1e7;
                else {
                    o[n++] = r;
                    break
                }
                o[n] = r
            }
            for (; n < i; n++) o[n] = t[n];
            return f(o), o
        }
        o.prototype = Object.create(a.prototype), s.prototype = Object.create(a.prototype), u.prototype = Object.create(a.prototype), o.prototype.add = function(t) {
            var e = $(t);
            if (this.sign !== e.sign) return this.subtract(e.negate());
            var n = this.value,
                r = e.value;
            return e.isSmall ? new o(m(n, Math.abs(r)), this.sign) : new o(g(n, r), this.sign)
        }, o.prototype.plus = o.prototype.add, s.prototype.add = function(t) {
            var e = $(t),
                n = this.value;
            if (n < 0 !== e.sign) return this.subtract(e.negate());
            var r = e.value;
            if (e.isSmall) {
                if (l(n + r)) return new s(n + r);
                r = c(Math.abs(r))
            }
            return new o(m(r, Math.abs(n)), n < 0)
        }, s.prototype.plus = s.prototype.add, u.prototype.add = function(t) {
            return new u(this.value + $(t).value)
        }, u.prototype.plus = u.prototype.add;

        function v(t, e, n) {
            var r, i, a = t.length,
                u = Array(a),
                l = -e;
            for (r = 0; r < a; r++) l = Math.floor((i = t[r] + l) / 1e7), i %= 1e7, u[r] = i < 0 ? i + 1e7 : i;
            return "number" == typeof(u = d(u)) ? (n && (u = -u), new s(u)) : new o(u, n)
        }

        function b(t, e) {
            var n, r, i, a, o = t.length,
                s = e.length,
                u = p(o + s);
            for (i = 0; i < o; ++i) {
                a = t[i];
                for (var l = 0; l < s; ++l) r = Math.floor((n = a * e[l] + u[i + l]) / 1e7), u[i + l] = n - 1e7 * r, u[i + l + 1] += r
            }
            return f(u), u
        }

        function E(t, e) {
            var n, r, i = t.length,
                a = Array(i),
                o = 0;
            for (r = 0; r < i; r++) o = Math.floor((n = t[r] * e + o) / 1e7), a[r] = n - 1e7 * o;
            for (; o > 0;) a[r++] = o % 1e7, o = Math.floor(o / 1e7);
            return a
        }

        function S(t, e) {
            for (var n = []; e-- > 0;) n.push(0);
            return n.concat(t)
        }
        o.prototype.subtract = function(t) {
            var e, n, r, i, a = $(t);
            if (this.sign !== a.sign) return this.add(a.negate());
            var u = this.value,
                l = a.value;
            if (a.isSmall) return v(u, Math.abs(l), this.sign);
            return e = u, n = l, r = this.sign, (R(e, n) >= 0 ? i = y(e, n) : (i = y(n, e), r = !r), "number" == typeof(i = d(i))) ? (r && (i = -i), new s(i)) : new o(i, r)
        }, o.prototype.minus = o.prototype.subtract, s.prototype.subtract = function(t) {
            var e = $(t),
                n = this.value;
            if (n < 0 !== e.sign) return this.add(e.negate());
            var r = e.value;
            return e.isSmall ? new s(n - r) : v(r, Math.abs(n), n >= 0)
        }, s.prototype.minus = s.prototype.subtract, u.prototype.subtract = function(t) {
            return new u(this.value - $(t).value)
        }, u.prototype.minus = u.prototype.subtract, o.prototype.negate = function() {
            return new o(this.value, !this.sign)
        }, s.prototype.negate = function() {
            var t = this.sign,
                e = new s(-this.value);
            return e.sign = !t, e
        }, u.prototype.negate = function() {
            return new u(-this.value)
        }, o.prototype.abs = function() {
            return new o(this.value, !1)
        }, s.prototype.abs = function() {
            return new s(Math.abs(this.value))
        }, u.prototype.abs = function() {
            return new u(this.value >= 0 ? this.value : -this.value)
        };

        function w(t, e, n) {
            return t < 1e7 ? new o(E(e, t), n) : new o(b(e, c(t)), n)
        }

        function T(t) {
            var e, n, r, i, a = t.length,
                o = p(a + a);
            for (r = 0; r < a; r++) {
                n = 0 - (i = t[r]) * i;
                for (var s = r; s < a; s++) n = Math.floor((e = i * t[s] * 2 + o[r + s] + n) / 1e7), o[r + s] = e - 1e7 * n;
                o[r + a] = n
            }
            return f(o), o
        }
        o.prototype.multiply = function(t) {
            var e, n, r, i = $(t),
                s = this.value,
                u = i.value,
                l = this.sign !== i.sign;
            if (i.isSmall) {
                if (0 === u) return a[0];
                if (1 === u) return this;
                if (-1 === u) return this.negate();
                if ((r = Math.abs(u)) < 1e7) return new o(E(s, r), l);
                u = c(r)
            }
            return (e = s.length, -.012 * e - .012 * (n = u.length) + 15e-6 * e * n > 0) ? new o(function t(e, n) {
                var r = Math.max(e.length, n.length);
                if (r <= 30) return b(e, n);
                r = Math.ceil(r / 2);
                var i = e.slice(r),
                    a = e.slice(0, r),
                    o = n.slice(r),
                    s = n.slice(0, r),
                    u = t(a, s),
                    l = t(i, o),
                    c = t(g(a, i), g(s, o)),
                    d = g(g(u, S(y(y(c, u), l), r)), S(l, 2 * r));
                return f(d), d
            }(s, u), l) : new o(b(s, u), l)
        }, o.prototype.times = o.prototype.multiply, s.prototype._multiplyBySmall = function(t) {
            return l(t.value * this.value) ? new s(t.value * this.value) : w(Math.abs(t.value), c(Math.abs(this.value)), this.sign !== t.sign)
        }, o.prototype._multiplyBySmall = function(t) {
            return 0 === t.value ? a[0] : 1 === t.value ? this : -1 === t.value ? this.negate() : w(Math.abs(t.value), this.value, this.sign !== t.sign)
        }, s.prototype.multiply = function(t) {
            return $(t)._multiplyBySmall(this)
        }, s.prototype.times = s.prototype.multiply, u.prototype.multiply = function(t) {
            return new u(this.value * $(t).value)
        }, u.prototype.times = u.prototype.multiply, o.prototype.square = function() {
            return new o(T(this.value), !1)
        }, s.prototype.square = function() {
            var t = this.value * this.value;
            return l(t) ? new s(t) : new o(T(c(Math.abs(this.value))), !1)
        }, u.prototype.square = function(t) {
            return new u(this.value * this.value)
        };

        function k(t, e) {
            var n, r, i, a, o = t.length,
                s = p(o);
            for (i = 0, n = o - 1; n >= 0; --n) r = h((a = 1e7 * i + t[n]) / e), i = a - r * e, s[n] = 0 | r;
            return [s, 0 | i]
        }

        function x(t, e) {
            var n, r, l = $(e);
            if (i) return [new u(t.value / l.value), new u(t.value % l.value)];
            var _ = t.value,
                g = l.value;
            if (0 === g) throw Error("Cannot divide by zero");
            if (t.isSmall) return l.isSmall ? [new s(h(_ / g)), new s(_ % g)] : [a[0], t];
            if (l.isSmall) {
                if (1 === g) return [t, a[0]];
                if (-1 == g) return [t.negate(), a[0]];
                var m = Math.abs(g);
                if (m < 1e7) {
                    n = d((r = k(_, m))[0]);
                    var v = r[1];
                    return (t.sign && (v = -v), "number" == typeof n) ? (t.sign !== l.sign && (n = -n), [new s(n), new s(v)]) : [new o(n, t.sign !== l.sign), new s(v)]
                }
                g = c(m)
            }
            var b = R(_, g);
            if (-1 === b) return [a[0], t];
            if (0 === b) return [a[t.sign === l.sign ? 1 : -1], a[0]];
            n = (r = _.length + g.length <= 200 ? function(t, e) {
                var n, r, i, a, o, s, u, l = t.length,
                    c = e.length,
                    f = p(e.length),
                    h = e[c - 1],
                    _ = Math.ceil(1e7 / (2 * h)),
                    g = E(t, _),
                    m = E(e, _);
                for (g.length <= l && g.push(0), m.push(0), h = m[c - 1], r = l - c; r >= 0; r--) {
                    for (n = 1e7 - 1, g[r + c] !== h && (n = Math.floor((1e7 * g[r + c] + g[r + c - 1]) / h)), i = 0, a = 0, s = m.length, o = 0; o < s; o++) i += n * m[o], u = Math.floor(i / 1e7), a += g[r + o] - (i - 1e7 * u), i = u, a < 0 ? (g[r + o] = a + 1e7, a = -1) : (g[r + o] = a, a = 0);
                    for (; 0 !== a;) {
                        for (n -= 1, i = 0, o = 0; o < s; o++)(i += g[r + o] - 1e7 + m[o]) < 0 ? (g[r + o] = i + 1e7, i = 0) : (g[r + o] = i, i = 1);
                        a += i
                    }
                    f[r] = n
                }
                return g = k(g, _)[0], [d(f), d(g)]
            }(_, g) : function(t, e) {
                for (var n, r, i, a, o, s = t.length, u = e.length, l = [], c = []; s;) {
                    if (c.unshift(t[--s]), f(c), 0 > R(c, e)) {
                        l.push(0);
                        continue
                    }
                    r = c.length, i = 1e7 * c[r - 1] + c[r - 2], a = 1e7 * e[u - 1] + e[u - 2], r > u && (i = (i + 1) * 1e7), n = Math.ceil(i / a);
                    do {
                        if (0 >= R(o = E(e, n), c)) break;
                        n--
                    } while (n);
                    l.push(n), c = y(c, o)
                }
                return l.reverse(), [d(l), d(c)]
            }(_, g))[0];
            var S = t.sign !== l.sign,
                w = r[1],
                T = t.sign;
            return "number" == typeof n ? (S && (n = -n), n = new s(n)) : n = new o(n, S), "number" == typeof w ? (T && (w = -w), w = new s(w)) : w = new o(w, T), [n, w]
        }

        function R(t, e) {
            if (t.length !== e.length) return t.length > e.length ? 1 : -1;
            for (var n = t.length - 1; n >= 0; n--)
                if (t[n] !== e[n]) return t[n] > e[n] ? 1 : -1;
            return 0
        }

        function N(t) {
            var e = t.abs();
            return !e.isUnit() && (!!(e.equals(2) || e.equals(3) || e.equals(5)) || !(e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) && (!!e.lesser(49) || void 0))
        }

        function D(t, e) {
            for (var n, i, a, o = t.prev(), s = o, u = 0; s.isEven();) s = s.divide(2), u++;
            t: for (i = 0; i < e.length; i++) {
                if (!t.lesser(e[i])) {
                    if (!((a = r(e[i]).modPow(s, t)).isUnit() || a.equals(o))) {
                        for (n = u - 1; 0 != n && !(a = a.square().mod(t)).isUnit(); n--) {
                            ;
                            if (a.equals(o)) continue t
                        }
                        return !1
                    }
                }
            }
            return !0
        }
        o.prototype.divmod = function(t) {
            var e = x(this, t);
            return {
                quotient: e[0],
                remainder: e[1]
            }
        }, u.prototype.divmod = s.prototype.divmod = o.prototype.divmod, o.prototype.divide = function(t) {
            return x(this, t)[0]
        }, u.prototype.over = u.prototype.divide = function(t) {
            return new u(this.value / $(t).value)
        }, s.prototype.over = s.prototype.divide = o.prototype.over = o.prototype.divide, o.prototype.mod = function(t) {
            return x(this, t)[1]
        }, u.prototype.mod = u.prototype.remainder = function(t) {
            return new u(this.value % $(t).value)
        }, s.prototype.remainder = s.prototype.mod = o.prototype.remainder = o.prototype.mod, o.prototype.pow = function(t) {
            var e, n, r, i = $(t),
                o = this.value,
                u = i.value;
            if (0 === u) return a[1];
            if (0 === o) return a[0];
            if (1 === o) return a[1];
            if (-1 === o) return i.isEven() ? a[1] : a[-1];
            if (i.sign) return a[0];
            if (!i.isSmall) throw Error("The exponent " + i.toString() + " is too large.");
            if (this.isSmall && l(e = Math.pow(o, u))) return new s(h(e));
            for (n = this, r = a[1]; !0 & u && (r = r.times(n), --u), 0 !== u;) {
                ;
                u /= 2, n = n.square()
            }
            return r
        }, s.prototype.pow = o.prototype.pow, u.prototype.pow = function(t) {
            var e = $(t),
                n = this.value,
                r = e.value,
                i = BigInt(0),
                o = BigInt(1),
                s = BigInt(2);
            if (r === i) return a[1];
            if (n === i) return a[0];
            if (n === o) return a[1];
            if (n === BigInt(-1)) return e.isEven() ? a[1] : a[-1];
            if (e.isNegative()) return new u(i);
            for (var l = this, c = a[1];
                (r & o) === o && (c = c.times(l), --r), r !== i;) {
                ;
                r /= s, l = l.square()
            }
            return c
        }, o.prototype.modPow = function(t, e) {
            if (t = $(t), (e = $(e)).isZero()) throw Error("Cannot take modPow with modulus 0");
            var n = a[1],
                r = this.mod(e);
            for (t.isNegative() && (t = t.multiply(a[-1]), r = r.modInv(e)); t.isPositive();) {
                if (r.isZero()) return a[0];
                t.isOdd() && (n = n.multiply(r).mod(e)), t = t.divide(2), r = r.square().mod(e)
            }
            return n
        }, u.prototype.modPow = s.prototype.modPow = o.prototype.modPow, o.prototype.compareAbs = function(t) {
            var e = $(t),
                n = this.value,
                r = e.value;
            return e.isSmall ? 1 : R(n, r)
        }, s.prototype.compareAbs = function(t) {
            var e = $(t),
                n = Math.abs(this.value),
                r = e.value;
            return e.isSmall ? n === (r = Math.abs(r)) ? 0 : n > r ? 1 : -1 : -1
        }, u.prototype.compareAbs = function(t) {
            var e = this.value,
                n = $(t).value;
            return (e = e >= 0 ? e : -e) === (n = n >= 0 ? n : -n) ? 0 : e > n ? 1 : -1
        }, o.prototype.compare = function(t) {
            if (t === 1 / 0) return -1;
            if (t === -1 / 0) return 1;
            var e = $(t),
                n = this.value,
                r = e.value;
            return this.sign !== e.sign ? e.sign ? 1 : -1 : e.isSmall ? this.sign ? -1 : 1 : R(n, r) * (this.sign ? -1 : 1)
        }, o.prototype.compareTo = o.prototype.compare, s.prototype.compare = function(t) {
            if (t === 1 / 0) return -1;
            if (t === -1 / 0) return 1;
            var e = $(t),
                n = this.value,
                r = e.value;
            return e.isSmall ? n == r ? 0 : n > r ? 1 : -1 : n < 0 !== e.sign ? n < 0 ? -1 : 1 : n < 0 ? 1 : -1
        }, s.prototype.compareTo = s.prototype.compare, u.prototype.compare = function(t) {
            if (t === 1 / 0) return -1;
            if (t === -1 / 0) return 1;
            var e = this.value,
                n = $(t).value;
            return e === n ? 0 : e > n ? 1 : -1
        }, u.prototype.compareTo = u.prototype.compare, o.prototype.equals = function(t) {
            return 0 === this.compare(t)
        }, u.prototype.eq = u.prototype.equals = s.prototype.eq = s.prototype.equals = o.prototype.eq = o.prototype.equals, o.prototype.notEquals = function(t) {
            return 0 !== this.compare(t)
        }, u.prototype.neq = u.prototype.notEquals = s.prototype.neq = s.prototype.notEquals = o.prototype.neq = o.prototype.notEquals, o.prototype.greater = function(t) {
            return this.compare(t) > 0
        }, u.prototype.gt = u.prototype.greater = s.prototype.gt = s.prototype.greater = o.prototype.gt = o.prototype.greater, o.prototype.lesser = function(t) {
            return 0 > this.compare(t)
        }, u.prototype.lt = u.prototype.lesser = s.prototype.lt = s.prototype.lesser = o.prototype.lt = o.prototype.lesser, o.prototype.greaterOrEquals = function(t) {
            return this.compare(t) >= 0
        }, u.prototype.geq = u.prototype.greaterOrEquals = s.prototype.geq = s.prototype.greaterOrEquals = o.prototype.geq = o.prototype.greaterOrEquals, o.prototype.lesserOrEquals = function(t) {
            return 0 >= this.compare(t)
        }, u.prototype.leq = u.prototype.lesserOrEquals = s.prototype.leq = s.prototype.lesserOrEquals = o.prototype.leq = o.prototype.lesserOrEquals, o.prototype.isEven = function() {
            return (1 & this.value[0]) == 0
        }, s.prototype.isEven = function() {
            return (1 & this.value) == 0
        }, u.prototype.isEven = function() {
            return (this.value & BigInt(1)) === BigInt(0)
        }, o.prototype.isOdd = function() {
            return (1 & this.value[0]) == 1
        }, s.prototype.isOdd = function() {
            return (1 & this.value) == 1
        }, u.prototype.isOdd = function() {
            return (this.value & BigInt(1)) === BigInt(1)
        }, o.prototype.isPositive = function() {
            return !this.sign
        }, s.prototype.isPositive = function() {
            return this.value > 0
        }, u.prototype.isPositive = s.prototype.isPositive, o.prototype.isNegative = function() {
            return this.sign
        }, s.prototype.isNegative = function() {
            return this.value < 0
        }, u.prototype.isNegative = s.prototype.isNegative, o.prototype.isUnit = function() {
            return !1
        }, s.prototype.isUnit = function() {
            return 1 === Math.abs(this.value)
        }, u.prototype.isUnit = function() {
            return this.abs().value === BigInt(1)
        }, o.prototype.isZero = function() {
            return !1
        }, s.prototype.isZero = function() {
            return 0 === this.value
        }, u.prototype.isZero = function() {
            return this.value === BigInt(0)
        }, o.prototype.isDivisibleBy = function(t) {
            var e = $(t);
            return !e.isZero() && (!!e.isUnit() || (0 === e.compareAbs(2) ? this.isEven() : this.mod(e).isZero()))
        }, u.prototype.isDivisibleBy = s.prototype.isDivisibleBy = o.prototype.isDivisibleBy, o.prototype.isPrime = function(e) {
            var n = N(this);
            if (t !== n) return n;
            var i = this.abs(),
                a = i.bitLength();
            if (a <= 64) return D(i, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
            for (var o = Math.log(2) * a.toJSNumber(), s = Math.ceil(!0 === e ? 2 * Math.pow(o, 2) : o), u = [], l = 0; l < s; l++) u.push(r(l + 2));
            return D(i, u)
        }, u.prototype.isPrime = s.prototype.isPrime = o.prototype.isPrime, o.prototype.isProbablePrime = function(e, n) {
            var i = N(this);
            if (t !== i) return i;
            for (var a = this.abs(), o = t === e ? 5 : e, s = [], u = 0; u < o; u++) s.push(r.randBetween(2, a.minus(2), n));
            return D(a, s)
        }, u.prototype.isProbablePrime = s.prototype.isProbablePrime = o.prototype.isProbablePrime, o.prototype.modInv = function(t) {
            for (var e, n, i, a = r.zero, o = r.one, s = $(t), u = this.abs(); !u.isZero();) e = s.divide(u), n = a, i = s, a = o, s = u, o = n.subtract(e.multiply(o)), u = i.subtract(e.multiply(u));
            if (!s.isUnit()) throw Error(this.toString() + " and " + t.toString() + " are not co-prime");
            return (-1 === a.compare(0) && (a = a.add(t)), this.isNegative()) ? a.negate() : a
        }, u.prototype.modInv = s.prototype.modInv = o.prototype.modInv, o.prototype.next = function() {
            var t = this.value;
            return this.sign ? v(t, 1, this.sign) : new o(m(t, 1), this.sign)
        }, s.prototype.next = function() {
            var t = this.value;
            return t + 1 < 9007199254740992 ? new s(t + 1) : new o(e, !1)
        }, u.prototype.next = function() {
            return new u(this.value + BigInt(1))
        }, o.prototype.prev = function() {
            var t = this.value;
            return this.sign ? new o(m(t, 1), !0) : v(t, 1, this.sign)
        }, s.prototype.prev = function() {
            var t = this.value;
            return t - 1 > -9007199254740992 ? new s(t - 1) : new o(e, !0)
        }, u.prototype.prev = function() {
            return new u(this.value - BigInt(1))
        };
        for (var I = [1]; 2 * I[I.length - 1] <= 1e7;) I.push(2 * I[I.length - 1]);
        var O = I.length,
            C = I[O - 1];

        function A(t) {
            return 1e7 >= Math.abs(t)
        }

        function B(t, e, n) {
            e = $(e);
            for (var i = t.isNegative(), a = e.isNegative(), o = i ? t.not() : t, s = a ? e.not() : e, u = 0, l = 0, c = null, d = null, f = []; !o.isZero() || !s.isZero();) u = (c = x(o, C))[1].toJSNumber(), i && (u = C - 1 - u), l = (d = x(s, C))[1].toJSNumber(), a && (l = C - 1 - l), o = c[0], s = d[0], f.push(n(u, l));
            for (var p = 0 !== n(i ? 1 : 0, a ? 1 : 0) ? r(-1) : r(0), h = f.length - 1; h >= 0; h -= 1) p = p.multiply(C).add(r(f[h]));
            return p
        }
        o.prototype.shiftLeft = function(t) {
            var e = $(t).toJSNumber();
            if (!A(e)) throw Error(String(e) + " is too large for shifting.");
            if (e < 0) return this.shiftRight(-e);
            var n = this;
            if (n.isZero()) return n;
            for (; e >= O;) n = n.multiply(C), e -= O - 1;
            return n.multiply(I[e])
        }, u.prototype.shiftLeft = s.prototype.shiftLeft = o.prototype.shiftLeft, o.prototype.shiftRight = function(t) {
            var e, n = $(t).toJSNumber();
            if (!A(n)) throw Error(String(n) + " is too large for shifting.");
            if (n < 0) return this.shiftLeft(-n);
            for (var r = this; n >= O;) {
                if (r.isZero() || r.isNegative() && r.isUnit()) return r;
                r = (e = x(r, C))[1].isNegative() ? e[0].prev() : e[0], n -= O - 1
            }
            return (e = x(r, I[n]))[1].isNegative() ? e[0].prev() : e[0]
        }, u.prototype.shiftRight = s.prototype.shiftRight = o.prototype.shiftRight, o.prototype.not = function() {
            return this.negate().prev()
        }, u.prototype.not = s.prototype.not = o.prototype.not, o.prototype.and = function(t) {
            return B(this, t, function(t, e) {
                return t & e
            })
        }, u.prototype.and = s.prototype.and = o.prototype.and, o.prototype.or = function(t) {
            return B(this, t, function(t, e) {
                return t | e
            })
        }, u.prototype.or = s.prototype.or = o.prototype.or, o.prototype.xor = function(t) {
            return B(this, t, function(t, e) {
                return t ^ e
            })
        }, u.prototype.xor = s.prototype.xor = o.prototype.xor;
        var U = 1073758208;

        function M(t) {
            var e = t.value,
                n = "number" == typeof e ? 1073741824 | e : "bigint" == typeof e ? e | BigInt(1073741824) : e[0] + 1e7 * e[1] | U;
            return n & -n
        }

        function L(t, e) {
            return t = $(t), e = $(e), t.greater(e) ? t : e
        }

        function P(t, e) {
            return t = $(t), e = $(e), t.lesser(e) ? t : e
        }

        function G(t, e) {
            if (t = $(t).abs(), e = $(e).abs(), t.equals(e)) return t;
            if (t.isZero()) return e;
            if (e.isZero()) return t;
            for (var n, r, i = a[1]; t.isEven() && e.isEven();) n = P(M(t), M(e)), t = t.divide(n), e = e.divide(n), i = i.multiply(n);
            for (; t.isEven();) t = t.divide(M(t));
            do {
                for (; e.isEven();) e = e.divide(M(e));
                t.greater(e) && (r = e, e = t, t = r), e = e.subtract(t)
            } while (!e.isZero());
            return i.isUnit() ? t : t.multiply(i)
        }
        o.prototype.bitLength = function() {
            var t = this;
            return (0 > t.compareTo(r(0)) && (t = t.negate().subtract(r(1))), 0 === t.compareTo(r(0))) ? r(0) : r(function t(e, n) {
                if (0 >= n.compareTo(e)) {
                    var i = t(e, n.square(n)),
                        a = i.p,
                        o = i.e,
                        s = a.multiply(n);
                    return 0 >= s.compareTo(e) ? {
                        p: s,
                        e: 2 * o + 1
                    } : {
                        p: a,
                        e: 2 * o
                    }
                }
                return {
                    p: r(1),
                    e: 0
                }
            }(t, r(2)).e).add(r(1))
        }, u.prototype.bitLength = s.prototype.bitLength = o.prototype.bitLength;
        var F = function(t, e, r, i) {
            r = r || n, t = String(t), !i && (t = t.toLowerCase(), r = r.toLowerCase());
            var a, o = t.length,
                s = Math.abs(e),
                u = {};
            for (a = 0; a < r.length; a++) u[r[a]] = a;
            for (a = 0; a < o; a++) {
                var l = t[a];
                if ("-" !== l && l in u && u[l] >= s) {
                    if ("1" === l && 1 === s) continue;
                    throw Error(l + " is not a valid digit in base " + e + ".")
                }
            }
            e = $(e);
            var c = [],
                d = "-" === t[0];
            for (a = d ? 1 : 0; a < t.length; a++) {
                var l = t[a];
                if (l in u) c.push($(u[l]));
                else if ("<" === l) {
                    var f = a;
                    do a++; while (">" !== t[a] && a < t.length);
                    c.push($(t.slice(f + 1, a)))
                } else throw Error(l + " is not a valid character")
            }
            return Y(c, e, d)
        };

        function Y(t, e, n) {
            var r, i = a[0],
                o = a[1];
            for (r = t.length - 1; r >= 0; r--) i = i.add(t[r].times(o)), o = o.times(e);
            return n ? i.negate() : i
        }

        function z(t, e) {
            if ((e = r(e)).isZero()) {
                if (t.isZero()) return {
                    value: [0],
                    isNegative: !1
                };
                throw Error("Cannot convert nonzero numbers to base 0.")
            }
            if (e.equals(-1)) {
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
            if (t.isNegative() && e.isPositive() && (i = !0, t = t.abs()), e.isUnit()) return t.isZero() ? {
                value: [0],
                isNegative: !1
            } : {
                value: Array.apply(null, Array(t.toJSNumber())).map(Number.prototype.valueOf, 1),
                isNegative: i
            };
            for (var a = [], o, s = t; s.isNegative() || s.compareAbs(e) >= 0;) {
                s = (o = s.divmod(e)).quotient;
                var u = o.remainder;
                u.isNegative() && (u = e.minus(u).abs(), s = s.next()), a.push(u.toJSNumber())
            }
            return a.push(s.toJSNumber()), {
                value: a.reverse(),
                isNegative: i
            }
        }

        function j(t, e, r) {
            var i = z(t, e);
            return (i.isNegative ? "-" : "") + i.value.map(function(t) {
                var e, i;
                return (e = t) < (i = (i = r) || n).length ? i[e] : "<" + e + ">"
            }).join("")
        }

        function H(t) {
            if (l(+t)) {
                var e = +t;
                if (e === h(e)) return i ? new u(BigInt(e)) : new s(e);
                throw Error("Invalid integer: " + t)
            }
            var n = "-" === t[0];
            n && (t = t.slice(1));
            var r = t.split(/e/i);
            if (r.length > 2) throw Error("Invalid integer: " + r.join("e"));
            if (2 === r.length) {
                var a = r[1];
                if ("+" === a[0] && (a = a.slice(1)), (a = +a) !== h(a) || !l(a)) throw Error("Invalid integer: " + a + " is not a valid exponent.");
                var c = r[0],
                    d = c.indexOf(".");
                if (d >= 0 && (a -= c.length - d - 1, c = c.slice(0, d) + c.slice(d + 1)), a < 0) throw Error("Cannot include negative exponent part for integers");
                c += Array(a + 1).join("0"), t = c
            }
            if (!/^([0-9][0-9]*)$/.test(t)) throw Error("Invalid integer: " + t);
            if (i) return new u(BigInt(n ? "-" + t : t));
            for (var p = [], _ = t.length, g = _ - 7; _ > 0;) p.push(+t.slice(g, _)), (g -= 7) < 0 && (g = 0), _ -= 7;
            return f(p), new o(p, n)
        }
        o.prototype.toArray = function(t) {
            return z(this, t)
        }, s.prototype.toArray = function(t) {
            return z(this, t)
        }, u.prototype.toArray = function(t) {
            return z(this, t)
        }, o.prototype.toString = function(e, n) {
            if (t === e && (e = 10), 10 !== e) return j(this, e, n);
            for (var r, i = this.value, a = i.length, o = String(i[--a]); --a >= 0;) r = String(i[a]), o += "0000000".slice(r.length) + r;
            return (this.sign ? "-" : "") + o
        }, s.prototype.toString = function(e, n) {
            return (t === e && (e = 10), 10 != e) ? j(this, e, n) : String(this.value)
        }, u.prototype.toString = s.prototype.toString, u.prototype.toJSON = o.prototype.toJSON = s.prototype.toJSON = function() {
            return this.toString()
        }, o.prototype.valueOf = function() {
            return parseInt(this.toString(), 10)
        }, o.prototype.toJSNumber = o.prototype.valueOf, s.prototype.valueOf = function() {
            return this.value
        }, s.prototype.toJSNumber = s.prototype.valueOf, u.prototype.valueOf = u.prototype.toJSNumber = function() {
            return parseInt(this.toString(), 10)
        };

        function $(t) {
            return "number" == typeof t ? function(t) {
                if (i) return new u(BigInt(t));
                if (l(t)) {
                    if (t !== h(t)) throw Error(t + " is not an integer.");
                    return new s(t)
                }
                return H(t.toString())
            }(t) : "string" == typeof t ? H(t) : "bigint" == typeof t ? new u(t) : t
        }
        for (var W = 0; W < 1e3; W++) a[W] = $(W), W > 0 && (a[-W] = $(-W));
        return a.one = a[1], a.zero = a[0], a.minusOne = a[-1], a.max = L, a.min = P, a.gcd = G, a.lcm = function(t, e) {
            return t = $(t).abs(), e = $(e).abs(), t.divide(G(t, e)).multiply(e)
        }, a.isInstance = function(t) {
            return t instanceof o || t instanceof s || t instanceof u
        }, a.randBetween = function(t, e, n) {
            t = $(t), e = $(e);
            var r = n || Math.random,
                i = P(t, e),
                o = L(t, e).subtract(i).add(1);
            if (o.isSmall) return i.add(Math.floor(r() * o));
            for (var s = z(o, 1e7).value, u = [], l = !0, c = 0; c < s.length; c++) {
                var d = l ? s[c] : 1e7,
                    f = h(r() * d);
                u.push(f), f < d && (l = !1)
            }
            return i.add(a.fromArray(u, 1e7, !1))
        }, a.fromArray = function(t, e, n) {
            return Y(t.map($), $(e || 10), n)
        }, a
    }();
    t.hasOwnProperty("exports") && (t.exports = r), "function" == typeof define && define.amd && define(function() {
        return r
    })
}