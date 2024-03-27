function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return w
        }
    });
    var r = n("393655"),
        i = n("465735"),
        a = n("528734"),
        o = n("544991"),
        s = n("128961"),
        u = n("424421"),
        c = n("198050"),
        l = n("217224"),
        d = n("951516"),
        f = n("608297"),
        p = n("416778"),
        h = n("633605");

    function m(e) {
        return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function g(e, t) {
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (i = function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return _(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                i && (e = i);
                var n = 0,
                    r = function() {};
                return {
                    s: r,
                    n: function() {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a, o = !0,
            s = !1;
        return {
            s: function() {
                i = e[Symbol.iterator]()
            },
            n: function() {
                var e = i.next();
                return o = e.done, e
            },
            e: function(e) {
                s = !0, a = e
            },
            f: function() {
                try {
                    !o && null != i.return && i.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var b = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        v = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        y = /^'([^]*?)'?$/,
        E = /''/g,
        S = /\S/,
        x = /[a-zA-Z]/;

    function w(e, t, n, _) {
        (0, d.default)(3, arguments);
        var w = String(e),
            T = String(t),
            C = (0, h.getDefaultOptions)(),
            D = null !== (I = null !== (L = null == _ ? void 0 : _.locale) && void 0 !== L ? L : C.locale) && void 0 !== I ? I : r.default;
        if (!D.match) throw RangeError("locale must contain match property");
        var O = (0, l.default)(null !== (P = null !== (F = null !== (B = null !== (U = null == _ ? void 0 : _.firstWeekContainsDate) && void 0 !== U ? U : null == _ ? void 0 : null === (Y = _.locale) || void 0 === Y ? void 0 : null === (j = Y.options) || void 0 === j ? void 0 : j.firstWeekContainsDate) && void 0 !== B ? B : C.firstWeekContainsDate) && void 0 !== F ? F : null === (z = C.locale) || void 0 === z ? void 0 : null === (H = z.options) || void 0 === H ? void 0 : H.firstWeekContainsDate) && void 0 !== P ? P : 1);
        if (!(O >= 1 && O <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var M = (0, l.default)(null !== (G = null !== (V = null !== ($ = null !== (W = null == _ ? void 0 : _.weekStartsOn) && void 0 !== W ? W : null == _ ? void 0 : null === (K = _.locale) || void 0 === K ? void 0 : null === (q = K.options) || void 0 === q ? void 0 : q.weekStartsOn) && void 0 !== $ ? $ : C.weekStartsOn) && void 0 !== V ? V : null === (Q = C.locale) || void 0 === Q ? void 0 : null === (Z = Q.options) || void 0 === Z ? void 0 : Z.weekStartsOn) && void 0 !== G ? G : 0);
        if (!(M >= 0 && M <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
        if ("" === T) return "" === w ? (0, a.default)(n) : new Date(NaN);
        var A = {
                firstWeekContainsDate: O,
                weekStartsOn: M,
                locale: D
            },
            k = [new f.DateToSystemTimezoneSetter],
            R = T.match(v).map(function(e) {
                var t = e[0];
                return t in s.default ? (0, s.default[t])(e, D.formatLong) : e
            }).join("").match(b),
            N = [],
            I, L, P, F, B, U, Y, j, z, H, G, V, $, W, K, q, Q, Z, X, J = g(R);
        try {
            for (J.s(); !(X = J.n()).done;) {
                var ee = function() {
                    var t = X.value;
                    !(null != _ && _.useAdditionalWeekYearTokens) && (0, c.isProtectedWeekYearToken)(t) && (0, c.throwProtectedError)(t, T, e), !(null != _ && _.useAdditionalDayOfYearTokens) && (0, c.isProtectedDayOfYearToken)(t) && (0, c.throwProtectedError)(t, T, e);
                    var n = t[0],
                        r = p.parsers[n];
                    if (r) {
                        var i = r.incompatibleTokens;
                        if (Array.isArray(i)) {
                            var a = N.find(function(e) {
                                return i.includes(e.token) || e.token === n
                            });
                            if (a) throw RangeError("The format string mustn't contain `".concat(a.fullToken, "` and `").concat(t, "` at the same time"))
                        } else if ("*" === r.incompatibleTokens && N.length > 0) throw RangeError("The format string mustn't contain `".concat(t, "` and any other token at the same time"));
                        N.push({
                            token: n,
                            fullToken: t
                        });
                        var o = r.run(w, t, D.match, A);
                        if (!o) return {
                            v: new Date(NaN)
                        };
                        k.push(o.setter), w = o.rest
                    } else {
                        if (n.match(x)) throw RangeError("Format string contains an unescaped latin alphabet character `" + n + "`");
                        if ("''" === t ? t = "'" : "'" === n && (t = function(e) {
                                return e.match(y)[1].replace(E, "'")
                            }(t)), 0 !== w.indexOf(t)) return {
                            v: new Date(NaN)
                        };
                        w = w.slice(t.length)
                    }
                }();
                if ("object" === m(ee)) return ee.v
            }
        } catch (e) {
            J.e(e)
        } finally {
            J.f()
        }
        if (w.length > 0 && S.test(w)) return new Date(NaN);
        var et = k.map(function(e) {
                return e.priority
            }).sort(function(e, t) {
                return t - e
            }).filter(function(e, t, n) {
                return n.indexOf(e) === t
            }).map(function(e) {
                return k.filter(function(t) {
                    return t.priority === e
                }).sort(function(e, t) {
                    return t.subPriority - e.subPriority
                })
            }).map(function(e) {
                return e[0]
            }),
            en = (0, a.default)(n);
        if (isNaN(en.getTime())) return new Date(NaN);
        var er = (0, i.default)(en, (0, u.default)(en)),
            ei = {},
            ea, eo = g(et);
        try {
            for (eo.s(); !(ea = eo.n()).done;) {
                var es = ea.value;
                if (!es.validate(er, A)) return new Date(NaN);
                var eu = es.set(er, ei, A);
                Array.isArray(eu) ? (er = eu[0], (0, o.default)(ei, eu[1])) : er = eu
            }
        } catch (e) {
            eo.e(e)
        } finally {
            eo.f()
        }
        return er
    }
}