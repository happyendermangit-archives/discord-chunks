function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ISOWeekParser: function() {
            return h
        }
    });
    var r = n("717029"),
        i = n("25487"),
        a = n("846042"),
        o = n("823498"),
        s = n("964415");

    function u(e) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function d(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var h = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t)
        }(_, e);
        var t, n, r, h, m, g = (t = _, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r = f(t);
            if (n) {
                var i = f(this).constructor;
                e = Reflect.construct(r, arguments, i)
            } else e = r.apply(this, arguments);
            return function(e, t) {
                return t && ("object" === u(t) || "function" == typeof t) ? t : d(e)
            }(this, e)
        });

        function _() {
            var e;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, _);
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return p(d(e = g.call.apply(g, [this].concat(n))), "priority", 100), p(d(e), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), e
        }
        return r = _, h = [{
            key: "parse",
            value: function(e, t, n) {
                switch (t) {
                    case "I":
                        return (0, a.parseNumericPattern)(i.numericPatterns.week, e);
                    case "Io":
                        return n.ordinalNumber(e, {
                            unit: "week"
                        });
                    default:
                        return (0, a.parseNDigits)(t.length, e)
                }
            }
        }, {
            key: "validate",
            value: function(e, t) {
                return t >= 1 && t <= 53
            }
        }, {
            key: "set",
            value: function(e, t, n) {
                return (0, s.default)((0, o.default)(e, n))
            }
        }], c(r.prototype, h), m && c(r, m), _
    }(r.Parser)
}