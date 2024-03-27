function(e) {
    e.exports = o, o.default = o, o.stable = c, o.stableStringify = c;
    var t = "[...]",
        n = "[Circular]",
        r = [],
        i = [];

    function a() {
        return {
            depthLimit: Number.MAX_SAFE_INTEGER,
            edgesLimit: Number.MAX_SAFE_INTEGER
        }
    }

    function o(e, o, u, c) {
        void 0 === c && (c = a()),
            function e(r, i, a, o, u, c, l) {
                if (c += 1, "object" == typeof r && null !== r) {
                    for (d = 0; d < o.length; d++)
                        if (o[d] === r) {
                            s(n, r, i, u);
                            return
                        } if (void 0 !== l.depthLimit && c > l.depthLimit || void 0 !== l.edgesLimit && a + 1 > l.edgesLimit) {
                        s(t, r, i, u);
                        return
                    }
                    if (o.push(r), Array.isArray(r))
                        for (d = 0; d < r.length; d++) e(r[d], d, d, o, r, c, l);
                    else {
                        var d, f = Object.keys(r);
                        for (d = 0; d < f.length; d++) {
                            var p = f[d];
                            e(r[p], p, d, o, r, c, l)
                        }
                    }
                    o.pop()
                }
            }(e, "", 0, [], void 0, 0, c);
        try {
            d = 0 === i.length ? JSON.stringify(e, o, u) : JSON.stringify(e, l(o), u)
        } catch (e) {
            return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
        } finally {
            for (; 0 !== r.length;) {
                var d, f = r.pop();
                4 === f.length ? Object.defineProperty(f[0], f[1], f[3]) : f[0][f[1]] = f[2]
            }
        }
        return d
    }

    function s(e, t, n, a) {
        var o = Object.getOwnPropertyDescriptor(a, n);
        void 0 !== o.get ? o.configurable ? (Object.defineProperty(a, n, {
            value: e
        }), r.push([a, n, t, o])) : i.push([t, n, e]) : (a[n] = e, r.push([a, n, t]))
    }

    function u(e, t) {
        return e < t ? -1 : e > t ? 1 : 0
    }

    function c(e, o, c, d) {
        void 0 === d && (d = a());
        var f, p = function e(i, a, o, c, l, d, f) {
            if (d += 1, "object" == typeof i && null !== i) {
                for (p = 0; p < c.length; p++)
                    if (c[p] === i) {
                        s(n, i, a, l);
                        return
                    } try {
                    if ("function" == typeof i.toJSON) return
                } catch (e) {
                    return
                }
                if (void 0 !== f.depthLimit && d > f.depthLimit || void 0 !== f.edgesLimit && o + 1 > f.edgesLimit) {
                    s(t, i, a, l);
                    return
                }
                if (c.push(i), Array.isArray(i))
                    for (p = 0; p < i.length; p++) e(i[p], p, p, c, i, d, f);
                else {
                    var p, h = {},
                        m = Object.keys(i).sort(u);
                    for (p = 0; p < m.length; p++) {
                        var g = m[p];
                        e(i[g], g, p, c, i, d, f), h[g] = i[g]
                    }
                    if (void 0 === l) return h;
                    r.push([l, a, i]), l[a] = h
                }
                c.pop()
            }
        }(e, "", 0, [], void 0, 0, d) || e;
        try {
            f = 0 === i.length ? JSON.stringify(p, o, c) : JSON.stringify(p, l(o), c)
        } catch (e) {
            return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
        } finally {
            for (; 0 !== r.length;) {
                var h = r.pop();
                4 === h.length ? Object.defineProperty(h[0], h[1], h[3]) : h[0][h[1]] = h[2]
            }
        }
        return f
    }

    function l(e) {
        return e = void 0 !== e ? e : function(e, t) {
                return t
            },
            function(t, n) {
                if (i.length > 0)
                    for (var r = 0; r < i.length; r++) {
                        var a = i[r];
                        if (a[1] === t && a[0] === n) {
                            n = a[2], i.splice(r, 1);
                            break
                        }
                    }
                return e.call(this, t, n)
            }
    }
}