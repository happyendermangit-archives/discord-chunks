function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        redeemGiftCode: function() {
            return o
        }
    });
    var n = l("544891"),
        a = l("570140"),
        i = l("881052"),
        s = l("122289"),
        r = l("981631");
    let d = Object.freeze({});
    async function o(e) {
        let {
            code: t,
            options: l = d,
            onRedeemed: o,
            onError: u
        } = e, {
            channelId: c = null,
            paymentSource: _ = null
        } = l;
        a.default.dispatch({
            type: "GIFT_CODE_REDEEM",
            code: t
        });
        try {
            let e = await n.HTTP.post({
                url: r.Endpoints.GIFT_CODE_REDEEM(t),
                body: {
                    channel_id: c,
                    payment_source_id: null == _ ? void 0 : _.id,
                    gateway_checkout_context: await (0, s.createGatewayCheckoutContext)(_)
                },
                oldFormErrors: !0
            });
            return a.default.dispatch({
                type: "GIFT_CODE_REDEEM_SUCCESS",
                code: t,
                entitlement: e.body
            }), null == o || o(), {
                code: t,
                entitlement: e
            }
        } catch (l) {
            let e = new i.BillingError(l);
            throw a.default.dispatch({
                type: "GIFT_CODE_REDEEM_FAILURE",
                code: t,
                error: e
            }), null == u || u(e), e
        }
    }
    t.default = {
        redeemGiftCode: o
    }
}