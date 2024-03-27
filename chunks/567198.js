function(e) {
    ! function(t) {
        "use strict";
        var n, r = {
                precision: 20,
                rounding: 4,
                toExpNeg: -7,
                toExpPos: 21,
                LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
            },
            i = !0,
            a = "[DecimalError] ",
            o = a + "Invalid argument: ",
            s = a + "Exponent out of range: ",
            u = Math.floor,
            c = Math.pow,
            l = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
            d = u(1286742750677284.5),
            f = {};

        function p(e, t) {
            var n, r, a, o, s, u, c, l, d = e.constructor,
                f = d.precision;
            if (!e.s || !t.s) return !t.s && (t = new d(e)), i ? x(t, f) : t;
            if (c = e.d, l = t.d, s = e.e, a = t.e, c = c.slice(), o = s - a) {
                for (o < 0 ? (r = c, o = -o, u = l.length) : (r = l, a = s, u = c.length), o > (u = (s = Math.ceil(f / 7)) > u ? s + 1 : u + 1) && (o = u, r.length = 1), r.reverse(); o--;) r.push(0);
                r.reverse()
            }
            for (u = c.length, u - (o = l.length) < 0 && (o = u, r = l, l = c, c = r), n = 0; o;) n = (c[--o] = c[o] + l[o] + n) / 1e7 | 0, c[o] %= 1e7;
            for (n && (c.unshift(n), ++a), u = c.length; 0 == c[--u];) c.pop();
            return t.d = c, t.e = a, i ? x(t, f) : t
        }

        function h(e, t, n) {
            if (e !== ~~e || e < t || e > n) throw Error(o + e)
        }

        function m(e) {
            var t, n, r, i = e.length - 1,
                a = "",
                o = e[0];
            if (i > 0) {
                for (a += o, t = 1; t < i; t++)(n = 7 - (r = e[t] + "").length) && (a += y(n)), a += r;
                (n = 7 - (r = (o = e[t]) + "").length) && (a += y(n))
            } else if (0 === o) return "0";
            for (; o % 10 == 0;) o /= 10;
            return a + o
        }
        f.absoluteValue = f.abs = function() {
            var e = new this.constructor(this);
            return e.s && (e.s = 1), e
        }, f.comparedTo = f.cmp = function(e) {
            var t, n, r, i;
            if (e = new this.constructor(e), this.s !== e.s) return this.s || -e.s;
            if (this.e !== e.e) return this.e > e.e ^ this.s < 0 ? 1 : -1;
            for (t = 0, r = this.d.length, n = r < (i = e.d.length) ? r : i; t < n; ++t)
                if (this.d[t] !== e.d[t]) return this.d[t] > e.d[t] ^ this.s < 0 ? 1 : -1;
            return r === i ? 0 : r > i ^ this.s < 0 ? 1 : -1
        }, f.decimalPlaces = f.dp = function() {
            var e = this.d.length - 1,
                t = (e - this.e) * 7;
            if (e = this.d[e])
                for (; e % 10 == 0; e /= 10) t--;
            return t < 0 ? 0 : t
        }, f.dividedBy = f.div = function(e) {
            return g(this, new this.constructor(e))
        }, f.dividedToIntegerBy = f.idiv = function(e) {
            var t = this.constructor;
            return x(g(this, new t(e), 0, 1), t.precision)
        }, f.equals = f.eq = function(e) {
            return !this.cmp(e)
        }, f.exponent = function() {
            return b(this)
        }, f.greaterThan = f.gt = function(e) {
            return this.cmp(e) > 0
        }, f.greaterThanOrEqualTo = f.gte = function(e) {
            return this.cmp(e) >= 0
        }, f.isInteger = f.isint = function() {
            return this.e > this.d.length - 2
        }, f.isNegative = f.isneg = function() {
            return this.s < 0
        }, f.isPositive = f.ispos = function() {
            return this.s > 0
        }, f.isZero = function() {
            return 0 === this.s
        }, f.lessThan = f.lt = function(e) {
            return 0 > this.cmp(e)
        }, f.lessThanOrEqualTo = f.lte = function(e) {
            return 1 > this.cmp(e)
        }, f.logarithm = f.log = function(e) {
            var t, r = this.constructor,
                o = r.precision,
                s = o + 5;
            if (void 0 === e) e = new r(10);
            else if ((e = new r(e)).s < 1 || e.eq(n)) throw Error(a + "NaN");
            if (this.s < 1) throw Error(a + (this.s ? "NaN" : "-Infinity"));
            return this.eq(n) ? new r(0) : (i = !1, t = g(E(this, s), E(e, s), s), i = !0, x(t, o))
        }, f.minus = f.sub = function(e) {
            return e = new this.constructor(e), this.s == e.s ? w(this, e) : p(this, (e.s = -e.s, e))
        }, f.modulo = f.mod = function(e) {
            var t, n = this.constructor,
                r = n.precision;
            if (!(e = new n(e)).s) throw Error(a + "NaN");
            return this.s ? (i = !1, t = g(this, e, 0, 1).times(e), i = !0, this.minus(t)) : x(new n(this), r)
        }, f.naturalExponential = f.exp = function() {
            return _(this)
        }, f.naturalLogarithm = f.ln = function() {
            return E(this)
        }, f.negated = f.neg = function() {
            var e = new this.constructor(this);
            return e.s = -e.s || 0, e
        }, f.plus = f.add = function(e) {
            return e = new this.constructor(e), this.s == e.s ? p(this, e) : w(this, (e.s = -e.s, e))
        }, f.precision = f.sd = function(e) {
            var t, n, r;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(o + e);
            if (t = b(this) + 1, n = 7 * (r = this.d.length - 1) + 1, r = this.d[r]) {
                for (; r % 10 == 0; r /= 10) n--;
                for (r = this.d[0]; r >= 10; r /= 10) n++
            }
            return e && t > n ? t : n
        }, f.squareRoot = f.sqrt = function() {
            var e, t, n, r, o, s, c, l = this.constructor;
            if (this.s < 1) {
                if (!this.s) return new l(0);
                throw Error(a + "NaN")
            }
            for (e = b(this), i = !1, 0 == (o = Math.sqrt(+this)) || o == 1 / 0 ? (((t = m(this.d)).length + e) % 2 == 0 && (t += "0"), o = Math.sqrt(t), e = u((e + 1) / 2) - (e < 0 || e % 2), r = new l(t = o == 1 / 0 ? "1e" + e : (t = o.toExponential()).slice(0, t.indexOf("e") + 1) + e)) : r = new l(o.toString()), o = c = (n = l.precision) + 3;;)
                if (r = (s = r).plus(g(this, s, c + 2)).times(.5), m(s.d).slice(0, c) === (t = m(r.d)).slice(0, c)) {
                    if (t = t.slice(c - 3, c + 1), o == c && "4999" == t) {
                        if (x(s, n + 1, 0), s.times(s).eq(this)) {
                            r = s;
                            break
                        }
                    } else if ("9999" != t) break;
                    c += 4
                } return i = !0, x(r, n)
        }, f.times = f.mul = function(e) {
            var t, n, r, a, o, s, u, c, l, d = this.constructor,
                f = this.d,
                p = (e = new d(e)).d;
            if (!this.s || !e.s) return new d(0);
            for (e.s *= this.s, n = this.e + e.e, c = f.length, c < (l = p.length) && (o = f, f = p, p = o, s = c, c = l, l = s), o = [], r = s = c + l; r--;) o.push(0);
            for (r = l; --r >= 0;) {
                for (t = 0, a = c + r; a > r;) u = o[a] + p[r] * f[a - r - 1] + t, o[a--] = u % 1e7 | 0, t = u / 1e7 | 0;
                o[a] = (o[a] + t) % 1e7 | 0
            }
            for (; !o[--s];) o.pop();
            return t ? ++n : o.shift(), e.d = o, e.e = n, i ? x(e, d.precision) : e
        }, f.toDecimalPlaces = f.todp = function(e, t) {
            var n = this,
                r = n.constructor;
            return (n = new r(n), void 0 === e) ? n : (h(e, 0, 1e9), void 0 === t ? t = r.rounding : h(t, 0, 8), x(n, e + b(n) + 1, t))
        }, f.toExponential = function(e, t) {
            var n, r = this,
                i = r.constructor;
            return void 0 === e ? n = T(r, !0) : (h(e, 0, 1e9), void 0 === t ? t = i.rounding : h(t, 0, 8), n = T(r = x(new i(r), e + 1, t), !0, e + 1)), n
        }, f.toFixed = function(e, t) {
            var n, r, i = this.constructor;
            return void 0 === e ? T(this) : (h(e, 0, 1e9), void 0 === t ? t = i.rounding : h(t, 0, 8), n = T((r = x(new i(this), e + b(this) + 1, t)).abs(), !1, e + b(r) + 1), this.isneg() && !this.isZero() ? "-" + n : n)
        }, f.toInteger = f.toint = function() {
            var e = this.constructor;
            return x(new e(this), b(this) + 1, e.rounding)
        }, f.toNumber = function() {
            return +this
        }, f.toPower = f.pow = function(e) {
            var t, r, o, s, c, l, d = this,
                f = d.constructor,
                p = +(e = new f(e));
            if (!e.s) return new f(n);
            if (!(d = new f(d)).s) {
                if (e.s < 1) throw Error(a + "Infinity");
                return d
            }
            if (d.eq(n)) return d;
            if (o = f.precision, e.eq(n)) return x(d, o);
            if (t = e.e, l = t >= (r = e.d.length - 1), c = d.s, l) {
                if ((r = p < 0 ? -p : p) <= 9007199254740991) {
                    for (s = new f(n), t = Math.ceil(o / 7 + 4), i = !1; r % 2 && C((s = s.times(d)).d, t), 0 !== (r = u(r / 2));) {
                        ;
                        C((d = d.times(d)).d, t)
                    }
                    return i = !0, e.s < 0 ? new f(n).div(s) : x(s, o)
                }
            } else if (c < 0) throw Error(a + "NaN");
            return c = c < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1, d.s = 1, i = !1, s = e.times(E(d, o + 12)), i = !0, (s = _(s)).s = c, s
        }, f.toPrecision = function(e, t) {
            var n, r, i = this,
                a = i.constructor;
            return void 0 === e ? (n = b(i), r = T(i, n <= a.toExpNeg || n >= a.toExpPos)) : (h(e, 1, 1e9), void 0 === t ? t = a.rounding : h(t, 0, 8), n = b(i = x(new a(i), e, t)), r = T(i, e <= n || n <= a.toExpNeg, e)), r
        }, f.toSignificantDigits = f.tosd = function(e, t) {
            var n = this.constructor;
            return void 0 === e ? (e = n.precision, t = n.rounding) : (h(e, 1, 1e9), void 0 === t ? t = n.rounding : h(t, 0, 8)), x(new n(this), e, t)
        }, f.toString = f.valueOf = f.val = f.toJSON = function() {
            var e = b(this),
                t = this.constructor;
            return T(this, e <= t.toExpNeg || e >= t.toExpPos)
        };
        var g = function() {
            function e(e, t) {
                var n, r = 0,
                    i = e.length;
                for (e = e.slice(); i--;) n = e[i] * t + r, e[i] = n % 1e7 | 0, r = n / 1e7 | 0;
                return r && e.unshift(r), e
            }

            function t(e, t, n, r) {
                var i, a;
                if (n != r) a = n > r ? 1 : -1;
                else
                    for (i = a = 0; i < n; i++)
                        if (e[i] != t[i]) {
                            a = e[i] > t[i] ? 1 : -1;
                            break
                        } return a
            }

            function n(e, t, n) {
                for (var r = 0; n--;) e[n] -= r, r = e[n] < t[n] ? 1 : 0, e[n] = 1e7 * r + e[n] - t[n];
                for (; !e[0] && e.length > 1;) e.shift()
            }
            return function(r, i, o, s) {
                var u, c, l, d, f, p, h, m, g, _, v, y, E, S, w, T, C, D, O = r.constructor,
                    M = r.s == i.s ? 1 : -1,
                    A = r.d,
                    k = i.d;
                if (!r.s) return new O(r);
                if (!i.s) throw Error(a + "Division by zero");
                for (l = 0, c = r.e - i.e, C = k.length, w = A.length, m = (h = new O(M)).d = []; k[l] == (A[l] || 0);) ++l;
                if (k[l] > (A[l] || 0) && --c, (y = null == o ? o = O.precision : s ? o + (b(r) - b(i)) + 1 : o) < 0) return new O(0);
                if (y = y / 7 + 2 | 0, l = 0, 1 == C)
                    for (d = 0, k = k[0], y++;
                        (l < w || d) && y--; l++) E = 1e7 * d + (A[l] || 0), m[l] = E / k | 0, d = E % k | 0;
                else {
                    for ((d = 1e7 / (k[0] + 1) | 0) > 1 && (k = e(k, d), A = e(A, d), C = k.length, w = A.length), S = C, _ = (g = A.slice(0, C)).length; _ < C;) g[_++] = 0;
                    (D = k.slice()).unshift(0), T = k[0], k[1] >= 1e7 / 2 && ++T;
                    do d = 0, (u = t(k, g, C, _)) < 0 ? (v = g[0], C != _ && (v = 1e7 * v + (g[1] || 0)), (d = v / T | 0) > 1 ? (d >= 1e7 && (d = 1e7 - 1), p = (f = e(k, d)).length, _ = g.length, 1 == (u = t(f, g, p, _)) && (d--, n(f, C < p ? D : k, p))) : (0 == d && (u = d = 1), f = k.slice()), (p = f.length) < _ && f.unshift(0), n(g, f, _), -1 == u && (_ = g.length, (u = t(k, g, C, _)) < 1 && (d++, n(g, C < _ ? D : k, _))), _ = g.length) : 0 === u && (d++, g = [0]), m[l++] = d, u && g[0] ? g[_++] = A[S] || 0 : (g = [A[S]], _ = 1); while ((S++ < w || void 0 !== g[0]) && y--)
                }
                return !m[0] && m.shift(), h.e = c, x(h, s ? o + b(h) + 1 : o)
            }
        }();

        function _(e, t) {
            var r, a, o, u, l, d = 0,
                f = 0,
                p = e.constructor,
                h = p.precision;
            if (b(e) > 16) throw Error(s + b(e));
            if (!e.s) return new p(n);
            for (null == t ? (i = !1, l = h) : l = t, u = new p(.03125); e.abs().gte(.1);) e = e.times(u), f += 5;
            for (l += Math.log(c(2, f)) / Math.LN10 * 2 + 5 | 0, r = a = o = new p(n), p.precision = l;;) {
                if (a = x(a.times(e), l), r = r.times(++d), m((u = o.plus(g(a, r, l))).d).slice(0, l) === m(o.d).slice(0, l)) {
                    for (; f--;) o = x(o.times(o), l);
                    return p.precision = h, null == t ? (i = !0, x(o, h)) : o
                }
                o = u
            }
        }

        function b(e) {
            for (var t = 7 * e.e, n = e.d[0]; n >= 10; n /= 10) t++;
            return t
        }

        function v(e, t, n) {
            if (t > e.LN10.sd()) throw i = !0, n && (e.precision = n), Error(a + "LN10 precision limit exceeded");
            return x(new e(e.LN10), t)
        }

        function y(e) {
            for (var t = ""; e--;) t += "0";
            return t
        }

        function E(e, t) {
            var r, o, s, u, c, l, d, f, p, h = 1,
                _ = e,
                y = _.d,
                S = _.constructor,
                w = S.precision;
            if (_.s < 1) throw Error(a + (_.s ? "NaN" : "-Infinity"));
            if (_.eq(n)) return new S(0);
            if (null == t ? (i = !1, f = w) : f = t, _.eq(10)) return null == t && (i = !0), v(S, f);
            if (f += 10, S.precision = f, o = (r = m(y)).charAt(0), !(15e14 > Math.abs(u = b(_)))) return d = v(S, f + 2, w).times(u + ""), _ = E(new S(o + "." + r.slice(1)), f - 10).plus(d), S.precision = w, null == t ? (i = !0, x(_, w)) : _;
            for (; o < 7 && 1 != o || 1 == o && r.charAt(1) > 3;) o = (r = m((_ = _.times(e)).d)).charAt(0), h++;
            u = b(_), o > 1 ? (_ = new S("0." + r), u++) : _ = new S(o + "." + r.slice(1));
            for (l = c = _ = g(_.minus(n), _.plus(n), f), p = x(_.times(_), f), s = 3;;) {
                if (c = x(c.times(p), f), m((d = l.plus(g(c, new S(s), f))).d).slice(0, f) === m(l.d).slice(0, f)) return l = l.times(2), 0 !== u && (l = l.plus(v(S, f + 2, w).times(u + ""))), l = g(l, new S(h), f), S.precision = w, null == t ? (i = !0, x(l, w)) : l;
                l = d, s += 2
            }
        }

        function S(e, t) {
            var n, r, a;
            for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; 48 === t.charCodeAt(r);) ++r;
            for (a = t.length; 48 === t.charCodeAt(a - 1);) --a;
            if (t = t.slice(r, a)) {
                if (a -= r, n = n - r - 1, e.e = u(n / 7), e.d = [], r = (n + 1) % 7, n < 0 && (r += 7), r < a) {
                    for (r && e.d.push(+t.slice(0, r)), a -= 7; r < a;) e.d.push(+t.slice(r, r += 7));
                    r = 7 - (t = t.slice(r)).length
                } else r -= a;
                for (; r--;) t += "0";
                if (e.d.push(+t), i && (e.e > d || e.e < -d)) throw Error(s + n)
            } else e.s = 0, e.e = 0, e.d = [0];
            return e
        }

        function x(e, t, n) {
            var r, a, o, l, f, p, h, m, g = e.d;
            for (l = 1, o = g[0]; o >= 10; o /= 10) l++;
            if ((r = t - l) < 0) r += 7, a = t, h = g[m = 0];
            else {
                if ((m = Math.ceil((r + 1) / 7)) >= (o = g.length)) return e;
                for (l = 1, h = o = g[m]; o >= 10; o /= 10) l++;
                r %= 7, a = r - 7 + l
            }
            if (void 0 !== n && (f = h / (o = c(10, l - a - 1)) % 10 | 0, p = t < 0 || void 0 !== g[m + 1] || h % o, p = n < 4 ? (f || p) && (0 == n || n == (e.s < 0 ? 3 : 2)) : f > 5 || 5 == f && (4 == n || p || 6 == n && (r > 0 ? a > 0 ? h / c(10, l - a) : 0 : g[m - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7))), t < 1 || !g[0]) return p ? (o = b(e), g.length = 1, t = t - o - 1, g[0] = c(10, (7 - t % 7) % 7), e.e = u(-t / 7) || 0) : (g.length = 1, g[0] = e.e = e.s = 0), e;
            if (0 == r ? (g.length = m, o = 1, m--) : (g.length = m + 1, o = c(10, 7 - r), g[m] = a > 0 ? (h / c(10, l - a) % c(10, a) | 0) * o : 0), p)
                for (;;)
                    if (0 == m) {
                        1e7 == (g[0] += o) && (g[0] = 1, ++e.e);
                        break
                    } else {
                        if (g[m] += o, 1e7 != g[m]) break;
                        g[m--] = 0, o = 1
                    } for (r = g.length; 0 === g[--r];) g.pop();
            if (i && (e.e > d || e.e < -d)) throw Error(s + b(e));
            return e
        }

        function w(e, t) {
            var n, r, a, o, s, u, c, l, d, f, p = e.constructor,
                h = p.precision;
            if (!e.s || !t.s) return t.s ? t.s = -t.s : t = new p(e), i ? x(t, h) : t;
            if (c = e.d, f = t.d, r = t.e, l = e.e, c = c.slice(), s = l - r) {
                for ((d = s < 0) ? (n = c, s = -s, u = f.length) : (n = f, r = l, u = c.length), s > (a = Math.max(Math.ceil(h / 7), u) + 2) && (s = a, n.length = 1), n.reverse(), a = s; a--;) n.push(0);
                n.reverse()
            } else {
                for (a = c.length, (d = a < (u = f.length)) && (u = a), a = 0; a < u; a++)
                    if (c[a] != f[a]) {
                        d = c[a] < f[a];
                        break
                    } s = 0
            }
            for (d && (n = c, c = f, f = n, t.s = -t.s), u = c.length, a = f.length - u; a > 0; --a) c[u++] = 0;
            for (a = f.length; a > s;) {
                if (c[--a] < f[a]) {
                    for (o = a; o && 0 === c[--o];) c[o] = 1e7 - 1;
                    --c[o], c[a] += 1e7
                }
                c[a] -= f[a]
            }
            for (; 0 === c[--u];) c.pop();
            for (; 0 === c[0]; c.shift()) --r;
            return c[0] ? (t.d = c, t.e = r, i ? x(t, h) : t) : new p(0)
        }

        function T(e, t, n) {
            var r, i = b(e),
                a = m(e.d),
                o = a.length;
            return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + y(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + y(-i - 1) + a, n && (r = n - o) > 0 && (a += y(r))) : i >= o ? (a += y(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + y(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += y(r))), e.s < 0 ? "-" + a : a
        }

        function C(e, t) {
            if (e.length > t) return e.length = t, !0
        }

        function D(e) {
            if (!e || "object" != typeof e) throw Error(a + "Object expected");
            var t, n, r, i = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -Infinity, 0, "toExpPos", 0, 1 / 0];
            for (t = 0; t < i.length; t += 3)
                if (void 0 !== (r = e[n = i[t]])) {
                    if (u(r) === r && r >= i[t + 1] && r <= i[t + 2]) this[n] = r;
                    else throw Error(o + n + ": " + r)
                } if (void 0 !== (r = e[n = "LN10"])) {
                if (r == Math.LN10) this[n] = new this(r);
                else throw Error(o + n + ": " + r)
            }
            return this
        }(r = function e(t) {
            var n, r, i;

            function a(e) {
                if (!(this instanceof a)) return new a(e);
                if (this.constructor = a, e instanceof a) {
                    this.s = e.s, this.e = e.e, this.d = (e = e.d) ? e.slice() : e;
                    return
                }
                if ("number" == typeof e) {
                    if (0 * e != 0) throw Error(o + e);
                    if (e > 0) this.s = 1;
                    else if (e < 0) e = -e, this.s = -1;
                    else {
                        this.s = 0, this.e = 0, this.d = [0];
                        return
                    }
                    if (e === ~~e && e < 1e7) {
                        this.e = 0, this.d = [e];
                        return
                    }
                    return S(this, e.toString())
                }
                if ("string" != typeof e) throw Error(o + e);
                if (45 === e.charCodeAt(0) ? (e = e.slice(1), this.s = -1) : this.s = 1, l.test(e)) S(this, e);
                else throw Error(o + e)
            }
            if (a.prototype = f, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = e, a.config = a.set = D, void 0 === t && (t = {}), t)
                for (n = 0, i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"]; n < i.length;) !t.hasOwnProperty(r = i[n++]) && (t[r] = this[r]);
            return a.config(t), a
        }(r)).default = r.Decimal = r, n = new r(1), "function" == typeof define && define.amd ? define(function() {
            return r
        }) : e.exports ? e.exports = r : (!t && (t = "undefined" != typeof self && self && self.self == self ? self : Function("return this")()), t.Decimal = r)
    }(this)
}