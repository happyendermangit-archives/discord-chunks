function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("872717"),
        l = n("913144"),
        s = n("651057"),
        r = n("299285"),
        a = n("523086"),
        u = n("21526"),
        d = n("659632"),
        o = n("49111"),
        c = n("646718"),
        E = {
            resolveGiftCode: async function e(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                l.default.dispatch({
                    type: "GIFT_CODE_RESOLVE",
                    code: e
                });
                try {
                    let i = await (0, d.resolveGiftCode)(e, t, n);
                    if (null != i.application_id && i.application_id !== c.PREMIUM_SUBSCRIPTION_APPLICATION) {
                        let e = r.default.getApplication(i.application_id);
                        if (null == e) try {
                            await s.default.fetchApplication(i.application_id)
                        } catch (e) {}
                    }
                    if (i.application_id === o.COLLECTIBLES_APPLICATION_ID) try {
                        await (0, u.fetchCollectiblesProduct)(i.sku_id)
                    } catch (e) {}
                    return l.default.dispatch({
                        type: "GIFT_CODE_RESOLVE_SUCCESS",
                        giftCode: i
                    }), {
                        giftCode: i
                    }
                } catch (t) {
                    throw l.default.dispatch({
                        type: "GIFT_CODE_RESOLVE_FAILURE",
                        code: e,
                        error: t
                    }), t
                }
            },
            async fetchUserGiftCodesForSKU(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                l.default.dispatch({
                    type: "GIFT_CODES_FETCH",
                    skuId: e,
                    subscriptionPlanId: t
                });
                try {
                    let n = await i.default.get({
                        url: o.Endpoints.USER_GIFT_CODES,
                        query: {
                            sku_id: e,
                            subscription_plan_id: t
                        },
                        oldFormErrors: !0
                    });
                    l.default.dispatch({
                        type: "GIFT_CODES_FETCH_SUCCESS",
                        giftCodes: n.body,
                        skuId: e,
                        subscriptionPlanId: t
                    })
                } catch (n) {
                    l.default.dispatch({
                        type: "GIFT_CODES_FETCH_FAILURE",
                        skuId: e,
                        subscriptionPlanId: t
                    })
                }
            },
            async createGiftCode(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                l.default.dispatch({
                    type: "GIFT_CODE_CREATE_START",
                    skuId: e,
                    subscriptionPlanId: t
                });
                try {
                    let s = await i.default.post({
                        url: o.Endpoints.USER_GIFT_CODE_CREATE,
                        body: {
                            sku_id: e,
                            subscription_plan_id: t,
                            gift_style: n
                        },
                        oldFormErrors: !0
                    });
                    return l.default.dispatch({
                        type: "GIFT_CODE_CREATE_SUCCESS",
                        giftCode: s.body
                    }), s.body
                } catch (n) {
                    l.default.dispatch({
                        type: "GIFT_CODE_CREATE_FAILURE",
                        skuId: e,
                        subscriptionPlanId: t
                    })
                }
            },
            async revokeGiftCode(e) {
                l.default.dispatch({
                    type: "GIFT_CODE_REVOKE",
                    code: e
                });
                try {
                    await i.default.delete({
                        url: o.Endpoints.USER_GIFT_CODE_REVOKE(e),
                        oldFormErrors: !0
                    }), l.default.dispatch({
                        type: "GIFT_CODE_REVOKE_SUCCESS",
                        code: e
                    })
                } catch (t) {
                    l.default.dispatch({
                        type: "GIFT_CODE_REVOKE_FAILURE",
                        code: e
                    })
                }
            },
            openNativeGiftCodeModal(e) {
                a.default.openNativeAppModal(e, o.RPCCommands.GIFT_CODE_BROWSER)
            },
            ...n("812495").default
        }
}