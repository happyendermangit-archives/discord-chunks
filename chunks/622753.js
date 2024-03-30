function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("590515"),
        c = n("943959"),
        f = n("523018"),
        d = n("281767"),
        _ = n("868615");

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e, t) {
        return (y = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function I(e) {
        return function(e) {
            if (Array.isArray(e)) return E(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return E(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var h = {},
        O = {},
        T = new Set,
        S = new Set,
        v = {},
        g = {};

    function A(e) {
        var t = e.skuId;
        h[e.id] = e;
        var n = e.prices[d.PriceSetAssignmentPurchaseTypes.DEFAULT];
        if (null != n) {
            var r, o = new Set(Object.keys(n.paymentSourcePrices));
            v[e.id] = o;
            var i = Array.from(null !== (r = g[e.skuId]) && void 0 !== r ? r : new Set);
            g[e.skuId] = new Set(I(i).concat(I(Array.from(o))))
        }
        var a = O[t];
        null != a ? a.add(e.id) : O[t] = new Set([e.id])
    }

    function b() {
        [(0, _.SubscriptionPlanInfo)[_.SubscriptionPlans.NONE_MONTH], (0, _.SubscriptionPlanInfo)[_.SubscriptionPlans.NONE_YEAR], (0, _.SubscriptionPlanInfo)[_.SubscriptionPlans.NONE_3_MONTH], (0, _.SubscriptionPlanInfo)[_.SubscriptionPlans.NONE_6_MONTH]].forEach(function(e) {
            return A(l.default.createFromServer({
                id: e.id,
                name: e.name,
                interval: e.interval,
                interval_count: e.intervalCount,
                tax_inclusive: !0,
                sku_id: e.skuId,
                currency: d.CurrencyCodes.USD,
                price: 0,
                price_tier: 0,
                discount_price: null
            }))
        })
    }

    function N(e) {
        A(l.default.createFromServer(e))
    }
    b();

    function R() {
        (0, c.clearObject)(h), (0, c.clearObject)(O), T.clear(), S.clear(), (0, c.clearObject)(v), (0, c.clearObject)(g), b()
    }
    var C = [_.SubscriptionIntervalTypes.DAY, _.SubscriptionIntervalTypes.MONTH, _.SubscriptionIntervalTypes.YEAR],
        P = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && y(e, t)
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
                var e, r, o, i = m(t);
                if (n) {
                    var a = m(this).constructor;
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
                key: "getPlanIdsForSkus",
                value: function(e) {
                    var t = [],
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u, s = i.value,
                                l = Array.from(null !== (u = O[s]) && void 0 !== u ? u : new Set);
                            l.sort(function(e, t) {
                                var n = h[e],
                                    r = h[t];
                                return C.indexOf(n.interval) - C.indexOf(r.interval) || n.intervalCount - r.intervalCount
                            }), t.push.apply(t, I(l))
                        }
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !n && null != a.return && a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return t
                }
            }, {
                key: "getFetchedSKUIDs",
                value: function() {
                    return f.default.keys(O)
                }
            }, {
                key: "getForSKU",
                value: function(e) {
                    var t;
                    return Array.from(null !== (t = O[e]) && void 0 !== t ? t : []).map(function(e) {
                        return h[e]
                    })
                }
            }, {
                key: "getForSkuAndInterval",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    return this.getForSKU(e).find(function(e) {
                        return e.interval === t && e.intervalCount === n
                    })
                }
            }, {
                key: "get",
                value: function(e) {
                    return h[e]
                }
            }, {
                key: "isFetchingForSKU",
                value: function(e) {
                    return T.has(e)
                }
            }, {
                key: "isFetchingForSKUs",
                value: function(e) {
                    var t = this;
                    return e.some(function(e) {
                        return t.isFetchingForSKU(e)
                    })
                }
            }, {
                key: "isLoadedForSKU",
                value: function(e) {
                    return !!S.has(e) || !T.has(e) && null != O[e]
                }
            }, {
                key: "isLoadedForSKUs",
                value: function(e) {
                    var t = this;
                    return e.every(function(e) {
                        return t.isLoadedForSKU(e)
                    })
                }
            }, {
                key: "isFetchingForPremiumSKUs",
                value: function() {
                    var e = this;
                    return _.ACTIVE_PREMIUM_SKUS.map(function(t) {
                        return e.isFetchingForSKU(t)
                    }).includes(!0)
                }
            }, {
                key: "isLoadedForPremiumSKUs",
                value: function() {
                    var e = this;
                    return _.ACTIVE_PREMIUM_SKUS.every(function(t) {
                        return e.isLoadedForSKU(t)
                    })
                }
            }, {
                key: "ignoreSKUFetch",
                value: function(e) {
                    S.add(e)
                }
            }, {
                key: "getPaymentSourcesForPlanId",
                value: function(e) {
                    return v.hasOwnProperty(e) ? v[e] : null
                }
            }, {
                key: "getPaymentSourceIds",
                value: function() {
                    var e = new Set;
                    return Object.values(v).forEach(function(t) {
                        return t.forEach(function(t) {
                            return e.add(t)
                        })
                    }), e
                }
            }, {
                key: "hasPaymentSourceForSKUId",
                value: function(e, t) {
                    return _.PremiumSubscriptionSKUs.NONE === t || null != g[t] && g[t].has(e)
                }
            }, {
                key: "hasPaymentSourceForSKUIds",
                value: function(e, t) {
                    var n = this;
                    return t.every(function(t) {
                        return n.hasPaymentSourceForSKUId(e, t)
                    })
                }
            }], p(r.prototype, o), i && p(r, i), u
        }(u.default.Store);
    i = "SubscriptionPlanStore", (o = "displayName") in(r = P) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new P(s.default, {
        SUBSCRIPTION_PLANS_FETCH: function(e) {
            var t = e.skuId;
            T.add(t)
        },
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: function(e) {
            var t = e.skuId,
                n = e.subscriptionPlans;
            O[t] = new Set, g[t] = new Set, n.forEach(N), T.delete(t), S.delete(t)
        },
        SUBSCRIPTION_PLANS_FETCH_FAILURE: function(e) {
            var t = e.skuId;
            T.delete(t), S.delete(t)
        },
        SUBSCRIPTION_PLANS_RESET: R,
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            var t = e.giftCode;
            null != t.subscription_plan && N(t.subscription_plan)
        },
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function(e) {
            var t = e.entitlements,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    null != u.subscription_plan && N(u.subscription_plan)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
        },
        LOGOUT: R
    })
}