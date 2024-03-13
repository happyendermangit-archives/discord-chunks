function(e, t, n) {
    var r, i;
    e = n.nmd(e), n("424973"), n("70102"), n("808653"), n("781738"), n("843762"), r = this, i = function(e) {
        "use strict";

        function t(e) {
            return e >= 48 && e <= 57
        }

        function n(e) {
            this.index = 0, this.path = e, this.max = e.length, this.result = [], this.param = 0, this.err = "", this.segmentStart = 0, this.data = []
        }

        function r(e) {
            for (var t; e.index < e.max && (10 === (t = e.path.charCodeAt(e.index)) || 13 === t || 8232 === t || 8233 === t || 32 === t || 9 === t || 11 === t || 12 === t || 160 === t || t >= 5760 && eo.indexOf(t) >= 0);) e.index++
        }

        function i(e) {
            n = (t = e.path[e.segmentStart]).toLowerCase();
            var t, n, r = e.data;
            if ("m" === n && r.length > 2 && (e.result.push([t, r[0], r[1]]), r = r.slice(2), n = "l", t = "m" === t ? "l" : "L"), "r" === n) e.result.push([t].concat(r));
            else
                for (; r.length >= ei[n] && (e.result.push([t].concat(r.splice(0, ei[n]))), ei[n]););
        }

        function o() {
            if (!(this instanceof o)) return new o;
            this.queue = [], this.cache = null
        }

        function s(e, t, n, r) {
            var i = (e * n + t * r) / (Math.sqrt(e * e + t * t) * Math.sqrt(e * e + t * t));
            return i > 1 && (i = 1), i < -1 && (i = -1), (e * r - t * n < 0 ? -1 : 1) * Math.acos(i)
        }

        function a(e, t, n) {
            if (!(this instanceof a)) return new a(e, t, n);
            this.rx = e, this.ry = t, this.ax = n
        }

        function c(e) {
            if (!(this instanceof c)) return new c(e);
            var t = es(e);
            this.segments = t.segments, this.err = t.err, this.__stack = []
        }

        function u(e, t, n, r, i, o, s, a) {
            this.a = {
                x: e,
                y: t
            }, this.b = {
                x: n,
                y: r
            }, this.c = {
                x: i,
                y: o
            }, this.d = {
                x: s,
                y: a
            }, null != s && null != a ? (this.getArcLength = b, this.getPoint = h, this.getDerivative = l) : (this.getArcLength = v, this.getPoint = p, this.getDerivative = d), this.init()
        }

        function d(e, t, n) {
            return {
                x: 2 * (1 - n) * (e[1] - e[0]) + 2 * n * (e[2] - e[1]),
                y: 2 * (1 - n) * (t[1] - t[0]) + 2 * n * (t[2] - t[1])
            }
        }

        function l(e, t, n) {
            return p([3 * (e[1] - e[0]), 3 * (e[2] - e[1]), 3 * (e[3] - e[2])], [3 * (t[1] - t[0]), 3 * (t[2] - t[1]), 3 * (t[3] - t[2])], n)
        }

        function f(e, t, n, r, i) {
            for (var o = 1, s = e / t, a = (e - n(r, i, s)) / t; o > .001;) {
                var c = n(r, i, s + a),
                    u = n(r, i, s - a),
                    d = Math.abs(e - c) / t,
                    l = Math.abs(e - u) / t;
                d < o ? (o = d, s += a) : l < o ? (o = l, s -= a) : a /= 2
            }
            return s
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

        function v(e, t, n) {
            void 0 === n && (n = 1);
            var r = e[0] - 2 * e[1] + e[2],
                i = t[0] - 2 * t[1] + t[2],
                o = 2 * e[1] - 2 * e[0],
                s = 2 * t[1] - 2 * t[0],
                a = 4 * (r * r + i * i);
            if (0 === a) return n * Math.sqrt(Math.pow(e[2] - e[0], 2) + Math.pow(t[2] - t[0], 2));
            var c = 4 * (r * o + i * s) / (2 * a),
                u = n + c,
                d = (o * o + s * s) / a - c * c;
            return Math.sqrt(a) / 2 * (u * Math.sqrt(u * u + d) - c * Math.sqrt(c * c + d) + d * Math.log(Math.abs((u + Math.sqrt(u * u + d)) / (c + Math.sqrt(c * c + d)))))
        }

        function g(e, t, n) {
            var r, i, o, s, a, c = n.length - 1;
            if (0 === c) return 0;
            if (0 === e) {
                for (s = 0, a = 0; a <= c; a++) {
                    ;
                    s += (r = c, i = a, eS[r][i] * Math.pow(1 - t, c - a) * Math.pow(t, a) * n[a])
                }
                return s
            }
            for (o = Array(c), a = 0; a < c; a++) o[a] = c * (n[a + 1] - n[a]);
            return g(e - 1, t, o)
        }

        function b(e, t, n) {
            var r, i, o, s;
            for (void 0 === n && (n = 1), r = n / 2, i = 0, o = 0; o < 20; o++) s = r * ex[20][o] + r, i += ew[20][o] * function(e, t, n) {
                var r = g(1, n, e),
                    i = g(1, n, t);
                return Math.sqrt(r * r + i * i)
            }(e, t, s);
            return r * i
        }

        function m(e, t, n, r) {
            var i = e * n + t * r;
            return i > 1 && (i = 1), i < -1 && (i = -1), (e * r - t * n < 0 ? -1 : 1) * Math.acos(i)
        }

        function y(e, t, n, r, i, o, s, a, c) {
            var u = 0,
                d = [],
                l = [];
            eE(e, t, n, r, i, o, s, a, c).forEach(function(e) {
                var t = new ey(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]),
                    n = t.getTotalLength();
                u += n, d.push(n), l.push(t)
            }), this.length = u, this.partialLengths = d, this.curves = l
        }

        function x(e, t, n, r) {
            this.x0 = e, this.x1 = t, this.y0 = n, this.y1 = r
        }

        function w(e, t) {
            return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))
        }

        function S(e, t, n) {
            return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n]
        }

        function k(e, t, n) {
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
                return n ? C(t) : t
            }
        }

        function E(e) {
            return "number" == typeof e && isFinite(e)
        }

        function _(e) {
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

        function M(e) {
            return new eh(e).abs()
        }

        function D(e) {
            return e.toString().split("M").map(function(e, t) {
                return e = e.trim(), t && e ? "M" + e : e
            }).filter(function(e) {
                return e
            })
        }

        function C(e) {
            return "M" + e.join("L") + "Z"
        }

        function P(e, t) {
            for (var n = e.length + t, r = er(e) / t, i = 0, o = 0, s = r / 2; e.length < n;) {
                var a = e[i],
                    c = e[(i + 1) % e.length],
                    u = w(a, c);
                s <= o + u ? (e.splice(i + 1, 0, u ? S(a, c, (s - o) / u) : a.slice(0)), s += r) : (o += u, i++)
            }
        }

        function T(e, t) {
            if ("string" == typeof e) {
                var n, r, i, o, s, a, c = (o = e, s = t, function(e) {
                    var t = e.segments || [],
                        n = [];
                    if (!t.length || "M" !== t[0][0]) return !1;
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r],
                            o = i[0],
                            s = i[1],
                            a = i[2];
                        if ("M" === o && r || "Z" === o) break;
                        if ("M" === o || "L" === o) n.push([s, a]);
                        else if ("H" === o) n.push([s, n[n.length - 1][1]]);
                        else {
                            if ("V" !== o) return !1;
                            n.push([n[n.length - 1][0], s])
                        }
                    }
                    return !!n.length && {
                        ring: n
                    }
                }(a = M(o)) || function(e, t) {
                    var n, r, i = D(e)[0],
                        o = [],
                        s = 3;
                    if (!i) throw TypeError(eC);
                    n = (r = function(e) {
                        if ("undefined" != typeof window && window && window.document) try {
                            var t = window.document.createElementNS("http://www.w3.org/2000/svg", "path");
                            return t.setAttributeNS(null, "d", e), t
                        } catch (e) {}
                        return eD(e)
                    }(i)).getTotalLength(), t && E(t) && t > 0 && (s = Math.max(s, Math.ceil(n / t)));
                    for (var a = 0; a < s; a++) {
                        var c = r.getPointAtLength(n * a / s);
                        o.push([c.x, c.y])
                    }
                    return {
                        ring: o,
                        skipBisect: !0
                    }
                }(a, s));
                e = c.ring, i = c.skipBisect
            } else if (!Array.isArray(e)) throw TypeError(eC);
            if (! function(e) {
                    return e.every(function(e) {
                        return Array.isArray(e) && e.length >= 2 && E(e[0]) && E(e[1])
                    })
                }(r = e.slice(0))) throw TypeError(eC);
            return r.length > 1 && (n = r[0], 1e-9 > w(n, r[r.length - 1])) && r.pop(), et(r) > 0 && r.reverse(), !i && t && E(t) && t > 0 && function(e, t) {
                void 0 === t && (t = 1 / 0);
                for (var n = 0; n < e.length; n++)
                    for (var r = e[n], i = n === e.length - 1 ? e[0] : e[n + 1]; w(r, i) > t;) i = S(r, i, .5), e.splice(n + 1, 0, i)
            }(r, t), r
        }

        function A(e, t, n) {
            var r;
            return r = e.length - t.length, P(e, r < 0 ? -1 * r : 0), P(t, r > 0 ? r : 0), eT(e, t), k(e, t, n)
        }

        function R(e, t, n) {
            n = n || 2;
            var r, i, o, s, a, c, u, d = t && t.length,
                l = d ? t[0] * n : e.length,
                f = I(e, 0, l, n, !0),
                p = [];
            if (!f) return p;
            if (d && (f = function(e, t, n, r) {
                    var i, o, s, a, c, u = [];
                    for (i = 0, o = t.length; i < o; i++) s = t[i] * r, a = i < o - 1 ? t[i + 1] * r : e.length, (c = I(e, s, a, r, !1)) === c.next && (c.steiner = !0), u.push(function(e) {
                        var t = e,
                            n = e;
                        do t.x < n.x && (n = t), t = t.next; while (t !== e);
                        return n
                    }(c));
                    for (u.sort(L), i = 0; i < u.length; i++)(function(e, t) {
                        if (t = function(e, t) {
                                var n, r = t,
                                    i = e.x,
                                    o = e.y,
                                    s = -Infinity;
                                do {
                                    if (o <= r.y && o >= r.next.y) {
                                        var a = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                                        if (a <= i && a > s) {
                                            if (s = a, a === i) {
                                                if (o === r.y) return r;
                                                if (o === r.next.y) return r.next
                                            }
                                            n = r.x < r.next.x ? r : r.next
                                        }
                                    }
                                    r = r.next
                                } while (r !== t);
                                if (!n) return null;
                                if (i === s) return n.prev;
                                var c, u = n,
                                    d = n.x,
                                    l = n.y,
                                    f = 1 / 0;
                                for (r = n.next; r !== u;) i >= r.x && r.x >= d && F(o < l ? i : s, o, d, l, o < l ? s : i, o, r.x, r.y) && ((c = Math.abs(o - r.y) / (i - r.x)) < f || c === f && r.x > n.x) && V(r, e) && (n = r, f = c), r = r.next;
                                return n
                            }(e, t)) {
                            var n = U(t, e);
                            O(n, n.next)
                        }
                    })(u[i], n), n = O(n, n.next);
                    return n
                }(e, t, f, n)), e.length > 80 * n) {
                r = o = e[0], i = s = e[1];
                for (var h = n; h < l; h += n) a = e[h], c = e[h + 1], a < r && (r = a), c < i && (i = c), a > o && (o = a), c > s && (s = c);
                u = Math.max(o - r, s - i)
            }
            return j(f, p, n, r, i, u), p
        }

        function I(e, t, n, r, i) {
            var o, s;
            if (i === W(e, t, n, r) > 0)
                for (o = t; o < n; o += r) s = H(o, e[o], e[o + 1], s);
            else
                for (o = n - r; o >= t; o -= r) s = H(o, e[o], e[o + 1], s);
            return s && z(s, s.next) && (q(s), s = s.next), s
        }

        function O(e, t) {
            if (!e) return e;
            t || (t = e);
            var n, r = e;
            do
                if (n = !1, r.steiner || !z(r, r.next) && 0 !== B(r.prev, r, r.next)) r = r.next;
                else {
                    if (q(r), (r = t = r.prev) === r.next) return null;
                    n = !0
                } while (n || r !== t);
            return t
        }

        function j(e, t, n, r, i, o, s) {
            if (e) {
                !s && o && function(e, t, n, r) {
                    var i = e;
                    do null === i.z && (i.z = N(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next; while (i !== e);
                    i.prevZ.nextZ = null, i.prevZ = null,
                        function(e) {
                            var t, n, r, i, o, s, a, c, u = 1;
                            do {
                                for (n = e, e = null, o = null, s = 0; n;) {
                                    for (s++, r = n, a = 0, t = 0; t < u && (a++, r = r.nextZ); t++);
                                    for (c = u; a > 0 || c > 0 && r;) 0 === a ? (i = r, r = r.nextZ, c--) : 0 !== c && r ? n.z <= r.z ? (i = n, n = n.nextZ, a--) : (i = r, r = r.nextZ, c--) : (i = n, n = n.nextZ, a--), o ? o.nextZ = i : e = i, i.prevZ = o, o = i;
                                    n = r
                                }
                                o.nextZ = null, u *= 2
                            } while (s > 1);
                        }(i)
                }(e, r, i, o);
                for (var a, c, u = e; e.prev !== e.next;)
                    if (a = e.prev, c = e.next, o ? function(e, t, n, r) {
                            var i = e.prev,
                                o = e.next;
                            if (B(i, e, o) >= 0) return !1;
                            for (var s = i.x < e.x ? i.x < o.x ? i.x : o.x : e.x < o.x ? e.x : o.x, a = i.y < e.y ? i.y < o.y ? i.y : o.y : e.y < o.y ? e.y : o.y, c = i.x > e.x ? i.x > o.x ? i.x : o.x : e.x > o.x ? e.x : o.x, u = i.y > e.y ? i.y > o.y ? i.y : o.y : e.y > o.y ? e.y : o.y, d = N(s, a, t, n, r), l = N(c, u, t, n, r), f = e.nextZ; f && f.z <= l;) {
                                if (f !== e.prev && f !== e.next && F(i.x, i.y, e.x, e.y, o.x, o.y, f.x, f.y) && B(f.prev, f, f.next) >= 0) return !1;
                                f = f.nextZ
                            }
                            for (f = e.prevZ; f && f.z >= d;) {
                                if (f !== e.prev && f !== e.next && F(i.x, i.y, e.x, e.y, o.x, o.y, f.x, f.y) && B(f.prev, f, f.next) >= 0) return !1;
                                f = f.prevZ
                            }
                            return !0
                        }(e, r, i, o) : function(e) {
                            var t = e.prev,
                                n = e.next;
                            if (B(t, e, n) >= 0) return !1;
                            for (var r = e.next.next; r !== e.prev;) {
                                if (F(t.x, t.y, e.x, e.y, n.x, n.y, r.x, r.y) && B(r.prev, r, r.next) >= 0) return !1;
                                r = r.next
                            }
                            return !0
                        }(e)) t.push(a.i / n), t.push(e.i / n), t.push(c.i / n), q(e), e = c.next, u = c.next;
                    else if ((e = c) === u) {
                    s ? 1 === s ? j(e = function(e, t, n) {
                        var r = e;
                        do {
                            var i = r.prev,
                                o = r.next.next;
                            !z(i, o) && K(i, r, r.next, o) && V(i, o) && V(o, i) && (t.push(i.i / n), t.push(r.i / n), t.push(o.i / n), q(r), q(r.next), r = e = o), r = r.next
                        } while (r !== e);
                        return r
                    }(e, t, n), t, n, r, i, o, 2) : 2 === s && function(e, t, n, r, i, o) {
                        var s = e;
                        do {
                            for (var a = s.next.next; a !== s.prev;) {
                                if (s.i !== a.i && function(e, t) {
                                        return e.next.i !== t.i && e.prev.i !== t.i && ! function(e, t) {
                                            var n = e;
                                            do {
                                                if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && K(n, n.next, e, t)) return !0;
                                                n = n.next
                                            } while (n !== e);
                                            return !1
                                        }(e, t) && V(e, t) && V(t, e) && function(e, t) {
                                            var n = e,
                                                r = !1,
                                                i = (e.x + t.x) / 2,
                                                o = (e.y + t.y) / 2;
                                            do n.y > o != n.next.y > o && i < (n.next.x - n.x) * (o - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next; while (n !== e);
                                            return r
                                        }(e, t)
                                    }(s, a)) {
                                    var c = U(s, a);
                                    return s = O(s, s.next), c = O(c, c.next), j(s, t, n, r, i, o), void j(c, t, n, r, i, o)
                                }
                                a = a.next
                            }
                            s = s.next
                        } while (s !== e)
                    }(e, t, n, r, i, o) : j(O(e), t, n, r, i, o, 1);
                    break
                }
            }
        }

        function L(e, t) {
            return e.x - t.x
        }

        function N(e, t, n, r, i) {
            return e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) / i) | e << 8)) | e << 4)) | e << 2)) | e << 1), e | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) / i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
        }

        function F(e, t, n, r, i, o, s, a) {
            return (i - s) * (t - a) - (e - s) * (o - a) >= 0 && (e - s) * (r - a) - (n - s) * (t - a) >= 0 && (n - s) * (o - a) - (i - s) * (r - a) >= 0
        }

        function B(e, t, n) {
            return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
        }

        function z(e, t) {
            return e.x === t.x && e.y === t.y
        }

        function K(e, t, n, r) {
            return !!(z(e, t) && z(n, r) || z(e, r) && z(n, t)) || B(e, t, n) > 0 != B(e, t, r) > 0 && B(n, r, e) > 0 != B(n, r, t) > 0
        }

        function V(e, t) {
            return 0 > B(e.prev, e, e.next) ? B(e, t, e.next) >= 0 && B(e, e.prev, t) >= 0 : 0 > B(e, t, e.prev) || 0 > B(e, e.next, t)
        }

        function U(e, t) {
            var n = new G(e.i, e.x, e.y),
                r = new G(t.i, t.x, t.y),
                i = e.next,
                o = t.prev;
            return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, o.next = r, r.prev = o, r
        }

        function H(e, t, n, r) {
            var i = new G(e, t, n);
            return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i
        }

        function q(e) {
            e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
        }

        function G(e, t, n) {
            this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
        }

        function W(e, t, n, r) {
            for (var i = 0, o = t, s = n - r; o < n; o += r) i += (e[s] - e[o]) * (e[o + 1] + e[s + 1]), s = o;
            return i
        }

        function Z(e, t) {
            var n = t.id,
                r = t.bbox,
                i = null == t.properties ? {} : t.properties,
                o = Y(e, t);
            return null == n && null == r ? {
                type: "Feature",
                properties: i,
                geometry: o
            } : null == r ? {
                type: "Feature",
                id: n,
                properties: i,
                geometry: o
            } : {
                type: "Feature",
                id: n,
                bbox: r,
                properties: i,
                geometry: o
            }
        }

        function Y(e, t) {
            function n(e) {
                return s(e)
            }

            function r(e) {
                for (var t = [], n = 0, r = e.length; n < r; ++n) ! function(e, t) {
                    t.length && t.pop();
                    for (var n = a[e < 0 ? ~e : e], r = 0, i = n.length; r < i; ++r) t.push(s(n[r], r));
                    e < 0 && eO(t, i)
                }(e[n], t);
                return t.length < 2 && t.push(t[0]), t
            }

            function i(e) {
                for (var t = r(e); t.length < 4;) t.push(t[0]);
                return t
            }

            function o(e) {
                return e.map(i)
            }
            var s = eI(e.transform),
                a = e.arcs;
            return function e(t) {
                var i, s = t.type;
                switch (s) {
                    case "GeometryCollection":
                        return {
                            type: s, geometries: t.geometries.map(e)
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
                        i = o(t.arcs);
                        break;
                    case "MultiPolygon":
                        i = t.arcs.map(o);
                        break;
                    default:
                        return null
                }
                return {
                    type: s,
                    coordinates: i
                }
            }(t)
        }

        function X(e, t, n) {
            void 0 === n && (n = {});
            var r = n.maxSegmentLength;
            void 0 === r && (r = 10);
            var i = n.string;
            void 0 === i && (i = !0);
            var o = n.single;
            void 0 === o && (o = !1);
            var s = T(e, r);
            s.length < t.length + 2 && P(s, t.length + 2 - s.length);
            var a, c = eK(s, t.length),
                u = t.map(function(e) {
                    return T(e, r)
                }),
                d = "string" == typeof e && e;
            return o && !t.every(function(e) {
                return "string" == typeof e
            }) || (a = t.slice(0)), J(c, u, {
                match: !0,
                string: i,
                single: o,
                t0: d,
                t1: a
            })
        }

        function J(e, t, n) {
            void 0 === n && (n = {});
            var r = n.string,
                i = n.single,
                o = n.t0,
                s = n.t1,
                a = n.match,
                c = a ? eV(e, t) : e.map(function(e, t) {
                    return t
                }),
                u = c.map(function(n, i) {
                    return A(e[n], t[i], r)
                });
            if (a && Array.isArray(o) && (o = c.map(function(e) {
                    return o[e]
                })), i && r && (Array.isArray(o) && (o = o.join(" ")), Array.isArray(s) && (s = s.join(" "))), i) {
                var d = r ? function(e) {
                    return u.map(function(t) {
                        return t(e)
                    }).join(" ")
                } : function(e) {
                    return u.map(function(t) {
                        return t(e)
                    })
                };
                return r && (o || s) ? function(e) {
                    return e < 1e-4 && o || 1 - e < 1e-4 && s || d(e)
                } : d
            }
            return r ? (o = Array.isArray(o) ? o.map(function(e) {
                return "string" == typeof e && e
            }) : [], s = Array.isArray(s) ? s.map(function(e) {
                return "string" == typeof e && e
            }) : [], u.map(function(e, t) {
                return o[t] || s[t] ? function(n) {
                    return n < 1e-4 && o[t] || 1 - n < 1e-4 && s[t] || e(n)
                } : e
            })) : u
        }

        function $(e, t, n, r, i) {
            return ee(function(e, t, n) {
                return function(r) {
                    var i = _(r),
                        o = er(r.concat([r[0]])),
                        s = Math.atan2(r[0][1] - i[1], r[0][0] - i[0]),
                        a = 0;
                    return r.map(function(i, c) {
                        var u;
                        return c && (a += w(i, r[c - 1])), [Math.cos(u = s + 2 * Math.PI * (o ? a / o : c / r.length)) * n + e, Math.sin(u) * n + t]
                    })
                }
            }(e, t, n), r, function(e, t, n) {
                var r = e - n + "," + t,
                    i = "A" + n + "," + n + ",0,1,1,";
                return "M" + r + i + (e + n + ",") + t + i + r + "Z"
            }(e, t, n), 2 * Math.PI * n, i)
        }

        function Q(e, t, n, r, i, o) {
            return ee(function(e, t, n, r) {
                return function(i) {
                    var o = _(i),
                        s = er(i.concat([i[0]])),
                        a = Math.atan2(i[0][1] - o[1], i[0][0] - o[0]),
                        c = 0;
                    a < 0 && (a = 2 * Math.PI + a);
                    var u = a / (2 * Math.PI);
                    return i.map(function(o, a) {
                        a && (c += w(o, i[a - 1]));
                        var d = function(e) {
                            return e <= 1 / 8 ? [1, .5 + 4 * e] : e <= 3 / 8 ? [1.5 - 4 * e, 1] : e <= 5 / 8 ? [0, 2.5 - 4 * e] : e <= 7 / 8 ? [4 * e - 2.5, 0] : [1, 4 * e - 3.5]
                        }((u + (s ? c / s : a / i.length)) % 1);
                        return [e + d[0] * n, t + d[1] * r]
                    })
                }
            }(e, t, n, r), i, function(e, t, n, r) {
                var i = e + n,
                    o = t + r;
                return "M" + e + "," + t + "L" + i + "," + t + "L" + i + "," + o + "L" + e + "," + o + "Z"
            }(e, t, n, r), 2 * n + 2 * r, o)
        }

        function ee(e, t, n, r, i) {
            void 0 === i && (i = {});
            var o = i.maxSegmentLength;
            void 0 === o && (o = 10);
            var s = i.string;
            void 0 === s && (s = !0);
            var a, c = T(t, o);
            return E(r) && c.length < r / o && P(c, Math.ceil(r / o - c.length)), a = k(e(c), c, s), s ? function(e) {
                return e < 1e-4 ? n : a(e)
            } : a
        }
        var et = function(e) {
                for (var t, n = -1, r = e.length, i = e[r - 1], o = 0; ++n < r;) t = i, i = e[n], o += t[1] * i[0] - t[0] * i[1];
                return o / 2
            },
            en = function(e) {
                for (var t, n, r = -1, i = e.length, o = 0, s = 0, a = e[i - 1], c = 0; ++r < i;) t = a, a = e[r], c += n = t[0] * a[1] - a[0] * t[1], o += (t[0] + a[0]) * n, s += (t[1] + a[1]) * n;
                return [o / (c *= 3), s / c]
            },
            er = function(e) {
                for (var t, n, r = -1, i = e.length, o = e[i - 1], s = o[0], a = o[1], c = 0; ++r < i;) t = s, n = a, s = (o = e[r])[0], a = o[1], t -= s, n -= a, c += Math.sqrt(t * t + n * n);
                return c
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
            eo = [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279],
            es = function(e) {
                var o = new n(e),
                    s = o.max;
                for (r(o); o.index < s && !o.err.length;) ! function(e) {
                    var n, o, s, a, c = e.max;
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
                    if (s = ei[e.path[e.index].toLowerCase()], e.index++, r(e), e.data = [], !s) return void i(e);
                    for (o = !1;;) {
                        for (a = s; a > 0; a--) {
                            if (function(e) {
                                    var n, r = e.index,
                                        i = r,
                                        o = e.max,
                                        s = !1,
                                        a = !1,
                                        c = !1,
                                        u = !1;
                                    if (i >= o) return void(e.err = "SvgPath: missed param (at pos " + i + ")");
                                    if (43 !== (n = e.path.charCodeAt(i)) && 45 !== n || (n = ++i < o ? e.path.charCodeAt(i) : 0), !t(n) && 46 !== n) return void(e.err = "SvgPath: param should start with 0..9 or `.` (at pos " + i + ")");
                                    if (46 !== n) {
                                        if (s = 48 === n, n = ++i < o ? e.path.charCodeAt(i) : 0, s && i < o && n && t(n)) return void(e.err = "SvgPath: numbers started with `0` such as `09` are ilegal (at pos " + r + ")");
                                        for (; i < o && t(e.path.charCodeAt(i));) i++, a = !0;
                                        n = i < o ? e.path.charCodeAt(i) : 0
                                    }
                                    if (46 === n) {
                                        for (u = !0, i++; t(e.path.charCodeAt(i));) i++, c = !0;
                                        n = i < o ? e.path.charCodeAt(i) : 0
                                    }
                                    if (101 === n || 69 === n) {
                                        if (u && !a && !c || (43 !== (n = ++i < o ? e.path.charCodeAt(i) : 0) && 45 !== n || i++, !(i < o && t(e.path.charCodeAt(i))))) return void(e.err = "SvgPath: invalid float exponent (at pos " + i + ")");
                                        for (; i < o && t(e.path.charCodeAt(i));) i++
                                    }
                                    e.index = i, e.param = parseFloat(e.path.slice(r, i)) + 0
                                }(e), e.err.length) return;
                            e.data.push(e.param), r(e), o = !1, e.index < c && 44 === e.path.charCodeAt(e.index) && (e.index++, r(e), o = !0)
                        }
                        if (!o) {
                            ;
                            if (e.index >= e.max) break;
                            if (!((n = e.path.charCodeAt(e.index)) >= 48 && n <= 57 || 43 === n || 45 === n || 46 === n)) break
                        }
                    }
                    i(e)
                }(o);
                return o.err.length ? o.result = [] : o.result.length && (0 > "mM".indexOf(o.result[0][0]) ? (o.err = "SvgPath: string should start with `M` or `m`", o.result = []) : o.result[0][0] = "M"), {
                    err: o.err,
                    segments: o.result
                }
            };
        o.prototype.matrix = function(e) {
            return 1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3] && 0 === e[4] && 0 === e[5] || (this.cache = null, this.queue.push(e)), this
        }, o.prototype.translate = function(e, t) {
            return 0 === e && 0 === t || (this.cache = null, this.queue.push([1, 0, 0, 1, e, t])), this
        }, o.prototype.scale = function(e, t) {
            return 1 === e && 1 === t || (this.cache = null, this.queue.push([e, 0, 0, t, 0, 0])), this
        }, o.prototype.rotate = function(e, t, n) {
            var r, i, o;
            return 0 !== e && (this.translate(t, n), i = Math.cos(r = e * Math.PI / 180), o = Math.sin(r), this.queue.push([i, o, -o, i, 0, 0]), this.cache = null, this.translate(-t, -n)), this
        }, o.prototype.skewX = function(e) {
            return 0 !== e && (this.cache = null, this.queue.push([1, 0, Math.tan(e * Math.PI / 180), 1, 0, 0])), this
        }, o.prototype.skewY = function(e) {
            return 0 !== e && (this.cache = null, this.queue.push([1, Math.tan(e * Math.PI / 180), 0, 1, 0, 0])), this
        }, o.prototype.toArray = function() {
            if (this.cache) return this.cache;
            if (!this.queue.length) return this.cache = [1, 0, 0, 1, 0, 0], this.cache;
            if (this.cache = this.queue[0], 1 === this.queue.length) return this.cache;
            for (var e, t, n = 1; n < this.queue.length; n++) {
                ;
                this.cache = (e = this.cache, t = this.queue[n], [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]])
            }
            return this.cache
        }, o.prototype.calc = function(e, t, n) {
            var r;
            return this.queue.length ? (this.cache || (this.cache = this.toArray()), [e * (r = this.cache)[0] + t * r[2] + (n ? 0 : r[4]), e * r[1] + t * r[3] + (n ? 0 : r[5])]) : [e, t]
        };
        var ea = {
                matrix: !0,
                scale: !0,
                rotate: !0,
                translate: !0,
                skewX: !0,
                skewY: !0
            },
            ec = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/,
            eu = /[\s,]+/,
            ed = function(e) {
                var t, n, r = new o;
                return e.split(ec).forEach(function(e) {
                    if (e.length) {
                        if (void 0 !== ea[e]) return void(t = e);
                        switch (n = e.split(eu).map(function(e) {
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
            el = 2 * Math.PI,
            ef = function(e, t, n, r, i, o, a, c, u) {
                var d, l, f, p, h, v, g, b, m, y, x, w, S, k, E, _, M, D, C, P, T, A, R, I = Math.sin(u * el / 360),
                    O = Math.cos(u * el / 360),
                    j = O * (e - n) / 2 + I * (t - r) / 2,
                    L = -I * (e - n) / 2 + O * (t - r) / 2;
                if (0 === j && 0 === L || 0 === a || 0 === c) return [];
                a = Math.abs(a);
                var N = j * j / (a * a) + L * L / ((c = Math.abs(c)) * c);
                N > 1 && (a *= Math.sqrt(N), c *= Math.sqrt(N));
                var F = (d = e, l = t, f = n, p = r, h = i, v = o, g = a, b = c, m = I, x = (y = O) * (d - f) / 2 + m * (l - p) / 2, w = -m * (d - f) / 2 + y * (l - p) / 2, S = g * g, k = b * b, E = x * x, (M = S * k - S * (_ = w * w) - k * E) < 0 && (M = 0), M /= S * _ + k * E, D = (M = Math.sqrt(M) * (h === v ? -1 : 1)) * g / b * w, C = -(M * b) / g * x, A = s(1, 0, P = (x - D) / g, T = (w - C) / b), R = s(P, T, (-x - D) / g, (-w - C) / b), 0 === v && R > 0 && (R -= el), 1 === v && R < 0 && (R += el), [y * D - m * C + (d + f) / 2, m * D + y * C + (l + p) / 2, A, R]),
                    B = [],
                    z = F[2],
                    K = F[3],
                    V = Math.max(Math.ceil(Math.abs(K) / (el / 4)), 1);
                K /= V;
                for (var U = 0; U < V; U++) B.push(function(e, t) {
                    var n = 4 / 3 * Math.tan(t / 4),
                        r = Math.cos(e),
                        i = Math.sin(e),
                        o = Math.cos(e + t),
                        s = Math.sin(e + t);
                    return [r, i, r - i * n, i + r * n, o + s * n, s - o * n, o, s]
                }(z, K)), z += K;
                return B.map(function(e) {
                    for (var t = 0; t < e.length; t += 2) {
                        var n = e[t + 0],
                            r = e[t + 1];
                        n *= a;
                        var i = O * n - I * (r *= c),
                            o = I * n + O * r;
                        e[t + 0] = i + F[0], e[t + 1] = o + F[1]
                    }
                    return e
                })
            },
            ep = Math.PI / 180;
        a.prototype.transform = function(e) {
            var t = Math.cos(this.ax * ep),
                n = Math.sin(this.ax * ep),
                r = [this.rx * (e[0] * t + e[2] * n), this.rx * (e[1] * t + e[3] * n), this.ry * (-e[0] * n + e[2] * t), this.ry * (-e[1] * n + e[3] * t)],
                i = r[0] * r[0] + r[2] * r[2],
                o = r[1] * r[1] + r[3] * r[3],
                s = ((r[0] - r[3]) * (r[0] - r[3]) + (r[2] + r[1]) * (r[2] + r[1])) * ((r[0] + r[3]) * (r[0] + r[3]) + (r[2] - r[1]) * (r[2] - r[1])),
                a = (i + o) / 2;
            if (s < 1e-10 * a) return this.rx = this.ry = Math.sqrt(a), this.ax = 0, this;
            var c = r[0] * r[1] + r[2] * r[3],
                u = a + (s = Math.sqrt(s)) / 2,
                d = a - s / 2;
            return this.ax = 1e-10 > Math.abs(c) && 1e-10 > Math.abs(u - o) ? 90 : 180 * Math.atan(Math.abs(c) > Math.abs(u - o) ? (u - i) / c : c / (u - o)) / Math.PI, this.ax >= 0 ? (this.rx = Math.sqrt(u), this.ry = Math.sqrt(d)) : (this.ax += 90, this.rx = Math.sqrt(d), this.ry = Math.sqrt(u)), this
        }, a.prototype.isDegenerate = function() {
            return this.rx < 1e-10 * this.ry || this.ry < 1e-10 * this.rx
        };
        c.prototype.__matrix = function(e) {
            var t, n = this;
            e.queue.length && this.iterate(function(r, i, o, s) {
                var c, u, d, l;
                switch (r[0]) {
                    case "v":
                        u = 0 === (c = e.calc(0, r[1], !0))[0] ? ["v", c[1]] : ["l", c[0], c[1]];
                        break;
                    case "V":
                        u = (c = e.calc(o, r[1], !1))[0] === e.calc(o, s, !1)[0] ? ["V", c[1]] : ["L", c[0], c[1]];
                        break;
                    case "h":
                        u = 0 === (c = e.calc(r[1], 0, !0))[1] ? ["h", c[0]] : ["l", c[0], c[1]];
                        break;
                    case "H":
                        u = (c = e.calc(r[1], s, !1))[1] === e.calc(o, s, !1)[1] ? ["H", c[0]] : ["L", c[0], c[1]];
                        break;
                    case "a":
                    case "A":
                        var f = e.toArray(),
                            p = a(r[1], r[2], r[3]).transform(f);
                        if (f[0] * f[3] - f[1] * f[2] < 0 && (r[5] = r[5] ? "0" : "1"), c = e.calc(r[6], r[7], "a" === r[0]), "A" === r[0] && r[6] === o && r[7] === s || "a" === r[0] && 0 === r[6] && 0 === r[7]) {
                            u = ["a" === r[0] ? "l" : "L", c[0], c[1]];
                            break
                        }
                        u = p.isDegenerate() ? ["a" === r[0] ? "l" : "L", c[0], c[1]] : [r[0], p.rx, p.ry, p.ax, r[4], r[5], c[0], c[1]];
                        break;
                    case "m":
                        l = i > 0, u = ["m", (c = e.calc(r[1], r[2], l))[0], c[1]];
                        break;
                    default:
                        for (u = [d = r[0]], l = d.toLowerCase() === d, t = 1; t < r.length; t += 2) c = e.calc(r[t], r[t + 1], l), u.push(c[0], c[1])
                }
                n.segments[i] = u
            }, !0)
        }, c.prototype.__evaluateStack = function() {
            var e, t;
            if (this.__stack.length) {
                if (1 === this.__stack.length) return this.__matrix(this.__stack[0]), void(this.__stack = []);
                for (e = o(), t = this.__stack.length; --t >= 0;) e.matrix(this.__stack[t].toArray());
                this.__matrix(e), this.__stack = []
            }
        }, c.prototype.toString = function() {
            var e, t, n = [];
            this.__evaluateStack();
            for (var r = 0; r < this.segments.length; r++) t = this.segments[r][0], e = r > 0 && "m" !== t && "M" !== t && t === this.segments[r - 1][0], n = n.concat(e ? this.segments[r].slice(1) : this.segments[r]);
            return n.join(" ").replace(/ ?([achlmqrstvz]) ?/gi, "$1").replace(/ \-/g, "-").replace(/zm/g, "z m")
        }, c.prototype.translate = function(e, t) {
            return this.__stack.push(o().translate(e, t || 0)), this
        }, c.prototype.scale = function(e, t) {
            return this.__stack.push(o().scale(e, t || 0 === t ? t : e)), this
        }, c.prototype.rotate = function(e, t, n) {
            return this.__stack.push(o().rotate(e, t || 0, n || 0)), this
        }, c.prototype.skewX = function(e) {
            return this.__stack.push(o().skewX(e)), this
        }, c.prototype.skewY = function(e) {
            return this.__stack.push(o().skewY(e)), this
        }, c.prototype.matrix = function(e) {
            return this.__stack.push(o().matrix(e)), this
        }, c.prototype.transform = function(e) {
            return e.trim() && this.__stack.push(ed(e)), this
        }, c.prototype.round = function(e) {
            var t, n = 0,
                r = 0,
                i = 0,
                o = 0;
            return e = e || 0, this.__evaluateStack(), this.segments.forEach(function(s) {
                var a = s[0].toLowerCase() === s[0];
                switch (s[0]) {
                    case "H":
                    case "h":
                        return a && (s[1] += i), i = s[1] - s[1].toFixed(e), void(s[1] = +s[1].toFixed(e));
                    case "V":
                    case "v":
                        return a && (s[1] += o), o = s[1] - s[1].toFixed(e), void(s[1] = +s[1].toFixed(e));
                    case "Z":
                    case "z":
                        return i = n, void(o = r);
                    case "M":
                    case "m":
                        return a && (s[1] += i, s[2] += o), i = s[1] - s[1].toFixed(e), o = s[2] - s[2].toFixed(e), n = i, r = o, s[1] = +s[1].toFixed(e), void(s[2] = +s[2].toFixed(e));
                    case "A":
                    case "a":
                        return a && (s[6] += i, s[7] += o), i = s[6] - s[6].toFixed(e), o = s[7] - s[7].toFixed(e), s[1] = +s[1].toFixed(e), s[2] = +s[2].toFixed(e), s[3] = +s[3].toFixed(e + 2), s[6] = +s[6].toFixed(e), void(s[7] = +s[7].toFixed(e));
                    default:
                        return t = s.length, a && (s[t - 2] += i, s[t - 1] += o), i = s[t - 2] - s[t - 2].toFixed(e), o = s[t - 1] - s[t - 1].toFixed(e), void s.forEach(function(t, n) {
                            n && (s[n] = +s[n].toFixed(e))
                        })
                }
            }), this
        }, c.prototype.iterate = function(e, t) {
            var n, r, i, o = this.segments,
                s = {},
                a = !1,
                c = 0,
                u = 0,
                d = 0,
                l = 0;
            if (t || this.__evaluateStack(), o.forEach(function(t, n) {
                    var r = e(t, n, c, u);
                    Array.isArray(r) && (s[n] = r, a = !0);
                    var i = t[0] === t[0].toLowerCase();
                    switch (t[0]) {
                        case "m":
                        case "M":
                            return c = t[1] + (i ? c : 0), u = t[2] + (i ? u : 0), d = c, void(l = u);
                        case "h":
                        case "H":
                            return void(c = t[1] + (i ? c : 0));
                        case "v":
                        case "V":
                            return void(u = t[1] + (i ? u : 0));
                        case "z":
                        case "Z":
                            return c = d, void(u = l);
                        default:
                            c = t[t.length - 2] + (i ? c : 0), u = t[t.length - 1] + (i ? u : 0)
                    }
                }), !a) return this;
            for (i = [], n = 0; n < o.length; n++)
                if (void 0 !== s[n])
                    for (r = 0; r < s[n].length; r++) i.push(s[n][r]);
                else i.push(o[n]);
            return this.segments = i, this
        }, c.prototype.abs = function() {
            return this.iterate(function(e, t, n, r) {
                var i, o = e[0],
                    s = o.toUpperCase();
                if (o !== s) switch (e[0] = s, o) {
                    case "v":
                        return void(e[1] += r);
                    case "a":
                        return e[6] += n, void(e[7] += r);
                    default:
                        for (i = 1; i < e.length; i++) e[i] += i % 2 ? n : r
                }
            }, !0), this
        }, c.prototype.rel = function() {
            return this.iterate(function(e, t, n, r) {
                var i, o = e[0],
                    s = o.toLowerCase();
                if (o !== s && (0 !== t || "M" !== o)) switch (e[0] = s, o) {
                    case "V":
                        return void(e[1] -= r);
                    case "A":
                        return e[6] -= n, void(e[7] -= r);
                    default:
                        for (i = 1; i < e.length; i++) e[i] -= i % 2 ? n : r
                }
            }, !0), this
        }, c.prototype.unarc = function() {
            return this.iterate(function(e, t, n, r) {
                var i, o, s, a = [],
                    c = e[0];
                return "A" !== c && "a" !== c ? null : ("a" === c ? (o = n + e[6], s = r + e[7]) : (o = e[6], s = e[7]), 0 === (i = ef(n, r, o, s, e[4], e[5], e[1], e[2], e[3])).length ? [
                    ["a" === e[0] ? "l" : "L", e[6], e[7]]
                ] : (i.forEach(function(e) {
                    a.push(["C", e[2], e[3], e[4], e[5], e[6], e[7]])
                }), a))
            }), this
        }, c.prototype.unshort = function() {
            var e, t, n, r, i, o = this.segments;
            return this.iterate(function(s, a, c, u) {
                var d, l = s[0],
                    f = l.toUpperCase();
                a && ("T" === f ? (d = "t" === l, "Q" === (n = o[a - 1])[0] ? (e = n[1] - c, t = n[2] - u) : "q" === n[0] ? (e = n[1] - n[3], t = n[2] - n[4]) : (e = 0, t = 0), r = -e, i = -t, d || (r += c, i += u), o[a] = [d ? "q" : "Q", r, i, s[1], s[2]]) : "S" === f && (d = "s" === l, "C" === (n = o[a - 1])[0] ? (e = n[3] - c, t = n[4] - u) : "c" === n[0] ? (e = n[3] - n[5], t = n[4] - n[6]) : (e = 0, t = 0), r = -e, i = -t, d || (r += c, i += u), o[a] = [d ? "c" : "C", r, i, s[1], s[2], s[3], s[4]]))
            }), this
        };
        var eh = c,
            ev = {
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
            eb = function(e) {
                var t = [];
                return e.replace(eg, function(e, n, r) {
                    var i, o = n.toLowerCase();
                    for (r = (i = r.match(em)) ? i.map(Number) : [], "m" === o && r.length > 2 && (t.push([n].concat(r.splice(0, 2))), o = "l", n = "m" === n ? "l" : "L"); r.length >= 0;) {
                        if (r.length === ev[o]) return r.unshift(n), t.push(r);
                        if (r.length < ev[o]) throw Error("malformed path data");
                        t.push([n].concat(r.splice(0, ev[o])))
                    }
                }), t
            },
            em = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi,
            ey = function(e, t, n, r, i, o, s, a) {
                return new u(e, t, n, r, i, o, s, a)
            };
        u.prototype = {
            constructor: u,
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
                var o = this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], n);
                return {
                    x: o.x,
                    y: o.y,
                    tangentX: t.x,
                    tangentY: t.y
                }
            }
        };
        var ex = [
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
            ew = [
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
            ek = 2 * Math.PI,
            eE = function(e, t, n, r, i, o, s, a, c) {
                var u, d, l, f, p, h, v, g, b, y, x, w, S, k, E, _, M, D, C, P, T, A, R, I = Math.sin(i * ek / 360),
                    O = Math.cos(i * ek / 360),
                    j = O * (e - a) / 2 + I * (t - c) / 2,
                    L = -I * (e - a) / 2 + O * (t - c) / 2;
                if (0 === j && 0 === L || 0 === n || 0 === r) return [];
                n = Math.abs(n);
                var N = j * j / (n * n) + L * L / ((r = Math.abs(r)) * r);
                N > 1 && (n *= Math.sqrt(N), r *= Math.sqrt(N));
                var F = (u = e, d = t, l = a, f = c, p = o, h = s, v = n, g = r, b = I, x = (y = O) * (u - l) / 2 + b * (d - f) / 2, w = -b * (u - l) / 2 + y * (d - f) / 2, S = v * v, k = g * g, E = x * x, (M = S * k - S * (_ = w * w) - k * E) < 0 && (M = 0), M /= S * _ + k * E, D = (M = Math.sqrt(M) * (p === h ? -1 : 1)) * v / g * w, C = -(M * g) / v * x, A = m(1, 0, P = (x - D) / v, T = (w - C) / g), R = m(P, T, (-x - D) / v, (-w - C) / g), 0 === h && R > 0 && (R -= ek), 1 === h && R < 0 && (R += ek), [y * D - b * C + (u + l) / 2, b * D + y * C + (d + f) / 2, A, R]),
                    B = [],
                    z = F[2],
                    K = F[3],
                    V = Math.max(Math.ceil(Math.abs(K) / (ek / 4)), 1);
                K /= V;
                for (var U = 0; U < V; U++) B.push(function(e, t) {
                    var n = 4 / 3 * Math.tan(t / 4),
                        r = Math.cos(e),
                        i = Math.sin(e),
                        o = Math.cos(e + t),
                        s = Math.sin(e + t);
                    return [r, i, r - i * n, i + r * n, o + s * n, s - o * n, o, s]
                }(z, K)), z += K;
                return B.map(function(e) {
                    for (var t = 0; t < e.length; t += 2) {
                        var i = e[t + 0],
                            o = e[t + 1];
                        i *= n;
                        var s = O * i - I * (o *= r),
                            a = I * i + O * o;
                        e[t + 0] = s + F[0], e[t + 1] = a + F[1]
                    }
                    return e
                })
            },
            e_ = function(e, t, n, r, i, o, s, a, c) {
                return new y(e, t, n, r, i, o, s, a, c)
            };
        y.prototype = {
            constructor: y,
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
        var eM = function(e, t, n, r) {
            return new x(e, t, n, r)
        };
        x.prototype.getTotalLength = function() {
            return Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2))
        }, x.prototype.getPointAtLength = function(e) {
            var t = e / Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2)),
                n = (this.x1 - this.x0) * t,
                r = (this.y1 - this.y0) * t;
            return {
                x: this.x0 + n,
                y: this.y0 + r
            }
        }, x.prototype.getTangentAtLength = function() {
            var e = Math.sqrt((this.x1 - this.x0) * (this.x1 - this.x0) + (this.y1 - this.y0) * (this.y1 - this.y0));
            return {
                x: (this.x1 - this.x0) / e,
                y: (this.y1 - this.y0) / e
            }
        }, x.prototype.getPropertiesAtLength = function(e) {
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
                    for (var o, s = eb(e), a = [0, 0], c = [0, 0], u = 0; u < s.length; u++) "M" === s[u][0] ? (a = [s[u][1], s[u][2]], i.push(null)) : "m" === s[u][0] ? (a = [s[u][1] + a[0], s[u][2] + a[1]], i.push(null)) : "L" === s[u][0] ? (n += Math.sqrt(Math.pow(a[0] - s[u][1], 2) + Math.pow(a[1] - s[u][2], 2)), i.push(new eM(a[0], s[u][1], a[1], s[u][2])), a = [s[u][1], s[u][2]]) : "l" === s[u][0] ? (n += Math.sqrt(Math.pow(s[u][1], 2) + Math.pow(s[u][2], 2)), i.push(new eM(a[0], s[u][1] + a[0], a[1], s[u][2] + a[1])), a = [s[u][1] + a[0], s[u][2] + a[1]]) : "H" === s[u][0] ? (n += Math.abs(a[0] - s[u][1]), i.push(new eM(a[0], s[u][1], a[1], a[1])), a[0] = s[u][1]) : "h" === s[u][0] ? (n += Math.abs(s[u][1]), i.push(new eM(a[0], a[0] + s[u][1], a[1], a[1])), a[0] = s[u][1] + a[0]) : "V" === s[u][0] ? (n += Math.abs(a[1] - s[u][1]), i.push(new eM(a[0], a[0], a[1], s[u][1])), a[1] = s[u][1]) : "v" === s[u][0] ? (n += Math.abs(s[u][1]), i.push(new eM(a[0], a[0], a[1], a[1] + s[u][1])), a[1] = s[u][1] + a[1]) : "z" === s[u][0] || "Z" === s[u][0] ? (n += Math.sqrt(Math.pow(s[0][1] - a[0], 2) + Math.pow(s[0][2] - a[1], 2)), i.push(new eM(a[0], s[0][1], a[1], s[0][2])), a = [s[0][1], s[0][2]]) : "C" === s[u][0] ? (o = new ey(a[0], a[1], s[u][1], s[u][2], s[u][3], s[u][4], s[u][5], s[u][6]), n += o.getTotalLength(), a = [s[u][5], s[u][6]], i.push(o)) : "c" === s[u][0] ? (o = new ey(a[0], a[1], a[0] + s[u][1], a[1] + s[u][2], a[0] + s[u][3], a[1] + s[u][4], a[0] + s[u][5], a[1] + s[u][6]), n += o.getTotalLength(), a = [s[u][5] + a[0], s[u][6] + a[1]], i.push(o)) : "S" === s[u][0] ? (o = u > 0 && ["C", "c", "S", "s"].indexOf(s[u - 1][0]) > -1 ? new ey(a[0], a[1], 2 * a[0] - s[u - 1][s[u - 1].length - 4], 2 * a[1] - s[u - 1][s[u - 1].length - 3], s[u][1], s[u][2], s[u][3], s[u][4]) : new ey(a[0], a[1], a[0], a[1], s[u][1], s[u][2], s[u][3], s[u][4]), n += o.getTotalLength(), a = [s[u][3], s[u][4]], i.push(o)) : "s" === s[u][0] ? (o = u > 0 && ["C", "c", "S", "s"].indexOf(s[u - 1][0]) > -1 ? new ey(a[0], a[1], a[0] + o.d.x - o.c.x, a[1] + o.d.y - o.c.y, a[0] + s[u][1], a[1] + s[u][2], a[0] + s[u][3], a[1] + s[u][4]) : new ey(a[0], a[1], a[0], a[1], a[0] + s[u][1], a[1] + s[u][2], a[0] + s[u][3], a[1] + s[u][4]), n += o.getTotalLength(), a = [s[u][3] + a[0], s[u][4] + a[1]], i.push(o)) : "Q" === s[u][0] ? (o = new ey(a[0], a[1], s[u][1], s[u][2], s[u][3], s[u][4]), n += o.getTotalLength(), i.push(o), a = [s[u][3], s[u][4]], c = [s[u][1], s[u][2]]) : "q" === s[u][0] ? (o = new ey(a[0], a[1], a[0] + s[u][1], a[1] + s[u][2], a[0] + s[u][3], a[1] + s[u][4]), n += o.getTotalLength(), c = [a[0] + s[u][1], a[1] + s[u][2]], a = [s[u][3] + a[0], s[u][4] + a[1]], i.push(o)) : "T" === s[u][0] ? (o = u > 0 && ["Q", "q", "T", "t"].indexOf(s[u - 1][0]) > -1 ? new ey(a[0], a[1], 2 * a[0] - c[0], 2 * a[1] - c[1], s[u][1], s[u][2]) : new eM(a[0], s[u][1], a[1], s[u][2]), i.push(o), n += o.getTotalLength(), c = [2 * a[0] - c[0], 2 * a[1] - c[1]], a = [s[u][1], s[u][2]]) : "t" === s[u][0] ? (o = u > 0 && ["Q", "q", "T", "t"].indexOf(s[u - 1][0]) > -1 ? new ey(a[0], a[1], 2 * a[0] - c[0], 2 * a[1] - c[1], a[0] + s[u][1], a[1] + s[u][2]) : new eM(a[0], a[0] + s[u][1], a[1], a[1] + s[u][2]), n += o.getTotalLength(), c = [2 * a[0] - c[0], 2 * a[1] - c[1]], a = [s[u][1] + a[0], s[u][2] + a[0]], i.push(o)) : "A" === s[u][0] ? (o = new e_(a[0], a[1], s[u][1], s[u][2], s[u][3], s[u][4], s[u][5], s[u][6], s[u][7]), n += o.getTotalLength(), a = [s[u][6], s[u][7]], i.push(o)) : "a" === s[u][0] && (o = new e_(a[0], a[1], s[u][1], s[u][2], s[u][3], s[u][4], s[u][5], a[0] + s[u][6], a[1] + s[u][7]), n += o.getTotalLength(), a = [a[0] + s[u][6], a[1] + s[u][7]], i.push(o)), r.push(n);
                    return t
                }
                var n = 0,
                    r = [],
                    i = [];
                t.getTotalLength = function() {
                    return n
                }, t.getPointAtLength = function(e) {
                    var t = o(e);
                    return i[t.i].getPointAtLength(t.fraction)
                }, t.getTangentAtLength = function(e) {
                    var t = o(e);
                    return i[t.i].getTangentAtLength(t.fraction)
                }, t.getPropertiesAtLength = function(e) {
                    var t = o(e);
                    return i[t.i].getPropertiesAtLength(t.fraction)
                };
                var o = function(e) {
                    e < 0 ? e = 0 : e > n && (e = n);
                    for (var t = r.length - 1; r[t] >= e && r[t] > 0;) t--;
                    return {
                        fraction: e - r[++t - 1],
                        i: t
                    }
                };
                return t(e)
            },
            eC = 'All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).\nExample valid ways of supplying a shape would be:\n[[0, 0], [10, 0], [10, 10]]\n"M0,0 L10,0 L10,10Z"\n',
            eP = "flubber.all() expects two arrays of equal length as arguments. Each element in both arrays should be an array of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).",
            eT = function(e, t) {
                for (var n, r, i, o = e.length, s = 1 / 0, a = 0; a < o; a++) ! function(i) {
                    r = 0, t.forEach(function(t, n) {
                        var s = w(e[(i + n) % o], t);
                        r += s * s
                    }), r < s && (s = r, n = i)
                }(a);
                n && (i = e.splice(0, n), e.splice.apply(e, [e.length, 0].concat(i)))
            },
            eA = R;
        R.deviation = function(e, t, n, r) {
            var i = t && t.length,
                o = i ? t[0] * n : e.length,
                s = Math.abs(W(e, 0, o, n));
            if (i)
                for (var a = 0, c = t.length; a < c; a++) {
                    var u = t[a] * n,
                        d = a < c - 1 ? t[a + 1] * n : e.length;
                    s -= Math.abs(W(e, u, d, n))
                }
            var l = 0;
            for (a = 0; a < r.length; a += 3) {
                var f = r[a] * n,
                    p = r[a + 1] * n,
                    h = r[a + 2] * n;
                l += Math.abs((e[f] - e[h]) * (e[p + 1] - e[f + 1]) - (e[f] - e[p]) * (e[h + 1] - e[f + 1]))
            }
            return 0 === s && 0 === l ? 0 : Math.abs((l - s) / s)
        }, R.flatten = function(e) {
            for (var t = e[0][0].length, n = {
                    vertices: [],
                    holes: [],
                    dimensions: t
                }, r = 0, i = 0; i < e.length; i++) {
                for (var o = 0; o < e[i].length; o++)
                    for (var s = 0; s < t; s++) n.vertices.push(e[i][o][s]);
                i > 0 && (r += e[i - 1].length, n.holes.push(r))
            }
            return n
        };
        var eR = function(e) {
                return e
            },
            eI = function(e) {
                if (null == e) return eR;
                var t, n, r = e.scale[0],
                    i = e.scale[1],
                    o = e.translate[0],
                    s = e.translate[1];
                return function(e, a) {
                    a || (t = n = 0);
                    var c = 2,
                        u = e.length,
                        d = Array(u);
                    for (d[0] = (t += e[0]) * r + o, d[1] = (n += e[1]) * i + s; c < u;) d[c] = e[c], ++c;
                    return d
                }
            },
            eO = function(e, t) {
                for (var n, r = e.length, i = r - t; i < --r;) n = e[i], e[i++] = e[r], e[r] = n
            },
            ej = function(e, t) {
                return "GeometryCollection" === t.type ? {
                    type: "FeatureCollection",
                    features: t.geometries.map(function(t) {
                        return Z(e, t)
                    })
                } : Z(e, t)
            },
            eL = function(e, t) {
                function n(e, t) {
                    for (var n in e) {
                        var i = e[n];
                        delete t[i.start], delete i.start, delete i.end, i.forEach(function(e) {
                            r[e < 0 ? ~e : e] = 1
                        }), s.push(i)
                    }
                }
                var r = {},
                    i = {},
                    o = {},
                    s = [],
                    a = -1;
                return t.forEach(function(n, r) {
                    var i, o = e.arcs[n < 0 ? ~n : n];
                    !(o.length < 3) || o[1][0] || o[1][1] || (i = t[++a], t[a] = n, t[r] = i)
                }), t.forEach(function(t) {
                    var n, r, s, a, c, u, d = (n = t, a = (s = e.arcs[n < 0 ? ~n : n])[0], e.transform ? (r = [0, 0], s.forEach(function(e) {
                            r[0] += e[0], r[1] += e[1]
                        })) : r = s[s.length - 1], n < 0 ? [r, a] : [a, r]),
                        l = d[0],
                        f = d[1];
                    if (c = o[l]) {
                        if (delete o[c.end], c.push(t), c.end = f, u = i[f]) {
                            delete i[u.start];
                            var p = u === c ? c : c.concat(u);
                            i[p.start = c.start] = o[p.end = u.end] = p
                        } else i[c.start] = o[c.end] = c
                    } else if (c = i[f]) {
                        if (delete i[c.start], c.unshift(t), c.start = l, u = o[l]) {
                            delete o[u.end];
                            var h = u === c ? c : u.concat(c);
                            i[h.start = u.start] = o[h.end = c.end] = h
                        } else i[c.start] = o[c.end] = c
                    } else i[(c = [t]).start = l] = o[c.end = f] = c
                }), n(o, i), n(i, o), t.forEach(function(e) {
                    r[e < 0 ? ~e : e] || s.push([e])
                }), s
            },
            eN = function(e, t) {
                for (var n = 0, r = e.length; n < r;) {
                    var i = n + r >>> 1;
                    e[i] < t ? n = i + 1 : r = i
                }
                return n
            },
            eF = function(e) {
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
                    o = {
                        LineString: t,
                        MultiLineString: n,
                        Polygon: n,
                        MultiPolygon: function(e, t) {
                            e.forEach(function(e) {
                                n(e, t)
                            })
                        }
                    };
                for (var s in e.forEach(function e(t, n) {
                        "GeometryCollection" === t.type ? t.geometries.forEach(function(t) {
                            e(t, n)
                        }) : t.type in o && o[t.type](t.arcs, n)
                    }), r)
                    for (var a = r[s], c = a.length, u = 0; u < c; ++u)
                        for (var d = u + 1; d < c; ++d) {
                            var l, f = a[u],
                                p = a[d];
                            (l = i[f])[s = eN(l, p)] !== p && l.splice(s, 0, p), (l = i[p])[s = eN(l, f)] !== f && l.splice(s, 0, f)
                        }
                return i
            },
            eB = function(e, t) {
                return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
            },
            ez = function(e) {
                var t;
                return 1 === e.length && (t = e, e = function(e, n) {
                    return eB(t(e), n)
                }), {
                    left: function(t, n, r, i) {
                        for (null == r && (r = 0), null == i && (i = t.length); r < i;) {
                            var o = r + i >>> 1;
                            0 > e(t[o], n) ? r = o + 1 : i = o
                        }
                        return r
                    },
                    right: function(t, n, r, i) {
                        for (null == r && (r = 0), null == i && (i = t.length); r < i;) {
                            var o = r + i >>> 1;
                            e(t[o], n) > 0 ? i = o : r = o + 1
                        }
                        return r
                    }
                }
            },
            eK = (ez(eB).right, function(e, t) {
                var n, r, i, o;
                return function(e, t) {
                    for (var n = e.objects.triangles.geometries, r = ez(function(e) {
                            return e.area
                        }).left; n.length > t;) ! function() {
                        var t = n[0],
                            i = eF(n)[0][0],
                            o = n[i],
                            s = function(e, t) {
                                function n(e) {
                                    e.forEach(function(t) {
                                        t.forEach(function(t) {
                                            (i[t = t < 0 ? ~t : t] || (i[t] = [])).push(e)
                                        })
                                    }), o.push(e)
                                }

                                function r(t) {
                                    return function(e) {
                                        for (var t, n = -1, r = e.length, i = e[r - 1], o = 0; ++n < r;) t = i, i = e[n], o += t[0] * i[1] - t[1] * i[0];
                                        return Math.abs(o)
                                    }(Y(e, {
                                        type: "Polygon",
                                        arcs: [t]
                                    }).coordinates[0])
                                }
                                var i = {},
                                    o = [],
                                    s = [];
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
                                }), o.forEach(function(e) {
                                    if (!e._) {
                                        var t = [],
                                            n = [e];
                                        for (e._ = 1, s.push(t); e = n.pop();) t.push(e), e.forEach(function(e) {
                                            e.forEach(function(e) {
                                                i[e < 0 ? ~e : e].forEach(function(e) {
                                                    e._ || (e._ = 1, n.push(e))
                                                })
                                            })
                                        })
                                    }
                                }), o.forEach(function(e) {
                                    delete e._
                                }), {
                                    type: "MultiPolygon",
                                    arcs: s.map(function(t) {
                                        var n, o = [];
                                        if (t.forEach(function(e) {
                                                e.forEach(function(e) {
                                                    e.forEach(function(e) {
                                                        i[e < 0 ? ~e : e].length < 2 && o.push(e)
                                                    })
                                                })
                                            }), (n = (o = eL(e, o)).length) > 1)
                                            for (var s, a, c = 1, u = r(o[0]); c < n; ++c)(s = r(o[c])) > u && (a = o[0], o[0] = o[c], o[c] = a, u = s);
                                        return o
                                    })
                                }
                            }(e, [t, o]);
                        s.area = t.area + o.area, s.type = "Polygon", s.arcs = s.arcs[0], n.splice(i, 1), n.shift(), n.splice(r(n, s.area), 0, s)
                    }();
                    if (t > n.length) throw RangeError("Can't collapse topology into " + t + " pieces.");
                    return ej(e, e.objects.triangles).features.map(function(e) {
                        return e.geometry.coordinates[0].pop(), e.geometry.coordinates[0]
                    })
                }((n = function(e) {
                    for (var t = eA(e.reduce(function(e, t) {
                            return e.concat([t[0]], [t[1]])
                        }, [])), n = [], r = 0, i = t.length; r < i; r += 3) n.push([
                        [t[r], t[r + 1]],
                        [t[r + 1], t[r + 2]],
                        [t[r + 2], t[r]]
                    ]);
                    return n
                }(e), r = e, i = {}, o = {
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
                        var s = e[0] < e[1] ? e.join(",") : e[1] + "," + e[0],
                            a = e.map(function(e) {
                                return r[e]
                            });
                        s in i ? t.push(~i[s]) : (t.push(i[s] = o.arcs.length), o.arcs.push(a))
                    }), o.objects.triangles.geometries.push({
                        type: "Polygon",
                        area: Math.abs(et(e.map(function(e) {
                            return r[e[0]]
                        }))),
                        arcs: [t]
                    })
                }), o.objects.triangles.geometries.sort(function(e, t) {
                    return e.area - t.area
                }), o), t)
            }),
            eV = function(e, t) {
                if (e.length > 8) return e.map(function(e, t) {
                    return t
                });
                var n, r, i, o, s, a = e.map(function(e) {
                    return t.map(function(t) {
                        var n, r, i;
                        return n = e, r = t, (i = w(_(n), _(r))) * i
                    })
                });
                return n = e, r = 0, i = a, o = 1 / 0,
                    function e(t, n, r) {
                        void 0 === n && (n = []), void 0 === r && (r = 0);
                        for (var a = 0; a < t.length; a++) {
                            var c = t.splice(a, 1),
                                u = i[c[0]][n.length];
                            r + u < o && (t.length ? e(t.slice(), n.concat(c), r + u) : (o = r + u, s = n.concat(c))), t.length && t.splice(a, 0, c[0])
                        }
                    }(s = n.map(function(e, t) {
                        return t
                    })), s
            };
        e.interpolate = function(e, t, n) {
            void 0 === n && (n = {});
            var r = n.maxSegmentLength;
            void 0 === r && (r = 10);
            var i = n.string;
            void 0 === i && (i = !0);
            var o = A(T(e, r), T(t, r), i);
            return i && ("string" == typeof e || "string" == typeof t) ? function(n) {
                return n < 1e-4 && "string" == typeof e ? e : 1 - n < 1e-4 && "string" == typeof t ? t : o(n)
            } : o
        }, e.separate = X, e.combine = function(e, t, n) {
            void 0 === n && (n = {});
            var r = n.maxSegmentLength;
            void 0 === r && (r = 10);
            var i = n.string;
            void 0 === i && (i = !0);
            var o = n.single;
            void 0 === o && (o = !1);
            var s = X(t, e, {
                maxSegmentLength: r,
                string: i,
                single: o
            });
            return o ? function(e) {
                return s(1 - e)
            } : s.map(function(e) {
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
            var o = n.single;
            if (void 0 === o && (o = !1), !Array.isArray(e) || !Array.isArray(t) || e.length !== t.length || !e.length) throw TypeError(eP);
            var s, a, c = function(e) {
                    return T(e, r)
                },
                u = e.map(c),
                d = t.map(c);
            return o ? (e.every(function(e) {
                return "string" == typeof e
            }) && (s = e.slice(0)), t.every(function(e) {
                return "string" == typeof e
            }) && (a = t.slice(0))) : (s = e.slice(0), a = t.slice(0)), J(u, d, {
                string: i,
                single: o,
                t0: s,
                t1: a,
                match: !1
            })
        }, e.splitPathString = function(e) {
            return D(M(e))
        }, e.toPathString = C, e.fromCircle = $, e.toCircle = function(e, t, n, r, i) {
            var o = $(t, n, r, e, i);
            return function(e) {
                return o(1 - e)
            }
        }, e.fromRect = Q, e.toRect = function(e, t, n, r, i, o) {
            var s = Q(t, n, r, i, e, o);
            return function(e) {
                return s(1 - e)
            }
        }, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, "object" == typeof t && void 0 !== e ? i(t) : "function" == typeof define && define.amd ? define(["exports"], i) : i(r.flubber = r.flubber || {})
}