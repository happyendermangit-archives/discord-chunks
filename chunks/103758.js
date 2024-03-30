function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s = n("898511"),
        l = n("629815");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = [],
        E = _,
        p = null,
        m = function(e) {
            E = _, p = null
        },
        y = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
            }(s, e);
            var t, n, r, o, i, u = (t = s, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = f(t);
                if (n) {
                    var a = f(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function s() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), u.apply(this, arguments)
            }
            return r = s, o = [{
                key: "analyticsLocations",
                get: function() {
                    return E
                }
            }, {
                key: "analyticsSource",
                get: function() {
                    return p
                }
            }, {
                key: "initialProductSkuId",
                get: function() {
                    return a
                }
            }, {
                key: "getAnalytics",
                value: function() {
                    return {
                        analyticsLocations: E,
                        analyticsSource: p
                    }
                }
            }], c(r.prototype, o), i && c(r, i), s
        }(s.default.Store);
    i = "CollectiblesShopStore", (o = "displayName") in(r = y) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new y(l.default, {
        COLLECTIBLES_SHOP_OPEN: function(e) {
            var t, n;
            E = null !== (t = e.analyticsLocations) && void 0 !== t ? t : _, p = null !== (n = e.analyticsSource) && void 0 !== n ? n : null, a = e.initialProductSkuId
        },
        COLLECTIBLES_SHOP_CLOSE: m,
        COLLECTIBLES_PRODUCT_DETAILS_OPEN: function(e) {
            e.item.skuId === a && (a = void 0)
        },
        LOGOUT: m
    })
}