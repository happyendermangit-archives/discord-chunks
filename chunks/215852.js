function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n("898511"),
        l = n("629815");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function E(e) {
        return function(e) {
            if (Array.isArray(e)) return c(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var p = new Map,
        m = p,
        y = !1,
        I = void 0,
        h = void 0,
        O = void 0,
        T = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
            }(u, e);
            var t, n, r, o, i, a = (t = u, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = d(t);
                if (n) {
                    var a = d(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function u() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), a.apply(this, arguments)
            }
            return r = u, o = [{
                key: "isFetching",
                get: function() {
                    return y
                }
            }, {
                key: "isClaiming",
                get: function() {
                    return I
                }
            }, {
                key: "purchases",
                get: function() {
                    return m
                }
            }, {
                key: "fetchError",
                get: function() {
                    return h
                }
            }, {
                key: "claimError",
                get: function() {
                    return O
                }
            }, {
                key: "getPurchase",
                value: function(e) {
                    return null != e ? m.get(e) : void 0
                }
            }], f(r.prototype, o), i && f(r, i), u
        }(s.default.Store);
    i = "CollectiblesPurchaseStore", (o = "displayName") in(r = T) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new T(l.default, {
        COLLECTIBLES_PURCHASES_FETCH: function(e) {
            y = !0, h = void 0
        },
        COLLECTIBLES_PURCHASES_FETCH_SUCCESS: function(e) {
            0 === e.purchases.length ? m = p : !(0, u.isEqual)(E(m.values()), e.purchases) && (m = new Map(e.purchases.map(function(e) {
                return [e.skuId, e]
            }))), y = !1, h = void 0
        },
        COLLECTIBLES_PURCHASES_FETCH_FAILURE: function(e) {
            var t = e.error;
            m = p, y = !1, h = t
        },
        COLLECTIBLES_CLAIM: function(e) {
            I = e.skuId, O = void 0
        },
        COLLECTIBLES_CLAIM_SUCCESS: function(e) {
            null == e.purchases || 0 === e.purchases.length ? m = p : !(0, u.isEqual)(E(m.values()), e.purchases) && (m = new Map(e.purchases.map(function(e) {
                return [e.skuId, e]
            }))), I = void 0, O = void 0
        },
        COLLECTIBLES_CLAIM_FAILURE: function(e) {
            var t = e.error;
            I = e.skuId, O = t
        },
        LOGOUT: function(e) {
            m = p, y = !1, I = void 0, h = void 0, O = void 0
        }
    })
}