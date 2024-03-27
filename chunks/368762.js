function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EraParser: function() {
            return l
        }
    });
    var r = n("717029");

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t) {
        return (o = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var l = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && o(e, t)
        }(p, e);
        var t, n, r, l, d, f = (t = p, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r = u(t);
            if (n) {
                var a = u(this).constructor;
                e = Reflect.construct(r, arguments, a)
            } else e = r.apply(this, arguments);
            return function(e, t) {
                return t && ("object" === i(t) || "function" == typeof t) ? t : s(e)
            }(this, e)
        });

        function p() {
            var e;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, p);
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return c(s(e = f.call.apply(f, [this].concat(n))), "priority", 140), c(s(e), "incompatibleTokens", ["R", "u", "t", "T"]), e
        }
        return r = p, l = [{
            key: "parse",
            value: function(e, t, n) {
                switch (t) {
                    case "G":
                    case "GG":
                    case "GGG":
                        return n.era(e, {
                            width: "abbreviated"
                        }) || n.era(e, {
                            width: "narrow"
                        });
                    case "GGGGG":
                        return n.era(e, {
                            width: "narrow"
                        });
                    default:
                        return n.era(e, {
                            width: "wide"
                        }) || n.era(e, {
                            width: "abbreviated"
                        }) || n.era(e, {
                            width: "narrow"
                        })
                }
            }
        }, {
            key: "set",
            value: function(e, t, n) {
                return t.era = n, e.setUTCFullYear(n, 0, 1), e.setUTCHours(0, 0, 0, 0), e
            }
        }], a(r.prototype, l), d && a(r, d), p
    }(r.Parser)
}