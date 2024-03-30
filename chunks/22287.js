function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        add: function() {
            return M
        },
        asUintN: function() {
            return d
        },
        combine: function() {
            return s
        },
        deserialize: function() {
            return c
        },
        equals: function() {
            return l
        },
        filter: function() {
            return L
        },
        getFlag: function() {
            return G
        },
        has: function() {
            return P
        },
        hasAny: function() {
            return u
        },
        invert: function() {
            return C
        },
        isBigFlag: function() {
            return N
        },
        remove: function() {
            return U
        }
    });
    var o = e("654861"),
        t = e.n(o);

    function I(_, E) {
        for (var e = 0; e < E.length; e++) {
            var o = E[e];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(_, o.key, o)
        }
    }

    function a(_, E, e) {
        return E in _ ? Object.defineProperty(_, E, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : _[E] = e, _
    }

    function r(_, E) {
        return null != E && "undefined" != typeof Symbol && E[Symbol.hasInstance] ? !!E[Symbol.hasInstance](_) : _ instanceof E
    }
    var R = 4;

    function A(_) {
        for (var E = [], e = 0; e < _.length; e++) {
            for (var o = Number(_[e]), t = 0; o || t < E.length; t++) o += 10 * (E[t] || 0), E[t] = o % 16, o = (o - E[t]) / 16
        }
        return E
    }
    var T = function() {
            var _, E, e;

            function o(_, E) {
                ! function(_, E) {
                    if (!(_ instanceof E)) throw TypeError("Cannot call a class as a function")
                }(this, o), a(this, "parts", void 0), a(this, "str", void 0), this.parts = _, this.str = E
            }
            return _ = o, E = [{
                key: "and",
                value: function(_) {
                    var E = _.parts;
                    return new o(this.parts.map(function(_, e) {
                        return _ & E[e]
                    }))
                }
            }, {
                key: "or",
                value: function(_) {
                    var E = _.parts;
                    return new o(this.parts.map(function(_, e) {
                        return _ | E[e]
                    }))
                }
            }, {
                key: "xor",
                value: function(_) {
                    var E = _.parts;
                    return new o(this.parts.map(function(_, e) {
                        return _ ^ E[e]
                    }))
                }
            }, {
                key: "not",
                value: function() {
                    return new o(this.parts.map(function(_) {
                        return ~_
                    }))
                }
            }, {
                key: "equals",
                value: function(_) {
                    var E = _.parts;
                    return this.parts.every(function(_, e) {
                        return _ === E[e]
                    })
                }
            }, {
                key: "toString",
                value: function() {
                    if (null != this.str) return this.str;
                    var _ = Array(16);
                    return this.parts.forEach(function(E, e) {
                        for (var o = A(E.toString()), t = 0; t < 4; t++) _[t + 4 * e] = o[3 - t] || 0
                    }), this.str = t().fromArray(_, 16).toString()
                }
            }, {
                key: "toJSON",
                value: function() {
                    return this.toString()
                }
            }], e = [{
                key: "fromString",
                value: function(_) {
                    return new o(function(_) {
                        for (var E = A(_), e = Array(R), o = 0; o < R; o++) e[R - 1 - o] = function(_, E, e) {
                            for (var o = 0, t = 0; t < e; t++) {
                                var I = _[E + t];
                                if (void 0 === I) break;
                                o += I * Math.pow(16, t)
                            }
                            return o
                        }(E, o * R, R);
                        return e
                    }(_), _)
                }
            }, {
                key: "fromBit",
                value: function(_) {
                    for (var E = Array(R), e = Math.floor(_ / 16), t = 0; t < R; t++) E[R - 1 - t] = t === e ? 1 << _ - 16 * e : 0;
                    return new o(E)
                }
            }, {
                key: "asUintN",
                value: function(_, E) {
                    for (var e = E.parts, o = 0, t = 0; t < _ && t < 16 * e.length;) {
                        var I = Math.min(_ - t, 16),
                            a = (1 << I) - 1,
                            r = e.length - Math.floor(t / 16) - 1;
                        o |= (e[r] & a) << t, t += I
                    }
                    return o
                }
            }], E && I(_.prototype, E), e && I(_, e), o
        }(),
        n = function() {
            try {
                return !0
            } catch (_) {
                return !1
            }
        }();
    n && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
        return this.toString()
    });
    var N = n ? function(_) {
            var E;
            return (void 0 === _ ? "undefined" : (E = _) && "undefined" != typeof Symbol && E.constructor === Symbol ? "symbol" : typeof E) == "bigint"
        } : function(_) {
            return r(_, T)
        },
        i = {},
        c = n ? function(_) {
            return BigInt(_)
        } : function(_) {
            return r(_, T) ? _ : ("number" == typeof _ && (_ = _.toString()), null != i[_]) ? i[_] : (i[_] = T.fromString(_), i[_])
        },
        O = c(0),
        L = n ? function() {
            var _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
                E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
            return _ & E
        } : function() {
            var _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
                E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
            return _.and(E)
        },
        D = n ? function() {
            var _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
                E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
            return _ | E
        } : function() {
            var _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
                E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
            return _.or(E)
        },
        S = n ? function() {
            var _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
                E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
            return _ ^ E
        } : function() {
            var _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
                E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
            return _.xor(E)
        },
        C = n ? function() {
            var _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O;
            return ~_
        } : function() {
            var _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O;
            return _.not()
        },
        l = n ? function(_, E) {
            return _ === E
        } : function(_, E) {
            return null == _ || null == E ? _ == E : _.equals(E)
        };

    function s() {
        for (var _ = arguments.length, E = Array(_), e = 0; e < _; e++) E[e] = arguments[e];
        for (var o = E[0], t = 1; t < E.length; t++) o = D(o, E[t]);
        return o
    }

    function P(_, E) {
        return l(L(_, E), E)
    }

    function u(_, E) {
        return !l(L(_, E), O)
    }

    function M(_, E) {
        return E === O ? _ : D(_, E)
    }

    function U(_, E) {
        return E === O ? _ : S(_, L(_, E))
    }
    var G = n ? function(_) {
            return BigInt(1) << BigInt(_)
        } : function(_) {
            return T.fromBit(_)
        },
        d = n ? function(_, E) {
            return Number(BigInt.asUintN(_, E))
        } : function(_, E) {
            return T.asUintN(_, E)
        }
}