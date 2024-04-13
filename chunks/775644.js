function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        redeemGiftCode: function() {
            return d
        }
    });
    var s = i("544891"),
        n = i("570140"),
        l = i("881052"),
        r = i("122289"),
        a = i("981631");
    let o = Object.freeze({});
    async function d(e) {
        let {
            code: t,
            options: i = o,
            onRedeemed: d,
            onError: u
        } = e, {
            channelId: c = null,
            paymentSource: _ = null
        } = i;
        n.default.dispatch({
            type: "GIFT_CODE_REDEEM",
            code: t
        });
        try {
            let e = await s.HTTP.post({
                url: a.Endpoints.GIFT_CODE_REDEEM(t),
                body: {
                    channel_id: c,
                    payment_source_id: null == _ ? void 0 : _.id,
                    gateway_checkout_context: await (0, r.createGatewayCheckoutContext)(_)
                },
                oldFormErrors: !0
            });
            return n.default.dispatch({
                type: "GIFT_CODE_REDEEM_SUCCESS",
                code: t,
                entitlement: e.body
            }), null == d || d(), {
                code: t,
                entitlement: e
            }
        } catch (i) {
            let e = new l.BillingError(i);
            throw n.default.dispatch({
                type: "GIFT_CODE_REDEEM_FAILURE",
                code: t,
                error: e
            }), null == u || u(e), e
        }
    }
    t.default = {
        redeemGiftCode: d
    }
}