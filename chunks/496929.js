function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchGiftableEntitlements: function() {
            return u
        },
        fetchUserEntitlements: function() {
            return l
        },
        fetchUserEntitlementsForApplication: function() {
            return o
        }
    });
    var i = n("544891"),
        r = n("570140"),
        a = n("73346"),
        s = n("981631");

    function o(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return r.default.wait(() => {
            r.default.dispatch({
                type: "ENTITLEMENT_FETCH_APPLICATION_START",
                applicationId: e
            })
        }), i.HTTP.get({
            url: s.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
            oldFormErrors: !0,
            query: {
                exclude_consumed: t
            }
        }).then(t => (r.default.dispatch({
            type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
            applicationId: e,
            entitlements: t.body
        }), t.body)).catch(() => {
            r.default.dispatch({
                type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                applicationId: e
            })
        })
    }
    async function l(e) {
        let {
            withSku: t = !1,
            withApplication: n = !1,
            entitlementType: a
        } = e;
        r.default.dispatch({
            type: "ENTITLEMENTS_FETCH_FOR_USER_START"
        });
        try {
            let e = await i.HTTP.get({
                url: s.Endpoints.ENTITLEMENTS_FOR_USER,
                query: {
                    with_sku: t,
                    with_application: n,
                    entitlement_type: a
                }
            });
            r.default.dispatch({
                type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                entitlements: e.body
            })
        } catch (e) {
            r.default.dispatch({
                type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
            })
        }
    }
    async function u() {
        r.default.dispatch({
            type: "ENTITLEMENTS_GIFTABLE_FETCH"
        });
        try {
            let e = await (0, a.httpGetWithCountryCodeQuery)({
                url: s.Endpoints.ENTITLEMENTS_GIFTABLE
            });
            r.default.dispatch({
                type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                entitlements: e.body
            })
        } catch (e) {
            r.default.dispatch({
                type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
            })
        }
    }
}