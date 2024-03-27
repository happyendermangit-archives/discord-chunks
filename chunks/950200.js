function(e) {
    if (!t) var t = {
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
        max: function(e, n) {
            return Math.max.apply(null, n ? t.map(e, n) : e)
        }
    };
    var n = function() {
        var e = 3;

        function n(e, t, n) {
            return (e << 10) + (t << 5) + n
        }

        function r(e) {
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

        function i(e, t, n, r, i, a, o) {
            this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = a, this.histo = o
        }

        function a() {
            this.vboxes = new r(function(e, n) {
                return t.naturalOrder(e.vbox.count() * e.vbox.volume(), n.vbox.count() * n.vbox.volume())
            })
        }
        return i.prototype = {
            volume: function(e) {
                return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
            },
            count: function(e) {
                var t = this.histo;
                if (!this._count_set || e) {
                    var r, i, a, o = 0;
                    for (r = this.r1; r <= this.r2; r++)
                        for (i = this.g1; i <= this.g2; i++)
                            for (a = this.b1; a <= this.b2; a++) o += t[n(r, i, a)] || 0;
                    this._count = o, this._count_set = !0
                }
                return this._count
            },
            copy: function() {
                return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
            },
            avg: function(e) {
                var t = this.histo;
                if (!this._avg || e) {
                    var r, i, a, o, s = 0,
                        u = 8,
                        c = 0,
                        l = 0,
                        d = 0;
                    for (i = this.r1; i <= this.r2; i++)
                        for (a = this.g1; a <= this.g2; a++)
                            for (o = this.b1; o <= this.b2; o++) s += r = t[n(i, a, o)] || 0, c += r * (i + .5) * u, l += r * (a + .5) * u, d += r * (o + .5) * u;
                    s ? this._avg = [~~(c / s), ~~(l / s), ~~(d / s)] : this._avg = [~~(u * (this.r1 + this.r2 + 1) / 2), ~~(u * (this.g1 + this.g2 + 1) / 2), ~~(u * (this.b1 + this.b2 + 1) / 2)]
                }
                return this._avg
            },
            contains: function(t) {
                var n = t[0] >> e;
                return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
            }
        }, a.prototype = {
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
                for (var t, n, r, i = this.vboxes, a = 0; a < i.size(); a++)((n = Math.sqrt(Math.pow(e[0] - i.peek(a).color[0], 2) + Math.pow(e[1] - i.peek(a).color[1], 2) + Math.pow(e[2] - i.peek(a).color[2], 2))) < t || void 0 === t) && (t = n, r = i.peek(a).color);
                return r
            },
            forcebw: function() {
                var e = this.vboxes;
                e.sort(function(e, n) {
                    return t.naturalOrder(t.sum(e.color), t.sum(n.color))
                });
                var n = e[0].color;
                n[0] < 5 && n[1] < 5 && n[2] < 5 && (e[0].color = [0, 0, 0]);
                var r = e.length - 1,
                    i = e[r].color;
                i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[r].color = [255, 255, 255])
            }
        }, {
            quantize: function(o, s) {
                if (!o.length || s < 2 || s > 256) return !1;
                var u, c, l, d, f, p, h, m, g, _, b, v, y, E, S, x, w = (u = o, f = Array(32768), u.forEach(function(t) {
                        l = t[0] >> e, d = t[1] >> e, f[c = n(l, d, t[2] >> e)] = (f[c] || 0) + 1
                    }), f),
                    T = 0;
                w.forEach(function() {
                    T++
                });
                var C = (p = o, h = w, b = 1e6, v = 0, y = 1e6, E = 0, S = 1e6, x = 0, p.forEach(function(t) {
                        m = t[0] >> e, g = t[1] >> e, _ = t[2] >> e, m < b ? b = m : m > v && (v = m), g < y ? y = g : g > E && (E = g), _ < S ? S = _ : _ > x && (x = _)
                    }), new i(b, v, y, E, S, x, h)),
                    D = new r(function(e, n) {
                        return t.naturalOrder(e.count(), n.count())
                    });

                function O(e, r) {
                    for (var i, a = 1, o = 0; o < 1e3;) {
                        if (!(i = e.pop()).count()) {
                            e.push(i), o++;
                            continue
                        }
                        var s = function(e, r) {
                                if (r.count()) {
                                    var i = r.r2 - r.r1 + 1,
                                        a = r.g2 - r.g1 + 1,
                                        o = r.b2 - r.b1 + 1,
                                        s = t.max([i, a, o]);
                                    if (1 == r.count()) return [r.copy()];
                                    var u, c, l, d, f, p = 0,
                                        h = [],
                                        m = [];
                                    if (s == i)
                                        for (u = r.r1; u <= r.r2; u++) {
                                            for (d = 0, c = r.g1; c <= r.g2; c++)
                                                for (l = r.b1; l <= r.b2; l++) d += e[f = n(u, c, l)] || 0;
                                            p += d, h[u] = p
                                        } else if (s == a)
                                            for (u = r.g1; u <= r.g2; u++) {
                                                for (d = 0, c = r.r1; c <= r.r2; c++)
                                                    for (l = r.b1; l <= r.b2; l++) d += e[f = n(c, u, l)] || 0;
                                                p += d, h[u] = p
                                            } else
                                                for (u = r.b1; u <= r.b2; u++) {
                                                    for (d = 0, c = r.r1; c <= r.r2; c++)
                                                        for (l = r.g1; l <= r.g2; l++) d += e[f = n(c, l, u)] || 0;
                                                    p += d, h[u] = p
                                                }
                                    return h.forEach(function(e, t) {
                                        m[t] = p - e
                                    }), g(s == i ? "r" : s == a ? "g" : "b")
                                }

                                function g(e) {
                                    var t, n, i, a, o, s = e + "1",
                                        c = e + "2",
                                        l = 0;
                                    for (u = r[s]; u <= r[c]; u++)
                                        if (h[u] > p / 2) {
                                            for (i = r.copy(), a = r.copy(), t = u - r[s], o = t <= (n = r[c] - u) ? Math.min(r[c] - 1, ~~(u + n / 2)) : Math.max(r[s], ~~(u - 1 - t / 2)); !h[o];) o++;
                                            for (l = m[o]; !l && h[o - 1];) l = m[--o];
                                            return i[c] = o, a[s] = i[c] + 1, [i, a]
                                        }
                                }
                            }(w, i),
                            u = s[0],
                            c = s[1];
                        if (!u) return;
                        if (e.push(u), c && (e.push(c), a++), a >= r || o++ > 1e3) return
                    }
                }
                D.push(C), O(D, .75 * s);
                for (var M = new r(function(e, n) {
                        return t.naturalOrder(e.count() * e.volume(), n.count() * n.volume())
                    }); D.size();) M.push(D.pop());
                O(M, s - M.size());
                for (var A = new a; M.size();) A.push(M.pop());
                return A
            }
        }
    }();
    e.exports = n.quantize
}