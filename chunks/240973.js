function(e, t, n) {
    "use strict";
    var r = n("390493");
    n("222007");
    var i = n("187798"),
        o = n("885795");
    if (n("923771")() || n("391938")()) {
        var s = Symbol.iterator;
        e.exports = function(e) {
            return null != e && void 0 !== e[s] ? e[s]() : i(e) ? Array.prototype[s].call(e) : void 0
        }
    } else {
        var a = n("621792"),
            c = n("264871"),
            u = n("911718"),
            d = u("%Map%", !0),
            l = u("%Set%", !0),
            f = n("314970"),
            p = f("Array.prototype.push"),
            h = f("String.prototype.charCodeAt"),
            v = f("String.prototype.slice"),
            g = function(e, t) {
                if (t + 1 >= e.length) return t + 1;
                var n = h(e, t);
                if (n < 55296 || n > 56319) return t + 1;
                var r = h(e, t + 1);
                return r < 56320 || r > 57343 ? t + 1 : t + 2
            },
            b = function(e) {
                var t = 0;
                return {
                    next: function() {
                        var n, r = t >= e.length;
                        return !r && (n = e[t], t += 1), {
                            done: r,
                            value: n
                        }
                    }
                }
            },
            m = function(e, t) {
                if (a(e) || i(e)) return b(e);
                if (c(e)) {
                    var n = 0;
                    return {
                        next: function() {
                            var t = g(e, n),
                                r = v(e, n, t);
                            return n = t, {
                                done: t > e.length,
                                value: r
                            }
                        }
                    }
                }
                if (t && void 0 !== e["_es6-shim iterator_"]) return e["_es6-shim iterator_"]()
            };
        if (d || l) {
            var y = n("354970"),
                x = n("527631"),
                w = f("Map.prototype.forEach", !0),
                S = f("Set.prototype.forEach", !0);
            if (void 0 === r || !r.versions || !r.versions.node) {
                var k = f("Map.prototype.iterator", !0),
                    E = f("Set.prototype.iterator", !0)
            }
            var _ = f("Map.prototype.@@iterator", !0) || f("Map.prototype._es6-shim iterator_", !0),
                M = f("Set.prototype.@@iterator", !0) || f("Set.prototype._es6-shim iterator_", !0),
                D = function(e) {
                    if (y(e)) {
                        if (k) return o(k(e));
                        if (_) return _(e);
                        if (w) {
                            var t = [];
                            return w(e, function(e, n) {
                                p(t, [n, e])
                            }), b(t)
                        }
                    }
                    if (x(e)) {
                        if (E) return o(E(e));
                        if (M) return M(e);
                        if (S) {
                            var n = [];
                            return S(e, function(e) {
                                p(n, e)
                            }), b(n)
                        }
                    }
                };
            e.exports = function(e) {
                return D(e) || m(e)
            }
        } else e.exports = function(e) {
            if (null != e) return m(e, !0)
        }
    }
}