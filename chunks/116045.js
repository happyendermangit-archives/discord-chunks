function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var r = n("278074"),
        o = n("63202"),
        i = n("590515"),
        a = n("363890"),
        u = n("429313"),
        s = n("258823"),
        l = n("281767");

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e, t, n) {
        return (_ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = E(e)););
                return e
            }(e, t);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n || e) : o.value
            }
        })(e, t, n || e)
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(h, e);
        var t, n, u, m, y, I = (t = h, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = E(t);
            if (n) {
                var a = E(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : c(e)
        });

        function h(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, h), d(c(t = I.call(this, e)), "prices", void 0), d(c(t), "type", void 0), d(c(t), "premiumType", void 0), d(c(t), "items", void 0), d(c(t), "categorySkuId", void 0), t.summary = e.summary, t.type = e.type, t.premiumType = e.premiumType, t.items = e.items, t.categorySkuId = e.categorySkuId, t.prices = e.prices, t
        }
        return u = h, m = null, y = [{
            key: "fromServer",
            value: function(e) {
                var t, n, u, c = e.type,
                    f = e.premium_type,
                    p = e.category_sku_id,
                    m = e.prices,
                    y = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) {
                                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                            }
                        }
                        return o
                    }(e, ["type", "premium_type", "category_sku_id", "prices"]);
                return new h((n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            d(e, t, n[t])
                        })
                    }
                    return e
                }({}, _(E(h), "fromServer", this).call(this, y)), u = (u = {
                    type: c,
                    premiumType: f === l.PREMIUM_TYPE_NONE ? null : f,
                    categorySkuId: p,
                    prices: null == (t = m) ? {} : Object.keys(t).reduce(function(e, n) {
                        if (null == t) return e;
                        var r = t[n];
                        return e[n] = {
                            countryPrices: {
                                countryCode: r.country_prices.country_code,
                                prices: r.country_prices.prices.map(function(e) {
                                    return (0, i.getPriceFromServer)(e, !0)
                                })
                            },
                            paymentSourcePrices: {}
                        }, e
                    }, {}),
                    items: y.items.reduce(function(e, t) {
                        return (0, r.match)(t).with({
                            type: o.CollectiblesItemType.AVATAR_DECORATION
                        }, function(t) {
                            return e.push(a.default.fromServer(t)), e
                        }).with({
                            type: o.CollectiblesItemType.PROFILE_EFFECT
                        }, function(t) {
                            return e.push(s.default.fromServer(t)), e
                        }).otherwise(function() {
                            return e
                        })
                    }, [])
                }, u), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(u)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(u, e))
                }), n))
            }
        }], m && f(u.prototype, m), y && f(u, y), h
    }(u.default)
}