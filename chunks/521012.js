function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        authenticatedUserFilter: function() {
            return A
        },
        default: function() {
            return O
        }
    }), n("424973"), n("222007");
    var i = n("446674"),
        r = n("913144"),
        s = n("605250"),
        a = n("797647"),
        o = n("388290"),
        l = n("271938"),
        u = n("745279"),
        c = n("49111");
    let d = null,
        f = null,
        E = null,
        p = null,
        h = null,
        _ = !1,
        S = !1,
        m = null,
        T = !1,
        g = new s.default("SubscriptionStore");

    function I(e) {
        let {
            activeSubscriptions: t,
            record: n
        } = e, i = t.findIndex(e => e.id === n.id);
        if (-1 === i) return [n, ...t];
        {
            let e = [...t];
            return v(n) && n.status !== c.SubscriptionStatusTypes.ENDED ? e[i] = n : e.splice(i, 1), e
        }
    }

    function C() {
        d = null, f = null, E = null, p = null, h = null, _ = !1, S = !1, m = null, T = !1
    }

    function v(e) {
        return e.status !== c.SubscriptionStatusTypes.UNPAID
    }

    function A(e) {
        let t = l.default.getId();
        return e.userId === t
    }

    function R(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = n ? f : d;
        if (null == i) return null;
        for (let n in i) {
            let r = i[n];
            if (!A(r)) {
                if (!S) {
                    let e = l.default.getId();
                    g.log("user id mismatch between logged in user and SubscriptionStore user"), (0, u.captureBillingMessage)("user id mismatch between logged in user and SubscriptionStore user", {
                        extra: {
                            authUserId: e,
                            subscriptionId: r.id,
                            subscriptionUserId: r.userId
                        }
                    }), S = !0
                }
                break
            }
            if (r.type === e && (null == t || t(r))) return r
        }
        return null
    }
    class N extends i.default.Store {
        hasFetchedSubscriptions() {
            return null != d
        }
        hasFetchedMostRecentPremiumTypeSubscription() {
            return _
        }
        hasFetchedPreviousPremiumTypeSubscription() {
            return T
        }
        getPremiumSubscription() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return R(c.SubscriptionTypes.PREMIUM, e => !(0, a.isNoneSubscription)(e.planId), e)
        }
        getPremiumTypeSubscription() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return R(c.SubscriptionTypes.PREMIUM, void 0, e)
        }
        getSubscriptions() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            return e ? f : d
        }
        getSubscriptionById(e) {
            var t;
            return null !== (t = null == d ? void 0 : d[e]) && void 0 !== t ? t : void 0
        }
        getActiveGuildSubscriptions() {
            return p
        }
        getActiveApplicationSubscriptions() {
            return h
        }
        getSubscriptionForPlanIds(e) {
            var t;
            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                i = new Set(e),
                r = n ? f : d;
            return null == r ? null : null !== (t = Object.values(r).find(e => e.items.some(e => i.has(e.planId)))) && void 0 !== t ? t : null
        }
        getMostRecentPremiumTypeSubscription() {
            return E
        }
        getPreviousPremiumTypeSubscription() {
            return m
        }
    }
    N.displayName = "SubscriptionStore";
    var O = new N(r.default, {
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
            let {
                subscriptions: t
            } = e, n = {}, i = {}, r = [], s = [], a = l.default.getId();
            t.forEach(e => {
                if (e.user_id !== a && !S) {
                    g.log("[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, u.captureBillingMessage)("[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
                        extra: {
                            authUserId: a,
                            subscriptionId: e.id,
                            subscriptionUserId: e.user_id
                        }
                    }), S = !0;
                    return
                }
                let t = o.SubscriptionRecord.createFromServer(e);
                n[t.id] = t, v(t) && (i[t.id] = t, t.type === c.SubscriptionTypes.GUILD && t.status !== c.SubscriptionStatusTypes.ENDED && r.push(t), t.type === c.SubscriptionTypes.APPLICATION && t.status !== c.SubscriptionStatusTypes.ENDED && s.push(t))
            }), d = n, f = i, p = r, h = s
        },
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function(e) {
            let {
                subscription: t
            } = e, n = o.SubscriptionRecord.createFromServer(t);
            d = {
                ...d,
                [n.id]: n
            }, v(n) && (f = {
                ...f,
                [n.id]: n
            }), null != p && n.type === c.SubscriptionTypes.GUILD && (p = I({
                activeSubscriptions: p,
                record: n
            })), null != h && n.type === c.SubscriptionTypes.APPLICATION && (p = I({
                activeSubscriptions: h,
                record: n
            }))
        },
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
            let {
                subscription: t
            } = e;
            if (_ = !0, null != t) {
                let e = l.default.getId();
                if (t.user_id !== e && !S) {
                    g.log("[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, u.captureBillingMessage)("[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
                        extra: {
                            authUserId: e,
                            subscriptionId: t.id,
                            subscriptionUserId: t.user_id
                        }
                    }), _ = !1, S = !0;
                    return
                }
                let n = o.SubscriptionRecord.createFromServer(t);
                E = n
            }
        },
        BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
            let {
                subscription: t
            } = e;
            if (T = !0, null != t) {
                let e = l.default.getId();
                if (t.user_id !== e && !S) {
                    g.log("[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, u.captureBillingMessage)("[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
                        extra: {
                            authUserId: e,
                            subscriptionId: t.id,
                            subscriptionUserId: t.user_id
                        }
                    }), T = !1, S = !0;
                    return
                }
                let n = o.SubscriptionRecord.createFromServer(t);
                m = n
            }
        },
        BILLING_SUBSCRIPTION_RESET: C,
        LOGOUT: C
    })
}