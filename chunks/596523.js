function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        subscribe: function() {
            return s
        },
        resubscribe: function() {
            return c
        },
        resume: function() {
            return S
        },
        changeSubscriptionCurrency: function() {
            return E
        },
        changePaymentSource: function() {
            return d
        },
        clearError: function() {
            return f
        }
    });
    var u = n("627445"),
        i = n.n(u),
        r = n("913144"),
        l = n("719923"),
        a = n("850068"),
        o = n("49111");
    async function s(t) {
        let {
            planId: e,
            currency: n,
            paymentSource: u,
            trialId: i,
            code: l,
            metadata: o,
            referralCode: s,
            loadId: c
        } = t;
        r.default.dispatch({
            type: "PREMIUM_PAYMENT_SUBSCRIBE_START"
        });
        try {
            let t = await a.createSubscription({
                items: [{
                    planId: e,
                    quantity: 1
                }],
                paymentSource: u,
                trialId: i,
                code: l,
                currency: n,
                metadata: o,
                referralCode: s,
                loadId: c
            });
            return null != t.subscription && r.default.dispatch({
                type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
                subscription: t.subscription
            }), t
        } catch (t) {
            throw r.default.dispatch({
                type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
                error: t
            }), t
        }
    }
    async function c(t, e, n, u, s, c) {
        try {
            let S = (0, l.getPremiumPlanItem)(t);
            i(S, "Expected existing premium plan");
            let E = (0, l.getItemsWithUpsertedPremiumPlanId)(t, S.planId);
            await a.updateSubscription(t, {
                status: o.SubscriptionStatusTypes.ACTIVE,
                paymentSource: u,
                items: E,
                currency: n
            }, e, s, c), r.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
            })
        } catch (t) {
            throw r.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                error: t
            }), t
        }
    }
    async function S(t, e, n) {
        try {
            await a.updateSubscription(t, {
                status: o.SubscriptionStatusTypes.ACTIVE
            }, e, n)
        } catch (t) {
            throw t
        }
    }
    async function E(t, e, n, u) {
        try {
            await a.changeSubscriptionCurrency(t, e, n, u), r.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
            })
        } catch (t) {
            throw r.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                error: t
            }), t
        }
    }
    async function d(t, e, n, u, i) {
        try {
            await a.changePaymentSource(t, e, n, u, i), r.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
            })
        } catch (t) {
            throw r.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                error: t
            }), t
        }
    }

    function f() {
        r.default.dispatch({
            type: "PREMIUM_PAYMENT_ERROR_CLEAR"
        })
    }
}