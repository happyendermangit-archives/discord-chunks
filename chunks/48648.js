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
            return e.reduce(t ? function(e, r, a) {
                return n.index = a, e + t.call(n, r)
            } : function(e, t) {
                return e + t
            }, 0)
        },
        max: function(e, t) {
            return Math.max.apply(null, t ? r.map(e, t) : e)
        }
    };
    var a = function() {
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

        function a(e, t, n, r, a, o, i) {
            this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = r, this.b1 = a, this.b2 = o, this.histo = i
        }

        function o() {
            this.vboxes = new n(function(e, t) {
                return r.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
            })
        }
        return a.prototype = {
            volume: function(e) {
                return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
            },
            count: function(e) {
                var n = this.histo;
                if (!this._count_set || e) {
                    var r, a, o, i = 0;
                    for (r = this.r1; r <= this.r2; r++)
                        for (a = this.g1; a <= this.g2; a++)
                            for (o = this.b1; o <= this.b2; o++) i += n[t(r, a, o)] || 0;
                    this._count = i, this._count_set = !0
                }
                return this._count
            },
            copy: function() {
                return new a(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
            },
            avg: function(e) {
                var n = this.histo;
                if (!this._avg || e) {
                    var r, a, o, i, s = 0,
                        u = 8,
                        l = 0,
                        c = 0,
                        d = 0;
                    for (a = this.r1; a <= this.r2; a++)
                        for (o = this.g1; o <= this.g2; o++)
                            for (i = this.b1; i <= this.b2; i++) s += r = n[t(a, o, i)] || 0, l += r * (a + .5) * u, c += r * (o + .5) * u, d += r * (i + .5) * u;
                    s ? this._avg = [~~(l / s), ~~(c / s), ~~(d / s)] : this._avg = [~~(u * (this.r1 + this.r2 + 1) / 2), ~~(u * (this.g1 + this.g2 + 1) / 2), ~~(u * (this.b1 + this.b2 + 1) / 2)]
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
                for (var t, n, r, a = this.vboxes, o = 0; o < a.size(); o++)((n = Math.sqrt(Math.pow(e[0] - a.peek(o).color[0], 2) + Math.pow(e[1] - a.peek(o).color[1], 2) + Math.pow(e[2] - a.peek(o).color[2], 2))) < t || void 0 === t) && (t = n, r = a.peek(o).color);
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
                    a = e[n].color;
                a[0] > 251 && a[1] > 251 && a[2] > 251 && (e[n].color = [255, 255, 255])
            }
        }, {
            quantize: function(i, s) {
                if (!i.length || s < 2 || s > 256) return !1;
                var u, l, c, d, f, p, h, m, y, _, g, v, b, M, w, k, L = (u = i, f = Array(32768), u.forEach(function(n) {
                        c = n[0] >> e, d = n[1] >> e, f[l = t(c, d, n[2] >> e)] = (f[l] || 0) + 1
                    }), f),
                    D = 0;
                L.forEach(function() {
                    D++
                });
                var T = (p = i, h = L, g = 1e6, v = 0, b = 1e6, M = 0, w = 1e6, k = 0, p.forEach(function(t) {
                        m = t[0] >> e, y = t[1] >> e, _ = t[2] >> e, m < g ? g = m : m > v && (v = m), y < b ? b = y : y > M && (M = y), _ < w ? w = _ : _ > k && (k = _)
                    }), new a(g, v, b, M, w, k, h)),
                    S = new n(function(e, t) {
                        return r.naturalOrder(e.count(), t.count())
                    });

                function Y(e, n) {
                    for (var a, o = 1, i = 0; i < 1e3;) {
                        if (!(a = e.pop()).count()) {
                            e.push(a), i++;
                            continue
                        }
                        var s = function(e, n) {
                                if (n.count()) {
                                    var a = n.r2 - n.r1 + 1,
                                        o = n.g2 - n.g1 + 1,
                                        i = n.b2 - n.b1 + 1,
                                        s = r.max([a, o, i]);
                                    if (1 == n.count()) return [n.copy()];
                                    var u, l, c, d, f, p = 0,
                                        h = [],
                                        m = [];
                                    if (s == a)
                                        for (u = n.r1; u <= n.r2; u++) {
                                            for (d = 0, l = n.g1; l <= n.g2; l++)
                                                for (c = n.b1; c <= n.b2; c++) d += e[f = t(u, l, c)] || 0;
                                            p += d, h[u] = p
                                        } else if (s == o)
                                            for (u = n.g1; u <= n.g2; u++) {
                                                for (d = 0, l = n.r1; l <= n.r2; l++)
                                                    for (c = n.b1; c <= n.b2; c++) d += e[f = t(l, u, c)] || 0;
                                                p += d, h[u] = p
                                            } else
                                                for (u = n.b1; u <= n.b2; u++) {
                                                    for (d = 0, l = n.r1; l <= n.r2; l++)
                                                        for (c = n.g1; c <= n.g2; c++) d += e[f = t(l, c, u)] || 0;
                                                    p += d, h[u] = p
                                                }
                                    return h.forEach(function(e, t) {
                                        m[t] = p - e
                                    }), y(s == a ? "r" : s == o ? "g" : "b")
                                }

                                function y(e) {
                                    var t, r, a, o, i, s = e + "1",
                                        l = e + "2",
                                        c = 0;
                                    for (u = n[s]; u <= n[l]; u++)
                                        if (h[u] > p / 2) {
                                            for (a = n.copy(), o = n.copy(), t = u - n[s], i = t <= (r = n[l] - u) ? Math.min(n[l] - 1, ~~(u + r / 2)) : Math.max(n[s], ~~(u - 1 - t / 2)); !h[i];) i++;
                                            for (c = m[i]; !c && h[i - 1];) c = m[--i];
                                            return a[l] = i, o[s] = a[l] + 1, [a, o]
                                        }
                                }
                            }(L, a),
                            u = s[0],
                            l = s[1];
                        if (!u) return;
                        if (e.push(u), l && (e.push(l), o++), o >= n || i++ > 1e3) return
                    }
                }
                S.push(T), Y(S, .75 * s);
                for (var x = new n(function(e, t) {
                        return r.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                    }); S.size();) x.push(S.pop());
                Y(x, s - x.size());
                for (var O = new o; x.size();) O.push(x.pop());
                return O
            }
        }
    }();
    e.exports = a.quantize
}