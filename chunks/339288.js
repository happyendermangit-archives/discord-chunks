function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DayParser: function() {
            return d
        }
    });
    var r = n("717029"),
        i = n("395913");

    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function u(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var d = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && s(e, t)
        }(h, e);
        var t, n, r, d, f, p = (t = h, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r = c(t);
            if (n) {
                var i = c(this).constructor;
                e = Reflect.construct(r, arguments, i)
            } else e = r.apply(this, arguments);
            return function(e, t) {
                return t && ("object" === a(t) || "function" == typeof t) ? t : u(e)
            }(this, e)
        });

        function h() {
            var e;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, h);
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return l(u(e = p.call.apply(p, [this].concat(n))), "priority", 90), l(u(e), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), e
        }
        return r = h, d = [{
            key: "parse",
            value: function(e, t, n) {
                switch (t) {
                    case "E":
                    case "EE":
                    case "EEE":
                        return n.day(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "short",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEEE":
                        return n.day(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEEEE":
                        return n.day(e, {
                            width: "short",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "narrow",
                            context: "formatting"
                        });
                    default:
                        return n.day(e, {
                            width: "wide",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "short",
                            context: "formatting"
                        }) || n.day(e, {
                            width: "narrow",
                            context: "formatting"
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
                return (e = (0, i.default)(e, n, r)).setUTCHours(0, 0, 0, 0), e
            }
        }], o(r.prototype, d), f && o(r, f), h
    }(r.Parser)
}