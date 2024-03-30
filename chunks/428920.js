function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        authenticatedUserFilter: function() {
            return M
        }
    });
    var r, o = n("898511"),
        i = n("629815"),
        a = n("35523"),
        u = n("590515"),
        s = n("772578"),
        l = n("217014"),
        c = n("146703"),
        f = n("281767");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                E(e, t, n[t])
            })
        }
        return e
    }

    function y(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function h(e) {
        return function(e) {
            if (Array.isArray(e)) return d(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var O = null,
        T = null,
        S = null,
        v = null,
        g = null,
        A = !1,
        b = !1,
        N = null,
        R = !1,
        C = new a.default("SubscriptionStore");

    function P(e) {
        var t = e.activeSubscriptions,
            n = e.record,
            r = t.findIndex(function(e) {
                return e.id === n.id
            });
        if (-1 === r) return [n].concat(h(t));
        var o = h(t);
        return L(n) && n.status !== f.SubscriptionStatusTypes.ENDED ? o[r] = n : o.splice(r, 1), o
    }

    function D() {
        O = null, T = null, S = null, v = null, g = null, A = !1, b = !1, N = null, R = !1
    }

    function L(e) {
        return e.status !== f.SubscriptionStatusTypes.UNPAID
    }

    function M(e) {
        var t = l.default.getId();
        return e.userId === t
    }

    function U(e, t) {
        var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = n ? T : O;
        if (null == r) return null;
        for (var o in r) {
            var i = r[o];
            if (!M(i)) {
                if (!b) {
                    var a = l.default.getId();
                    C.log("user id mismatch between logged in user and SubscriptionStore user"), (0, c.captureBillingMessage)("user id mismatch between logged in user and SubscriptionStore user", {
                        extra: {
                            authUserId: a,
                            subscriptionId: i.id,
                            subscriptionUserId: i.userId
                        }
                    }), b = !0
                }
                break
            }
            if (i.type === e && (null == t || t(i))) return i
        }
        return null
    }
    var w = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && I(e, t)
        }(s, e);
        var t, n, r, o, i, a = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = p(t);
            if (n) {
                var a = p(this).constructor;
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
            }(this, s), a.apply(this, arguments)
        }
        return r = s, o = [{
            key: "hasFetchedSubscriptions",
            value: function() {
                return null != O
            }
        }, {
            key: "hasFetchedMostRecentPremiumTypeSubscription",
            value: function() {
                return A
            }
        }, {
            key: "hasFetchedPreviousPremiumTypeSubscription",
            value: function() {
                return R
            }
        }, {
            key: "getPremiumSubscription",
            value: function() {
                var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return U(f.SubscriptionTypes.PREMIUM, function(e) {
                    return !(0, u.isNoneSubscription)(e.planId)
                }, e)
            }
        }, {
            key: "getPremiumTypeSubscription",
            value: function() {
                var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return U(f.SubscriptionTypes.PREMIUM, void 0, e)
            }
        }, {
            key: "getSubscriptions",
            value: function() {
                var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return e ? T : O
            }
        }, {
            key: "getSubscriptionById",
            value: function(e) {
                var t;
                return null !== (t = null == O ? void 0 : O[e]) && void 0 !== t ? t : void 0
            }
        }, {
            key: "getActiveGuildSubscriptions",
            value: function() {
                return v
            }
        }, {
            key: "getActiveApplicationSubscriptions",
            value: function() {
                return g
            }
        }, {
            key: "getSubscriptionForPlanIds",
            value: function(e) {
                var t, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    r = new Set(e),
                    o = n ? T : O;
                return null == o ? null : null !== (t = Object.values(o).find(function(e) {
                    return e.items.some(function(e) {
                        return r.has(e.planId)
                    })
                })) && void 0 !== t ? t : null
            }
        }, {
            key: "getMostRecentPremiumTypeSubscription",
            value: function() {
                return S
            }
        }, {
            key: "getPreviousPremiumTypeSubscription",
            value: function() {
                return N
            }
        }], _(r.prototype, o), i && _(r, i), s
    }(o.default.Store);
    E(w, "displayName", "SubscriptionStore"), t.default = new w(i.default, {
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
            var t = e.subscriptions,
                n = {},
                r = {},
                o = [],
                i = [],
                a = l.default.getId();
            t.forEach(function(e) {
                if (e.user_id !== a && !b) {
                    C.log("[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, c.captureBillingMessage)("[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
                        extra: {
                            authUserId: a,
                            subscriptionId: e.id,
                            subscriptionUserId: e.user_id
                        }
                    }), b = !0;
                    return
                }
                var t = s.SubscriptionRecord.createFromServer(e);
                n[t.id] = t, L(t) && (r[t.id] = t, t.type === f.SubscriptionTypes.GUILD && t.status !== f.SubscriptionStatusTypes.ENDED && o.push(t), t.type === f.SubscriptionTypes.APPLICATION && t.status !== f.SubscriptionStatusTypes.ENDED && i.push(t))
            }), O = n, T = r, v = o, g = i
        },
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function(e) {
            var t = e.subscription,
                n = s.SubscriptionRecord.createFromServer(t);
            O = y(m({}, O), E({}, n.id, n)), L(n) && (T = y(m({}, T), E({}, n.id, n))), null != v && n.type === f.SubscriptionTypes.GUILD && (v = P({
                activeSubscriptions: v,
                record: n
            })), null != g && n.type === f.SubscriptionTypes.APPLICATION && (v = P({
                activeSubscriptions: g,
                record: n
            }))
        },
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
            var t = e.subscription;
            if (A = !0, null != t) {
                var n = l.default.getId();
                if (t.user_id !== n && !b) {
                    C.log("[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, c.captureBillingMessage)("[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
                        extra: {
                            authUserId: n,
                            subscriptionId: t.id,
                            subscriptionUserId: t.user_id
                        }
                    }), A = !1, b = !0;
                    return
                }
                S = s.SubscriptionRecord.createFromServer(t)
            }
        },
        BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
            var t = e.subscription;
            if (R = !0, null != t) {
                var n = l.default.getId();
                if (t.user_id !== n && !b) {
                    C.log("[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, c.captureBillingMessage)("[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
                        extra: {
                            authUserId: n,
                            subscriptionId: t.id,
                            subscriptionUserId: t.user_id
                        }
                    }), R = !1, b = !0;
                    return
                }
                N = s.SubscriptionRecord.createFromServer(t)
            }
        },
        BILLING_SUBSCRIPTION_RESET: D,
        LOGOUT: D
    })
}