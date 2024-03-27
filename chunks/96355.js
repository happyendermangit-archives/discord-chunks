function(e, t) {
    var n, r;
    n = this, r = function(e) {
        "use strict";

        function t(e) {
            return e >= 48 && e <= 57
        }

        function n(e) {
            this.index = 0, this.path = e, this.max = e.length, this.result = [], this.param = 0, this.err = "", this.segmentStart = 0, this.data = []
        }

        function r(e) {
            for (var t; e.index < e.max && (10 === (t = e.path.charCodeAt(e.index)) || 13 === t || 8232 === t || 8233 === t || 32 === t || 9 === t || 11 === t || 12 === t || 160 === t || t >= 5760 && ea.indexOf(t) >= 0);) e.index++
        }

        function i(e) {
            n = (t = e.path[e.segmentStart]).toLowerCase();
            var t, n, r = e.data;
            if ("m" === n && r.length > 2 && (e.result.push([t, r[0], r[1]]), r = r.slice(2), n = "l", t = "m" === t ? "l" : "L"), "r" === n) e.result.push([t].concat(r));
            else
                for (; r.length >= ei[n] && (e.result.push([t].concat(r.splice(0, ei[n]))), ei[n]););
        }

        function a() {
            if (!(this instanceof a)) return new a;
            this.queue = [], this.cache = null
        }

        function o(e, t, n, r) {
            var i = Math.sqrt(e * e + t * t),
                a = Math.sqrt(e * e + t * t),
                o = (e * n + t * r) / (i * a);
            return o > 1 && (o = 1), o < -1 && (o = -1), (e * r - t * n < 0 ? -1 : 1) * Math.acos(o)
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t, n);
            this.rx = e, this.ry = t, this.ax = n
        }

        function u(e) {
            if (!(this instanceof u)) return new u(e);
            var t = eo(e);
            this.segments = t.segments, this.err = t.err, this.__stack = []
        }

        function c(e, t, n, r, i, a, o, s) {
            this.a = {
                x: e,
                y: t
            }, this.b = {
                x: n,
                y: r
            }, this.c = {
                x: i,
                y: a
            }, this.d = {
                x: o,
                y: s
            }, null != o && null != s ? (this.getArcLength = _, this.getPoint = h, this.getDerivative = d) : (this.getArcLength = m, this.getPoint = p, this.getDerivative = l), this.init()
        }

        function l(e, t, n) {
            return {
                x: 2 * (1 - n) * (e[1] - e[0]) + 2 * n * (e[2] - e[1]),
                y: 2 * (1 - n) * (t[1] - t[0]) + 2 * n * (t[2] - t[1])
            }
        }

        function d(e, t, n) {
            return p([3 * (e[1] - e[0]), 3 * (e[2] - e[1]), 3 * (e[3] - e[2])], [3 * (t[1] - t[0]), 3 * (t[2] - t[1]), 3 * (t[3] - t[2])], n)
        }

        function f(e, t, n, r, i) {
            for (var a = 1, o = e / t, s = (e - n(r, i, o)) / t; a > .001;) {
                var u = n(r, i, o + s),
                    c = n(r, i, o - s),
                    l = Math.abs(e - u) / t,
                    d = Math.abs(e - c) / t;
                l < a ? (a = l, o += s) : d < a ? (a = d, o -= s) : s /= 2
            }
            return o
        }

        function p(e, t, n) {
            return {
                x: (1 - n) * (1 - n) * e[0] + 2 * (1 - n) * n * e[1] + n * n * e[2],
                y: (1 - n) * (1 - n) * t[0] + 2 * (1 - n) * n * t[1] + n * n * t[2]
            }
        }

        function h(e, t, n) {
            return {
                x: (1 - n) * (1 - n) * (1 - n) * e[0] + 3 * (1 - n) * (1 - n) * n * e[1] + 3 * (1 - n) * n * n * e[2] + n * n * n * e[3],
                y: (1 - n) * (1 - n) * (1 - n) * t[0] + 3 * (1 - n) * (1 - n) * n * t[1] + 3 * (1 - n) * n * n * t[2] + n * n * n * t[3]
            }
        }

        function m(e, t, n) {
            void 0 === n && (n = 1);
            var r = e[0] - 2 * e[1] + e[2],
                i = t[0] - 2 * t[1] + t[2],
                a = 2 * e[1] - 2 * e[0],
                o = 2 * t[1] - 2 * t[0],
                s = 4 * (r * r + i * i);
            if (0 === s) return n * Math.sqrt(Math.pow(e[2] - e[0], 2) + Math.pow(t[2] - t[0], 2));
            var u = 4 * (r * a + i * o) / (2 * s),
                c = n + u,
                l = (a * a + o * o) / s - u * u;
            return Math.sqrt(s) / 2 * (c * Math.sqrt(c * c + l) - u * Math.sqrt(u * u + l) + l * Math.log(Math.abs((c + Math.sqrt(c * c + l)) / (u + Math.sqrt(u * u + l)))))
        }

        function g(e, t, n) {
            var r, i, a, o, s, u = n.length - 1;
            if (0 === u) return 0;
            if (0 === e) {
                for (o = 0, s = 0; s <= u; s++) {
                    ;
                    o += (r = u, i = s, eS[r][i] * Math.pow(1 - t, u - s) * Math.pow(t, s) * n[s])
                }
                return o
            }
            for (a = Array(u), s = 0; s < u; s++) a[s] = u * (n[s + 1] - n[s]);
            return g(e - 1, t, a)
        }

        function _(e, t, n) {
            var r, i, a, o;
            for (void 0 === n && (n = 1), r = n / 2, i = 0, a = 0; a < 20; a++) o = r * ey[20][a] + r, i += eE[20][a] * function(e, t, n) {
                var r = g(1, n, e),
                    i = g(1, n, t);
                return Math.sqrt(r * r + i * i)
            }(e, t, o);
            return r * i
        }

        function b(e, t, n, r) {
            var i = e * n + t * r;
            return i > 1 && (i = 1), i < -1 && (i = -1), (e * r - t * n < 0 ? -1 : 1) * Math.acos(i)
        }

        function v(e, t, n, r, i, a, o, s, u) {
            var c = 0,
                l = [],
                d = [];
            ew(e, t, n, r, i, a, o, s, u).forEach(function(e) {
                var t = new ev(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]),
                    n = t.getTotalLength();
                c += n, l.push(n), d.push(t)
            }), this.length = c, this.partialLengths = l, this.curves = d
        }

        function y(e, t, n, r) {
            this.x0 = e, this.x1 = t, this.y0 = n, this.y1 = r
        }

        function E(e, t) {
            return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))
        }

        function S(e, t, n) {
            return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n]
        }

        function x(e, t, n) {
            var r = e.map(function(e, n) {
                return function(e, t) {
                    return function(n) {
                        return e.map(function(e, r) {
                            return e + n * (t[r] - e)
                        })
                    }
                }(e, t[n])
            });
            return function(e) {
                var t = r.map(function(t) {
                    return t(e)
                });
                return n ? O(t) : t
            }
        }

        function w(e) {
            return "number" == typeof e && isFinite(e)
        }

        function T(e) {
            return function(e) {
                for (var t = 0; t < e.length - 2; t++) {
                    var n = e[t],
                        r = e[t + 1],
                        i = e[t + 2];
                    if (n[0] * (r[1] - i[1]) + r[0] * (i[1] - n[1]) + i[0] * (n[1] - r[1])) return !0
                }
                return !1
            }(e) ? en(e) : [(e[0][0] + e[e.length - 1][0]) / 2, (e[0][1] + e[e.length - 1][1]) / 2]
        }

        function C(e) {
            return new eh(e).abs()
        }

        function D(e) {
            return e.toString().split("M").map(function(e, t) {
                return e = e.trim(), t && e ? "M" + e : e
            }).filter(function(e) {
                return e
            })
        }

        function O(e) {
            return "M" + e.join("L") + "Z"
        }

        function M(e, t) {
            for (var n = e.length + t, r = er(e) / t, i = 0, a = 0, o = r / 2; e.length < n;) {
                var s = e[i],
                    u = e[(i + 1) % e.length],
                    c = E(s, u);
                o <= a + c ? (e.splice(i + 1, 0, c ? S(s, u, (o - a) / c) : s.slice(0)), o += r) : (a += c, i++)
            }
        }

        function A(e, t) {
            if ("string" == typeof e) {
                var n, r, i, a, o, s, u = (a = e, o = t, function(e) {
                    var t = e.segments || [],
                        n = [];
                    if (!t.length || "M" !== t[0][0]) return !1;
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r],
                            a = i[0],
                            o = i[1],
                            s = i[2];
                        if ("M" === a && r || "Z" === a) break;
                        if ("M" === a || "L" === a) n.push([o, s]);
                        else if ("H" === a) n.push([o, n[n.length - 1][1]]);
                        else {
                            if ("V" !== a) return !1;
                            n.push([n[n.length - 1][0], o])
                        }
                    }
                    return !!n.length && {
                        ring: n
                    }
                }(s = C(a)) || function(e, t) {
                    var n, r, i = D(e)[0],
                        a = [],
                        o = 3;
                    if (!i) throw TypeError(eO);
                    n = (r = function(e) {
                        if ("undefined" != typeof window && window && window.document) try {
                            var t = window.document.createElementNS("http://www.w3.org/2000/svg", "path");
                            return t.setAttributeNS(null, "d", e), t
                        } catch (e) {}
                        return eD(e)
                    }(i)).getTotalLength(), t && w(t) && t > 0 && (o = Math.max(o, Math.ceil(n / t)));
                    for (var s = 0; s < o; s++) {
                        var u = r.getPointAtLength(n * s / o);
                        a.push([u.x, u.y])
                    }
                    return {
                        ring: a,
                        skipBisect: !0
                    }
                }(s, o));
                e = u.ring, i = u.skipBisect
            } else if (!Array.isArray(e)) throw TypeError(eO);
            if (! function(e) {
                    return e.every(function(e) {
                        return Array.isArray(e) && e.length >= 2 && w(e[0]) && w(e[1])
                    })
                }(r = e.slice(0))) throw TypeError(eO);
            return r.length > 1 && (n = r[0], 1e-9 > E(n, r[r.length - 1])) && r.pop(), et(r) > 0 && r.reverse(), !i && t && w(t) && t > 0 && function(e, t) {
                void 0 === t && (t = 1 / 0);
                for (var n = 0; n < e.length; n++)
                    for (var r = e[n], i = n === e.length - 1 ? e[0] : e[n + 1]; E(r, i) > t;) i = S(r, i, .5), e.splice(n + 1, 0, i)
            }(r, t), r
        }

        function k(e, t, n) {
            var r;
            return r = e.length - t.length, M(e, r < 0 ? -1 * r : 0), M(t, r > 0 ? r : 0), eA(e, t), x(e, t, n)
        }

        function R(e, t, n) {
            n = n || 2;
            var r, i, a, o, s, u, c, l = t && t.length,
                d = l ? t[0] * n : e.length,
                f = N(e, 0, d, n, !0),
                p = [];
            if (!f) return p;
            if (l && (f = function(e, t, n, r) {
                    var i, a, o, s, u, c = [];
                    for (i = 0, a = t.length; i < a; i++) o = t[i] * r, s = i < a - 1 ? t[i + 1] * r : e.length, (u = N(e, o, s, r, !1)) === u.next && (u.steiner = !0), c.push(function(e) {
                        var t = e,
                            n = e;
                        do t.x < n.x && (n = t), t = t.next; while (t !== e);
                        return n
                    }(u));
                    for (c.sort(P), i = 0; i < c.length; i++)(function(e, t) {
                        if (t = function(e, t) {
                                var n, r = t,
                                    i = e.x,
                                    a = e.y,
                                    o = -Infinity;
                                do {
                                    if (a <= r.y && a >= r.next.y) {
                                        var s = r.x + (a - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                                        if (s <= i && s > o) {
                                            if (o = s, s === i) {
                                                if (a === r.y) return r;
                                                if (a === r.next.y) return r.next
                                            }
                                            n = r.x < r.next.x ? r : r.next
                                        }
                                    }
                                    r = r.next
                                } while (r !== t);
                                if (!n) return null;
                                if (i === o) return n.prev;
                                var u, c = n,
                                    l = n.x,
                                    d = n.y,
                                    f = 1 / 0;
                                for (r = n.next; r !== c;) i >= r.x && r.x >= l && B(a < d ? i : o, a, l, d, a < d ? o : i, a, r.x, r.y) && ((u = Math.abs(a - r.y) / (i - r.x)) < f || u === f && r.x > n.x) && z(r, e) && (n = r, f = u), r = r.next;
                                return n
                            }(e, t)) {
                            var n = H(t, e);
                            I(n, n.next)
                        }
                    })(c[i], n), n = I(n, n.next);
                    return n
                }(e, t, f, n)), e.length > 80 * n) {
                r = a = e[0], i = o = e[1];
                for (var h = n; h < d; h += n) s = e[h], u = e[h + 1], s < r && (r = s), u < i && (i = u), s > a && (a = s), u > o && (o = u);
                c = Math.max(a - r, o - i)
            }
            return L(f, p, n, r, i, c), p
        }

        function N(e, t, n, r, i) {
            var a, o;
            if (i === W(e, t, n, r) > 0)
                for (a = t; a < n; a += r) o = G(a, e[a], e[a + 1], o);
            else
                for (a = n - r; a >= t; a -= r) o = G(a, e[a], e[a + 1], o);
            return o && Y(o, o.next) && (V(o), o = o.next), o
        }

        function I(e, t) {
            if (!e) return e;
            t || (t = e);
            var n, r = e;
            do
                if (n = !1, r.steiner || !Y(r, r.next) && 0 !== U(r.prev, r, r.next)) r = r.next;
                else {
                    if (V(r), (r = t = r.prev) === r.next) return null;
                    n = !0
                } while (n || r !== t);
            return t
        }

        function L(e, t, n, r, i, a, o) {
            if (e) {
                !o && a && function(e, t, n, r) {
                    var i = e;
                    do null === i.z && (i.z = F(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next; while (i !== e);
                    i.prevZ.nextZ = null, i.prevZ = null,
                        function(e) {
                            var t, n, r, i, a, o, s, u, c = 1;
                            do {
                                for (n = e, e = null, a = null, o = 0; n;) {
                                    for (o++, r = n, s = 0, t = 0; t < c && (s++, r = r.nextZ); t++);
                                    for (u = c; s > 0 || u > 0 && r;) 0 === s ? (i = r, r = r.nextZ, u--) : 0 !== u && r ? n.z <= r.z ? (i = n, n = n.nextZ, s--) : (i = r, r = r.nextZ, u--) : (i = n, n = n.nextZ, s--), a ? a.nextZ = i : e = i, i.prevZ = a, a = i;
                                    n = r
                                }
                                a.nextZ = null, c *= 2
                            } while (o > 1);
                        }(i)
                }(e, r, i, a);
                for (var s, u, c = e; e.prev !== e.next;)
                    if (s = e.prev, u = e.next, a ? function(e, t, n, r) {
                            var i = e.prev,
                                a = e.next;
                            if (U(i, e, a) >= 0) return !1;
                            for (var o = i.x < e.x ? i.x < a.x ? i.x : a.x : e.x < a.x ? e.x : a.x, s = i.y < e.y ? i.y < a.y ? i.y : a.y : e.y < a.y ? e.y : a.y, u = i.x > e.x ? i.x > a.x ? i.x : a.x : e.x > a.x ? e.x : a.x, c = i.y > e.y ? i.y > a.y ? i.y : a.y : e.y > a.y ? e.y : a.y, l = F(o, s, t, n, r), d = F(u, c, t, n, r), f = e.nextZ; f && f.z <= d;) {
                                if (f !== e.prev && f !== e.next && B(i.x, i.y, e.x, e.y, a.x, a.y, f.x, f.y) && U(f.prev, f, f.next) >= 0) return !1;
                                f = f.nextZ
                            }
                            for (f = e.prevZ; f && f.z >= l;) {
                                if (f !== e.prev && f !== e.next && B(i.x, i.y, e.x, e.y, a.x, a.y, f.x, f.y) && U(f.prev, f, f.next) >= 0) return !1;
                                f = f.prevZ
                            }
                            return !0
                        }(e, r, i, a) : function(e) {
                            var t = e.prev,
                                n = e.next;
                            if (U(t, e, n) >= 0) return !1;
                            for (var r = e.next.next; r !== e.prev;) {
                                if (B(t.x, t.y, e.x, e.y, n.x, n.y, r.x, r.y) && U(r.prev, r, r.next) >= 0) return !1;
                                r = r.next
                            }
                            return !0
                        }(e)) t.push(s.i / n), t.push(e.i / n), t.push(u.i / n), V(e), e = u.next, c = u.next;
                    else if ((e = u) === c) {
                    o ? 1 === o ? L(e = function(e, t, n) {
                        var r = e;
                        do {
                            var i = r.prev,
                                a = r.next.next;
                            !Y(i, a) && j(i, r, r.next, a) && z(i, a) && z(a, i) && (t.push(i.i / n), t.push(r.i / n), t.push(a.i / n), V(r), V(r.next), r = e = a), r = r.next
                        } while (r !== e);
                        return r
                    }(e, t, n), t, n, r, i, a, 2) : 2 === o && function(e, t, n, r, i, a) {
                        var o = e;
                        do {
                            for (var s = o.next.next; s !== o.prev;) {
                                if (o.i !== s.i && function(e, t) {
                                        return e.next.i !== t.i && e.prev.i !== t.i && ! function(e, t) {
                                            var n = e;
                                            do {
                                                if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && j(n, n.next, e, t)) return !0;
                                                n = n.next
                                            } while (n !== e);
                                            return !1
                                        }(e, t) && z(e, t) && z(t, e) && function(e, t) {
                                            var n = e,
                                                r = !1,
                                                i = (e.x + t.x) / 2,
                                                a = (e.y + t.y) / 2;
                                            do n.y > a != n.next.y > a && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next; while (n !== e);
                                            return r
                                        }(e, t)
                                    }(o, s)) {
                                    var u = H(o, s);
                                    return o = I(o, o.next), u = I(u, u.next), L(o, t, n, r, i, a), void L(u, t, n, r, i, a)
                                }
                                s = s.next
                            }
                            o = o.next
                        } while (o !== e)
                    }(e, t, n, r, i, a) : L(I(e), t, n, r, i, a, 1);
                    break
                }
            }
        }

        function P(e, t) {
            return e.x - t.x
        }

        function F(e, t, n, r, i) {
            return e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) / i) | e << 8)) | e << 4)) | e << 2)) | e << 1), e | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) / i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
        }

        function B(e, t, n, r, i, a, o, s) {
            return (i - o) * (t - s) - (e - o) * (a - s) >= 0 && (e - o) * (r - s) - (n - o) * (t - s) >= 0 && (n - o) * (a - s) - (i - o) * (r - s) >= 0
        }

        function U(e, t, n) {
            return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
        }

        function Y(e, t) {
            return e.x === t.x && e.y === t.y
        }

        function j(e, t, n, r) {
            return !!(Y(e, t) && Y(n, r) || Y(e, r) && Y(n, t)) || U(e, t, n) > 0 != U(e, t, r) > 0 && U(n, r, e) > 0 != U(n, r, t) > 0
        }

        function z(e, t) {
            return 0 > U(e.prev, e, e.next) ? U(e, t, e.next) >= 0 && U(e, e.prev, t) >= 0 : 0 > U(e, t, e.prev) || 0 > U(e, e.next, t)
        }

        function H(e, t) {
            var n = new $(e.i, e.x, e.y),
                r = new $(t.i, t.x, t.y),
                i = e.next,
                a = t.prev;
            return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r
        }

        function G(e, t, n, r) {
            var i = new $(e, t, n);
            return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i
        }

        function V(e) {
            e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
        }

        function $(e, t, n) {
            this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
        }

        function W(e, t, n, r) {
            for (var i = 0, a = t, o = n - r; a < n; a += r) i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
            return i
        }

        function K(e, t) {
            var n = t.id,
                r = t.bbox,
                i = null == t.properties ? {} : t.properties,
                a = q(e, t);
            return null == n && null == r ? {
                type: "Feature",
                properties: i,
                geometry: a
            } : null == r ? {
                type: "Feature",
                id: n,
                properties: i,
                geometry: a
            } : {
                type: "Feature",
                id: n,
                bbox: r,
                properties: i,
                geometry: a
            }
        }

        function q(e, t) {
            function n(e) {
                return o(e)
            }

            function r(e) {
                for (var t = [], n = 0, r = e.length; n < r; ++n) ! function(e, t) {
                    t.length && t.pop();
                    for (var n = s[e < 0 ? ~e : e], r = 0, i = n.length; r < i; ++r) t.push(o(n[r], r));
                    e < 0 && eI(t, i)
                }(e[n], t);
                return t.length < 2 && t.push(t[0]), t
            }

            function i(e) {
                for (var t = r(e); t.length < 4;) t.push(t[0]);
                return t
            }

            function a(e) {
                return e.map(i)
            }
            var o = eN(e.transform),
                s = e.arcs;
            return function e(t) {
                var i, o = t.type;
                switch (o) {
                    case "GeometryCollection":
                        return {
                            type: o, geometries: t.geometries.map(e)
                        };
                    case "Point":
                        i = n(t.coordinates);
                        break;
                    case "MultiPoint":
                        i = t.coordinates.map(n);
                        break;
                    case "LineString":
                        i = r(t.arcs);
                        break;
                    case "MultiLineString":
                        i = t.arcs.map(r);
                        break;
                    case "Polygon":
                        i = a(t.arcs);
                        break;
                    case "MultiPolygon":
                        i = t.arcs.map(a);
                        break;
                    default:
                        return null
                }
                return {
                    type: o,
                    coordinates: i
                }
            }(t)
        }

        function Q(e, t, n) {
            void 0 === n && (n = {});
            var r = n.maxSegmentLength;
            void 0 === r && (r = 10);
            var i = n.string;
            void 0 === i && (i = !0);
            var a = n.single;
            void 0 === a && (a = !1);
            var o = A(e, r);
            o.length < t.length + 2 && M(o, t.length + 2 - o.length);
            var s, u = ej(o, t.length),
                c = t.map(function(e) {
                    return A(e, r)
                }),
                l = "string" == typeof e && e;
            return a && !t.every(function(e) {
                return "string" == typeof e
            }) || (s = t.slice(0)), Z(u, c, {
                match: !0,
                string: i,
                single: a,
                t0: l,
                t1: s
            })
        }

        function Z(e, t, n) {
            void 0 === n && (n = {});
            var r = n.string,
                i = n.single,
                a = n.t0,
                o = n.t1,
                s = n.match,
                u = s ? ez(e, t) : e.map(function(e, t) {
                    return t
                }),
                c = u.map(function(n, i) {
                    return k(e[n], t[i], r)
                });
            if (s && Array.isArray(a) && (a = u.map(function(e) {
                    return a[e]
                })), i && r && (Array.isArray(a) && (a = a.join(" ")), Array.isArray(o) && (o = o.join(" "))), i) {
                var l = r ? function(e) {
                    return c.map(function(t) {
                        return t(e)
                    }).join(" ")
                } : function(e) {
                    return c.map(function(t) {
                        return t(e)
                    })
                };
                return r && (a || o) ? function(e) {
                    return e < 1e-4 && a || 1 - e < 1e-4 && o || l(e)
                } : l
            }
            return r ? (a = Array.isArray(a) ? a.map(function(e) {
                return "string" == typeof e && e
            }) : [], o = Array.isArray(o) ? o.map(function(e) {
                return "string" == typeof e && e
            }) : [], c.map(function(e, t) {
                return a[t] || o[t] ? function(n) {
                    return n < 1e-4 && a[t] || 1 - n < 1e-4 && o[t] || e(n)
                } : e
            })) : c
        }

        function X(e, t, n, r, i) {
            return ee(function(e, t, n) {
                return function(r) {
                    var i = T(r),
                        a = er(r.concat([r[0]])),
                        o = Math.atan2(r[0][1] - i[1], r[0][0] - i[0]),
                        s = 0;
                    return r.map(function(i, u) {
                        var c;
                        return u && (s += E(i, r[u - 1])), [Math.cos(c = o + 2 * Math.PI * (a ? s / a : u / r.length)) * n + e, Math.sin(c) * n + t]
                    })
                }
            }(e, t, n), r, function(e, t, n) {
                var r = e - n + "," + t,
                    i = "A" + n + "," + n + ",0,1,1,";
                return "M" + r + i + (e + n + ",") + t + i + r + "Z"
            }(e, t, n), 2 * Math.PI * n, i)
        }

        function J(e, t, n, r, i, a) {
            return ee(function(e, t, n, r) {
                return function(i) {
                    var a = T(i),
                        o = er(i.concat([i[0]])),
                        s = Math.atan2(i[0][1] - a[1], i[0][0] - a[0]),
                        u = 0;
                    s < 0 && (s = 2 * Math.PI + s);
                    var c = s / (2 * Math.PI);
                    return i.map(function(a, s) {
                        s && (u += E(a, i[s - 1]));
                        var l = function(e) {
                            return e <= 1 / 8 ? [1, .5 + 4 * e] : e <= 3 / 8 ? [1.5 - 4 * e, 1] : e <= 5 / 8 ? [0, 2.5 - 4 * e] : e <= 7 / 8 ? [4 * e - 2.5, 0] : [1, 4 * e - 3.5]
                        }((c + (o ? u / o : s / i.length)) % 1);
                        return [e + l[0] * n, t + l[1] * r]
                    })
                }
            }(e, t, n, r), i, function(e, t, n, r) {
                var i = e + n,
                    a = t + r;
                return "M" + e + "," + t + "L" + i + "," + t + "L" + i + "," + a + "L" + e + "," + a + "Z"
            }(e, t, n, r), 2 * n + 2 * r, a)
        }

        function ee(e, t, n, r, i) {
            void 0 === i && (i = {});
            var a = i.maxSegmentLength;
            void 0 === a && (a = 10);
            var o = i.string;
            void 0 === o && (o = !0);
            var s, u = A(t, a);
            return w(r) && u.length < r / a && M(u, Math.ceil(r / a - u.length)), s = x(e(u), u, o), o ? function(e) {
                return e < 1e-4 ? n : s(e)
            } : s
        }
        var et = function(e) {
                for (var t, n = -1, r = e.length, i = e[r - 1], a = 0; ++n < r;) t = i, i = e[n], a += t[1] * i[0] - t[0] * i[1];
                return a / 2
            },
            en = function(e) {
                for (var t, n, r = -1, i = e.length, a = 0, o = 0, s = e[i - 1], u = 0; ++r < i;) t = s, s = e[r], u += n = t[0] * s[1] - s[0] * t[1], a += (t[0] + s[0]) * n, o += (t[1] + s[1]) * n;
                return [a / (u *= 3), o / u]
            },
            er = function(e) {
                for (var t, n, r = -1, i = e.length, a = e[i - 1], o = a[0], s = a[1], u = 0; ++r < i;) t = o, n = s, o = (a = e[r])[0], s = a[1], t -= o, n -= s, u += Math.sqrt(t * t + n * n);
                return u
            },
            ei = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
            },
            ea = [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279],
            eo = function(e) {
                var a = new n(e),
                    o = a.max;
                for (r(a); a.index < o && !a.err.length;) ! function(e) {
                    var n, a, o, s, u = e.max;
                    if (e.segmentStart = e.index, ! function(e) {
                            switch (32 | e) {
                                case 109:
                                case 122:
                                case 108:
                                case 104:
                                case 118:
                                case 99:
                                case 115:
                                case 113:
                                case 116:
                                case 97:
                                case 114:
                                    return !0
                            }
                            return !1
                        }(e.path.charCodeAt(e.index))) return void(e.err = "SvgPath: bad command " + e.path[e.index] + " (at pos " + e.index + ")");
                    if (o = ei[e.path[e.index].toLowerCase()], e.index++, r(e), e.data = [], !o) return void i(e);
                    for (a = !1;;) {
                        for (s = o; s > 0; s--) {
                            if (function(e) {
                                    var n, r = e.index,
                                        i = r,
                                        a = e.max,
                                        o = !1,
                                        s = !1,
                                        u = !1,
                                        c = !1;
                                    if (i >= a) return void(e.err = "SvgPath: missed param (at pos " + i + ")");
                                    if (43 !== (n = e.path.charCodeAt(i)) && 45 !== n || (n = ++i < a ? e.path.charCodeAt(i) : 0), !t(n) && 46 !== n) return void(e.err = "SvgPath: param should start with 0..9 or `.` (at pos " + i + ")");
                                    if (46 !== n) {
                                        if (o = 48 === n, n = ++i < a ? e.path.charCodeAt(i) : 0, o && i < a && n && t(n)) return void(e.err = "SvgPath: numbers started with `0` such as `09` are ilegal (at pos " + r + ")");
                                        for (; i < a && t(e.path.charCodeAt(i));) i++, s = !0;
                                        n = i < a ? e.path.charCodeAt(i) : 0
                                    }
                                    if (46 === n) {
                                        for (c = !0, i++; t(e.path.charCodeAt(i));) i++, u = !0;
                                        n = i < a ? e.path.charCodeAt(i) : 0
                                    }
                                    if (101 === n || 69 === n) {
                                        if (c && !s && !u || (43 !== (n = ++i < a ? e.path.charCodeAt(i) : 0) && 45 !== n || i++, !(i < a && t(e.path.charCodeAt(i))))) return void(e.err = "SvgPath: invalid float exponent (at pos " + i + ")");
                                        for (; i < a && t(e.path.charCodeAt(i));) i++
                                    }
                                    e.index = i, e.param = parseFloat(e.path.slice(r, i)) + 0
                                }(e), e.err.length) return;
                            e.data.push(e.param), r(e), a = !1, e.index < u && 44 === e.path.charCodeAt(e.index) && (e.index++, r(e), a = !0)
                        }
                        if (!a) {
                            ;
                            if (e.index >= e.max) break;
                            if (!((n = e.path.charCodeAt(e.index)) >= 48 && n <= 57 || 43 === n || 45 === n || 46 === n)) break
                        }
                    }
                    i(e)
                }(a);
                return a.err.length ? a.result = [] : a.result.length && (0 > "mM".indexOf(a.result[0][0]) ? (a.err = "SvgPath: string should start with `M` or `m`", a.result = []) : a.result[0][0] = "M"), {
                    err: a.err,
                    segments: a.result
                }
            };
        a.prototype.matrix = function(e) {
            return 1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3] && 0 === e[4] && 0 === e[5] || (this.cache = null, this.queue.push(e)), this
        }, a.prototype.translate = function(e, t) {
            return 0 === e && 0 === t || (this.cache = null, this.queue.push([1, 0, 0, 1, e, t])), this
        }, a.prototype.scale = function(e, t) {
            return 1 === e && 1 === t || (this.cache = null, this.queue.push([e, 0, 0, t, 0, 0])), this
        }, a.prototype.rotate = function(e, t, n) {
            var r, i, a;
            return 0 !== e && (this.translate(t, n), i = Math.cos(r = e * Math.PI / 180), a = Math.sin(r), this.queue.push([i, a, -a, i, 0, 0]), this.cache = null, this.translate(-t, -n)), this
        }, a.prototype.skewX = function(e) {
            return 0 !== e && (this.cache = null, this.queue.push([1, 0, Math.tan(e * Math.PI / 180), 1, 0, 0])), this
        }, a.prototype.skewY = function(e) {
            return 0 !== e && (this.cache = null, this.queue.push([1, Math.tan(e * Math.PI / 180), 0, 1, 0, 0])), this
        }, a.prototype.toArray = function() {
            if (this.cache) return this.cache;
            if (!this.queue.length) return this.cache = [1, 0, 0, 1, 0, 0], this.cache;
            if (this.cache = this.queue[0], 1 === this.queue.length) return this.cache;
            for (var e, t, n = 1; n < this.queue.length; n++) {
                ;
                this.cache = (e = this.cache, t = this.queue[n], [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]])
            }
            return this.cache
        }, a.prototype.calc = function(e, t, n) {
            var r;
            return this.queue.length ? (this.cache || (this.cache = this.toArray()), [e * (r = this.cache)[0] + t * r[2] + (n ? 0 : r[4]), e * r[1] + t * r[3] + (n ? 0 : r[5])]) : [e, t]
        };
        var es = {
                matrix: !0,
                scale: !0,
                rotate: !0,
                translate: !0,
                skewX: !0,
                skewY: !0
            },
            eu = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/,
            ec = /[\s,]+/,
            el = function(e) {
                var t, n, r = new a;
                return e.split(eu).forEach(function(e) {
                    if (e.length) {
                        if (void 0 !== es[e]) return void(t = e);
                        switch (n = e.split(ec).map(function(e) {
                                return +e || 0
                            }), t) {
                            case "matrix":
                                return void(6 === n.length && r.matrix(n));
                            case "scale":
                                return void(1 === n.length ? r.scale(n[0], n[0]) : 2 === n.length && r.scale(n[0], n[1]));
                            case "rotate":
                                return void(1 === n.length ? r.rotate(n[0], 0, 0) : 3 === n.length && r.rotate(n[0], n[1], n[2]));
                            case "translate":
                                return void(1 === n.length ? r.translate(n[0], 0) : 2 === n.length && r.translate(n[0], n[1]));
                            case "skewX":
                                return void(1 === n.length && r.skewX(n[0]));
                            case "skewY":
                                return void(1 === n.length && r.skewY(n[0]))
                        }
                    }
                }), r
            },
            ed = 2 * Math.PI,
            ef = function(e, t, n, r, i, a, s, u, c) {
                var l, d, f, p, h, m, g, _, b, v, y, E, S, x, w, T, C, D, O, M, A, k, R, N = Math.sin(c * ed / 360),
                    I = Math.cos(c * ed / 360),
                    L = I * (e - n) / 2 + N * (t - r) / 2,
                    P = -N * (e - n) / 2 + I * (t - r) / 2;
                if (0 === L && 0 === P || 0 === s || 0 === u) return [];
                s = Math.abs(s);
                var F = L * L / (s * s) + P * P / ((u = Math.abs(u)) * u);
                F > 1 && (s *= Math.sqrt(F), u *= Math.sqrt(F));
                var B = (l = e, d = t, f = n, p = r, h = i, m = a, g = s, _ = u, b = N, y = (v = I) * (l - f) / 2 + b * (d - p) / 2, E = -b * (l - f) / 2 + v * (d - p) / 2, S = g * g, x = _ * _, w = y * y, (C = S * x - S * (T = E * E) - x * w) < 0 && (C = 0), C /= S * T + x * w, D = (C = Math.sqrt(C) * (h === m ? -1 : 1)) * g / _ * E, O = -(C * _) / g * y, k = o(1, 0, M = (y - D) / g, A = (E - O) / _), R = o(M, A, (-y - D) / g, (-E - O) / _), 0 === m && R > 0 && (R -= ed), 1 === m && R < 0 && (R += ed), [v * D - b * O + (l + f) / 2, b * D + v * O + (d + p) / 2, k, R]),
                    U = [],
                    Y = B[2],
                    j = B[3],
                    z = Math.max(Math.ceil(Math.abs(j) / (ed / 4)), 1);
                j /= z;
                for (var H = 0; H < z; H++) U.push(function(e, t) {
                    var n = 4 / 3 * Math.tan(t / 4),
                        r = Math.cos(e),
                        i = Math.sin(e),
                        a = Math.cos(e + t),
                        o = Math.sin(e + t);
                    return [r, i, r - i * n, i + r * n, a + o * n, o - a * n, a, o]
                }(Y, j)), Y += j;
                return U.map(function(e) {
                    for (var t = 0; t < e.length; t += 2) {
                        var n = e[t + 0],
                            r = e[t + 1];
                        n *= s;
                        var i = I * n - N * (r *= u),
                            a = N * n + I * r;
                        e[t + 0] = i + B[0], e[t + 1] = a + B[1]
                    }
                    return e
                })
            },
            ep = Math.PI / 180;
        s.prototype.transform = function(e) {
            var t = Math.cos(this.ax * ep),
                n = Math.sin(this.ax * ep),
                r = [this.rx * (e[0] * t + e[2] * n), this.rx * (e[1] * t + e[3] * n), this.ry * (-e[0] * n + e[2] * t), this.ry * (-e[1] * n + e[3] * t)],
                i = r[0] * r[0] + r[2] * r[2],
                a = r[1] * r[1] + r[3] * r[3],
                o = ((r[0] - r[3]) * (r[0] - r[3]) + (r[2] + r[1]) * (r[2] + r[1])) * ((r[0] + r[3]) * (r[0] + r[3]) + (r[2] - r[1]) * (r[2] - r[1])),
                s = (i + a) / 2;
            if (o < 1e-10 * s) return this.rx = this.ry = Math.sqrt(s), this.ax = 0, this;
            var u = r[0] * r[1] + r[2] * r[3],
                c = s + (o = Math.sqrt(o)) / 2,
                l = s - o / 2;
            return this.ax = 1e-10 > Math.abs(u) && 1e-10 > Math.abs(c - a) ? 90 : 180 * Math.atan(Math.abs(u) > Math.abs(c - a) ? (c - i) / u : u / (c - a)) / Math.PI, this.ax >= 0 ? (this.rx = Math.sqrt(c), this.ry = Math.sqrt(l)) : (this.ax += 90, this.rx = Math.sqrt(l), this.ry = Math.sqrt(c)), this
        }, s.prototype.isDegenerate = function() {
            return this.rx < 1e-10 * this.ry || this.ry < 1e-10 * this.rx
        };
        u.prototype.__matrix = function(e) {
            var t, n = this;
            e.queue.length && this.iterate(function(r, i, a, o) {
                var u, c, l, d;
                switch (r[0]) {
                    case "v":
                        c = 0 === (u = e.calc(0, r[1], !0))[0] ? ["v", u[1]] : ["l", u[0], u[1]];
                        break;
                    case "V":
                        c = (u = e.calc(a, r[1], !1))[0] === e.calc(a, o, !1)[0] ? ["V", u[1]] : ["L", u[0], u[1]];
                        break;
                    case "h":
                        c = 0 === (u = e.calc(r[1], 0, !0))[1] ? ["h", u[0]] : ["l", u[0], u[1]];
                        break;
                    case "H":
                        c = (u = e.calc(r[1], o, !1))[1] === e.calc(a, o, !1)[1] ? ["H", u[0]] : ["L", u[0], u[1]];
                        break;
                    case "a":
                    case "A":
                        var f = e.toArray(),
                            p = s(r[1], r[2], r[3]).transform(f);
                        if (f[0] * f[3] - f[1] * f[2] < 0 && (r[5] = r[5] ? "0" : "1"), u = e.calc(r[6], r[7], "a" === r[0]), "A" === r[0] && r[6] === a && r[7] === o || "a" === r[0] && 0 === r[6] && 0 === r[7]) {
                            c = ["a" === r[0] ? "l" : "L", u[0], u[1]];
                            break
                        }
                        c = p.isDegenerate() ? ["a" === r[0] ? "l" : "L", u[0], u[1]] : [r[0], p.rx, p.ry, p.ax, r[4], r[5], u[0], u[1]];
                        break;
                    case "m":
                        d = i > 0, c = ["m", (u = e.calc(r[1], r[2], d))[0], u[1]];
                        break;
                    default:
                        for (c = [l = r[0]], d = l.toLowerCase() === l, t = 1; t < r.length; t += 2) u = e.calc(r[t], r[t + 1], d), c.push(u[0], u[1])
                }
                n.segments[i] = c
            }, !0)
        }, u.prototype.__evaluateStack = function() {
            var e, t;
            if (this.__stack.length) {
                if (1 === this.__stack.length) return this.__matrix(this.__stack[0]), void(this.__stack = []);
                for (e = a(), t = this.__stack.length; --t >= 0;) e.matrix(this.__stack[t].toArray());
                this.__matrix(e), this.__stack = []
            }
        }, u.prototype.toString = function() {
            var e, t, n = [];
            this.__evaluateStack();
            for (var r = 0; r < this.segments.length; r++) t = this.segments[r][0], e = r > 0 && "m" !== t && "M" !== t && t === this.segments[r - 1][0], n = n.concat(e ? this.segments[r].slice(1) : this.segments[r]);
            return n.join(" ").replace(/ ?([achlmqrstvz]) ?/gi, "$1").replace(/ \-/g, "-").replace(/zm/g, "z m")
        }, u.prototype.translate = function(e, t) {
            return this.__stack.push(a().translate(e, t || 0)), this
        }, u.prototype.scale = function(e, t) {
            return this.__stack.push(a().scale(e, t || 0 === t ? t : e)), this
        }, u.prototype.rotate = function(e, t, n) {
            return this.__stack.push(a().rotate(e, t || 0, n || 0)), this
        }, u.prototype.skewX = function(e) {
            return this.__stack.push(a().skewX(e)), this
        }, u.prototype.skewY = function(e) {
            return this.__stack.push(a().skewY(e)), this
        }, u.prototype.matrix = function(e) {
            return this.__stack.push(a().matrix(e)), this
        }, u.prototype.transform = function(e) {
            return e.trim() && this.__stack.push(el(e)), this
        }, u.prototype.round = function(e) {
            var t, n = 0,
                r = 0,
                i = 0,
                a = 0;
            return e = e || 0, this.__evaluateStack(), this.segments.forEach(function(o) {
                var s = o[0].toLowerCase() === o[0];
                switch (o[0]) {
                    case "H":
                    case "h":
                        return s && (o[1] += i), i = o[1] - o[1].toFixed(e), void(o[1] = +o[1].toFixed(e));
                    case "V":
                    case "v":
                        return s && (o[1] += a), a = o[1] - o[1].toFixed(e), void(o[1] = +o[1].toFixed(e));
                    case "Z":
                    case "z":
                        return i = n, void(a = r);
                    case "M":
                    case "m":
                        return s && (o[1] += i, o[2] += a), i = o[1] - o[1].toFixed(e), a = o[2] - o[2].toFixed(e), n = i, r = a, o[1] = +o[1].toFixed(e), void(o[2] = +o[2].toFixed(e));
                    case "A":
                    case "a":
                        return s && (o[6] += i, o[7] += a), i = o[6] - o[6].toFixed(e), a = o[7] - o[7].toFixed(e), o[1] = +o[1].toFixed(e), o[2] = +o[2].toFixed(e), o[3] = +o[3].toFixed(e + 2), o[6] = +o[6].toFixed(e), void(o[7] = +o[7].toFixed(e));
                    default:
                        return t = o.length, s && (o[t - 2] += i, o[t - 1] += a), i = o[t - 2] - o[t - 2].toFixed(e), a = o[t - 1] - o[t - 1].toFixed(e), void o.forEach(function(t, n) {
                            n && (o[n] = +o[n].toFixed(e))
                        })
                }
            }), this
        }, u.prototype.iterate = function(e, t) {
            var n, r, i, a = this.segments,
                o = {},
                s = !1,
                u = 0,
                c = 0,
                l = 0,
                d = 0;
            if (t || this.__evaluateStack(), a.forEach(function(t, n) {
                    var r = e(t, n, u, c);
                    Array.isArray(r) && (o[n] = r, s = !0);
                    var i = t[0] === t[0].toLowerCase();
                    switch (t[0]) {
                        case "m":
                        case "M":
                            return u = t[1] + (i ? u : 0), c = t[2] + (i ? c : 0), l = u, void(d = c);
                        case "h":
                        case "H":
                            return void(u = t[1] + (i ? u : 0));
                        case "v":
                        case "V":
                            return void(c = t[1] + (i ? c : 0));
                        case "z":
                        case "Z":
                            return u = l, void(c = d);
                        default:
                            u = t[t.length - 2] + (i ? u : 0), c = t[t.length - 1] + (i ? c : 0)
                    }
                }), !s) return this;
            for (i = [], n = 0; n < a.length; n++)
                if (void 0 !== o[n])
                    for (r = 0; r < o[n].length; r++) i.push(o[n][r]);
                else i.push(a[n]);
            return this.segments = i, this
        }, u.prototype.abs = function() {
            return this.iterate(function(e, t, n, r) {
                var i, a = e[0],
                    o = a.toUpperCase();
                if (a !== o) switch (e[0] = o, a) {
                    case "v":
                        return void(e[1] += r);
                    case "a":
                        return e[6] += n, void(e[7] += r);
                    default:
                        for (i = 1; i < e.length; i++) e[i] += i % 2 ? n : r
                }
            }, !0), this
        }, u.prototype.rel = function() {
            return this.iterate(function(e, t, n, r) {
                var i, a = e[0],
                    o = a.toLowerCase();
                if (a !== o && (0 !== t || "M" !== a)) switch (e[0] = o, a) {
                    case "V":
                        return void(e[1] -= r);
                    case "A":
                        return e[6] -= n, void(e[7] -= r);
                    default:
                        for (i = 1; i < e.length; i++) e[i] -= i % 2 ? n : r
                }
            }, !0), this
        }, u.prototype.unarc = function() {
            return this.iterate(function(e, t, n, r) {
                var i, a, o, s = [],
                    u = e[0];
                return "A" !== u && "a" !== u ? null : ("a" === u ? (a = n + e[6], o = r + e[7]) : (a = e[6], o = e[7]), 0 === (i = ef(n, r, a, o, e[4], e[5], e[1], e[2], e[3])).length ? [
                    ["a" === e[0] ? "l" : "L", e[6], e[7]]
                ] : (i.forEach(function(e) {
                    s.push(["C", e[2], e[3], e[4], e[5], e[6], e[7]])
                }), s))
            }), this
        }, u.prototype.unshort = function() {
            var e, t, n, r, i, a = this.segments;
            return this.iterate(function(o, s, u, c) {
                var l, d = o[0],
                    f = d.toUpperCase();
                s && ("T" === f ? (l = "t" === d, "Q" === (n = a[s - 1])[0] ? (e = n[1] - u, t = n[2] - c) : "q" === n[0] ? (e = n[1] - n[3], t = n[2] - n[4]) : (e = 0, t = 0), r = -e, i = -t, l || (r += u, i += c), a[s] = [l ? "q" : "Q", r, i, o[1], o[2]]) : "S" === f && (l = "s" === d, "C" === (n = a[s - 1])[0] ? (e = n[3] - u, t = n[4] - c) : "c" === n[0] ? (e = n[3] - n[5], t = n[4] - n[6]) : (e = 0, t = 0), r = -e, i = -t, l || (r += u, i += c), a[s] = [l ? "c" : "C", r, i, o[1], o[2], o[3], o[4]]))
            }), this
        };
        var eh = u,
            em = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
            },
            eg = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
            e_ = function(e) {
                var t = [];
                return e.replace(eg, function(e, n, r) {
                    var i, a = n.toLowerCase();
                    for (r = (i = r.match(eb)) ? i.map(Number) : [], "m" === a && r.length > 2 && (t.push([n].concat(r.splice(0, 2))), a = "l", n = "m" === n ? "l" : "L"); r.length >= 0;) {
                        if (r.length === em[a]) return r.unshift(n), t.push(r);
                        if (r.length < em[a]) throw Error("malformed path data");
                        t.push([n].concat(r.splice(0, em[a])))
                    }
                }), t
            },
            eb = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi,
            ev = function(e, t, n, r, i, a, o, s) {
                return new c(e, t, n, r, i, a, o, s)
            };
        c.prototype = {
            constructor: c,
            init: function() {
                this.length = this.getArcLength([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y])
            },
            getTotalLength: function() {
                return this.length
            },
            getPointAtLength: function(e) {
                var t = f(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
                return this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t)
            },
            getTangentAtLength: function(e) {
                var t = f(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]),
                    n = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t),
                    r = Math.sqrt(n.x * n.x + n.y * n.y);
                return r > 0 ? {
                    x: n.x / r,
                    y: n.y / r
                } : {
                    x: 0,
                    y: 0
                }
            },
            getPropertiesAtLength: function(e) {
                var t, n = f(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]),
                    r = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], n),
                    i = Math.sqrt(r.x * r.x + r.y * r.y);
                t = i > 0 ? {
                    x: r.x / i,
                    y: r.y / i
                } : {
                    x: 0,
                    y: 0
                };
                var a = this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], n);
                return {
                    x: a.x,
                    y: a.y,
                    tangentX: t.x,
                    tangentY: t.y
                }
            }
        };
        var ey = [
                [],
                [],
                [-.5773502691896257, .5773502691896257],
                [0, -.7745966692414834, .7745966692414834],
                [-.33998104358485626, .33998104358485626, -.8611363115940526, .8611363115940526],
                [0, -.5384693101056831, .5384693101056831, -.906179845938664, .906179845938664],
                [.6612093864662645, -.6612093864662645, -.2386191860831969, .2386191860831969, -.932469514203152, .932469514203152],
                [0, .4058451513773972, -.4058451513773972, -.7415311855993945, .7415311855993945, -.9491079123427585, .9491079123427585],
                [-.1834346424956498, .1834346424956498, -.525532409916329, .525532409916329, -.7966664774136267, .7966664774136267, -.9602898564975363, .9602898564975363],
                [0, -.8360311073266358, .8360311073266358, -.9681602395076261, .9681602395076261, -.3242534234038089, .3242534234038089, -.6133714327005904, .6133714327005904],
                [-.14887433898163122, .14887433898163122, -.4333953941292472, .4333953941292472, -.6794095682990244, .6794095682990244, -.8650633666889845, .8650633666889845, -.9739065285171717, .9739065285171717],
                [0, -.26954315595234496, .26954315595234496, -.5190961292068118, .5190961292068118, -.7301520055740494, .7301520055740494, -.8870625997680953, .8870625997680953, -.978228658146057, .978228658146057],
                [-.1252334085114689, .1252334085114689, -.3678314989981802, .3678314989981802, -.5873179542866175, .5873179542866175, -.7699026741943047, .7699026741943047, -.9041172563704749, .9041172563704749, -.9815606342467192, .9815606342467192],
                [0, -.2304583159551348, .2304583159551348, -.44849275103644687, .44849275103644687, -.6423493394403402, .6423493394403402, -.8015780907333099, .8015780907333099, -.9175983992229779, .9175983992229779, -.9841830547185881, .9841830547185881],
                [-.10805494870734367, .10805494870734367, -.31911236892788974, .31911236892788974, -.5152486363581541, .5152486363581541, -.6872929048116855, .6872929048116855, -.827201315069765, .827201315069765, -.9284348836635735, .9284348836635735, -.9862838086968123, .9862838086968123],
                [0, -.20119409399743451, .20119409399743451, -.3941513470775634, .3941513470775634, -.5709721726085388, .5709721726085388, -.7244177313601701, .7244177313601701, -.8482065834104272, .8482065834104272, -.937273392400706, .937273392400706, -.9879925180204854, .9879925180204854],
                [-.09501250983763744, .09501250983763744, -.2816035507792589, .2816035507792589, -.45801677765722737, .45801677765722737, -.6178762444026438, .6178762444026438, -.755404408355003, .755404408355003, -.8656312023878318, .8656312023878318, -.9445750230732326, .9445750230732326, -.9894009349916499, .9894009349916499],
                [0, -.17848418149584785, .17848418149584785, -.3512317634538763, .3512317634538763, -.5126905370864769, .5126905370864769, -.6576711592166907, .6576711592166907, -.7815140038968014, .7815140038968014, -.8802391537269859, .8802391537269859, -.9506755217687678, .9506755217687678, -.9905754753144174, .9905754753144174],
                [-.0847750130417353, .0847750130417353, -.2518862256915055, .2518862256915055, -.41175116146284263, .41175116146284263, -.5597708310739475, .5597708310739475, -.6916870430603532, .6916870430603532, -.8037049589725231, .8037049589725231, -.8926024664975557, .8926024664975557, -.9558239495713977, .9558239495713977, -.9915651684209309, .9915651684209309],
                [0, -.16035864564022537, .16035864564022537, -.31656409996362983, .31656409996362983, -.46457074137596094, .46457074137596094, -.600545304661681, .600545304661681, -.7209661773352294, .7209661773352294, -.8227146565371428, .8227146565371428, -.9031559036148179, .9031559036148179, -.96020815213483, .96020815213483, -.9924068438435844, .9924068438435844],
                [-.07652652113349734, .07652652113349734, -.22778585114164507, .22778585114164507, -.37370608871541955, .37370608871541955, -.5108670019508271, .5108670019508271, -.636053680726515, .636053680726515, -.7463319064601508, .7463319064601508, -.8391169718222188, .8391169718222188, -.912234428251326, .912234428251326, -.9639719272779138, .9639719272779138, -.9931285991850949, .9931285991850949],
                [0, -.1455618541608951, .1455618541608951, -.2880213168024011, .2880213168024011, -.4243421202074388, .4243421202074388, -.5516188358872198, .5516188358872198, -.6671388041974123, .6671388041974123, -.7684399634756779, .7684399634756779, -.8533633645833173, .8533633645833173, -.9200993341504008, .9200993341504008, -.9672268385663063, .9672268385663063, -.9937521706203895, .9937521706203895],
                [-.06973927331972223, .06973927331972223, -.20786042668822127, .20786042668822127, -.34193582089208424, .34193582089208424, -.469355837986757, .469355837986757, -.5876404035069116, .5876404035069116, -.6944872631866827, .6944872631866827, -.7878168059792081, .7878168059792081, -.8658125777203002, .8658125777203002, -.926956772187174, .926956772187174, -.9700604978354287, .9700604978354287, -.9942945854823992, .9942945854823992],
                [0, -.1332568242984661, .1332568242984661, -.26413568097034495, .26413568097034495, -.3903010380302908, .3903010380302908, -.5095014778460075, .5095014778460075, -.6196098757636461, .6196098757636461, -.7186613631319502, .7186613631319502, -.8048884016188399, .8048884016188399, -.8767523582704416, .8767523582704416, -.9329710868260161, .9329710868260161, -.9725424712181152, .9725424712181152, -.9947693349975522, .9947693349975522],
                [-.06405689286260563, .06405689286260563, -.1911188674736163, .1911188674736163, -.3150426796961634, .3150426796961634, -.4337935076260451, .4337935076260451, -.5454214713888396, .5454214713888396, -.6480936519369755, .6480936519369755, -.7401241915785544, .7401241915785544, -.820001985973903, .820001985973903, -.8864155270044011, .8864155270044011, -.9382745520027328, .9382745520027328, -.9747285559713095, .9747285559713095, -.9951872199970213, .9951872199970213]
            ],
            eE = [
                [],
                [],
                [1, 1],
                [.8888888888888888, .5555555555555556, .5555555555555556],
                [.6521451548625461, .6521451548625461, .34785484513745385, .34785484513745385],
                [.5688888888888889, .47862867049936647, .47862867049936647, .23692688505618908, .23692688505618908],
                [.3607615730481386, .3607615730481386, .46791393457269104, .46791393457269104, .17132449237917036, .17132449237917036],
                [.4179591836734694, .3818300505051189, .3818300505051189, .27970539148927664, .27970539148927664, .1294849661688697, .1294849661688697],
                [.362683783378362, .362683783378362, .31370664587788727, .31370664587788727, .22238103445337448, .22238103445337448, .10122853629037626, .10122853629037626],
                [.3302393550012598, .1806481606948574, .1806481606948574, .08127438836157441, .08127438836157441, .31234707704000286, .31234707704000286, .26061069640293544, .26061069640293544],
                [.29552422471475287, .29552422471475287, .26926671930999635, .26926671930999635, .21908636251598204, .21908636251598204, .1494513491505806, .1494513491505806, .06667134430868814, .06667134430868814],
                [.2729250867779006, .26280454451024665, .26280454451024665, .23319376459199048, .23319376459199048, .18629021092773426, .18629021092773426, .1255803694649046, .1255803694649046, .05566856711617366, .05566856711617366],
                [.24914704581340277, .24914704581340277, .2334925365383548, .2334925365383548, .20316742672306592, .20316742672306592, .16007832854334622, .16007832854334622, .10693932599531843, .10693932599531843, .04717533638651183, .04717533638651183],
                [.2325515532308739, .22628318026289723, .22628318026289723, .2078160475368885, .2078160475368885, .17814598076194574, .17814598076194574, .13887351021978725, .13887351021978725, .09212149983772845, .09212149983772845, .04048400476531588, .04048400476531588],
                [.2152638534631578, .2152638534631578, .2051984637212956, .2051984637212956, .18553839747793782, .18553839747793782, .15720316715819355, .15720316715819355, .12151857068790319, .12151857068790319, .08015808715976021, .08015808715976021, .03511946033175186, .03511946033175186],
                [.2025782419255613, .19843148532711158, .19843148532711158, .1861610000155622, .1861610000155622, .16626920581699392, .16626920581699392, .13957067792615432, .13957067792615432, .10715922046717194, .10715922046717194, .07036604748810812, .07036604748810812, .03075324199611727, .03075324199611727],
                [.1894506104550685, .1894506104550685, .18260341504492358, .18260341504492358, .16915651939500254, .16915651939500254, .14959598881657674, .14959598881657674, .12462897125553388, .12462897125553388, .09515851168249279, .09515851168249279, .062253523938647894, .062253523938647894, .027152459411754096, .027152459411754096],
                [.17944647035620653, .17656270536699264, .17656270536699264, .16800410215645004, .16800410215645004, .15404576107681028, .15404576107681028, .13513636846852548, .13513636846852548, .11188384719340397, .11188384719340397, .08503614831717918, .08503614831717918, .0554595293739872, .0554595293739872, .02414830286854793, .02414830286854793],
                [.1691423829631436, .1691423829631436, .16427648374583273, .16427648374583273, .15468467512626524, .15468467512626524, .14064291467065065, .14064291467065065, .12255520671147846, .12255520671147846, .10094204410628717, .10094204410628717, .07642573025488905, .07642573025488905, .0497145488949698, .0497145488949698, .02161601352648331, .02161601352648331],
                [.1610544498487837, .15896884339395434, .15896884339395434, .15276604206585967, .15276604206585967, .1426067021736066, .1426067021736066, .12875396253933621, .12875396253933621, .11156664554733399, .11156664554733399, .09149002162245, .09149002162245, .06904454273764123, .06904454273764123, .0448142267656996, .0448142267656996, .019461788229726478, .019461788229726478],
                [.15275338713072584, .15275338713072584, .14917298647260374, .14917298647260374, .14209610931838204, .14209610931838204, .13168863844917664, .13168863844917664, .11819453196151841, .11819453196151841, .10193011981724044, .10193011981724044, .08327674157670475, .08327674157670475, .06267204833410907, .06267204833410907, .04060142980038694, .04060142980038694, .017614007139152118, .017614007139152118],
                [.14608113364969041, .14452440398997005, .14452440398997005, .13988739479107315, .13988739479107315, .13226893863333747, .13226893863333747, .12183141605372853, .12183141605372853, .10879729916714838, .10879729916714838, .09344442345603386, .09344442345603386, .0761001136283793, .0761001136283793, .057134425426857205, .057134425426857205, .036953789770852494, .036953789770852494, .016017228257774335, .016017228257774335],
                [.13925187285563198, .13925187285563198, .13654149834601517, .13654149834601517, .13117350478706238, .13117350478706238, .12325237681051242, .12325237681051242, .11293229608053922, .11293229608053922, .10041414444288096, .10041414444288096, .08594160621706773, .08594160621706773, .06979646842452049, .06979646842452049, .052293335152683286, .052293335152683286, .03377490158481415, .03377490158481415, .0146279952982722, .0146279952982722],
                [.13365457218610619, .1324620394046966, .1324620394046966, .12890572218808216, .12890572218808216, .12304908430672953, .12304908430672953, .11499664022241136, .11499664022241136, .10489209146454141, .10489209146454141, .09291576606003515, .09291576606003515, .07928141177671895, .07928141177671895, .06423242140852585, .06423242140852585, .04803767173108467, .04803767173108467, .030988005856979445, .030988005856979445, .013411859487141771, .013411859487141771],
                [.12793819534675216, .12793819534675216, .1258374563468283, .1258374563468283, .12167047292780339, .12167047292780339, .1155056680537256, .1155056680537256, .10744427011596563, .10744427011596563, .09761865210411388, .09761865210411388, .08619016153195327, .08619016153195327, .0733464814110803, .0733464814110803, .05929858491543678, .05929858491543678, .04427743881741981, .04427743881741981, .028531388628933663, .028531388628933663, .0123412297999872, .0123412297999872]
            ],
            eS = [
                [1],
                [1, 1],
                [1, 2, 1],
                [1, 3, 3, 1]
            ],
            ex = 2 * Math.PI,
            ew = function(e, t, n, r, i, a, o, s, u) {
                var c, l, d, f, p, h, m, g, _, v, y, E, S, x, w, T, C, D, O, M, A, k, R, N = Math.sin(i * ex / 360),
                    I = Math.cos(i * ex / 360),
                    L = I * (e - s) / 2 + N * (t - u) / 2,
                    P = -N * (e - s) / 2 + I * (t - u) / 2;
                if (0 === L && 0 === P || 0 === n || 0 === r) return [];
                n = Math.abs(n);
                var F = L * L / (n * n) + P * P / ((r = Math.abs(r)) * r);
                F > 1 && (n *= Math.sqrt(F), r *= Math.sqrt(F));
                var B = (c = e, l = t, d = s, f = u, p = a, h = o, m = n, g = r, _ = N, y = (v = I) * (c - d) / 2 + _ * (l - f) / 2, E = -_ * (c - d) / 2 + v * (l - f) / 2, S = m * m, x = g * g, w = y * y, (C = S * x - S * (T = E * E) - x * w) < 0 && (C = 0), C /= S * T + x * w, D = (C = Math.sqrt(C) * (p === h ? -1 : 1)) * m / g * E, O = -(C * g) / m * y, k = b(1, 0, M = (y - D) / m, A = (E - O) / g), R = b(M, A, (-y - D) / m, (-E - O) / g), 0 === h && R > 0 && (R -= ex), 1 === h && R < 0 && (R += ex), [v * D - _ * O + (c + d) / 2, _ * D + v * O + (l + f) / 2, k, R]),
                    U = [],
                    Y = B[2],
                    j = B[3],
                    z = Math.max(Math.ceil(Math.abs(j) / (ex / 4)), 1);
                j /= z;
                for (var H = 0; H < z; H++) U.push(function(e, t) {
                    var n = 4 / 3 * Math.tan(t / 4),
                        r = Math.cos(e),
                        i = Math.sin(e),
                        a = Math.cos(e + t),
                        o = Math.sin(e + t);
                    return [r, i, r - i * n, i + r * n, a + o * n, o - a * n, a, o]
                }(Y, j)), Y += j;
                return U.map(function(e) {
                    for (var t = 0; t < e.length; t += 2) {
                        var i = e[t + 0],
                            a = e[t + 1];
                        i *= n;
                        var o = I * i - N * (a *= r),
                            s = N * i + I * a;
                        e[t + 0] = o + B[0], e[t + 1] = s + B[1]
                    }
                    return e
                })
            },
            eT = function(e, t, n, r, i, a, o, s, u) {
                return new v(e, t, n, r, i, a, o, s, u)
            };
        v.prototype = {
            constructor: v,
            init: function() {},
            getTotalLength: function() {
                return this.length
            },
            getPointAtLength: function(e) {
                e < 0 ? e = 0 : e > this.length && (e = this.length);
                for (var t = this.partialLengths.length - 1; this.partialLengths[t] >= e && this.partialLengths[t] > 0;) t--;
                t < this.partialLengths.length - 1 && t++;
                for (var n = 0, r = 0; r < t; r++) n += this.partialLengths[r];
                return this.curves[t].getPointAtLength(e - n)
            },
            getTangentAtLength: function(e) {
                e < 0 ? e = 0 : e > this.length && (e = this.length);
                for (var t = this.partialLengths.length - 1; this.partialLengths[t] >= e && this.partialLengths[t] > 0;) t--;
                t < this.partialLengths.length - 1 && t++;
                for (var n = 0, r = 0; r < t; r++) n += this.partialLengths[r];
                return this.curves[t].getTangentAtLength(e - n)
            },
            getPropertiesAtLength: function(e) {
                var t = this.getTangentAtLength(e),
                    n = this.getPointAtLength(e);
                return {
                    x: n.x,
                    y: n.y,
                    tangentX: t.x,
                    tangentY: t.y
                }
            }
        };
        var eC = function(e, t, n, r) {
            return new y(e, t, n, r)
        };
        y.prototype.getTotalLength = function() {
            return Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2))
        }, y.prototype.getPointAtLength = function(e) {
            var t = e / Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2)),
                n = (this.x1 - this.x0) * t,
                r = (this.y1 - this.y0) * t;
            return {
                x: this.x0 + n,
                y: this.y0 + r
            }
        }, y.prototype.getTangentAtLength = function() {
            var e = Math.sqrt((this.x1 - this.x0) * (this.x1 - this.x0) + (this.y1 - this.y0) * (this.y1 - this.y0));
            return {
                x: (this.x1 - this.x0) / e,
                y: (this.y1 - this.y0) / e
            }
        }, y.prototype.getPropertiesAtLength = function(e) {
            var t = this.getPointAtLength(e),
                n = this.getTangentAtLength();
            return {
                x: t.x,
                y: t.y,
                tangentX: n.x,
                tangentY: n.y
            }
        };
        var eD = function(e) {
                function t(e) {
                    if (!e) return null;
                    for (var a, o = e_(e), s = [0, 0], u = [0, 0], c = 0; c < o.length; c++) "M" === o[c][0] ? (s = [o[c][1], o[c][2]], i.push(null)) : "m" === o[c][0] ? (s = [o[c][1] + s[0], o[c][2] + s[1]], i.push(null)) : "L" === o[c][0] ? (n += Math.sqrt(Math.pow(s[0] - o[c][1], 2) + Math.pow(s[1] - o[c][2], 2)), i.push(new eC(s[0], o[c][1], s[1], o[c][2])), s = [o[c][1], o[c][2]]) : "l" === o[c][0] ? (n += Math.sqrt(Math.pow(o[c][1], 2) + Math.pow(o[c][2], 2)), i.push(new eC(s[0], o[c][1] + s[0], s[1], o[c][2] + s[1])), s = [o[c][1] + s[0], o[c][2] + s[1]]) : "H" === o[c][0] ? (n += Math.abs(s[0] - o[c][1]), i.push(new eC(s[0], o[c][1], s[1], s[1])), s[0] = o[c][1]) : "h" === o[c][0] ? (n += Math.abs(o[c][1]), i.push(new eC(s[0], s[0] + o[c][1], s[1], s[1])), s[0] = o[c][1] + s[0]) : "V" === o[c][0] ? (n += Math.abs(s[1] - o[c][1]), i.push(new eC(s[0], s[0], s[1], o[c][1])), s[1] = o[c][1]) : "v" === o[c][0] ? (n += Math.abs(o[c][1]), i.push(new eC(s[0], s[0], s[1], s[1] + o[c][1])), s[1] = o[c][1] + s[1]) : "z" === o[c][0] || "Z" === o[c][0] ? (n += Math.sqrt(Math.pow(o[0][1] - s[0], 2) + Math.pow(o[0][2] - s[1], 2)), i.push(new eC(s[0], o[0][1], s[1], o[0][2])), s = [o[0][1], o[0][2]]) : "C" === o[c][0] ? (a = new ev(s[0], s[1], o[c][1], o[c][2], o[c][3], o[c][4], o[c][5], o[c][6]), n += a.getTotalLength(), s = [o[c][5], o[c][6]], i.push(a)) : "c" === o[c][0] ? (a = new ev(s[0], s[1], s[0] + o[c][1], s[1] + o[c][2], s[0] + o[c][3], s[1] + o[c][4], s[0] + o[c][5], s[1] + o[c][6]), n += a.getTotalLength(), s = [o[c][5] + s[0], o[c][6] + s[1]], i.push(a)) : "S" === o[c][0] ? (a = c > 0 && ["C", "c", "S", "s"].indexOf(o[c - 1][0]) > -1 ? new ev(s[0], s[1], 2 * s[0] - o[c - 1][o[c - 1].length - 4], 2 * s[1] - o[c - 1][o[c - 1].length - 3], o[c][1], o[c][2], o[c][3], o[c][4]) : new ev(s[0], s[1], s[0], s[1], o[c][1], o[c][2], o[c][3], o[c][4]), n += a.getTotalLength(), s = [o[c][3], o[c][4]], i.push(a)) : "s" === o[c][0] ? (a = c > 0 && ["C", "c", "S", "s"].indexOf(o[c - 1][0]) > -1 ? new ev(s[0], s[1], s[0] + a.d.x - a.c.x, s[1] + a.d.y - a.c.y, s[0] + o[c][1], s[1] + o[c][2], s[0] + o[c][3], s[1] + o[c][4]) : new ev(s[0], s[1], s[0], s[1], s[0] + o[c][1], s[1] + o[c][2], s[0] + o[c][3], s[1] + o[c][4]), n += a.getTotalLength(), s = [o[c][3] + s[0], o[c][4] + s[1]], i.push(a)) : "Q" === o[c][0] ? (a = new ev(s[0], s[1], o[c][1], o[c][2], o[c][3], o[c][4]), n += a.getTotalLength(), i.push(a), s = [o[c][3], o[c][4]], u = [o[c][1], o[c][2]]) : "q" === o[c][0] ? (a = new ev(s[0], s[1], s[0] + o[c][1], s[1] + o[c][2], s[0] + o[c][3], s[1] + o[c][4]), n += a.getTotalLength(), u = [s[0] + o[c][1], s[1] + o[c][2]], s = [o[c][3] + s[0], o[c][4] + s[1]], i.push(a)) : "T" === o[c][0] ? (a = c > 0 && ["Q", "q", "T", "t"].indexOf(o[c - 1][0]) > -1 ? new ev(s[0], s[1], 2 * s[0] - u[0], 2 * s[1] - u[1], o[c][1], o[c][2]) : new eC(s[0], o[c][1], s[1], o[c][2]), i.push(a), n += a.getTotalLength(), u = [2 * s[0] - u[0], 2 * s[1] - u[1]], s = [o[c][1], o[c][2]]) : "t" === o[c][0] ? (a = c > 0 && ["Q", "q", "T", "t"].indexOf(o[c - 1][0]) > -1 ? new ev(s[0], s[1], 2 * s[0] - u[0], 2 * s[1] - u[1], s[0] + o[c][1], s[1] + o[c][2]) : new eC(s[0], s[0] + o[c][1], s[1], s[1] + o[c][2]), n += a.getTotalLength(), u = [2 * s[0] - u[0], 2 * s[1] - u[1]], s = [o[c][1] + s[0], o[c][2] + s[0]], i.push(a)) : "A" === o[c][0] ? (a = new eT(s[0], s[1], o[c][1], o[c][2], o[c][3], o[c][4], o[c][5], o[c][6], o[c][7]), n += a.getTotalLength(), s = [o[c][6], o[c][7]], i.push(a)) : "a" === o[c][0] && (a = new eT(s[0], s[1], o[c][1], o[c][2], o[c][3], o[c][4], o[c][5], s[0] + o[c][6], s[1] + o[c][7]), n += a.getTotalLength(), s = [s[0] + o[c][6], s[1] + o[c][7]], i.push(a)), r.push(n);
                    return t
                }
                var n = 0,
                    r = [],
                    i = [];
                t.getTotalLength = function() {
                    return n
                }, t.getPointAtLength = function(e) {
                    var t = a(e);
                    return i[t.i].getPointAtLength(t.fraction)
                }, t.getTangentAtLength = function(e) {
                    var t = a(e);
                    return i[t.i].getTangentAtLength(t.fraction)
                }, t.getPropertiesAtLength = function(e) {
                    var t = a(e);
                    return i[t.i].getPropertiesAtLength(t.fraction)
                };
                var a = function(e) {
                    e < 0 ? e = 0 : e > n && (e = n);
                    for (var t = r.length - 1; r[t] >= e && r[t] > 0;) t--;
                    return {
                        fraction: e - r[++t - 1],
                        i: t
                    }
                };
                return t(e)
            },
            eO = 'All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).\nExample valid ways of supplying a shape would be:\n[[0, 0], [10, 0], [10, 10]]\n"M0,0 L10,0 L10,10Z"\n',
            eM = "flubber.all() expects two arrays of equal length as arguments. Each element in both arrays should be an array of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).",
            eA = function(e, t) {
                for (var n, r, i, a = e.length, o = 1 / 0, s = 0; s < a; s++) ! function(i) {
                    r = 0, t.forEach(function(t, n) {
                        var o = E(e[(i + n) % a], t);
                        r += o * o
                    }), r < o && (o = r, n = i)
                }(s);
                n && (i = e.splice(0, n), e.splice.apply(e, [e.length, 0].concat(i)))
            },
            ek = R;
        R.deviation = function(e, t, n, r) {
            var i = t && t.length,
                a = i ? t[0] * n : e.length,
                o = Math.abs(W(e, 0, a, n));
            if (i)
                for (var s = 0, u = t.length; s < u; s++) {
                    var c = t[s] * n,
                        l = s < u - 1 ? t[s + 1] * n : e.length;
                    o -= Math.abs(W(e, c, l, n))
                }
            var d = 0;
            for (s = 0; s < r.length; s += 3) {
                var f = r[s] * n,
                    p = r[s + 1] * n,
                    h = r[s + 2] * n;
                d += Math.abs((e[f] - e[h]) * (e[p + 1] - e[f + 1]) - (e[f] - e[p]) * (e[h + 1] - e[f + 1]))
            }
            return 0 === o && 0 === d ? 0 : Math.abs((d - o) / o)
        }, R.flatten = function(e) {
            for (var t = e[0][0].length, n = {
                    vertices: [],
                    holes: [],
                    dimensions: t
                }, r = 0, i = 0; i < e.length; i++) {
                for (var a = 0; a < e[i].length; a++)
                    for (var o = 0; o < t; o++) n.vertices.push(e[i][a][o]);
                i > 0 && (r += e[i - 1].length, n.holes.push(r))
            }
            return n
        };
        var eR = function(e) {
                return e
            },
            eN = function(e) {
                if (null == e) return eR;
                var t, n, r = e.scale[0],
                    i = e.scale[1],
                    a = e.translate[0],
                    o = e.translate[1];
                return function(e, s) {
                    s || (t = n = 0);
                    var u = 2,
                        c = e.length,
                        l = Array(c);
                    for (l[0] = (t += e[0]) * r + a, l[1] = (n += e[1]) * i + o; u < c;) l[u] = e[u], ++u;
                    return l
                }
            },
            eI = function(e, t) {
                for (var n, r = e.length, i = r - t; i < --r;) n = e[i], e[i++] = e[r], e[r] = n
            },
            eL = function(e, t) {
                return "GeometryCollection" === t.type ? {
                    type: "FeatureCollection",
                    features: t.geometries.map(function(t) {
                        return K(e, t)
                    })
                } : K(e, t)
            },
            eP = function(e, t) {
                function n(e, t) {
                    for (var n in e) {
                        var i = e[n];
                        delete t[i.start], delete i.start, delete i.end, i.forEach(function(e) {
                            r[e < 0 ? ~e : e] = 1
                        }), o.push(i)
                    }
                }
                var r = {},
                    i = {},
                    a = {},
                    o = [],
                    s = -1;
                return t.forEach(function(n, r) {
                    var i, a = e.arcs[n < 0 ? ~n : n];
                    !(a.length < 3) || a[1][0] || a[1][1] || (i = t[++s], t[s] = n, t[r] = i)
                }), t.forEach(function(t) {
                    var n, r, o, s, u, c, l = (n = t, s = (o = e.arcs[n < 0 ? ~n : n])[0], e.transform ? (r = [0, 0], o.forEach(function(e) {
                            r[0] += e[0], r[1] += e[1]
                        })) : r = o[o.length - 1], n < 0 ? [r, s] : [s, r]),
                        d = l[0],
                        f = l[1];
                    if (u = a[d]) {
                        if (delete a[u.end], u.push(t), u.end = f, c = i[f]) {
                            delete i[c.start];
                            var p = c === u ? u : u.concat(c);
                            i[p.start = u.start] = a[p.end = c.end] = p
                        } else i[u.start] = a[u.end] = u
                    } else if (u = i[f]) {
                        if (delete i[u.start], u.unshift(t), u.start = d, c = a[d]) {
                            delete a[c.end];
                            var h = c === u ? u : c.concat(u);
                            i[h.start = c.start] = a[h.end = u.end] = h
                        } else i[u.start] = a[u.end] = u
                    } else i[(u = [t]).start = d] = a[u.end = f] = u
                }), n(a, i), n(i, a), t.forEach(function(e) {
                    r[e < 0 ? ~e : e] || o.push([e])
                }), o
            },
            eF = function(e, t) {
                for (var n = 0, r = e.length; n < r;) {
                    var i = n + r >>> 1;
                    e[i] < t ? n = i + 1 : r = i
                }
                return n
            },
            eB = function(e) {
                function t(e, t) {
                    e.forEach(function(e) {
                        e < 0 && (e = ~e);
                        var n = r[e];
                        n ? n.push(t) : r[e] = [t]
                    })
                }

                function n(e, n) {
                    e.forEach(function(e) {
                        t(e, n)
                    })
                }
                var r = {},
                    i = e.map(function() {
                        return []
                    }),
                    a = {
                        LineString: t,
                        MultiLineString: n,
                        Polygon: n,
                        MultiPolygon: function(e, t) {
                            e.forEach(function(e) {
                                n(e, t)
                            })
                        }
                    };
                for (var o in e.forEach(function e(t, n) {
                        "GeometryCollection" === t.type ? t.geometries.forEach(function(t) {
                            e(t, n)
                        }) : t.type in a && a[t.type](t.arcs, n)
                    }), r)
                    for (var s = r[o], u = s.length, c = 0; c < u; ++c)
                        for (var l = c + 1; l < u; ++l) {
                            var d, f = s[c],
                                p = s[l];
                            (d = i[f])[o = eF(d, p)] !== p && d.splice(o, 0, p), (d = i[p])[o = eF(d, f)] !== f && d.splice(o, 0, f)
                        }
                return i
            },
            eU = function(e, t) {
                return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
            },
            eY = function(e) {
                var t;
                return 1 === e.length && (t = e, e = function(e, n) {
                    return eU(t(e), n)
                }), {
                    left: function(t, n, r, i) {
                        for (null == r && (r = 0), null == i && (i = t.length); r < i;) {
                            var a = r + i >>> 1;
                            0 > e(t[a], n) ? r = a + 1 : i = a
                        }
                        return r
                    },
                    right: function(t, n, r, i) {
                        for (null == r && (r = 0), null == i && (i = t.length); r < i;) {
                            var a = r + i >>> 1;
                            e(t[a], n) > 0 ? i = a : r = a + 1
                        }
                        return r
                    }
                }
            },
            ej = (eY(eU).right, function(e, t) {
                var n, r, i, a;
                return function(e, t) {
                    for (var n = e.objects.triangles.geometries, r = eY(function(e) {
                            return e.area
                        }).left; n.length > t;) ! function() {
                        var t = n[0],
                            i = eB(n)[0][0],
                            a = n[i],
                            o = function(e, t) {
                                function n(e) {
                                    e.forEach(function(t) {
                                        t.forEach(function(t) {
                                            (i[t = t < 0 ? ~t : t] || (i[t] = [])).push(e)
                                        })
                                    }), a.push(e)
                                }

                                function r(t) {
                                    return function(e) {
                                        for (var t, n = -1, r = e.length, i = e[r - 1], a = 0; ++n < r;) t = i, i = e[n], a += t[0] * i[1] - t[1] * i[0];
                                        return Math.abs(a)
                                    }(q(e, {
                                        type: "Polygon",
                                        arcs: [t]
                                    }).coordinates[0])
                                }
                                var i = {},
                                    a = [],
                                    o = [];
                                return t.forEach(function e(t) {
                                    switch (t.type) {
                                        case "GeometryCollection":
                                            t.geometries.forEach(e);
                                            break;
                                        case "Polygon":
                                            n(t.arcs);
                                            break;
                                        case "MultiPolygon":
                                            t.arcs.forEach(n)
                                    }
                                }), a.forEach(function(e) {
                                    if (!e._) {
                                        var t = [],
                                            n = [e];
                                        for (e._ = 1, o.push(t); e = n.pop();) t.push(e), e.forEach(function(e) {
                                            e.forEach(function(e) {
                                                i[e < 0 ? ~e : e].forEach(function(e) {
                                                    e._ || (e._ = 1, n.push(e))
                                                })
                                            })
                                        })
                                    }
                                }), a.forEach(function(e) {
                                    delete e._
                                }), {
                                    type: "MultiPolygon",
                                    arcs: o.map(function(t) {
                                        var n, a = [];
                                        if (t.forEach(function(e) {
                                                e.forEach(function(e) {
                                                    e.forEach(function(e) {
                                                        i[e < 0 ? ~e : e].length < 2 && a.push(e)
                                                    })
                                                })
                                            }), (n = (a = eP(e, a)).length) > 1)
                                            for (var o, s, u = 1, c = r(a[0]); u < n; ++u)(o = r(a[u])) > c && (s = a[0], a[0] = a[u], a[u] = s, c = o);
                                        return a
                                    })
                                }
                            }(e, [t, a]);
                        o.area = t.area + a.area, o.type = "Polygon", o.arcs = o.arcs[0], n.splice(i, 1), n.shift(), n.splice(r(n, o.area), 0, o)
                    }();
                    if (t > n.length) throw RangeError("Can't collapse topology into " + t + " pieces.");
                    return eL(e, e.objects.triangles).features.map(function(e) {
                        return e.geometry.coordinates[0].pop(), e.geometry.coordinates[0]
                    })
                }((n = function(e) {
                    for (var t = ek(e.reduce(function(e, t) {
                            return e.concat([t[0]], [t[1]])
                        }, [])), n = [], r = 0, i = t.length; r < i; r += 3) n.push([
                        [t[r], t[r + 1]],
                        [t[r + 1], t[r + 2]],
                        [t[r + 2], t[r]]
                    ]);
                    return n
                }(e), r = e, i = {}, a = {
                    type: "Topology",
                    objects: {
                        triangles: {
                            type: "GeometryCollection",
                            geometries: []
                        }
                    },
                    arcs: []
                }, n.forEach(function(e) {
                    var t = [];
                    e.forEach(function(e, n) {
                        var o = e[0] < e[1] ? e.join(",") : e[1] + "," + e[0],
                            s = e.map(function(e) {
                                return r[e]
                            });
                        o in i ? t.push(~i[o]) : (t.push(i[o] = a.arcs.length), a.arcs.push(s))
                    }), a.objects.triangles.geometries.push({
                        type: "Polygon",
                        area: Math.abs(et(e.map(function(e) {
                            return r[e[0]]
                        }))),
                        arcs: [t]
                    })
                }), a.objects.triangles.geometries.sort(function(e, t) {
                    return e.area - t.area
                }), a), t)
            }),
            ez = function(e, t) {
                if (e.length > 8) return e.map(function(e, t) {
                    return t
                });
                var n, r, i, a, o, s = e.map(function(e) {
                    return t.map(function(t) {
                        var n, r, i;
                        return n = e, r = t, (i = E(T(n), T(r))) * i
                    })
                });
                return n = e, r = 0, i = s, a = 1 / 0,
                    function e(t, n, r) {
                        void 0 === n && (n = []), void 0 === r && (r = 0);
                        for (var s = 0; s < t.length; s++) {
                            var u = t.splice(s, 1),
                                c = i[u[0]][n.length];
                            r + c < a && (t.length ? e(t.slice(), n.concat(u), r + c) : (a = r + c, o = n.concat(u))), t.length && t.splice(s, 0, u[0])
                        }
                    }(o = n.map(function(e, t) {
                        return t
                    })), o
            };
        e.interpolate = function(e, t, n) {
            void 0 === n && (n = {});
            var r = n.maxSegmentLength;
            void 0 === r && (r = 10);
            var i = n.string;
            void 0 === i && (i = !0);
            var a = k(A(e, r), A(t, r), i);
            return i && ("string" == typeof e || "string" == typeof t) ? function(n) {
                return n < 1e-4 && "string" == typeof e ? e : 1 - n < 1e-4 && "string" == typeof t ? t : a(n)
            } : a
        }, e.separate = Q, e.combine = function(e, t, n) {
            void 0 === n && (n = {});
            var r = n.maxSegmentLength;
            void 0 === r && (r = 10);
            var i = n.string;
            void 0 === i && (i = !0);
            var a = n.single;
            void 0 === a && (a = !1);
            var o = Q(t, e, {
                maxSegmentLength: r,
                string: i,
                single: a
            });
            return a ? function(e) {
                return o(1 - e)
            } : o.map(function(e) {
                return function(t) {
                    return e(1 - t)
                }
            })
        }, e.interpolateAll = function(e, t, n) {
            void 0 === n && (n = {});
            var r = n.maxSegmentLength;
            void 0 === r && (r = 10);
            var i = n.string;
            void 0 === i && (i = !0);
            var a = n.single;
            if (void 0 === a && (a = !1), !Array.isArray(e) || !Array.isArray(t) || e.length !== t.length || !e.length) throw TypeError(eM);
            var o, s, u = function(e) {
                    return A(e, r)
                },
                c = e.map(u),
                l = t.map(u);
            return a ? (e.every(function(e) {
                return "string" == typeof e
            }) && (o = e.slice(0)), t.every(function(e) {
                return "string" == typeof e
            }) && (s = t.slice(0))) : (o = e.slice(0), s = t.slice(0)), Z(c, l, {
                string: i,
                single: a,
                t0: o,
                t1: s,
                match: !1
            })
        }, e.splitPathString = function(e) {
            return D(C(e))
        }, e.toPathString = O, e.fromCircle = X, e.toCircle = function(e, t, n, r, i) {
            var a = X(t, n, r, e, i);
            return function(e) {
                return a(1 - e)
            }
        }, e.fromRect = J, e.toRect = function(e, t, n, r, i, a) {
            var o = J(t, n, r, i, e, a);
            return function(e) {
                return o(1 - e)
            }
        }, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, "object" == typeof t ? r(t) : "function" == typeof define && define.amd ? define(["exports"], r) : r(n.flubber = n.flubber || {})
}