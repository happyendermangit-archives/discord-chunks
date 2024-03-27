function(e, t, n) {
    "use strict";
    var r = n("444675"),
        i = n("607974"),
        a = n("64750");
    if (n("322499")() || n("882171")()) {
        var o = Symbol.iterator;
        e.exports = function(e) {
            return null != e && void 0 !== e[o] ? e[o]() : i(e) ? Array.prototype[o].call(e) : void 0
        }
    } else {
        var s = n("189612"),
            u = n("163494"),
            c = n("81021"),
            l = c("%Map%", !0),
            d = c("%Set%", !0),
            f = n("903390"),
            p = f("Array.prototype.push"),
            h = f("String.prototype.charCodeAt"),
            m = f("String.prototype.slice"),
            g = function(e, t) {
                if (t + 1 >= e.length) return t + 1;
                var n = h(e, t);
                if (n < 55296 || n > 56319) return t + 1;
                var r = h(e, t + 1);
                return r < 56320 || r > 57343 ? t + 1 : t + 2
            },
            _ = function(e) {
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
            b = function(e, t) {
                if (s(e) || i(e)) return _(e);
                if (u(e)) {
                    var n = 0;
                    return {
                        next: function() {
                            var t = g(e, n),
                                r = m(e, n, t);
                            return n = t, {
                                done: t > e.length,
                                value: r
                            }
                        }
                    }
                }
                if (t && void 0 !== e["_es6-shim iterator_"]) return e["_es6-shim iterator_"]()
            };
        if (l || d) {
            var v = n("403006"),
                y = n("72859"),
                E = f("Map.prototype.forEach", !0),
                S = f("Set.prototype.forEach", !0);
            if (void 0 === r || !r.versions || !r.versions.node) {
                var x = f("Map.prototype.iterator", !0),
                    w = f("Set.prototype.iterator", !0)
            }
            var T = f("Map.prototype.@@iterator", !0) || f("Map.prototype._es6-shim iterator_", !0),
                C = f("Set.prototype.@@iterator", !0) || f("Set.prototype._es6-shim iterator_", !0),
                D = function(e) {
                    if (v(e)) {
                        if (x) return a(x(e));
                        if (T) return T(e);
                        if (E) {
                            var t = [];
                            return E(e, function(e, n) {
                                p(t, [n, e])
                            }), _(t)
                        }
                    }
                    if (y(e)) {
                        if (w) return a(w(e));
                        if (C) return C(e);
                        if (S) {
                            var n = [];
                            return S(e, function(e) {
                                p(n, e)
                            }), _(n)
                        }
                    }
                };
            e.exports = function(e) {
                return D(e) || b(e)
            }
        } else e.exports = function(e) {
            if (null != e) return b(e, !0)
        }
    }
}