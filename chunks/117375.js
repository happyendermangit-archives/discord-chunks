function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StandAloneLocalDayParser: function() {
            return f
        }
    });
    var r = n("717029"),
        i = n("846042"),
        a = n("395913");

    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t) {
        return (u = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var f = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && u(e, t)
        }(m, e);
        var t, n, r, f, p, h = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r = l(t);
            if (n) {
                var i = l(this).constructor;
                e = Reflect.construct(r, arguments, i)
            } else e = r.apply(this, arguments);
            return function(e, t) {
                return t && ("object" === o(t) || "function" == typeof t) ? t : c(e)
            }(this, e)
        });

        function m() {
            var e;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m);
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return d(c(e = h.call.apply(h, [this].concat(n))), "priority", 90), d(c(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), e
        }
        return r = m, f = [{
            key: "parse",
            value: function(e, t, n, r) {
                var a = function(e) {
                    var t = 7 * Math.floor((e - 1) / 7);
                    return (e + r.weekStartsOn + 6) % 7 + t
                };
                switch (t) {
                    case "c":
                    case "cc":
                        return (0, i.mapValue)((0, i.parseNDigits)(t.length, e), a);
                    case "co":
                        return (0, i.mapValue)(n.ordinalNumber(e, {
                            unit: "day"
                        }), a);
                    case "ccc":
                        return n.day(e, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || n.day(e, {
                            width: "short",
                            context: "standalone"
                        }) || n.day(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "ccccc":
                        return n.day(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "cccccc":
                        return n.day(e, {
                            width: "short",
                            context: "standalone"
                        }) || n.day(e, {
                            width: "narrow",
                            context: "standalone"
                        });
                    default:
                        return n.day(e, {
                            width: "wide",
                            context: "standalone"
                        }) || n.day(e, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || n.day(e, {
                            width: "short",
                            context: "standalone"
                        }) || n.day(e, {
                            width: "narrow",
                            context: "standalone"
                        })
                }
            }
        }, {
            key: "validate",
            value: function(e, t) {
                return t >= 0 && t <= 6
            }
        }, {
            key: "set",
            value: function(e, t, n, r) {
                return (e = (0, a.default)(e, n, r)).setUTCHours(0, 0, 0, 0), e
            }
        }], s(r.prototype, f), p && s(r, p), m
    }(r.Parser)
}