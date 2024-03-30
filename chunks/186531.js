function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchAllStoreListingsForApplication: function() {
            return d
        },
        fetchStoreListingById: function() {
            return E
        },
        fetchStoreListingForApplication: function() {
            return p
        },
        fetchStoreListingForSku: function() {
            return _
        },
        goToApplicationStoreListing: function() {
            return O
        },
        goToSKUStoreListing: function() {
            return h
        },
        joinPublishedStoreListingSkuGuild: function() {
            return I
        },
        matureAgree: function() {
            return m
        },
        matureDisagree: function() {
            return y
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("361729");
    n("342942");
    var a = n("163291"),
        u = n("332716");
    n("608771");
    var s = n("472015"),
        l = n("329903"),
        c = n("281767");

    function f(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }

    function d(e) {
        return (0, l.httpGetWithCountryCodeQuery)({
            url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
            query: {
                application_id: e
            },
            oldFormErrors: !0
        }).then(function(e) {
            return o.default.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: e.body
            }), e.body
        })
    }

    function _(e) {
        var t = u.default.get(e),
            n = null != t && (s.default.inTestModeForApplication(t.applicationId) || i.default.inDevModeForApplication(t.applicationId));
        return (0, l.httpGetWithCountryCodeQuery)(n ? c.Endpoints.STORE_LISTINGS_SKU(e) : c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e)).then(function(e) {
            n ? o.default.dispatch({
                type: "STORE_LISTINGS_FETCH_SUCCESS",
                storeListings: e.body
            }) : o.default.dispatch({
                type: "STORE_LISTING_FETCH_SUCCESS",
                storeListing: e.body
            })
        })
    }

    function E(e) {
        return (0, l.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_LISTING(e)).then(function(e) {
            o.default.dispatch({
                type: "STORE_LISTING_FETCH_SUCCESS",
                storeListing: e.body
            })
        })
    }

    function p(e) {
        return (0, l.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(function(e) {
            o.default.dispatch({
                type: "STORE_LISTING_FETCH_SUCCESS",
                storeListing: e.body
            })
        })
    }

    function m() {
        o.default.dispatch({
            type: "APPLICATION_STORE_MATURE_AGREE"
        })
    }

    function y() {
        (0, a.transitionTo)(c.Routes.APPLICATION_STORE)
    }

    function I(e) {
        return r.HTTP.post({
            url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
            oldFormErrors: !0
        })
    }

    function h(e, t) {
        var n = (0, l.getStoreListingLocation)(e, t),
            r = n.pathname,
            o = f(n, ["pathname"]);
        (0, a.transitionTo)(r, o)
    }

    function O(e, t) {
        var n = (0, l.getApplicationStoreListingLocation)(e, t),
            r = n.pathname,
            o = f(n, ["pathname"]);
        (0, a.transitionTo)(r, o)
    }
}