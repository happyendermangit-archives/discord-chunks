function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("208454"),
        u = n("830721"),
        s = n("428920"),
        l = n("868615");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
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
    var E = {
            userOffersLastFetchedAtDate: void 0,
            userTrialOffers: {},
            userDiscountOffers: {},
            userDiscounts: void 0
        },
        p = E;

    function m() {
        p.userTrialOffers = {}, p.userDiscountOffers = {}, p.userOffersLastFetchedAtDate = void 0
    }
    var y = function() {
        return !0
    };

    function I() {
        return null != s.default.getPremiumTypeSubscription() && (p.userTrialOffers = {}, p.userDiscountOffers = {}, !0)
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
            }), t && _(e, t)
        }(h, e);
        var t, n, r, o, i, f = (t = h, n = function() {
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

        function h() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, h), f.apply(this, arguments)
        }
        return r = h, o = [{
            key: "initialize",
            value: function(e) {
                p = null != e ? e : E, this.waitFor(a.default), this.syncWith([a.default], y), this.syncWith([s.default], I)
            }
        }, {
            key: "getUserTrialOffer",
            value: function(e) {
                if (null !== e) return p.userTrialOffers[e]
            }
        }, {
            key: "getUserDiscountOffer",
            value: function(e) {
                if (null !== e) return p.userDiscountOffers[e]
            }
        }, {
            key: "getAnyOfUserTrialOfferId",
            value: function(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = e[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var a = o.value;
                        if (null != p.userTrialOffers[a]) return a
                    }
                } catch (e) {
                    n = !0, r = e
                } finally {
                    try {
                        !t && null != i.return && i.return()
                    } finally {
                        if (n) throw r
                    }
                }
                return null
            }
        }, {
            key: "hasFetchedOffer",
            value: function() {
                return null != p.userOffersLastFetchedAtDate
            }
        }, {
            key: "shouldFetchOffer",
            value: function() {
                var e = p.userOffersLastFetchedAtDate;
                return null == e || Date.now() - 1728e5 > e
            }
        }, {
            key: "getAlmostExpiringTrialOffers",
            value: function(e) {
                var t = Object.values(l.SubscriptionTrials).map(function(e) {
                        return e.id
                    }),
                    n = a.default.getCurrentUser();
                return (0, u.isPremium)(n) ? [] : Object.values(p.userTrialOffers).filter(function(n) {
                    return t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + l.USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD
                })
            }
        }, {
            key: "getAcknowledgedOffers",
            value: function(e) {
                var t = a.default.getCurrentUser();
                return (0, u.isPremium)(t) ? [] : Object.values(p.userTrialOffers).filter(function(t) {
                    return e.includes(t.trial_id) && null != t.expires_at
                })
            }
        }, {
            key: "getUnacknowledgedDiscountOffers",
            value: function() {
                var e, t = a.default.getCurrentUser();
                return (0, u.isPremium)(t) ? [] : Object.values(null !== (e = p.userDiscountOffers) && void 0 !== e ? e : {}).filter(function(e) {
                    return null == e.expires_at
                })
            }
        }, {
            key: "getUnacknowledgedOffers",
            value: function(e) {
                var t = a.default.getCurrentUser();
                return (0, u.isPremium)(t) ? [] : Object.values(p.userTrialOffers).filter(function(t) {
                    return e.includes(t.trial_id) && null == t.expires_at
                })
            }
        }, {
            key: "hasAnyUnexpiredOffer",
            value: function() {
                return Object.values(p.userTrialOffers).some(function(e) {
                    return null == e.expires_at || Date.parse(e.expires_at) > Date.now()
                })
            }
        }, {
            key: "getState",
            value: function() {
                return p
            }
        }, {
            key: "forceReset",
            value: function() {
                m()
            }
        }], c(r.prototype, o), i && c(r, i), h
    }(o.default.PersistedStore);
    f(h, "displayName", "UserOfferStore"), f(h, "persistKey", "UserOfferStore"), f(h, "migrations", [function(e) {
        var t, n, r = null == e ? void 0 : e.userDiscounts;
        if (null != r) {
            ;
            return t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        f(e, t, n[t])
                    })
                }
                return e
            }({}, e), n = (n = {
                userDiscountOffers: r
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t
        }
    }]), t.default = new h(i.default, {
        BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
            var t = e.userTrialOffer;
            null != t ? p.userTrialOffers[t.trial_id] = t : m(), p.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
            var t = e.userTrialOffer;
            null != t ? p.userTrialOffers[t.trial_id] = t : p.userTrialOffers = {}, p.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
            var t = e.userTrialOffer,
                n = e.userDiscount,
                r = e.userDiscountOffer;
            null == t && null == n && null == r && m(), null != t ? (p.userTrialOffers[t.trial_id] = t, p.userDiscountOffers = {}) : null != n ? (p.userDiscountOffers[n.discount_id] = n, p.userTrialOffers = {}) : null != r && (p.userDiscountOffers[r.discount_id] = r, p.userTrialOffers = {}), p.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
            var t = e.userTrialOffer,
                n = e.userDiscount,
                r = e.userDiscountOffer;
            null != t ? p.userTrialOffers[t.trial_id] = t : p.userTrialOffers = {}, null != n ? p.userDiscountOffers[n.discount_id] = n : null != r ? p.userDiscountOffers[r.discount_id] = r : p.userDiscountOffers = {}, p.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_FETCH_FAIL: function() {
            m(), p.userOffersLastFetchedAtDate = Date.now()
        },
        LOGOUT: m
    })
}