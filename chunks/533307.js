function(e, t, i) {
    "use strict";
    let s;
    i.r(t);
    var n = i("544891"),
        l = i("570140"),
        r = i("728345"),
        a = i("812206"),
        o = i("625128"),
        d = i("335131"),
        u = i("669079"),
        c = i("981631"),
        _ = i("474936");
    async function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        l.default.dispatch({
            type: "GIFT_CODE_RESOLVE",
            code: e
        });
        try {
            let s = await (0, u.resolveGiftCode)(e, t, i);
            if (null != s.application_id && s.application_id !== _.PREMIUM_SUBSCRIPTION_APPLICATION) {
                let e = a.default.getApplication(s.application_id);
                if (null == e) try {
                    await r.default.fetchApplication(s.application_id)
                } catch (e) {}
            }
            if (s.application_id === c.COLLECTIBLES_APPLICATION_ID) try {
                await (0, d.fetchCollectiblesProduct)(s.sku_id)
            } catch (e) {}
            return l.default.dispatch({
                type: "GIFT_CODE_RESOLVE_SUCCESS",
                giftCode: s
            }), {
                giftCode: s
            }
        } catch (t) {
            throw l.default.dispatch({
                type: "GIFT_CODE_RESOLVE_FAILURE",
                code: e,
                error: t
            }), t
        }
    }
    s = i("775644").default, t.default = {
        resolveGiftCode: E,
        async fetchUserGiftCodesForSKU(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            l.default.dispatch({
                type: "GIFT_CODES_FETCH",
                skuId: e,
                subscriptionPlanId: t
            });
            try {
                let i = await n.HTTP.get({
                    url: c.Endpoints.USER_GIFT_CODES,
                    query: {
                        sku_id: e,
                        subscription_plan_id: t
                    },
                    oldFormErrors: !0
                });
                l.default.dispatch({
                    type: "GIFT_CODES_FETCH_SUCCESS",
                    giftCodes: i.body,
                    skuId: e,
                    subscriptionPlanId: t
                })
            } catch (i) {
                l.default.dispatch({
                    type: "GIFT_CODES_FETCH_FAILURE",
                    skuId: e,
                    subscriptionPlanId: t
                })
            }
        },
        async createGiftCode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            l.default.dispatch({
                type: "GIFT_CODE_CREATE_START",
                skuId: e,
                subscriptionPlanId: t
            });
            try {
                let s = await n.HTTP.post({
                    url: c.Endpoints.USER_GIFT_CODE_CREATE,
                    body: {
                        sku_id: e,
                        subscription_plan_id: t,
                        gift_style: i
                    },
                    oldFormErrors: !0
                });
                return l.default.dispatch({
                    type: "GIFT_CODE_CREATE_SUCCESS",
                    giftCode: s.body
                }), s.body
            } catch (i) {
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
                await n.HTTP.del({
                    url: c.Endpoints.USER_GIFT_CODE_REVOKE(e),
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
            o.default.openNativeAppModal(e, c.RPCCommands.GIFT_CODE_BROWSER)
        },
        ...s
    }
}