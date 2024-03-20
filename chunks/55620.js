function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchAllStoreListingsForApplication: function() {
            return d
        },
        fetchStoreListingForSku: function() {
            return f
        },
        fetchStoreListingById: function() {
            return p
        },
        fetchStoreListingForApplication: function() {
            return h
        },
        matureAgree: function() {
            return m
        },
        matureDisagree: function() {
            return S
        },
        joinPublishedStoreListingSkuGuild: function() {
            return I
        },
        goToSKUStoreListing: function() {
            return g
        },
        goToApplicationStoreListing: function() {
            return C
        }
    });
    var i = n("872717"),
        a = n("913144"),
        s = n("84460");
    n("299285");
    var r = n("393414"),
        l = n("552712");
    n("698041");
    var o = n("167726"),
        u = n("271560"),
        c = n("49111");

    function d(e) {
        return (0, u.httpGetWithCountryCodeQuery)({
            url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
            query: {
                application_id: e
            },
            oldFormErrors: !0
        }).then(e => (a.default.dispatch({
            type: "STORE_LISTINGS_FETCH_SUCCESS",
            storeListings: e.body
        }), e.body))
    }

    function f(e) {
        let t = l.default.get(e),
            n = null != t && (o.default.inTestModeForApplication(t.applicationId) || s.default.inDevModeForApplication(t.applicationId));
        return (0, u.httpGetWithCountryCodeQuery)(n ? c.Endpoints.STORE_LISTINGS_SKU(e) : c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e)).then(e => {
            n ? a.default.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: e.body
            }) : a.default.dispatch({
                type: "STORE_LISTING_FETCH_SUCCESS",
                storeListing: e.body
            })
        })
    }

    function p(e) {
        return (0, u.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_LISTING(e)).then(e => {
            a.default.dispatch({
                type: "STORE_LISTING_FETCH_SUCCESS",
                storeListing: e.body
            })
        })
    }

    function h(e) {
        return (0, u.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(e => {
            a.default.dispatch({
                type: "STORE_LISTING_FETCH_SUCCESS",
                storeListing: e.body
            })
        })
    }

    function m() {
        a.default.dispatch({
            type: "APPLICATION_STORE_MATURE_AGREE"
        })
    }

    function S() {
        (0, r.transitionTo)(c.Routes.APPLICATION_STORE)
    }

    function I(e) {
        return i.default.post({
            url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
            oldFormErrors: !0
        })
    }

    function g(e, t) {
        let {
            pathname: n,
            ...i
        } = (0, u.getStoreListingLocation)(e, t);
        (0, r.transitionTo)(n, i)
    }

    function C(e, t) {
        let {
            pathname: n,
            ...i
        } = (0, u.getApplicationStoreListingLocation)(e, t);
        (0, r.transitionTo)(n, i)
    }
}