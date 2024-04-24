function(e, t, l) {
    "use strict";
    let n;
    l.r(t);
    var a = l("544891"),
        i = l("570140"),
        s = l("728345"),
        r = l("812206"),
        d = l("625128"),
        o = l("335131"),
        u = l("669079"),
        c = l("981631"),
        _ = l("474936");
    async function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        i.default.dispatch({
            type: "GIFT_CODE_RESOLVE",
            code: e
        });
        try {
            let n = await (0, u.resolveGiftCode)(e, t, l);
            if (null != n.application_id && n.application_id !== _.PREMIUM_SUBSCRIPTION_APPLICATION) {
                let e = r.default.getApplication(n.application_id);
                if (null == e) try {
                    await s.default.fetchApplication(n.application_id)
                } catch (e) {}
            }
            if (n.application_id === c.COLLECTIBLES_APPLICATION_ID) try {
                await (0, o.fetchCollectiblesProduct)(n.sku_id)
            } catch (e) {}
            return i.default.dispatch({
                type: "GIFT_CODE_RESOLVE_SUCCESS",
                giftCode: n
            }), {
                giftCode: n
            }
        } catch (t) {
            throw i.default.dispatch({
                type: "GIFT_CODE_RESOLVE_FAILURE",
                code: e,
                error: t
            }), t
        }
    }
    n = l("775644").default, t.default = {
        resolveGiftCode: E,
        async fetchUserGiftCodesForSKU(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            i.default.dispatch({
                type: "GIFT_CODES_FETCH",
                skuId: e,
                subscriptionPlanId: t
            });
            try {
                let l = await a.HTTP.get({
                    url: c.Endpoints.USER_GIFT_CODES,
                    query: {
                        sku_id: e,
                        subscription_plan_id: t
                    },
                    oldFormErrors: !0
                });
                i.default.dispatch({
                    type: "GIFT_CODES_FETCH_SUCCESS",
                    giftCodes: l.body,
                    skuId: e,
                    subscriptionPlanId: t
                })
            } catch (l) {
                i.default.dispatch({
                    type: "GIFT_CODES_FETCH_FAILURE",
                    skuId: e,
                    subscriptionPlanId: t
                })
            }
        },
        async createGiftCode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            i.default.dispatch({
                type: "GIFT_CODE_CREATE_START",
                skuId: e,
                subscriptionPlanId: t
            });
            try {
                let n = await a.HTTP.post({
                    url: c.Endpoints.USER_GIFT_CODE_CREATE,
                    body: {
                        sku_id: e,
                        subscription_plan_id: t,
                        gift_style: l
                    },
                    oldFormErrors: !0
                });
                return i.default.dispatch({
                    type: "GIFT_CODE_CREATE_SUCCESS",
                    giftCode: n.body
                }), n.body
            } catch (l) {
                i.default.dispatch({
                    type: "GIFT_CODE_CREATE_FAILURE",
                    skuId: e,
                    subscriptionPlanId: t
                })
            }
        },
        async revokeGiftCode(e) {
            i.default.dispatch({
                type: "GIFT_CODE_REVOKE",
                code: e
            });
            try {
                await a.HTTP.del({
                    url: c.Endpoints.USER_GIFT_CODE_REVOKE(e),
                    oldFormErrors: !0
                }), i.default.dispatch({
                    type: "GIFT_CODE_REVOKE_SUCCESS",
                    code: e
                })
            } catch (t) {
                i.default.dispatch({
                    type: "GIFT_CODE_REVOKE_FAILURE",
                    code: e
                })
            }
        },
        openNativeGiftCodeModal(e) {
            d.default.openNativeAppModal(e, c.RPCCommands.GIFT_CODE_BROWSER)
        },
        ...n
    }
}