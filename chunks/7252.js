function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140");
    let u = {
            premiumLikelihood: void 0,
            isFetching: !1,
            fetched: !1
        },
        d = u;
    class _ extends(a = o.default.Store) {
        initialize() {
            d = u
        }
        getState() {
            return d
        }
        shouldFetchPremiumLikelihood() {
            return !d.isFetching && !d.fetched
        }
    }
    s = "UserPremiumLikelihoodStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new _(l.default, {
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
            d.isFetching = !0
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
            let {
                premiumLikelihood: t
            } = e;
            d.premiumLikelihood = t, d.fetched = !0, d.isFetching = !1
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
            d.isFetching = !1
        },
        LOGOUT: function() {
            d.premiumLikelihood = void 0
        }
    })
}