function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPriceFromServer: function() {
            return _
        },
        isNoneSubscription: function() {
            return E
        }
    });
    var r = n("864842"),
        o = n("281767"),
        i = n("868615");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
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
            }), t && f(e, t)
        }(m, e);
        var t, n, r, d, E, p = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = c(t);
            if (n) {
                var a = c(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : u(e)
        });

        function m(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), l(u(t = p.call(this)), "id", void 0), l(u(t), "name", void 0), l(u(t), "interval", void 0), l(u(t), "intervalCount", void 0), l(u(t), "taxInclusive", void 0), l(u(t), "skuId", void 0), l(u(t), "currency", void 0), l(u(t), "price", void 0), l(u(t), "prices", void 0), l(u(t), "premiumUserPrice", void 0), l(u(t), "fallbackPrice", void 0), l(u(t), "fallbackCurrency", void 0), l(u(t), "fallbackPremiumUserPrice", void 0), t.id = e.id, t.name = e.name, t.interval = e.interval, t.intervalCount = e.intervalCount, t.taxInclusive = e.taxInclusive, t.skuId = e.skuId, t.currency = e.currency, t.price = e.price, t.premiumUserPrice = e.premiumUserPrice, t.prices = e.prices, e.fallbackPrice && (t.fallbackPrice = e.fallbackPrice, t.fallbackCurrency = e.fallbackCurrency, t.fallbackPremiumUserPrice = e.fallbackPremiumUserPrice), t
        }
        return r = m, d = [{
            key: "premiumSubscriptionType",
            get: function() {
                switch (this.skuId) {
                    case i.PremiumSubscriptionSKUs.LEGACY:
                    case i.PremiumSubscriptionSKUs.TIER_2:
                        return i.PremiumTypes.TIER_2;
                    case i.PremiumSubscriptionSKUs.TIER_1:
                        return i.PremiumTypes.TIER_1;
                    case i.PremiumSubscriptionSKUs.TIER_0:
                        return i.PremiumTypes.TIER_0;
                    default:
                        return null
                }
            }
        }, {
            key: "isGiftableCurrency",
            get: function() {
                return o.GIFTABLE_CURRENCIES.has(this.currency)
            }
        }, {
            key: "giftPrice",
            get: function() {
                if (this.isGiftableCurrency) return this.price;
                if ("number" == typeof this.fallbackPrice) return this.fallbackPrice;
                throw Error("Missing fallback price for non-giftable currency")
            }
        }, {
            key: "giftCurrency",
            get: function() {
                if (this.isGiftableCurrency) return this.currency;
                if ("string" == typeof this.fallbackCurrency) return this.fallbackCurrency;
                throw Error("Missing fallback currency for non-giftable currency")
            }
        }, {
            key: "giftPremiumUserPrice",
            get: function() {
                return this.isGiftableCurrency ? this.premiumUserPrice : this.fallbackPremiumUserPrice
            }
        }, {
            key: "getPrice",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return e ? this.giftPrice : this.price
            }
        }, {
            key: "getCurrency",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return e ? this.giftCurrency : this.currency
            }
        }, {
            key: "getPremiumUserPrice",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return e ? this.giftPremiumUserPrice : this.premiumUserPrice
            }
        }], E = [{
            key: "createFromServer",
            value: function(e) {
                var t = {};
                null != e.prices && (t = Object.keys(e.prices).reduce(function(t, n) {
                    if (null == e.prices) return t;
                    var r = e.prices[n];
                    return t[n] = {
                        countryPrices: {
                            countryCode: r.country_prices.country_code,
                            prices: r.country_prices.prices.map(function(t) {
                                return _(t, e.tax_inclusive)
                            })
                        },
                        paymentSourcePrices: Object.entries(r.payment_source_prices).reduce(function(t, n) {
                            var r, o, i = (o = 2, function(e) {
                                    if (Array.isArray(e)) return e
                                }(r = n) || function(e, t) {
                                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != o) {
                                        var i = [],
                                            a = !0,
                                            u = !1;
                                        try {
                                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                        } catch (e) {
                                            u = !0, r = e
                                        } finally {
                                            try {
                                                !a && null != o.return && o.return()
                                            } finally {
                                                if (u) throw r
                                            }
                                        }
                                        return i
                                    }
                                }(r, o) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return a(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                                    }
                                }(r, o) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()),
                                u = i[0],
                                s = i[1];
                            return t[u] = s.map(function(t) {
                                return _(t, e.tax_inclusive)
                            }), t
                        }, {})
                    }, t
                }, {}));
                var n = {
                    id: e.id,
                    name: e.name,
                    interval: e.interval,
                    intervalCount: e.interval_count,
                    taxInclusive: e.tax_inclusive,
                    skuId: e.sku_id,
                    currency: e.currency,
                    price: e.price,
                    prices: t,
                    premiumUserPrice: e.discount_price
                };
                return null != e.fallback_price && 0 !== e.fallback_price && Object.assign(n, {
                    fallbackPrice: e.fallback_price,
                    fallbackCurrency: e.fallback_currency,
                    fallbackPremiumUserPrice: e.fallback_discount_price
                }), new m(n)
            }
        }], d && s(r.prototype, d), E && s(r, E), m
    }(r.default);

    function _(e, t) {
        return {
            amount: e.amount,
            currency: e.currency,
            tax: 0,
            taxInclusive: t
        }
    }

    function E(e) {
        return [i.SubscriptionPlans.NONE_MONTH, i.SubscriptionPlans.NONE_3_MONTH, i.SubscriptionPlans.NONE_6_MONTH, i.SubscriptionPlans.NONE_YEAR].includes(e)
    }
    t.default = d
}