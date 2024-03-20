function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return E
        }
    });
    var s = i("872717"),
        n = i("913144"),
        l = i("651057"),
        a = i("299285"),
        r = i("523086"),
        u = i("21526"),
        d = i("659632"),
        o = i("49111"),
        c = i("646718"),
        E = {
            resolveGiftCode: async function e(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                n.default.dispatch({
                    type: "GIFT_CODE_RESOLVE",
                    code: e
                });
                try {
                    let s = await (0, d.resolveGiftCode)(e, t, i);
                    if (null != s.application_id && s.application_id !== c.PREMIUM_SUBSCRIPTION_APPLICATION) {
                        let e = a.default.getApplication(s.application_id);
                        if (null == e) try {
                            await l.default.fetchApplication(s.application_id)
                        } catch (e) {}
                    }
                    if (s.application_id === o.COLLECTIBLES_APPLICATION_ID) try {
                        await (0, u.fetchCollectiblesProduct)(s.sku_id)
                    } catch (e) {}
                    return n.default.dispatch({
                        type: "GIFT_CODE_RESOLVE_SUCCESS",
                        giftCode: s
                    }), {
                        giftCode: s
                    }
                } catch (t) {
                    throw n.default.dispatch({
                        type: "GIFT_CODE_RESOLVE_FAILURE",
                        code: e,
                        error: t
                    }), t
                }
            },
            async fetchUserGiftCodesForSKU(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                n.default.dispatch({
                    type: "GIFT_CODES_FETCH",
                    skuId: e,
                    subscriptionPlanId: t
                });
                try {
                    let i = await s.default.get({
                        url: o.Endpoints.USER_GIFT_CODES,
                        query: {
                            sku_id: e,
                            subscription_plan_id: t
                        },
                        oldFormErrors: !0
                    });
                    n.default.dispatch({
                        type: "GIFT_CODES_FETCH_SUCCESS",
                        giftCodes: i.body,
                        skuId: e,
                        subscriptionPlanId: t
                    })
                } catch (i) {
                    n.default.dispatch({
                        type: "GIFT_CODES_FETCH_FAILURE",
                        skuId: e,
                        subscriptionPlanId: t
                    })
                }
            },
            async createGiftCode(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                n.default.dispatch({
                    type: "GIFT_CODE_CREATE_START",
                    skuId: e,
                    subscriptionPlanId: t
                });
                try {
                    let l = await s.default.post({
                        url: o.Endpoints.USER_GIFT_CODE_CREATE,
                        body: {
                            sku_id: e,
                            subscription_plan_id: t,
                            gift_style: i
                        },
                        oldFormErrors: !0
                    });
                    return n.default.dispatch({
                        type: "GIFT_CODE_CREATE_SUCCESS",
                        giftCode: l.body
                    }), l.body
                } catch (i) {
                    n.default.dispatch({
                        type: "GIFT_CODE_CREATE_FAILURE",
                        skuId: e,
                        subscriptionPlanId: t
                    })
                }
            },
            async revokeGiftCode(e) {
                n.default.dispatch({
                    type: "GIFT_CODE_REVOKE",
                    code: e
                });
                try {
                    await s.default.delete({
                        url: o.Endpoints.USER_GIFT_CODE_REVOKE(e),
                        oldFormErrors: !0
                    }), n.default.dispatch({
                        type: "GIFT_CODE_REVOKE_SUCCESS",
                        code: e
                    })
                } catch (t) {
                    n.default.dispatch({
                        type: "GIFT_CODE_REVOKE_FAILURE",
                        code: e
                    })
                }
            },
            openNativeGiftCodeModal(e) {
                r.default.openNativeAppModal(e, o.RPCCommands.GIFT_CODE_BROWSER)
            },
            ...i("812495").default
        }
}