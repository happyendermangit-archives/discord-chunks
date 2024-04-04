function(e, t, l) {
    "use strict";
    let a;
    l.r(t);
    var n = l("544891"),
        i = l("570140"),
        s = l("728345"),
        r = l("812206"),
        d = l("625128"),
        u = l("335131"),
        o = l("669079"),
        c = l("981631"),
        E = l("474936");
    async function _(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        i.default.dispatch({
            type: "GIFT_CODE_RESOLVE",
            code: e
        });
        try {
            let a = await (0, o.resolveGiftCode)(e, t, l);
            if (null != a.application_id && a.application_id !== E.PREMIUM_SUBSCRIPTION_APPLICATION) {
                let e = r.default.getApplication(a.application_id);
                if (null == e) try {
                    await s.default.fetchApplication(a.application_id)
                } catch (e) {}
            }
            if (a.application_id === c.COLLECTIBLES_APPLICATION_ID) try {
                await (0, u.fetchCollectiblesProduct)(a.sku_id)
            } catch (e) {}
            return i.default.dispatch({
                type: "GIFT_CODE_RESOLVE_SUCCESS",
                giftCode: a
            }), {
                giftCode: a
            }
        } catch (t) {
            throw i.default.dispatch({
                type: "GIFT_CODE_RESOLVE_FAILURE",
                code: e,
                error: t
            }), t
        }
    }
    a = l("775644").default, t.default = {
        resolveGiftCode: _,
        async fetchUserGiftCodesForSKU(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            i.default.dispatch({
                type: "GIFT_CODES_FETCH",
                skuId: e,
                subscriptionPlanId: t
            });
            try {
                let l = await n.HTTP.get({
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
                let a = await n.HTTP.post({
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
                    giftCode: a.body
                }), a.body
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
                await n.HTTP.del({
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
        ...a
    }
}