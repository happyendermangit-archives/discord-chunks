function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        authenticatedUserFilter: function() {
            return A
        },
        default: function() {
            return R
        }
    }), n("424973"), n("222007");
    var i = n("446674"),
        s = n("913144"),
        r = n("605250"),
        a = n("797647"),
        o = n("388290"),
        l = n("271938"),
        u = n("745279"),
        d = n("49111");
    let c = null,
        f = null,
        _ = null,
        h = null,
        E = null,
        g = !1,
        m = !1,
        p = null,
        S = !1,
        v = new r.default("SubscriptionStore");

    function T(e) {
        let {
            activeSubscriptions: t,
            record: n
        } = e, i = t.findIndex(e => e.id === n.id);
        if (-1 === i) return [n, ...t];
        {
            let e = [...t];
            return C(n) && n.status !== d.SubscriptionStatusTypes.ENDED ? e[i] = n : e.splice(i, 1), e
        }
    }

    function I() {
        c = null, f = null, _ = null, h = null, E = null, g = !1, m = !1, p = null, S = !1
    }

    function C(e) {
        return e.status !== d.SubscriptionStatusTypes.UNPAID
    }

    function A(e) {
        let t = l.default.getId();
        return e.userId === t
    }

    function y(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = n ? f : c;
        if (null == i) return null;
        for (let n in i) {
            let s = i[n];
            if (!A(s)) {
                if (!m) {
                    let e = l.default.getId();
                    v.log("user id mismatch between logged in user and SubscriptionStore user"), (0, u.captureBillingMessage)("user id mismatch between logged in user and SubscriptionStore user", {
                        extra: {
                            authUserId: e,
                            subscriptionId: s.id,
                            subscriptionUserId: s.userId
                        }
                    }), m = !0
                }
                break
            }
            if (s.type === e && (null == t || t(s))) return s
        }
        return null
    }
    class N extends i.default.Store {
        hasFetchedSubscriptions() {
            return null != c
        }
        hasFetchedMostRecentPremiumTypeSubscription() {
            return g
        }
        hasFetchedPreviousPremiumTypeSubscription() {
            return S
        }
        getPremiumSubscription() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return y(d.SubscriptionTypes.PREMIUM, e => !(0, a.isNoneSubscription)(e.planId), e)
        }
        getPremiumTypeSubscription() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return y(d.SubscriptionTypes.PREMIUM, void 0, e)
        }
        getSubscriptions() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return e ? f : c
        }
        getSubscriptionById(e) {
            var t;
            return null !== (t = null == c ? void 0 : c[e]) && void 0 !== t ? t : void 0
        }
        getActiveGuildSubscriptions() {
            return h
        }
        getActiveApplicationSubscriptions() {
            return E
        }
        getSubscriptionForPlanIds(e) {
            var t;
            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                i = new Set(e),
                s = n ? f : c;
            return null == s ? null : null !== (t = Object.values(s).find(e => e.items.some(e => i.has(e.planId)))) && void 0 !== t ? t : null
        }
        getMostRecentPremiumTypeSubscription() {
            return _
        }
        getPreviousPremiumTypeSubscription() {
            return p
        }
    }
    N.displayName = "SubscriptionStore";
    var R = new N(s.default, {
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
            let {
                subscriptions: t
            } = e, n = {}, i = {}, s = [], r = [], a = l.default.getId();
            t.forEach(e => {
                if (e.user_id !== a && !m) {
                    v.log("[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, u.captureBillingMessage)("[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
                        extra: {
                            authUserId: a,
                            subscriptionId: e.id,
                            subscriptionUserId: e.user_id
                        }
                    }), m = !0;
                    return
                }
                let t = o.SubscriptionRecord.createFromServer(e);
                n[t.id] = t, C(t) && (i[t.id] = t, t.type === d.SubscriptionTypes.GUILD && t.status !== d.SubscriptionStatusTypes.ENDED && s.push(t), t.type === d.SubscriptionTypes.APPLICATION && t.status !== d.SubscriptionStatusTypes.ENDED && r.push(t))
            }), c = n, f = i, h = s, E = r
        },
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function(e) {
            let {
                subscription: t
            } = e, n = o.SubscriptionRecord.createFromServer(t);
            c = {
                ...c,
                [n.id]: n
            }, C(n) && (f = {
                ...f,
                [n.id]: n
            }), null != h && n.type === d.SubscriptionTypes.GUILD && (h = T({
                activeSubscriptions: h,
                record: n
            })), null != E && n.type === d.SubscriptionTypes.APPLICATION && (h = T({
                activeSubscriptions: E,
                record: n
            }))
        },
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
            let {
                subscription: t
            } = e;
            if (g = !0, null != t) {
                let e = l.default.getId();
                if (t.user_id !== e && !m) {
                    v.log("[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, u.captureBillingMessage)("[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
                        extra: {
                            authUserId: e,
                            subscriptionId: t.id,
                            subscriptionUserId: t.user_id
                        }
                    }), g = !1, m = !0;
                    return
                }
                let n = o.SubscriptionRecord.createFromServer(t);
                _ = n
            }
        },
        BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
            let {
                subscription: t
            } = e;
            if (S = !0, null != t) {
                let e = l.default.getId();
                if (t.user_id !== e && !m) {
                    v.log("[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, u.captureBillingMessage)("[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
                        extra: {
                            authUserId: e,
                            subscriptionId: t.id,
                            subscriptionUserId: t.user_id
                        }
                    }), S = !1, m = !0;
                    return
                }
                let n = o.SubscriptionRecord.createFromServer(t);
                p = n
            }
        },
        BILLING_SUBSCRIPTION_RESET: I,
        LOGOUT: I
    })
}