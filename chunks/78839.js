function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        authenticatedUserFilter: function() {
            return D
        }
    }), n("653041"), n("47120");
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("710845"),
        d = n("301766"),
        _ = n("255078"),
        c = n("314897"),
        E = n("122289"),
        I = n("981631");
    let T = null,
        f = null,
        S = null,
        h = null,
        A = null,
        m = !1,
        N = !1,
        p = null,
        O = !1,
        R = new u.default("SubscriptionStore");

    function C(e) {
        let {
            activeSubscriptions: t,
            record: n
        } = e, i = t.findIndex(e => e.id === n.id);
        if (-1 === i) return [n, ...t];
        {
            let e = [...t];
            return L(n) && n.status !== I.SubscriptionStatusTypes.ENDED ? e[i] = n : e.splice(i, 1), e
        }
    }

    function g() {
        T = null, f = null, S = null, h = null, A = null, m = !1, N = !1, p = null, O = !1
    }

    function L(e) {
        return e.status !== I.SubscriptionStatusTypes.UNPAID
    }

    function D(e) {
        let t = c.default.getId();
        return e.userId === t
    }

    function v(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = n ? f : T;
        if (null == i) return null;
        for (let n in i) {
            let r = i[n];
            if (!D(r)) {
                if (!N) {
                    let e = c.default.getId();
                    R.log("user id mismatch between logged in user and SubscriptionStore user"), (0, E.captureBillingMessage)("user id mismatch between logged in user and SubscriptionStore user", {
                        extra: {
                            authUserId: e,
                            subscriptionId: r.id,
                            subscriptionUserId: r.userId
                        }
                    }), N = !0
                }
                break
            }
            if (r.type === e && (null == t || t(r))) return r
        }
        return null
    }
    class M extends(i = o.default.Store) {
        hasFetchedSubscriptions() {
            return null != T
        }
        hasFetchedMostRecentPremiumTypeSubscription() {
            return m
        }
        hasFetchedPreviousPremiumTypeSubscription() {
            return O
        }
        getPremiumSubscription() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return v(I.SubscriptionTypes.PREMIUM, e => !(0, d.isNoneSubscription)(e.planId), e)
        }
        getPremiumTypeSubscription() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return v(I.SubscriptionTypes.PREMIUM, void 0, e)
        }
        getSubscriptions() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return e ? f : T
        }
        getSubscriptionById(e) {
            var t;
            return null !== (t = null == T ? void 0 : T[e]) && void 0 !== t ? t : void 0
        }
        getActiveGuildSubscriptions() {
            return h
        }
        getActiveApplicationSubscriptions() {
            return A
        }
        getSubscriptionForPlanIds(e) {
            var t;
            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                i = new Set(e),
                r = n ? f : T;
            return null == r ? null : null !== (t = Object.values(r).find(e => e.items.some(e => i.has(e.planId)))) && void 0 !== t ? t : null
        }
        getMostRecentPremiumTypeSubscription() {
            return S
        }
        getPreviousPremiumTypeSubscription() {
            return p
        }
    }
    a = "SubscriptionStore", (s = "displayName") in(r = M) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new M(l.default, {
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
            let {
                subscriptions: t
            } = e, n = {}, i = {}, r = [], s = [], a = c.default.getId();
            t.forEach(e => {
                if (e.user_id !== a && !N) {
                    R.log("[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, E.captureBillingMessage)("[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
                        extra: {
                            authUserId: a,
                            subscriptionId: e.id,
                            subscriptionUserId: e.user_id
                        }
                    }), N = !0;
                    return
                }
                let t = _.SubscriptionRecord.createFromServer(e);
                n[t.id] = t, L(t) && (i[t.id] = t, t.type === I.SubscriptionTypes.GUILD && t.status !== I.SubscriptionStatusTypes.ENDED && r.push(t), t.type === I.SubscriptionTypes.APPLICATION && t.status !== I.SubscriptionStatusTypes.ENDED && s.push(t))
            }), T = n, f = i, h = r, A = s
        },
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function(e) {
            let {
                subscription: t
            } = e, n = _.SubscriptionRecord.createFromServer(t);
            T = {
                ...T,
                [n.id]: n
            }, L(n) && (f = {
                ...f,
                [n.id]: n
            }), null != h && n.type === I.SubscriptionTypes.GUILD && (h = C({
                activeSubscriptions: h,
                record: n
            })), null != A && n.type === I.SubscriptionTypes.APPLICATION && (h = C({
                activeSubscriptions: A,
                record: n
            }))
        },
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
            let {
                subscription: t
            } = e;
            if (m = !0, null != t) {
                let e = c.default.getId();
                if (t.user_id !== e && !N) {
                    R.log("[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, E.captureBillingMessage)("[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
                        extra: {
                            authUserId: e,
                            subscriptionId: t.id,
                            subscriptionUserId: t.user_id
                        }
                    }), m = !1, N = !0;
                    return
                }
                S = _.SubscriptionRecord.createFromServer(t)
            }
        },
        BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
            let {
                subscription: t
            } = e;
            if (O = !0, null != t) {
                let e = c.default.getId();
                if (t.user_id !== e && !N) {
                    R.log("[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, E.captureBillingMessage)("[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
                        extra: {
                            authUserId: e,
                            subscriptionId: t.id,
                            subscriptionUserId: t.user_id
                        }
                    }), O = !1, N = !0;
                    return
                }
                p = _.SubscriptionRecord.createFromServer(t)
            }
        },
        BILLING_SUBSCRIPTION_RESET: g,
        LOGOUT: g
    })
}