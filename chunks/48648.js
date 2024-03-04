function(e, t, n) {
    if (n("808653"), n("424973"), !r) var r = {
        map: function(e, t) {
            var n = {};
            return t ? e.map(function(e, r) {
                return n.index = r, t.call(n, e)
            }) : e.slice()
        },
        naturalOrder: function(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        },
        sum: function(e, t) {
            var n = {};
            return e.reduce(t ? function(e, r, i) {
                return n.index = i, e + t.call(n, r)
            } : function(e, t) {
                return e + t
            }, 0)
        },
        max: function(e, t) {
            return Math.max.apply(null, t ? r.map(e, t) : e)
        }
    };
    var i = function() {
        var e = 3;

        function t(e, t, n) {
            return (e << 10) + (t << 5) + n
        }

        function n(e) {
            var t = [],
                n = !1;

            function r() {
                t.sort(e), n = !0
            }
            return {
                push: function(e) {
                    t.push(e), n = !1
                },
                peek: function(e) {
                    return !n && r(), void 0 === e && (e = t.length - 1), t[e]
                },
                pop: function() {
                    return !n && r(), t.pop()
                },
                size: function() {
                    return t.length
                },
                map: function(e) {
                    return t.map(e)
                },
                debug: function() {
                    return !n && r(), t
                }
            }
        }

        function i(e, t, n, r, i, o, s) {
            this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = o, this.histo = s
        }

        function o() {
            this.vboxes = new n(function(e, t) {
                return r.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
            })
        }
        return i.prototype = {
            volume: function(e) {
                return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
            },
            count: function(e) {
                var n = this.histo;
                if (!this._count_set || e) {
                    var r, i, o, s = 0;
                    for (r = this.r1; r <= this.r2; r++)
                        for (i = this.g1; i <= this.g2; i++)
                            for (o = this.b1; o <= this.b2; o++) s += n[t(r, i, o)] || 0;
                    this._count = s, this._count_set = !0
                }
                return this._count
            },
            copy: function() {
                return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
            },
            avg: function(e) {
                var n = this.histo;
                if (!this._avg || e) {
                    var r, i, o, s, a = 0,
                        c = 8,
                        u = 0,
                        d = 0,
                        l = 0;
                    for (i = this.r1; i <= this.r2; i++)
                        for (o = this.g1; o <= this.g2; o++)
                            for (s = this.b1; s <= this.b2; s++) a += r = n[t(i, o, s)] || 0, u += r * (i + .5) * c, d += r * (o + .5) * c, l += r * (s + .5) * c;
                    a ? this._avg = [~~(u / a), ~~(d / a), ~~(l / a)] : this._avg = [~~(c * (this.r1 + this.r2 + 1) / 2), ~~(c * (this.g1 + this.g2 + 1) / 2), ~~(c * (this.b1 + this.b2 + 1) / 2)]
                }
                return this._avg
            },
            contains: function(t) {
                var n = t[0] >> e;
                return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
            }
        }, o.prototype = {
            push: function(e) {
                this.vboxes.push({
                    vbox: e,
                    color: e.avg()
                })
            },
            palette: function() {
                return this.vboxes.map(function(e) {
                    return e.color
                })
            },
            size: function() {
                return this.vboxes.size()
            },
            map: function(e) {
                for (var t = this.vboxes, n = 0; n < t.size(); n++)
                    if (t.peek(n).vbox.contains(e)) return t.peek(n).color;
                return this.nearest(e)
            },
            nearest: function(e) {
                for (var t, n, r, i = this.vboxes, o = 0; o < i.size(); o++)((n = Math.sqrt(Math.pow(e[0] - i.peek(o).color[0], 2) + Math.pow(e[1] - i.peek(o).color[1], 2) + Math.pow(e[2] - i.peek(o).color[2], 2))) < t || void 0 === t) && (t = n, r = i.peek(o).color);
                return r
            },
            forcebw: function() {
                var e = this.vboxes;
                e.sort(function(e, t) {
                    return r.naturalOrder(r.sum(e.color), r.sum(t.color))
                });
                var t = e[0].color;
                t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                var n = e.length - 1,
                    i = e[n].color;
                i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[n].color = [255, 255, 255])
            }
        }, {
            quantize: function(s, a) {
                if (!s.length || a < 2 || a > 256) return !1;
                var c, u, d, l, f, p, h, v, g, b, m, y, x, w, S, k, E = (c = s, f = Array(32768), c.forEach(function(n) {
                        d = n[0] >> e, l = n[1] >> e, f[u = t(d, l, n[2] >> e)] = (f[u] || 0) + 1
                    }), f),
                    _ = 0;
                E.forEach(function() {
                    _++
                });
                var M = (p = s, h = E, m = 1e6, y = 0, x = 1e6, w = 0, S = 1e6, k = 0, p.forEach(function(t) {
                        v = t[0] >> e, g = t[1] >> e, b = t[2] >> e, v < m ? m = v : v > y && (y = v), g < x ? x = g : g > w && (w = g), b < S ? S = b : b > k && (k = b)
                    }), new i(m, y, x, w, S, k, h)),
                    D = new n(function(e, t) {
                        return r.naturalOrder(e.count(), t.count())
                    });

                function C(e, n) {
                    for (var i, o = 1, s = 0; s < 1e3;) {
                        if (!(i = e.pop()).count()) {
                            e.push(i), s++;
                            continue
                        }
                        var a = function(e, n) {
                                if (n.count()) {
                                    var i = n.r2 - n.r1 + 1,
                                        o = n.g2 - n.g1 + 1,
                                        s = n.b2 - n.b1 + 1,
                                        a = r.max([i, o, s]);
                                    if (1 == n.count()) return [n.copy()];
                                    var c, u, d, l, f, p = 0,
                                        h = [],
                                        v = [];
                                    if (a == i)
                                        for (c = n.r1; c <= n.r2; c++) {
                                            for (l = 0, u = n.g1; u <= n.g2; u++)
                                                for (d = n.b1; d <= n.b2; d++) l += e[f = t(c, u, d)] || 0;
                                            p += l, h[c] = p
                                        } else if (a == o)
                                            for (c = n.g1; c <= n.g2; c++) {
                                                for (l = 0, u = n.r1; u <= n.r2; u++)
                                                    for (d = n.b1; d <= n.b2; d++) l += e[f = t(u, c, d)] || 0;
                                                p += l, h[c] = p
                                            } else
                                                for (c = n.b1; c <= n.b2; c++) {
                                                    for (l = 0, u = n.r1; u <= n.r2; u++)
                                                        for (d = n.g1; d <= n.g2; d++) l += e[f = t(u, d, c)] || 0;
                                                    p += l, h[c] = p
                                                }
                                    return h.forEach(function(e, t) {
                                        v[t] = p - e
                                    }), g(a == i ? "r" : a == o ? "g" : "b")
                                }

                                function g(e) {
                                    var t, r, i, o, s, a = e + "1",
                                        u = e + "2",
                                        d = 0;
                                    for (c = n[a]; c <= n[u]; c++)
                                        if (h[c] > p / 2) {
                                            for (i = n.copy(), o = n.copy(), t = c - n[a], s = t <= (r = n[u] - c) ? Math.min(n[u] - 1, ~~(c + r / 2)) : Math.max(n[a], ~~(c - 1 - t / 2)); !h[s];) s++;
                                            for (d = v[s]; !d && h[s - 1];) d = v[--s];
                                            return i[u] = s, o[a] = i[u] + 1, [i, o]
                                        }
                                }
                            }(E, i),
                            c = a[0],
                            u = a[1];
                        if (!c) return;
                        if (e.push(c), u && (e.push(u), o++), o >= n || s++ > 1e3) return
                    }
                }
                D.push(M), C(D, .75 * a);
                for (var P = new n(function(e, t) {
                        return r.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                    }); D.size();) P.push(D.pop());
                C(P, a - P.size());
                for (var T = new o; P.size();) T.push(P.pop());
                return T
            }
        }
    }();
    e.exports = i.quantize
}