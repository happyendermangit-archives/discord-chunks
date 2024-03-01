function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        fetchUserEntitlementsForApplication: function() {
            return a
        },
        fetchUserEntitlements: function() {
            return o
        },
        fetchGiftableEntitlements: function() {
            return s
        }
    });
    var u = n("872717"),
        i = n("913144"),
        r = n("271560"),
        l = n("49111");

    function a(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return i.default.wait(() => {
            i.default.dispatch({
                type: "ENTITLEMENT_FETCH_APPLICATION_START",
                applicationId: t
            })
        }), u.default.get({
            url: l.Endpoints.ENTITLEMENTS_FOR_APPLICATION(t),
            oldFormErrors: !0,
            query: {
                exclude_consumed: e
            }
        }).then(e => (i.default.dispatch({
            type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
            applicationId: t,
            entitlements: e.body
        }), e.body)).catch(() => {
            i.default.dispatch({
                type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                applicationId: t
            })
        })
    }
    async function o(t) {
        let {
            withSku: e = !1,
            withApplication: n = !1,
            entitlementType: r
        } = t;
        i.default.dispatch({
            type: "ENTITLEMENTS_FETCH_FOR_USER_START"
        });
        try {
            let t = await u.default.get({
                url: l.Endpoints.ENTITLEMENTS_FOR_USER,
                query: {
                    with_sku: e,
                    with_application: n,
                    entitlement_type: r
                }
            });
            i.default.dispatch({
                type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                entitlements: t.body
            })
        } catch (t) {
            i.default.dispatch({
                type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
            })
        }
    }
    async function s() {
        i.default.dispatch({
            type: "ENTITLEMENTS_GIFTABLE_FETCH"
        });
        try {
            let t = await (0, r.httpGetWithCountryCodeQuery)({
                url: l.Endpoints.ENTITLEMENTS_GIFTABLE
            });
            i.default.dispatch({
                type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                entitlements: t.body
            })
        } catch (t) {
            i.default.dispatch({
                type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
            })
        }
    }
}