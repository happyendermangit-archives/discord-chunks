function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchAllStoreListingsForApplication: function() {
            return _
        },
        fetchStoreListingById: function() {
            return E
        },
        fetchStoreListingForApplication: function() {
            return I
        },
        fetchStoreListingForSku: function() {
            return c
        },
        goToApplicationStoreListing: function() {
            return h
        },
        goToSKUStoreListing: function() {
            return A
        },
        joinPublishedStoreListingSkuGuild: function() {
            return S
        },
        matureAgree: function() {
            return T
        },
        matureDisagree: function() {
            return f
        }
    });
    var i = n("544891"),
        r = n("570140"),
        s = n("115130");
    n("812206");
    var a = n("703656"),
        o = n("55563");
    n("551428");
    var l = n("695103"),
        u = n("73346"),
        d = n("981631");

    function _(e) {
        return (0, u.httpGetWithCountryCodeQuery)({
            url: d.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
            query: {
                application_id: e
            },
            oldFormErrors: !0
        }).then(e => (r.default.dispatch({
            type: "STORE_LISTINGS_FETCH_SUCCESS",
            storeListings: e.body
        }), e.body))
    }

    function c(e) {
        let t = o.default.get(e),
            n = null != t && (l.default.inTestModeForApplication(t.applicationId) || s.default.inDevModeForApplication(t.applicationId));
        return (0, u.httpGetWithCountryCodeQuery)(n ? d.Endpoints.STORE_LISTINGS_SKU(e) : d.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e)).then(e => {
            n ? r.default.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: e.body
            }) : r.default.dispatch({
                type: "STORE_LISTING_FETCH_SUCCESS",
                storeListing: e.body
            })
        })
    }

    function E(e) {
        return (0, u.httpGetWithCountryCodeQuery)(d.Endpoints.STORE_LISTING(e)).then(e => {
            r.default.dispatch({
                type: "STORE_LISTING_FETCH_SUCCESS",
                storeListing: e.body
            })
        })
    }

    function I(e) {
        return (0, u.httpGetWithCountryCodeQuery)(d.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(e => {
            r.default.dispatch({
                type: "STORE_LISTING_FETCH_SUCCESS",
                storeListing: e.body
            })
        })
    }

    function T() {
        r.default.dispatch({
            type: "APPLICATION_STORE_MATURE_AGREE"
        })
    }

    function f() {
        (0, a.transitionTo)(d.Routes.APPLICATION_STORE)
    }

    function S(e) {
        return i.HTTP.post({
            url: d.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
            oldFormErrors: !0
        })
    }

    function A(e, t) {
        let {
            pathname: n,
            ...i
        } = (0, u.getStoreListingLocation)(e, t);
        (0, a.transitionTo)(n, i)
    }

    function h(e, t) {
        let {
            pathname: n,
            ...i
        } = (0, u.getApplicationStoreListingLocation)(e, t);
        (0, a.transitionTo)(n, i)
    }
}