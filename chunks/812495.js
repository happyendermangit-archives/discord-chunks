function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        redeemGiftCode: function() {
            return d
        },
        default: function() {
            return o
        }
    });
    var s = i("872717"),
        n = i("913144"),
        l = i("448993"),
        r = i("745279"),
        a = i("49111");
    let u = Object.freeze({});
    async function d(e) {
        let {
            code: t,
            options: i = u,
            onRedeemed: d,
            onError: o
        } = e, {
            channelId: c = null,
            paymentSource: E = null
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
                    payment_source_id: null == E ? void 0 : E.id,
                    gateway_checkout_context: await (0, r.createGatewayCheckoutContext)(E)
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
            }), null == o || o(e), e
        }
    }
    var o = {
        redeemGiftCode: d
    }
}