function(t, e, s) {
    "use strict";
    var r = s("390493");
    s("222007");
    var i = s("187798"),
        n = s("885795");
    if (s("923771")() || s("391938")()) {
        var c = Symbol.iterator;
        t.exports = function(t) {
            return null != t && void 0 !== t[c] ? t[c]() : i(t) ? Array.prototype[c].call(t) : void 0
        }
    } else {
        var o = s("621792"),
            f = s("264871"),
            u = s("911718"),
            a = u("%Map%", !0),
            d = u("%Set%", !0),
            p = s("314970"),
            b = p("Array.prototype.push"),
            h = p("String.prototype.charCodeAt"),
            l = p("String.prototype.slice"),
            g = function(t, e) {
                if (e + 1 >= t.length) return e + 1;
                var s = h(t, e);
                if (s < 55296 || s > 56319) return e + 1;
                var r = h(t, e + 1);
                return r < 56320 || r > 57343 ? e + 1 : e + 2
            },
            v = function(t) {
                var e = 0;
                return {
                    next: function() {
                        var s, r = e >= t.length;
                        return !r && (s = t[e], e += 1), {
                            done: r,
                            value: s
                        }
                    }
                }
            },
            x = function(t, e) {
                if (o(t) || i(t)) return v(t);
                if (f(t)) {
                    var s = 0;
                    return {
                        next: function() {
                            var e = g(t, s),
                                r = l(t, s, e);
                            return s = e, {
                                done: e > t.length,
                                value: r
                            }
                        }
                    }
                }
                if (e && void 0 !== t["_es6-shim iterator_"]) return t["_es6-shim iterator_"]()
            };
        if (a || d) {
            var m = s("354970"),
                y = s("527631"),
                _ = p("Map.prototype.forEach", !0),
                w = p("Set.prototype.forEach", !0);
            if (void 0 === r || !r.versions || !r.versions.node) {
                var M = p("Map.prototype.iterator", !0),
                    S = p("Set.prototype.iterator", !0)
            }
            var k = p("Map.prototype.@@iterator", !0) || p("Map.prototype._es6-shim iterator_", !0),
                A = p("Set.prototype.@@iterator", !0) || p("Set.prototype._es6-shim iterator_", !0),
                E = function(t) {
                    if (m(t)) {
                        if (M) return n(M(t));
                        if (k) return k(t);
                        if (_) {
                            var e = [];
                            return _(t, function(t, s) {
                                b(e, [s, t])
                            }), v(e)
                        }
                    }
                    if (y(t)) {
                        if (S) return n(S(t));
                        if (A) return A(t);
                        if (w) {
                            var s = [];
                            return w(t, function(t) {
                                b(s, t)
                            }), v(s)
                        }
                    }
                };
            t.exports = function(t) {
                return E(t) || x(t)
            }
        } else t.exports = function(t) {
            if (null != t) return x(t, !0)
        }
    }
}