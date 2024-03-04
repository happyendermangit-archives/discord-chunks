function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ISOWeekYearParser: function() {
            return f
        }
    }), n("222007"), n("70102"), n("426094"), n("854508");
    var r = n("232985"),
        a = n("238418"),
        o = n("130002");

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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

    function l(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
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
        }(h, e);
        var t, n, r, f, p, m = (t = h, n = function() {
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
                var a = c(this).constructor;
                e = Reflect.construct(r, arguments, a)
            } else e = r.apply(this, arguments);
            return function(e, t) {
                return t && ("object" === i(t) || "function" == typeof t) ? t : l(e)
            }(this, e)
        });

        function h() {
            var e;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, h);
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return d(l(e = m.call.apply(m, [this].concat(n))), "priority", 130), d(l(e), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), e
        }
        return r = h, f = [{
            key: "parse",
            value: function(e, t) {
                return "R" === t ? (0, a.parseNDigitsSigned)(4, e) : (0, a.parseNDigitsSigned)(t.length, e)
            }
        }, {
            key: "set",
            value: function(e, t, n) {
                var r = new Date(0);
                return r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0), (0, o.default)(r)
            }
        }], s(r.prototype, f), p && s(r, p), h
    }(r.Parser)
}