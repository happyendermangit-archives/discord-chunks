function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        redeemGiftCode: function() {
            return u
        }
    });
    var a = l("544891"),
        n = l("570140"),
        i = l("881052"),
        s = l("122289"),
        r = l("981631");
    let d = Object.freeze({});
    async function u(e) {
        let {
            code: t,
            options: l = d,
            onRedeemed: u,
            onError: o
        } = e, {
            channelId: c = null,
            paymentSource: E = null
        } = l;
        n.default.dispatch({
            type: "GIFT_CODE_REDEEM",
            code: t
        });
        try {
            let e = await a.HTTP.post({
                url: r.Endpoints.GIFT_CODE_REDEEM(t),
                body: {
                    channel_id: c,
                    payment_source_id: null == E ? void 0 : E.id,
                    gateway_checkout_context: await (0, s.createGatewayCheckoutContext)(E)
                },
                oldFormErrors: !0
            });
            return n.default.dispatch({
                type: "GIFT_CODE_REDEEM_SUCCESS",
                code: t,
                entitlement: e.body
            }), null == u || u(), {
                code: t,
                entitlement: e
            }
        } catch (l) {
            let e = new i.BillingError(l);
            throw n.default.dispatch({
                type: "GIFT_CODE_REDEEM_FAILURE",
                code: t,
                error: e
            }), null == o || o(e), e
        }
    }
    t.default = {
        redeemGiftCode: u
    }
}