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
    var i = n("872717"),
        r = n("913144"),
        u = n("271560"),
        l = n("49111");

    function a(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return r.default.wait(() => {
            r.default.dispatch({
                type: "ENTITLEMENT_FETCH_APPLICATION_START",
                applicationId: t
            })
        }), i.HTTP.get({
            url: l.Endpoints.ENTITLEMENTS_FOR_APPLICATION(t),
            oldFormErrors: !0,
            query: {
                exclude_consumed: e
            }
        }).then(e => (r.default.dispatch({
            type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
            applicationId: t,
            entitlements: e.body
        }), e.body)).catch(() => {
            r.default.dispatch({
                type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                applicationId: t
            })
        })
    }
    async function o(t) {
        let {
            withSku: e = !1,
            withApplication: n = !1,
            entitlementType: u
        } = t;
        r.default.dispatch({
            type: "ENTITLEMENTS_FETCH_FOR_USER_START"
        });
        try {
            let t = await i.HTTP.get({
                url: l.Endpoints.ENTITLEMENTS_FOR_USER,
                query: {
                    with_sku: e,
                    with_application: n,
                    entitlement_type: u
                }
            });
            r.default.dispatch({
                type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                entitlements: t.body
            })
        } catch (t) {
            r.default.dispatch({
                type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
            })
        }
    }
    async function s() {
        r.default.dispatch({
            type: "ENTITLEMENTS_GIFTABLE_FETCH"
        });
        try {
            let t = await (0, u.httpGetWithCountryCodeQuery)({
                url: l.Endpoints.ENTITLEMENTS_GIFTABLE
            });
            r.default.dispatch({
                type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                entitlements: t.body
            })
        } catch (t) {
            r.default.dispatch({
                type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
            })
        }
    }
}