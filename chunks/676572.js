function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return l
        }
    });
    var r = i("446674"),
        u = i("913144");
    let n = {
            premiumLikelihood: void 0,
            isFetching: !1,
            fetched: !1
        },
        s = n;
    class o extends r.default.Store {
        initialize() {
            s = n
        }
        getState() {
            return s
        }
        shouldFetchPremiumLikelihood() {
            return !s.isFetching && !s.fetched
        }
    }
    o.displayName = "UserPremiumLikelihoodStore";
    var l = new o(u.default, {
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
            s.isFetching = !0
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
            let {
                premiumLikelihood: t
            } = e;
            s.premiumLikelihood = t, s.fetched = !0, s.isFetching = !1
        },
        BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
            s.isFetching = !1
        },
        LOGOUT: function() {
            s.premiumLikelihood = void 0
        }
    })
}