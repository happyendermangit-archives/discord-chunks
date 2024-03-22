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
            return d
        },
        changePaymentSource: function() {
            return E
        },
        clearError: function() {
            return f
        }
    });
    var i = n("627445"),
        r = n.n(i),
        u = n("913144"),
        l = n("719923"),
        a = n("850068"),
        o = n("49111");
    async function s(t) {
        let {
            planId: e,
            currency: n,
            paymentSource: i,
            trialId: r,
            code: l,
            metadata: o,
            referralCode: s,
            loadId: c
        } = t;
        u.default.dispatch({
            type: "PREMIUM_PAYMENT_SUBSCRIBE_START"
        });
        try {
            let t = await a.createSubscription({
                items: [{
                    planId: e,
                    quantity: 1
                }],
                paymentSource: i,
                trialId: r,
                code: l,
                currency: n,
                metadata: o,
                referralCode: s,
                loadId: c
            });
            return null != t.subscription && u.default.dispatch({
                type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
                subscription: t.subscription
            }), t
        } catch (t) {
            throw u.default.dispatch({
                type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
                error: t
            }), t
        }
    }
    async function c(t, e, n, i, s, c) {
        try {
            let S = (0, l.getPremiumPlanItem)(t);
            r(S, "Expected existing premium plan");
            let d = (0, l.getItemsWithUpsertedPremiumPlanId)(t, S.planId);
            await a.updateSubscription(t, {
                status: o.SubscriptionStatusTypes.ACTIVE,
                paymentSource: i,
                items: d,
                currency: n
            }, e, s, c), u.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
            })
        } catch (t) {
            throw u.default.dispatch({
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
    async function d(t, e, n, i) {
        try {
            await a.changeSubscriptionCurrency(t, e, n, i), u.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
            })
        } catch (t) {
            throw u.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                error: t
            }), t
        }
    }
    async function E(t, e, n, i, r) {
        try {
            await a.changePaymentSource(t, e, n, i, r), u.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
            })
        } catch (t) {
            throw u.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                error: t
            }), t
        }
    }

    function f() {
        u.default.dispatch({
            type: "PREMIUM_PAYMENT_ERROR_CLEAR"
        })
    }
}