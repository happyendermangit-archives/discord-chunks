function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LocalWeekYearParser: function() {
            return p
        }
    }), n("222007"), n("70102"), n("426094"), n("854508");
    var r = n("232985"),
        a = n("238418"),
        o = n("834779"),
        i = n("63173");

    function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function u(e, t) {
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

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var p = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t)
        }(y, e);
        var t, n, r, p, h, m = (t = y, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r = d(t);
            if (n) {
                var a = d(this).constructor;
                e = Reflect.construct(r, arguments, a)
            } else e = r.apply(this, arguments);
            return function(e, t) {
                return t && ("object" === s(t) || "function" == typeof t) ? t : c(e)
            }(this, e)
        });

        function y() {
            var e;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, y);
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return f(c(e = m.call.apply(m, [this].concat(n))), "priority", 130), f(c(e), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), e
        }
        return r = y, p = [{
            key: "parse",
            value: function(e, t, n) {
                var r = function(e) {
                    return {
                        year: e,
                        isTwoDigitYear: "YY" === t
                    }
                };
                switch (t) {
                    case "Y":
                        return (0, a.mapValue)((0, a.parseNDigits)(4, e), r);
                    case "Yo":
                        return (0, a.mapValue)(n.ordinalNumber(e, {
                            unit: "year"
                        }), r);
                    default:
                        return (0, a.mapValue)((0, a.parseNDigits)(t.length, e), r)
                }
            }
        }, {
            key: "validate",
            value: function(e, t) {
                return t.isTwoDigitYear || t.year > 0
            }
        }, {
            key: "set",
            value: function(e, t, n, r) {
                var s = (0, o.default)(e, r);
                if (n.isTwoDigitYear) {
                    var u = (0, a.normalizeTwoDigitYear)(n.year, s);
                    return e.setUTCFullYear(u, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), (0, i.default)(e, r)
                }
                var l = "era" in t && 1 !== t.era ? 1 - n.year : n.year;
                return e.setUTCFullYear(l, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), (0, i.default)(e, r)
            }
        }], u(r.prototype, p), h && u(r, h), y
    }(r.Parser)
}