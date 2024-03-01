function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchAllStoreListingsForApplication: function() {
            return c
        },
        fetchStoreListingForSku: function() {
            return f
        },
        fetchStoreListingById: function() {
            return m
        },
        fetchStoreListingForApplication: function() {
            return p
        },
        matureAgree: function() {
            return h
        },
        matureDisagree: function() {
            return E
        },
        joinPublishedStoreListingSkuGuild: function() {
            return g
        },
        goToSKUStoreListing: function() {
            return C
        },
        goToApplicationStoreListing: function() {
            return S
        }
    });
    var l = n("872717"),
        i = n("913144"),
        a = n("84460");
    n("299285");
    var s = n("393414"),
        r = n("552712");
    n("698041");
    var o = n("167726"),
        u = n("271560"),
        d = n("49111");

    function c(e) {
        return (0, u.httpGetWithCountryCodeQuery)({
            url: d.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
            query: {
                application_id: e
            },
            oldFormErrors: !0
        }).then(e => (i.default.dispatch({
            type: "STORE_LISTINGS_FETCH_SUCCESS",
            storeListings: e.body
        }), e.body))
    }

    function f(e) {
        let t = r.default.get(e),
            n = null != t && (o.default.inTestModeForApplication(t.applicationId) || a.default.inDevModeForApplication(t.applicationId));
        return (0, u.httpGetWithCountryCodeQuery)(n ? d.Endpoints.STORE_LISTINGS_SKU(e) : d.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e)).then(e => {
            n ? i.default.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: e.body
            }) : i.default.dispatch({
                type: "STORE_LISTING_FETCH_SUCCESS",
                storeListing: e.body
            })
        })
    }

    function m(e) {
        return (0, u.httpGetWithCountryCodeQuery)(d.Endpoints.STORE_LISTING(e)).then(e => {
            i.default.dispatch({
                type: "STORE_LISTING_FETCH_SUCCESS",
                storeListing: e.body
            })
        })
    }

    function p(e) {
        return (0, u.httpGetWithCountryCodeQuery)(d.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(e => {
            i.default.dispatch({
                type: "STORE_LISTING_FETCH_SUCCESS",
                storeListing: e.body
            })
        })
    }

    function h() {
        i.default.dispatch({
            type: "APPLICATION_STORE_MATURE_AGREE"
        })
    }

    function E() {
        (0, s.transitionTo)(d.Routes.APPLICATION_STORE)
    }

    function g(e) {
        return l.default.post({
            url: d.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
            oldFormErrors: !0
        })
    }

    function C(e, t) {
        let {
            pathname: n,
            ...l
        } = (0, u.getStoreListingLocation)(e, t);
        (0, s.transitionTo)(n, l)
    }

    function S(e, t) {
        let {
            pathname: n,
            ...l
        } = (0, u.getApplicationStoreListingLocation)(e, t);
        (0, s.transitionTo)(n, l)
    }
}