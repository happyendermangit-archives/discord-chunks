function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        changePaymentSource: function() {
            return E
        },
        changeSubscriptionCurrency: function() {
            return c
        },
        clearError: function() {
            return I
        },
        resubscribe: function() {
            return d
        },
        resume: function() {
            return _
        },
        subscribe: function() {
            return u
        }
    });
    var i = n("512722"),
        r = n.n(i),
        s = n("570140"),
        a = n("74538"),
        o = n("355467"),
        l = n("981631");
    async function u(e) {
        let {
            planId: t,
            currency: n,
            paymentSource: i,
            trialId: r,
            code: a,
            metadata: l,
            referralCode: u,
            loadId: d
        } = e;
        s.default.dispatch({
            type: "PREMIUM_PAYMENT_SUBSCRIBE_START"
        });
        try {
            let e = await o.createSubscription({
                items: [{
                    planId: t,
                    quantity: 1
                }],
                paymentSource: i,
                trialId: r,
                code: a,
                currency: n,
                metadata: l,
                referralCode: u,
                loadId: d
            });
            return null != e.subscription && s.default.dispatch({
                type: "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
                subscription: e.subscription
            }), e
        } catch (e) {
            throw s.default.dispatch({
                type: "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
                error: e
            }), e
        }
    }
    async function d(e, t, n, i, u, d) {
        try {
            let _ = (0, a.getPremiumPlanItem)(e);
            r()(_, "Expected existing premium plan");
            let c = (0, a.getItemsWithUpsertedPremiumPlanId)(e, _.planId);
            await o.updateSubscription(e, {
                status: l.SubscriptionStatusTypes.ACTIVE,
                paymentSource: i,
                items: c,
                currency: n
            }, t, u, d), s.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
            })
        } catch (e) {
            throw s.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                error: e
            }), e
        }
    }
    async function _(e, t, n) {
        try {
            await o.updateSubscription(e, {
                status: l.SubscriptionStatusTypes.ACTIVE
            }, t, n)
        } catch (e) {
            throw e
        }
    }
    async function c(e, t, n, i) {
        try {
            await o.changeSubscriptionCurrency(e, t, n, i), s.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
            })
        } catch (e) {
            throw s.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                error: e
            }), e
        }
    }
    async function E(e, t, n, i, r) {
        try {
            await o.changePaymentSource(e, t, n, i, r), s.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_SUCCESS"
            })
        } catch (e) {
            throw s.default.dispatch({
                type: "PREMIUM_PAYMENT_UPDATE_FAIL",
                error: e
            }), e
        }
    }

    function I() {
        s.default.dispatch({
            type: "PREMIUM_PAYMENT_ERROR_CLEAR"
        })
    }
}